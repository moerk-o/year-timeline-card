/**
 * Visual editor for YearTimelineCard
 * Uses native Home Assistant components for a consistent UI experience
 */

import { LitElement, html, css, nothing, type TemplateResult, type CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { DEFAULT_MARKER, type FactType, type SegmentType, type LabelType, type MarkerType } from './models/config.js';

// ============================================================================
// Types
// ============================================================================

interface EditorConfig {
  type: string;
  title?: string;
  locale?: string;
  facts?: {
    show?: FactType[];
  };
  bar?: {
    segments?: SegmentType;
    labels?: LabelType;
    show_today_marker?: boolean;
    show_progress_fill?: boolean;
  };
  markers?: MarkerEditorConfig[];
}

interface MarkerEditorConfig {
  entity: string;
  label?: string;
  type?: MarkerType;
  showOnBar?: boolean;
  showInList?: boolean;
}

interface Hass {
  states: Record<string, HassEntity>;
  language?: string;
  localize?: (key: string) => string;
}

interface HassEntity {
  entity_id: string;
  state: string;
  attributes: {
    friendly_name?: string;
    device_class?: string;
    icon?: string;
  };
}

interface HaFormSchema {
  name: string;
  selector?: Record<string, unknown>;
  required?: boolean;
  default?: unknown;
}

// ============================================================================
// Constants
// ============================================================================

const ALL_FACTS: FactType[] = [
  'year',
  'dayOfYear',
  'isoWeek',
  'month',
  'quarter',
  'progress',
  'remainingDays',
];

const FACT_LABELS: Record<string, Record<FactType, string>> = {
  de: {
    year: 'Jahr',
    dayOfYear: 'Tag im Jahr',
    isoWeek: 'Kalenderwoche',
    month: 'Monat',
    quarter: 'Quartal',
    progress: 'Fortschritt (%)',
    remainingDays: 'Resttage',
  },
  en: {
    year: 'Year',
    dayOfYear: 'Day of Year',
    isoWeek: 'ISO Week',
    month: 'Month',
    quarter: 'Quarter',
    progress: 'Progress (%)',
    remainingDays: 'Remaining Days',
  },
};

const LABELS = {
  de: {
    general: 'Allgemein',
    title: 'Titel',
    titleHelper: 'Optionaler Titel für die Karte',
    locale: 'Sprache',
    german: 'Deutsch',
    english: 'Englisch',
    facts: 'Kennzahlen',
    bar: 'Zeitstrahl',
    segments: 'Segment-Linien',
    barLabels: 'Beschriftung',
    none: 'Keine',
    quarters: 'Quartale',
    months: 'Monate',
    weeks: 'Wochen',
    todayMarker: 'Heute-Marker anzeigen',
    progressFill: 'Fortschritt füllen',
    markers: 'Marker',
    addMarker: 'Marker hinzufügen',
    editMarker: 'Marker bearbeiten',
    back: 'Zurück',
    entity: 'Entität',
    label: 'Bezeichnung',
    labelHelper: 'Leer = Entity-Name verwenden',
    type: 'Typ',
    point: 'Punkt',
    rangeStart: 'Bereich Start',
    rangeEnd: 'Bereich Ende',
    showOnBar: 'Auf Balken anzeigen',
    showInList: 'In Liste anzeigen',
    noMarkers: 'Keine Marker konfiguriert',
  },
  en: {
    general: 'General',
    title: 'Title',
    titleHelper: 'Optional card title',
    locale: 'Language',
    german: 'German',
    english: 'English',
    facts: 'Facts',
    bar: 'Timeline Bar',
    segments: 'Segment Lines',
    barLabels: 'Labels',
    none: 'None',
    quarters: 'Quarters',
    months: 'Months',
    weeks: 'Weeks',
    todayMarker: 'Show Today Marker',
    progressFill: 'Show Progress Fill',
    markers: 'Markers',
    addMarker: 'Add Marker',
    editMarker: 'Edit Marker',
    back: 'Back',
    entity: 'Entity',
    label: 'Label',
    labelHelper: 'Empty = use entity name',
    type: 'Type',
    point: 'Point',
    rangeStart: 'Range Start',
    rangeEnd: 'Range End',
    showOnBar: 'Show on Bar',
    showInList: 'Show in List',
    noMarkers: 'No markers configured',
  },
};

// ============================================================================
// Lazy-load HA Components
// ============================================================================

// Load card helpers to make ha-entity-picker available
const loadCardHelpers = async (): Promise<void> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const helpers = await (window as any).loadCardHelpers?.();
  if (helpers) {
    // Create an entities card and load its editor to register ha-entity-picker
    const card = await helpers.createCardElement({ type: 'entities', entities: [] });
    await card.constructor.getConfigElement?.();
  }
};

// Start loading immediately
loadCardHelpers();

// ============================================================================
// Editor Component
// ============================================================================

@customElement('year-timeline-card-editor')
export class YearTimelineCardEditor extends LitElement {
  @property({ attribute: false })
  hass?: Hass;

  @state()
  private _config?: EditorConfig;

  @state()
  private _editingMarkerIndex: number | null = null;

  @state()
  private _helpersLoaded = false;

  static override styles: CSSResultGroup = css`
    .editor-container {
      display: flex;
      flex-direction: column;
    }

    ha-expansion-panel {
      margin-bottom: 4px;
    }

    .content {
      padding: 12px;
    }

    /* Facts checkboxes */
    .checkbox-group {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 16px;
    }

    .checkbox-item {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }

    .checkbox-item ha-checkbox {
      --mdc-checkbox-unchecked-color: var(--secondary-text-color);
    }

    /* Marker list */
    .marker-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 12px;
    }

    .marker-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      background: var(--secondary-background-color);
      border-radius: 8px;
    }

    .marker-row .handle {
      cursor: grab;
      color: var(--secondary-text-color);
    }

    .marker-info {
      flex: 1;
      min-width: 0;
    }

    .marker-name {
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .marker-entity {
      font-size: 0.85em;
      color: var(--secondary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .marker-actions {
      display: flex;
      gap: 4px;
    }

    .no-markers {
      padding: 16px;
      text-align: center;
      color: var(--secondary-text-color);
      font-style: italic;
    }


    /* Sub-editor (marker detail) */
    .sub-editor {
      display: flex;
      flex-direction: column;
    }

    .sub-editor-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 0;
      border-bottom: 1px solid var(--divider-color);
      margin-bottom: 16px;
    }

    .sub-editor-title {
      flex: 1;
      font-weight: 500;
      font-size: 1.1em;
    }

    .form-row {
      margin-bottom: 16px;
    }

    .form-row:last-child {
      margin-bottom: 0;
    }

    ha-textfield,
    ha-select {
      width: 100%;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
    }

    .switch-row span {
      color: var(--primary-text-color);
    }
  `;

  setConfig(config: EditorConfig): void {
    this._config = config;
  }

  override async connectedCallback(): Promise<void> {
    super.connectedCallback();
    // Ensure card helpers are loaded for ha-entity-picker
    await loadCardHelpers();
    this._helpersLoaded = true;
  }

  private _getLocale(): string {
    return this._config?.locale ?? 'de';
  }

  private _getLabels(): (typeof LABELS)['de'] {
    const locale = this._getLocale();
    return LABELS[locale as keyof typeof LABELS] ?? LABELS.de;
  }

  override render(): TemplateResult {
    if (!this._config || !this._helpersLoaded) {
      return html``;
    }

    // If editing a marker, show sub-editor
    if (this._editingMarkerIndex !== null) {
      return this._renderMarkerSubEditor();
    }

    return html`
      <div class="editor-container">
        ${this._renderGeneralSection()}
        ${this._renderFactsSection()}
        ${this._renderBarSection()}
        ${this._renderMarkersSection()}
      </div>
    `;
  }

  // ==========================================================================
  // General Section
  // ==========================================================================

  private _renderGeneralSection(): TemplateResult {
    const l = this._getLabels();
    const locale = this._getLocale();

    return html`
      <ha-expansion-panel outlined .header=${l.general}>
        <div class="content">
          <div class="form-row">
            <ha-textfield
              .label=${l.title}
              .helper=${l.titleHelper}
              .value=${this._config?.title ?? ''}
              @input=${this._onTitleChange}
            ></ha-textfield>
          </div>
          <div class="form-row">
            <ha-select
              .label=${l.locale}
              .value=${locale}
              @selected=${this._onLocaleChange}
              @closed=${(e: Event): void => e.stopPropagation()}
            >
              <mwc-list-item value="de">${l.german}</mwc-list-item>
              <mwc-list-item value="en">${l.english}</mwc-list-item>
            </ha-select>
          </div>
        </div>
      </ha-expansion-panel>
    `;
  }

  // ==========================================================================
  // Facts Section
  // ==========================================================================

  private _renderFactsSection(): TemplateResult {
    const l = this._getLabels();
    const locale = this._getLocale();
    const factLabels = FACT_LABELS[locale] ?? FACT_LABELS.de!;
    const currentFacts = this._config?.facts?.show ?? ['year', 'dayOfYear', 'isoWeek', 'quarter'];

    return html`
      <ha-expansion-panel outlined .header=${l.facts}>
        <div class="content">
          <div class="checkbox-group">
            ${ALL_FACTS.map(
              (fact) => html`
                <label class="checkbox-item">
                  <ha-checkbox
                    .checked=${currentFacts.includes(fact)}
                    @change=${(e: Event): void => this._onFactToggle(fact, e)}
                  ></ha-checkbox>
                  <span>${factLabels[fact]}</span>
                </label>
              `
            )}
          </div>
        </div>
      </ha-expansion-panel>
    `;
  }

  // ==========================================================================
  // Bar Section
  // ==========================================================================

  private _renderBarSection(): TemplateResult {
    const l = this._getLabels();
    const bar = this._config?.bar ?? {};

    return html`
      <ha-expansion-panel outlined .header=${l.bar}>
        <div class="content">
          <div class="form-row">
            <ha-select
              .label=${l.segments}
              .value=${bar.segments ?? 'months'}
              @selected=${this._onSegmentsChange}
              @closed=${(e: Event): void => e.stopPropagation()}
            >
              <mwc-list-item value="none">${l.none}</mwc-list-item>
              <mwc-list-item value="quarters">${l.quarters}</mwc-list-item>
              <mwc-list-item value="months">${l.months}</mwc-list-item>
              <mwc-list-item value="weeks">${l.weeks}</mwc-list-item>
            </ha-select>
          </div>
          <div class="form-row">
            <ha-select
              .label=${l.barLabels}
              .value=${bar.labels ?? 'quarters'}
              @selected=${this._onLabelsChange}
              @closed=${(e: Event): void => e.stopPropagation()}
            >
              <mwc-list-item value="none">${l.none}</mwc-list-item>
              <mwc-list-item value="quarters">${l.quarters}</mwc-list-item>
              <mwc-list-item value="months">${l.months}</mwc-list-item>
            </ha-select>
          </div>
          <div class="switch-row">
            <span>${l.todayMarker}</span>
            <ha-switch
              .checked=${bar.show_today_marker ?? true}
              @change=${this._onTodayMarkerChange}
            ></ha-switch>
          </div>
          <div class="switch-row">
            <span>${l.progressFill}</span>
            <ha-switch
              .checked=${bar.show_progress_fill ?? true}
              @change=${this._onProgressFillChange}
            ></ha-switch>
          </div>
        </div>
      </ha-expansion-panel>
    `;
  }

  // ==========================================================================
  // Markers Section
  // ==========================================================================

  private _renderMarkersSection(): TemplateResult {
    const l = this._getLabels();
    const markers = this._config?.markers ?? [];

    return html`
      <ha-expansion-panel outlined .header=${l.markers}>
        <div class="content">
          ${markers.length > 0
            ? html`
                <div class="marker-list">
                  ${markers.map((marker, index) => this._renderMarkerRow(marker, index))}
                </div>
              `
            : nothing}

          <ha-entity-picker
            .hass=${this.hass}
            .entityFilter=${this._entityFilter}
            @value-changed=${this._onAddMarkerEntity}
            add-button
          ></ha-entity-picker>
        </div>
      </ha-expansion-panel>
    `;
  }

  // ==========================================================================
  // Marker Row
  // ==========================================================================

  private _renderMarkerRow(marker: MarkerEditorConfig, index: number): TemplateResult {
    const entity = this.hass?.states[marker.entity];
    const friendlyName = entity?.attributes.friendly_name ?? marker.entity;
    const displayName = marker.label || friendlyName;

    return html`
      <div class="marker-row">
        <ha-icon class="handle" icon="mdi:drag"></ha-icon>
        <ha-icon
          icon=${entity?.attributes.icon ?? 'mdi:calendar'}
        ></ha-icon>
        <div class="marker-info">
          <div class="marker-name">${displayName}</div>
          <div class="marker-entity">${marker.entity}</div>
        </div>
        <div class="marker-actions">
          <ha-icon-button
            .path=${'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z'}
            @click=${(): void => this._onEditMarker(index)}
          ></ha-icon-button>
          <ha-icon-button
            .path=${'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z'}
            @click=${(): void => this._onDeleteMarker(index)}
          ></ha-icon-button>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // Marker Sub-Editor
  // ==========================================================================

  private _renderMarkerSubEditor(): TemplateResult {
    const l = this._getLabels();
    const index = this._editingMarkerIndex!;
    const marker = this._config?.markers?.[index];

    if (!marker) {
      this._editingMarkerIndex = null;
      return html``;
    }

    const entity = this.hass?.states[marker.entity];
    const friendlyName = entity?.attributes.friendly_name ?? marker.entity;

    return html`
      <div class="sub-editor">
        <div class="sub-editor-header">
          <ha-icon-button
            .path=${'M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z'}
            @click=${this._onBackFromSubEditor}
          ></ha-icon-button>
          <span class="sub-editor-title">${l.editMarker}: ${friendlyName}</span>
        </div>

        <div class="form-row">
          <ha-textfield
            .label=${l.label}
            .helper=${l.labelHelper}
            .value=${marker.label ?? ''}
            .placeholder=${friendlyName}
            @input=${(e: Event): void => this._onMarkerFieldChange('label', e)}
          ></ha-textfield>
        </div>

        <div class="form-row">
          <ha-select
            .label=${l.type}
            .value=${marker.type ?? DEFAULT_MARKER.type}
            @selected=${(e: CustomEvent): void => this._onMarkerTypeChange(e)}
            @closed=${(e: Event): void => e.stopPropagation()}
          >
            <mwc-list-item value="point">${l.point}</mwc-list-item>
            <mwc-list-item value="rangeStart">${l.rangeStart}</mwc-list-item>
            <mwc-list-item value="rangeEnd">${l.rangeEnd}</mwc-list-item>
          </ha-select>
        </div>

        <div class="switch-row">
          <span>${l.showOnBar}</span>
          <ha-switch
            .checked=${marker.showOnBar ?? DEFAULT_MARKER.showOnBar}
            @change=${(e: Event): void => this._onMarkerSwitchChange('showOnBar', e)}
          ></ha-switch>
        </div>

        <div class="switch-row">
          <span>${l.showInList}</span>
          <ha-switch
            .checked=${marker.showInList ?? DEFAULT_MARKER.showInList}
            @change=${(e: Event): void => this._onMarkerSwitchChange('showInList', e)}
          ></ha-switch>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // Event Handlers - General
  // ==========================================================================

  private _onTitleChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    const newConfig = { ...this._config! };
    if (target.value) {
      newConfig.title = target.value;
    } else {
      delete newConfig.title;
    }
    this._updateConfig(newConfig);
  };

  private _onLocaleChange = (e: CustomEvent): void => {
    const value = (e.target as HTMLSelectElement).value;
    if (value) {
      this._updateConfig({
        ...this._config!,
        locale: value,
      });
    }
  };

  // ==========================================================================
  // Event Handlers - Facts
  // ==========================================================================

  private _onFactToggle(fact: FactType, e: Event): void {
    const target = e.target as HTMLInputElement;
    const currentFacts = this._config?.facts?.show ?? ['year', 'dayOfYear', 'isoWeek', 'quarter'];

    let newFacts: FactType[];
    if (target.checked) {
      newFacts = ALL_FACTS.filter((f) => currentFacts.includes(f) || f === fact);
    } else {
      newFacts = currentFacts.filter((f) => f !== fact);
    }

    this._updateConfig({
      ...this._config!,
      facts: { show: newFacts },
    });
  }

  // ==========================================================================
  // Event Handlers - Bar
  // ==========================================================================

  private _onSegmentsChange = (e: CustomEvent): void => {
    const value = (e.target as HTMLSelectElement).value as SegmentType;
    if (value) {
      this._updateConfig({
        ...this._config!,
        bar: { ...this._config?.bar, segments: value },
      });
    }
  };

  private _onLabelsChange = (e: CustomEvent): void => {
    const value = (e.target as HTMLSelectElement).value as LabelType;
    if (value) {
      this._updateConfig({
        ...this._config!,
        bar: { ...this._config?.bar, labels: value },
      });
    }
  };

  private _onTodayMarkerChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this._updateConfig({
      ...this._config!,
      bar: { ...this._config?.bar, show_today_marker: target.checked },
    });
  };

  private _onProgressFillChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this._updateConfig({
      ...this._config!,
      bar: { ...this._config?.bar, show_progress_fill: target.checked },
    });
  };

  // ==========================================================================
  // Event Handlers - Markers
  // ==========================================================================

  private _entityFilter = (entity: HassEntity): boolean => {
    const entityId = entity.entity_id;
    const domain = entityId.split('.')[0];

    // Always include input_datetime
    if (domain === 'input_datetime') {
      return true;
    }

    // Check for device_class: timestamp or date
    const deviceClass = entity.attributes?.device_class;
    return deviceClass === 'timestamp' || deviceClass === 'date';
  };

  private _onAddMarkerEntity = (e: CustomEvent): void => {
    const entityId = e.detail.value;
    if (!entityId) {
      return;
    }

    const markers = [...(this._config?.markers ?? [])];
    markers.push({
      entity: entityId,
      ...DEFAULT_MARKER,
    });

    this._updateConfig({
      ...this._config!,
      markers,
    });
  };

  private _onEditMarker(index: number): void {
    this._editingMarkerIndex = index;
  }

  private _onDeleteMarker(index: number): void {
    const markers = [...(this._config?.markers ?? [])];
    markers.splice(index, 1);
    this._updateConfig({
      ...this._config!,
      markers,
    });
  }

  private _onBackFromSubEditor = (): void => {
    this._editingMarkerIndex = null;
  };

  private _onMarkerFieldChange(field: 'label', e: Event): void {
    const target = e.target as HTMLInputElement;
    this._updateMarker({ [field]: target.value || undefined });
  }

  private _onMarkerTypeChange(e: CustomEvent): void {
    const value = (e.target as HTMLSelectElement).value as MarkerType;
    if (value) {
      this._updateMarker({ type: value });
    }
  }

  private _onMarkerSwitchChange(field: 'showOnBar' | 'showInList', e: Event): void {
    const target = e.target as HTMLInputElement;
    this._updateMarker({ [field]: target.checked });
  }

  private _updateMarker(updates: Partial<MarkerEditorConfig>): void {
    if (this._editingMarkerIndex === null) return;

    const markers = [...(this._config?.markers ?? [])];
    const marker = markers[this._editingMarkerIndex];
    if (marker) {
      markers[this._editingMarkerIndex] = { ...marker, ...updates };
      this._updateConfig({
        ...this._config!,
        markers,
      });
    }
  }

  // ==========================================================================
  // Config Update
  // ==========================================================================

  private _updateConfig(config: EditorConfig): void {
    this._config = config;
    const event = new CustomEvent('config-changed', {
      detail: { config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'year-timeline-card-editor': YearTimelineCardEditor;
  }
}

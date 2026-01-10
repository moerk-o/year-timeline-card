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
  layout?: {
    borderless?: boolean;
    compact_facts?: boolean;
    facts_columns?: number;
  };
  facts?: {
    show?: FactType[];
  };
  bar?: {
    segments?: SegmentType;
    labels?: LabelType;
    show_today_marker?: boolean;
    show_progress_fill?: boolean;
    progress_color?: string;
  };
  markers?: MarkerEditorConfig[];
}

interface MarkerEditorConfig {
  entity: string;
  label?: string;
  type?: MarkerType;
  color?: string;
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

// Predefined colors for the color picker (similar to Mushroom)
const PRESET_COLORS: { name: string; value: string; labelDe: string; labelEn: string }[] = [
  { name: 'default', value: 'default', labelDe: 'Standard', labelEn: 'Default' },
  { name: 'red', value: '#f44336', labelDe: 'Rot', labelEn: 'Red' },
  { name: 'pink', value: '#e91e63', labelDe: 'Pink', labelEn: 'Pink' },
  { name: 'purple', value: '#9c27b0', labelDe: 'Lila', labelEn: 'Purple' },
  { name: 'deep-purple', value: '#673ab7', labelDe: 'Tiefviolett', labelEn: 'Deep Purple' },
  { name: 'indigo', value: '#3f51b5', labelDe: 'Indigo', labelEn: 'Indigo' },
  { name: 'blue', value: '#2196f3', labelDe: 'Blau', labelEn: 'Blue' },
  { name: 'light-blue', value: '#03a9f4', labelDe: 'Hellblau', labelEn: 'Light Blue' },
  { name: 'cyan', value: '#00bcd4', labelDe: 'Cyan', labelEn: 'Cyan' },
  { name: 'teal', value: '#009688', labelDe: 'Blaugrün', labelEn: 'Teal' },
  { name: 'green', value: '#4caf50', labelDe: 'Grün', labelEn: 'Green' },
  { name: 'light-green', value: '#8bc34a', labelDe: 'Hellgrün', labelEn: 'Light Green' },
  { name: 'lime', value: '#cddc39', labelDe: 'Limette', labelEn: 'Lime' },
  { name: 'yellow', value: '#ffeb3b', labelDe: 'Gelb', labelEn: 'Yellow' },
  { name: 'amber', value: '#ffc107', labelDe: 'Bernstein', labelEn: 'Amber' },
  { name: 'orange', value: '#ff9800', labelDe: 'Orange', labelEn: 'Orange' },
  { name: 'deep-orange', value: '#ff5722', labelDe: 'Tieforange', labelEn: 'Deep Orange' },
  { name: 'brown', value: '#795548', labelDe: 'Braun', labelEn: 'Brown' },
  { name: 'grey', value: '#9e9e9e', labelDe: 'Grau', labelEn: 'Grey' },
  { name: 'blue-grey', value: '#607d8b', labelDe: 'Blaugrau', labelEn: 'Blue Grey' },
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
    localeAuto: 'Automatisch',
    german: 'Deutsch',
    english: 'Englisch',
    layout: 'Layout',
    borderless: 'Rahmenlos',
    borderlessHelper: 'Entfernt Rahmen und Schatten',
    compactFacts: 'Kompakte Kennzahlen',
    compactFactsHelper: 'Reduziert Abstände zwischen Kennzahlen',
    factsColumns: 'Spalten für Kennzahlen',
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
    progressColor: 'Fortschrittsfarbe',
    progressColorHelper: 'Leer = Standardfarbe',
    customColor: 'Benutzerdefiniert',
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
    markerColor: 'Marker-Farbe',
    noMarkers: 'Keine Marker konfiguriert',
    addFact: 'Kennzahl hinzufügen',
    showYamlEditor: 'YAML-Editor anzeigen',
    showVisualEditor: 'Visuellen Editor anzeigen',
  },
  en: {
    general: 'General',
    title: 'Title',
    titleHelper: 'Optional card title',
    locale: 'Language',
    localeAuto: 'Automatic',
    german: 'German',
    english: 'English',
    layout: 'Layout',
    borderless: 'Borderless',
    borderlessHelper: 'Remove border and shadow',
    compactFacts: 'Compact Facts',
    compactFactsHelper: 'Reduce spacing between facts',
    factsColumns: 'Facts Columns',
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
    progressColor: 'Progress Color',
    progressColorHelper: 'Empty = default color',
    customColor: 'Custom',
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
    markerColor: 'Marker Color',
    noMarkers: 'No markers configured',
    addFact: 'Add fact',
    showYamlEditor: 'Show YAML editor',
    showVisualEditor: 'Show visual editor',
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
  private _markerYamlMode = false;

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

    /* Facts chips */
    ha-chip-set {
      margin-bottom: 8px;
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

    /* YAML editor */
    ha-code-editor {
      display: block;
      min-height: 150px;
    }

    .yaml-toggle {
      margin-left: auto;
    }

    /* Color picker */
    .color-picker-select {
      --mdc-menu-max-height: 300px;
    }

    .color-dot {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid var(--divider-color);
      flex-shrink: 0;
    }

    .color-dot.default {
      background: linear-gradient(135deg, var(--primary-color) 50%, var(--disabled-color) 50%);
    }

    .color-item {
      display: flex;
      align-items: center;
      gap: 12px;
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
    const configLocale = this._config?.locale;

    // If no locale set or 'auto', detect from HA
    if (!configLocale || configLocale === 'auto') {
      const hassLang = this.hass?.language ?? 'en';
      // Extract base language (e.g., 'de' from 'de-DE')
      const baseLang = hassLang.split('-')[0];
      // Return if we support it, otherwise fallback to English
      return baseLang && (baseLang === 'de' || baseLang === 'en') ? baseLang : 'en';
    }

    return configLocale;
  }

  private _getLabels(): (typeof LABELS)['de'] {
    const locale = this._getLocale();
    return LABELS[locale as keyof typeof LABELS] ?? LABELS.en;
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
        ${this._renderLayoutSection()}
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
    const configLocale = this._config?.locale ?? 'auto';

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
              .value=${configLocale}
              @selected=${this._onLocaleChange}
              @closed=${(e: Event): void => e.stopPropagation()}
            >
              <mwc-list-item value="auto">${l.localeAuto}</mwc-list-item>
              <mwc-list-item value="de">${l.german}</mwc-list-item>
              <mwc-list-item value="en">${l.english}</mwc-list-item>
            </ha-select>
          </div>
        </div>
      </ha-expansion-panel>
    `;
  }

  // ==========================================================================
  // Layout Section
  // ==========================================================================

  private _renderLayoutSection(): TemplateResult {
    const l = this._getLabels();
    const layout = this._config?.layout ?? {};

    return html`
      <ha-expansion-panel outlined .header=${l.layout}>
        <div class="content">
          <div class="switch-row">
            <span>${l.borderless}</span>
            <ha-switch
              .checked=${layout.borderless ?? false}
              @change=${this._onBorderlessChange}
            ></ha-switch>
          </div>
          <div class="switch-row">
            <span>${l.compactFacts}</span>
            <ha-switch
              .checked=${layout.compact_facts ?? false}
              @change=${this._onCompactFactsChange}
            ></ha-switch>
          </div>
          <div class="form-row">
            <ha-select
              .label=${l.factsColumns}
              .value=${String(layout.facts_columns ?? 2)}
              @selected=${this._onFactsColumnsChange}
              @closed=${(e: Event): void => e.stopPropagation()}
            >
              <mwc-list-item value="1">1</mwc-list-item>
              <mwc-list-item value="2">2</mwc-list-item>
              <mwc-list-item value="3">3</mwc-list-item>
              <mwc-list-item value="4">4</mwc-list-item>
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
    const availableFacts = ALL_FACTS.filter((f) => !currentFacts.includes(f));

    return html`
      <ha-expansion-panel outlined .header=${l.facts}>
        <div class="content">
          ${currentFacts.length > 0
            ? html`
                <ha-sortable no-style @item-moved=${this._onFactMoved}>
                  <ha-chip-set>
                    ${currentFacts.map(
                      (fact) => html`
                        <ha-input-chip
                          .label=${factLabels[fact]}
                          @remove=${(): void => this._onRemoveFact(fact)}
                        ></ha-input-chip>
                      `
                    )}
                  </ha-chip-set>
                </ha-sortable>
              `
            : nothing}
          ${availableFacts.length > 0
            ? html`
                <ha-select
                  .label=${l.addFact}
                  @selected=${this._onAddFact}
                  @closed=${(e: Event): void => e.stopPropagation()}
                >
                  ${availableFacts.map(
                    (fact) => html`
                      <mwc-list-item .value=${fact}>${factLabels[fact]}</mwc-list-item>
                    `
                  )}
                </ha-select>
              `
            : nothing}
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
          ${(bar.show_progress_fill ?? true)
            ? html`
                <div class="form-row">
                  <ha-select
                    class="color-picker-select"
                    .label=${l.progressColor}
                    .value=${bar.progress_color ?? 'default'}
                    @selected=${this._onProgressColorChange}
                    @closed=${(e: Event): void => e.stopPropagation()}
                  >
                    ${this._renderColorOptions()}
                  </ha-select>
                </div>
              `
            : nothing}
        </div>
      </ha-expansion-panel>
    `;
  }

  private _renderColorOptions(): TemplateResult[] {
    const locale = this._getLocale();
    const l = this._getLabels();
    const currentColor = this._config?.bar?.progress_color ?? 'default';

    // Check if current color is a custom color (not in presets)
    const isCustomColor =
      currentColor !== 'default' && !PRESET_COLORS.some((c) => c.value === currentColor);

    const options: TemplateResult[] = [];

    // Add custom color option FIRST if current color is not in presets
    // This ensures ha-select can find and select it
    if (isCustomColor) {
      options.push(html`
        <mwc-list-item value=${currentColor} .selected=${true} graphic="icon">
          <span class="color-item">
            <span class="color-dot" style="background-color: ${currentColor}"></span>
            ${l.customColor} (${currentColor})
          </span>
        </mwc-list-item>
      `);
    }

    // Add preset colors
    PRESET_COLORS.forEach((color) => {
      const label = locale === 'de' ? color.labelDe : color.labelEn;
      const isDefault = color.value === 'default';
      const dotClass = isDefault ? 'color-dot default' : 'color-dot';
      const dotStyle = !isDefault ? `background-color: ${color.value}` : '';
      const isSelected = !isCustomColor && color.value === currentColor;

      options.push(html`
        <mwc-list-item value=${color.value} .selected=${isSelected} graphic="icon">
          <span class="color-item">
            <span class=${dotClass} style=${dotStyle}></span>
            ${label}
          </span>
        </mwc-list-item>
      `);
    });

    return options;
  }

  private _renderMarkerColorOptions(currentColor?: string): TemplateResult[] {
    const locale = this._getLocale();
    const l = this._getLabels();
    const color = currentColor ?? 'default';

    // Check if current color is a custom color (not in presets)
    const isCustomColor =
      color !== 'default' && !PRESET_COLORS.some((c) => c.value === color);

    const options: TemplateResult[] = [];

    // Add custom color option FIRST if current color is not in presets
    if (isCustomColor) {
      options.push(html`
        <mwc-list-item value=${color} .selected=${true} graphic="icon">
          <span class="color-item">
            <span class="color-dot" style="background-color: ${color}"></span>
            ${l.customColor} (${color})
          </span>
        </mwc-list-item>
      `);
    }

    // Add preset colors
    PRESET_COLORS.forEach((presetColor) => {
      const label = locale === 'de' ? presetColor.labelDe : presetColor.labelEn;
      const isDefault = presetColor.value === 'default';
      const dotClass = isDefault ? 'color-dot default' : 'color-dot';
      const dotStyle = !isDefault ? `background-color: ${presetColor.value}` : '';
      const isSelected = !isCustomColor && presetColor.value === color;

      options.push(html`
        <mwc-list-item value=${presetColor.value} .selected=${isSelected} graphic="icon">
          <span class="color-item">
            <span class=${dotClass} style=${dotStyle}></span>
            ${label}
          </span>
        </mwc-list-item>
      `);
    });

    return options;
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

    // MDI icon paths
    const codeJsonPath =
      'M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z';
    const formPath =
      'M14,17H17V14H19V17H22V19H19V22H17V19H14V17M12,17V19H9V17H12M7,17V19H3V15H5V17H7M3,13V10H5V13H3M3,8V4H7V6H5V8H3M9,4H12V6H9V4M15,4H19V8H17V6H15V4M19,10V12H17V10H19Z';
    const yamlModeTooltip = this._markerYamlMode ? l.showVisualEditor : l.showYamlEditor;

    return html`
      <div class="sub-editor">
        <div class="sub-editor-header">
          <ha-icon-button
            .path=${'M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z'}
            @click=${this._onBackFromSubEditor}
          ></ha-icon-button>
          <span class="sub-editor-title">${l.editMarker}: ${friendlyName}</span>
          <ha-icon-button
            class="yaml-toggle"
            .path=${this._markerYamlMode ? formPath : codeJsonPath}
            title=${yamlModeTooltip}
            @click=${this._onToggleMarkerYamlMode}
          ></ha-icon-button>
        </div>

        ${this._markerYamlMode
          ? this._renderMarkerYamlEditor(marker)
          : this._renderMarkerVisualEditor(marker, friendlyName, l)}
      </div>
    `;
  }

  private _renderMarkerVisualEditor(
    marker: MarkerEditorConfig,
    friendlyName: string,
    l: ReturnType<typeof this._getLabels>
  ): TemplateResult {
    return html`
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

      <div class="form-row">
        <ha-select
          class="color-picker-select"
          .label=${l.markerColor}
          .value=${marker.color ?? 'default'}
          @selected=${(e: CustomEvent): void => this._onMarkerColorChange(e)}
          @closed=${(e: Event): void => e.stopPropagation()}
        >
          ${this._renderMarkerColorOptions(marker.color)}
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
    `;
  }

  private _renderMarkerYamlEditor(marker: MarkerEditorConfig): TemplateResult {
    const yaml = this._markerToYaml(marker);
    return html`
      <ha-code-editor
        .hass=${this.hass}
        .value=${yaml}
        mode="yaml"
        autofocus
        autocomplete-entities
        autocomplete-icons
        @value-changed=${this._onMarkerYamlChange}
      ></ha-code-editor>
    `;
  }

  private _markerToYaml(marker: MarkerEditorConfig): string {
    const lines: string[] = [];
    lines.push(`entity: ${marker.entity}`);
    if (marker.label) {
      lines.push(`label: "${marker.label}"`);
    }
    if (marker.type && marker.type !== DEFAULT_MARKER.type) {
      lines.push(`type: ${marker.type}`);
    }
    if (marker.color) {
      lines.push(`color: "${marker.color}"`);
    }
    if (marker.showOnBar !== undefined && marker.showOnBar !== DEFAULT_MARKER.showOnBar) {
      lines.push(`showOnBar: ${marker.showOnBar}`);
    }
    if (marker.showInList !== undefined && marker.showInList !== DEFAULT_MARKER.showInList) {
      lines.push(`showInList: ${marker.showInList}`);
    }
    return lines.join('\n');
  }

  private _yamlToMarker(yaml: string): MarkerEditorConfig | null {
    try {
      // Simple YAML parser for marker config
      const lines = yaml.split('\n');
      const result: Record<string, unknown> = {};

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;

        const colonIndex = trimmed.indexOf(':');
        if (colonIndex === -1) continue;

        const key = trimmed.substring(0, colonIndex).trim();
        let value: unknown = trimmed.substring(colonIndex + 1).trim();

        // Remove quotes from string values
        if (
          typeof value === 'string' &&
          ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'")))
        ) {
          value = value.slice(1, -1);
        }

        // Parse booleans
        if (value === 'true') value = true;
        if (value === 'false') value = false;

        result[key] = value;
      }

      // Validate required field
      if (!result.entity || typeof result.entity !== 'string') {
        return null;
      }

      return {
        entity: result.entity as string,
        label: result.label as string | undefined,
        type: result.type as MarkerType | undefined,
        color: result.color as string | undefined,
        showOnBar: result.showOnBar as boolean | undefined,
        showInList: result.showInList as boolean | undefined,
      };
    } catch {
      return null;
    }
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
  // Event Handlers - Layout
  // ==========================================================================

  private _onBorderlessChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this._updateConfig({
      ...this._config!,
      layout: { ...this._config?.layout, borderless: target.checked },
    });
  };

  private _onCompactFactsChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this._updateConfig({
      ...this._config!,
      layout: { ...this._config?.layout, compact_facts: target.checked },
    });
  };

  private _onFactsColumnsChange = (e: CustomEvent): void => {
    const value = (e.target as HTMLSelectElement).value;
    if (value) {
      this._updateConfig({
        ...this._config!,
        layout: { ...this._config?.layout, facts_columns: parseInt(value, 10) },
      });
    }
  };

  // ==========================================================================
  // Event Handlers - Facts
  // ==========================================================================

  private _onAddFact = (e: CustomEvent): void => {
    const fact = (e.target as HTMLSelectElement).value as FactType;
    if (!fact) return;

    const currentFacts = this._config?.facts?.show ?? ['year', 'dayOfYear', 'isoWeek', 'quarter'];
    if (currentFacts.includes(fact)) return;

    // Add fact at the end (user can reorder via drag&drop)
    const newFacts = [...currentFacts, fact];

    this._updateConfig({
      ...this._config!,
      facts: { show: newFacts },
    });

    // Reset the select
    (e.target as HTMLSelectElement).value = '';
  };

  private _onRemoveFact(fact: FactType): void {
    const currentFacts = this._config?.facts?.show ?? ['year', 'dayOfYear', 'isoWeek', 'quarter'];
    const newFacts = currentFacts.filter((f) => f !== fact);

    this._updateConfig({
      ...this._config!,
      facts: { show: newFacts },
    });
  }

  private _onFactMoved = (e: CustomEvent): void => {
    const { oldIndex, newIndex } = e.detail;
    const currentFacts = [...(this._config?.facts?.show ?? ['year', 'dayOfYear', 'isoWeek', 'quarter'])] as FactType[];

    // Move the fact from oldIndex to newIndex
    const [moved] = currentFacts.splice(oldIndex, 1);
    if (moved) {
      currentFacts.splice(newIndex, 0, moved);
    }

    this._updateConfig({
      ...this._config!,
      facts: { show: currentFacts },
    });
  };

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

  private _onProgressColorChange = (e: CustomEvent): void => {
    const value = (e.target as HTMLSelectElement).value;
    const newConfig = { ...this._config! };
    if (value && value !== 'default') {
      newConfig.bar = { ...newConfig.bar, progress_color: value };
    } else {
      // Remove progress_color if 'default' selected
      newConfig.bar = { ...newConfig.bar };
      delete newConfig.bar.progress_color;
    }
    this._updateConfig(newConfig);
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
    const newMarkerColor = this._getRandomMarkerColor();
    markers.push({
      entity: entityId,
      type: DEFAULT_MARKER.type,
      color: newMarkerColor,
      showOnBar: DEFAULT_MARKER.showOnBar,
      showInList: DEFAULT_MARKER.showInList,
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
    this._markerYamlMode = false;
  };

  private _onToggleMarkerYamlMode = (): void => {
    this._markerYamlMode = !this._markerYamlMode;
  };

  private _onMarkerYamlChange = (e: CustomEvent): void => {
    const yaml = e.detail.value as string;
    const parsed = this._yamlToMarker(yaml);
    if (parsed && this._editingMarkerIndex !== null) {
      const markers = [...(this._config?.markers ?? [])];
      markers[this._editingMarkerIndex] = parsed;
      this._updateConfig({
        ...this._config!,
        markers,
      });
    }
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

  private _onMarkerColorChange(e: CustomEvent): void {
    const value = (e.target as HTMLSelectElement).value;
    if (value && value !== 'default') {
      this._updateMarker({ color: value });
    } else {
      // Remove color if 'default' selected
      this._updateMarker({ color: undefined });
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

  // ==========================================================================
  // Random Color Assignment
  // ==========================================================================

  /**
   * Get a random color for a new marker.
   * Avoids:
   * 1. The progress fill color (bar.progress_color)
   * 2. Colors already used by existing markers
   * If all colors are used, allows reuse but still avoids the progress fill color.
   */
  private _getRandomMarkerColor(): string {
    // Get available preset colors (excluding 'default')
    const availableColors = PRESET_COLORS.filter((c) => c.value !== 'default').map((c) => c.value);

    // Get the progress fill color to avoid
    const progressColor = this._config?.bar?.progress_color;

    // Get colors already used by markers
    const usedColors = new Set<string>();
    for (const marker of this._config?.markers ?? []) {
      if (marker.color) {
        usedColors.add(marker.color);
      }
    }

    // Filter out used colors and progress color
    let candidates = availableColors.filter(
      (color) => !usedColors.has(color) && color !== progressColor
    );

    // If all colors are used, allow reuse but still avoid progress color
    if (candidates.length === 0) {
      candidates = availableColors.filter((color) => color !== progressColor);
    }

    // If even that is empty (shouldn't happen), just return first available color
    if (candidates.length === 0) {
      return availableColors[0]!;
    }

    // Pick a random color from candidates
    const randomIndex = Math.floor(Math.random() * candidates.length);
    return candidates[randomIndex]!;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'year-timeline-card-editor': YearTimelineCardEditor;
  }
}

/**
 * Visual editor for YearTimelineCard
 * Provides a form-based configuration UI in Home Assistant
 */

import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { FactType, SegmentType, LabelType, MarkerType } from './models/config.js';

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
  states: Record<string, unknown>;
  language?: string;
}

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

@customElement('year-timeline-card-editor')
export class YearTimelineCardEditor extends LitElement {
  @property({ attribute: false })
  hass?: Hass;

  @state()
  private _config?: EditorConfig;

  static override styles = css`
    .editor-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px 0;
    }

    .section {
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      padding: 16px;
    }

    .section-title {
      font-weight: 500;
      margin-bottom: 12px;
      color: var(--primary-text-color);
    }

    .form-row {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: 12px;
    }

    .form-row:last-child {
      margin-bottom: 0;
    }

    .form-row label {
      font-size: 0.9em;
      color: var(--secondary-text-color);
    }

    .form-row input[type='text'],
    .form-row select {
      padding: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 1em;
    }

    .form-row input[type='text']:focus,
    .form-row select:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .checkbox-group {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 16px;
    }

    .checkbox-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .checkbox-item input[type='checkbox'] {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }

    .checkbox-item label {
      cursor: pointer;
      font-size: 0.9em;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
    }

    .switch-row label {
      color: var(--primary-text-color);
    }

    ha-switch {
      --mdc-theme-secondary: var(--primary-color);
    }

    .marker-item {
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      padding: 12px;
      margin-bottom: 12px;
      background: var(--secondary-background-color, #f5f5f5);
    }

    .marker-item:last-child {
      margin-bottom: 0;
    }

    .marker-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .marker-number {
      font-weight: 500;
      font-size: 0.9em;
      color: var(--primary-text-color);
    }

    .marker-delete {
      background: none;
      border: none;
      color: var(--error-color, #db4437);
      cursor: pointer;
      padding: 4px 8px;
      font-size: 0.85em;
      border-radius: 4px;
    }

    .marker-delete:hover {
      background: var(--error-color, #db4437);
      color: white;
    }

    .marker-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .marker-grid .form-row {
      margin-bottom: 0;
    }

    .marker-grid .full-width {
      grid-column: 1 / -1;
    }

    .marker-switches {
      display: flex;
      gap: 16px;
      margin-top: 8px;
    }

    .marker-switches .switch-row {
      padding: 4px 0;
      flex: 1;
    }

    .add-marker-btn {
      width: 100%;
      padding: 10px;
      border: 2px dashed var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: none;
      color: var(--primary-color);
      cursor: pointer;
      font-size: 0.9em;
      transition: all 0.2s;
    }

    .add-marker-btn:hover {
      border-color: var(--primary-color);
      background: var(--primary-color);
      color: white;
    }
  `;

  setConfig(config: EditorConfig): void {
    this._config = config;
  }

  override render(): TemplateResult {
    if (!this._config) {
      return html``;
    }

    const locale = this._config.locale ?? 'de';

    return html`
      <div class="editor-container">
        ${this._renderGeneralSection(locale)}
        ${this._renderFactsSection(locale)}
        ${this._renderBarSection(locale)}
        ${this._renderMarkersSection(locale)}
      </div>
    `;
  }

  private _renderGeneralSection(locale: string): TemplateResult {
    const labels =
      locale === 'en'
        ? { title: 'Title', locale: 'Language', german: 'German', english: 'English' }
        : { title: 'Titel', locale: 'Sprache', german: 'Deutsch', english: 'Englisch' };

    return html`
      <div class="section">
        <div class="section-title">${locale === 'en' ? 'General' : 'Allgemein'}</div>

        <div class="form-row">
          <label>${labels.title}</label>
          <input
            type="text"
            .value=${this._config?.title ?? ''}
            @input=${this._onTitleChange}
            placeholder="${locale === 'en' ? 'Optional title' : 'Optionaler Titel'}"
          />
        </div>

        <div class="form-row">
          <label>${labels.locale}</label>
          <select .value=${this._config?.locale ?? 'de'} @change=${this._onLocaleChange}>
            <option value="de">${labels.german}</option>
            <option value="en">${labels.english}</option>
          </select>
        </div>
      </div>
    `;
  }

  private _renderFactsSection(locale: string): TemplateResult {
    const factLabels = FACT_LABELS[locale] ?? FACT_LABELS['de']!;
    const currentFacts = this._config?.facts?.show ?? [
      'year',
      'dayOfYear',
      'isoWeek',
      'quarter',
    ];

    return html`
      <div class="section">
        <div class="section-title">${locale === 'en' ? 'Facts' : 'Kennzahlen'}</div>

        <div class="checkbox-group">
          ${ALL_FACTS.map(
            (fact) => html`
              <div class="checkbox-item">
                <input
                  type="checkbox"
                  id="fact-${fact}"
                  .checked=${currentFacts.includes(fact)}
                  @change=${(e: Event): void => this._onFactToggle(fact, e)}
                />
                <label for="fact-${fact}">${factLabels[fact]}</label>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }

  private _renderBarSection(locale: string): TemplateResult {
    const labels =
      locale === 'en'
        ? {
            title: 'Timeline Bar',
            segments: 'Segment Lines',
            labels: 'Labels',
            none: 'None',
            quarters: 'Quarters',
            months: 'Months',
            weeks: 'Weeks',
            todayMarker: 'Show Today Marker',
            progressFill: 'Show Progress Fill',
          }
        : {
            title: 'Zeitstrahl',
            segments: 'Segment-Linien',
            labels: 'Beschriftung',
            none: 'Keine',
            quarters: 'Quartale',
            months: 'Monate',
            weeks: 'Wochen',
            todayMarker: 'Heute-Marker anzeigen',
            progressFill: 'Fortschritt füllen',
          };

    const bar = this._config?.bar ?? {};

    return html`
      <div class="section">
        <div class="section-title">${labels.title}</div>

        <div class="form-row">
          <label>${labels.segments}</label>
          <select .value=${bar.segments ?? 'months'} @change=${this._onSegmentsChange}>
            <option value="none">${labels.none}</option>
            <option value="quarters">${labels.quarters}</option>
            <option value="months">${labels.months}</option>
            <option value="weeks">${labels.weeks}</option>
          </select>
        </div>

        <div class="form-row">
          <label>${labels.labels}</label>
          <select .value=${bar.labels ?? 'quarters'} @change=${this._onLabelsChange}>
            <option value="none">${labels.none}</option>
            <option value="quarters">${labels.quarters}</option>
            <option value="months">${labels.months}</option>
          </select>
        </div>

        <div class="switch-row">
          <label>${labels.todayMarker}</label>
          <ha-switch
            .checked=${bar.show_today_marker ?? true}
            @change=${this._onTodayMarkerChange}
          ></ha-switch>
        </div>

        <div class="switch-row">
          <label>${labels.progressFill}</label>
          <ha-switch
            .checked=${bar.show_progress_fill ?? true}
            @change=${this._onProgressFillChange}
          ></ha-switch>
        </div>
      </div>
    `;
  }

  private _renderMarkersSection(locale: string): TemplateResult {
    const labels =
      locale === 'en'
        ? {
            title: 'Markers',
            entity: 'Entity',
            label: 'Label (optional)',
            labelPlaceholder: 'Uses entity name if empty',
            type: 'Type',
            point: 'Point',
            rangeStart: 'Range Start',
            rangeEnd: 'Range End',
            showOnBar: 'Show on Bar',
            showInList: 'Show in List',
            addMarker: '+ Add Marker',
            delete: 'Delete',
            marker: 'Marker',
          }
        : {
            title: 'Marker',
            entity: 'Entität',
            label: 'Bezeichnung (optional)',
            labelPlaceholder: 'Verwendet Entity-Name wenn leer',
            type: 'Typ',
            point: 'Punkt',
            rangeStart: 'Bereich Start',
            rangeEnd: 'Bereich Ende',
            showOnBar: 'Auf Balken',
            showInList: 'In Liste',
            addMarker: '+ Marker hinzufügen',
            delete: 'Löschen',
            marker: 'Marker',
          };

    const markers = this._config?.markers ?? [];

    return html`
      <div class="section">
        <div class="section-title">${labels.title}</div>

        ${markers.map((marker, index) => this._renderMarkerItem(marker, index, labels))}

        <button class="add-marker-btn" @click=${this._onAddMarker}>
          ${labels.addMarker}
        </button>
      </div>
    `;
  }

  private _renderMarkerItem(
    marker: MarkerEditorConfig,
    index: number,
    labels: Record<string, string>
  ): TemplateResult {
    // Get entity list from hass, filtered to date/timestamp entities only
    const entities = this.hass
      ? Object.entries(this.hass.states)
          .filter(([entityId, state]) => {
            const domain = entityId.split('.')[0];
            // Always include input_datetime
            if (domain === 'input_datetime') {
              return true;
            }
            // Check for device_class: timestamp or date
            const stateObj = state as { attributes?: { device_class?: string } } | undefined;
            const deviceClass = stateObj?.attributes?.device_class;
            return deviceClass === 'timestamp' || deviceClass === 'date';
          })
          .map(([entityId]) => entityId)
          .sort()
      : [];

    return html`
      <div class="marker-item">
        <div class="marker-header">
          <span class="marker-number">${labels.marker} ${index + 1}</span>
          <button
            class="marker-delete"
            @click=${(): void => this._onDeleteMarker(index)}
          >
            ${labels.delete}
          </button>
        </div>

        <div class="marker-grid">
          <div class="form-row full-width">
            <label>${labels.entity}</label>
            <select
              .value=${marker.entity ?? ''}
              @change=${(e: Event): void => this._onMarkerFieldChange(index, 'entity', e)}
            >
              <option value="">--</option>
              ${entities.map(
                (entity) => html`
                  <option value=${entity} ?selected=${entity === marker.entity}>
                    ${entity}
                  </option>
                `
              )}
            </select>
          </div>

          <div class="form-row">
            <label>${labels.label}</label>
            <input
              type="text"
              .value=${marker.label ?? ''}
              @input=${(e: Event): void => this._onMarkerFieldChange(index, 'label', e)}
              placeholder="${labels.labelPlaceholder}"
            />
          </div>

          <div class="form-row">
            <label>${labels.type}</label>
            <select
              .value=${marker.type ?? 'point'}
              @change=${(e: Event): void => this._onMarkerFieldChange(index, 'type', e)}
            >
              <option value="point">${labels.point}</option>
              <option value="rangeStart">${labels.rangeStart}</option>
              <option value="rangeEnd">${labels.rangeEnd}</option>
            </select>
          </div>
        </div>

        <div class="marker-switches">
          <div class="switch-row">
            <label>${labels.showOnBar}</label>
            <ha-switch
              .checked=${marker.showOnBar ?? true}
              @change=${(e: Event): void => this._onMarkerSwitchChange(index, 'showOnBar', e)}
            ></ha-switch>
          </div>
          <div class="switch-row">
            <label>${labels.showInList}</label>
            <ha-switch
              .checked=${marker.showInList ?? false}
              @change=${(e: Event): void => this._onMarkerSwitchChange(index, 'showInList', e)}
            ></ha-switch>
          </div>
        </div>
      </div>
    `;
  }

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

  private _onLocaleChange = (e: Event): void => {
    const target = e.target as HTMLSelectElement;
    this._updateConfig({
      ...this._config!,
      locale: target.value,
    });
  };

  private _onFactToggle(fact: FactType, e: Event): void {
    const target = e.target as HTMLInputElement;
    const currentFacts = this._config?.facts?.show ?? [
      'year',
      'dayOfYear',
      'isoWeek',
      'quarter',
    ];

    let newFacts: FactType[];
    if (target.checked) {
      // Add fact, maintain order based on ALL_FACTS
      newFacts = ALL_FACTS.filter((f) => currentFacts.includes(f) || f === fact);
    } else {
      newFacts = currentFacts.filter((f) => f !== fact);
    }

    this._updateConfig({
      ...this._config!,
      facts: { show: newFacts },
    });
  }

  private _onSegmentsChange = (e: Event): void => {
    const target = e.target as HTMLSelectElement;
    this._updateConfig({
      ...this._config!,
      bar: {
        ...this._config?.bar,
        segments: target.value as SegmentType,
      },
    });
  };

  private _onLabelsChange = (e: Event): void => {
    const target = e.target as HTMLSelectElement;
    this._updateConfig({
      ...this._config!,
      bar: {
        ...this._config?.bar,
        labels: target.value as LabelType,
      },
    });
  };

  private _onTodayMarkerChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this._updateConfig({
      ...this._config!,
      bar: {
        ...this._config?.bar,
        show_today_marker: target.checked,
      },
    });
  };

  private _onProgressFillChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this._updateConfig({
      ...this._config!,
      bar: {
        ...this._config?.bar,
        show_progress_fill: target.checked,
      },
    });
  };

  private _onAddMarker = (): void => {
    const markers = [...(this._config?.markers ?? [])];
    markers.push({
      entity: '',
      type: 'point',
      showOnBar: true,
      showInList: false,
    });
    this._updateConfig({
      ...this._config!,
      markers,
    });
  };

  private _onDeleteMarker(index: number): void {
    const markers = [...(this._config?.markers ?? [])];
    markers.splice(index, 1);
    this._updateConfig({
      ...this._config!,
      markers,
    });
  }

  private _onMarkerFieldChange(index: number, field: keyof MarkerEditorConfig, e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const markers = [...(this._config?.markers ?? [])];
    const marker = markers[index];
    if (marker) {
      markers[index] = {
        ...marker,
        [field]: target.value,
      };
      this._updateConfig({
        ...this._config!,
        markers,
      });
    }
  }

  private _onMarkerSwitchChange(index: number, field: 'showOnBar' | 'showInList', e: Event): void {
    const target = e.target as HTMLInputElement;
    const markers = [...(this._config?.markers ?? [])];
    const marker = markers[index];
    if (marker) {
      markers[index] = {
        ...marker,
        [field]: target.checked,
      };
      this._updateConfig({
        ...this._config!,
        markers,
      });
    }
  }

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

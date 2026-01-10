/**
 * YearTimelineCard - Main entry point
 * A Home Assistant Lovelace card displaying the year progress as a horizontal timeline
 */

import { LitElement, html, nothing, type TemplateResult, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cardStyles } from './styles/styles.js';
import {
  type NormalizedConfig,
  normalizeConfig,
  validateConfig,
} from './models/config.js';
import { yearProgress } from './models/date-utils.js';
import { resolveMarkers, type ResolvedMarker, type HassStates } from './models/marker.js';
import type { BarMarker } from './components/timeline-bar.js';

// Import components to register them
import './components/timeline-bar.js';
import './components/facts-block.js';
import './components/marker-list.js';
import './editor.js';

// Home Assistant types
interface Hass {
  states: HassStates;
  language?: string;
}

interface LovelaceCard extends HTMLElement {
  hass?: Hass;
  setConfig(config: unknown): void;
  getCardSize?(): number;
  getConfigElement?(): HTMLElement;
}

@customElement('year-timeline-card')
export class YearTimelineCard extends LitElement implements LovelaceCard {
  static override styles = cardStyles;

  @property({ attribute: false })
  hass?: Hass;

  @state()
  private _config?: NormalizedConfig;

  @state()
  private _error?: string;

  private _now: Date = new Date();
  private _updateInterval?: ReturnType<typeof setInterval>;

  override connectedCallback(): void {
    super.connectedCallback();
    // Update every minute to keep progress current
    this._updateInterval = setInterval(() => {
      this._now = new Date();
      this.requestUpdate();
    }, 60000);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._updateInterval) {
      clearInterval(this._updateInterval);
      this._updateInterval = undefined;
    }
  }

  setConfig(config: unknown): void {
    if (!validateConfig(config)) {
      this._error = 'Invalid configuration: type must be "custom:year-timeline-card"';
      return;
    }

    this._error = undefined;
    this._config = normalizeConfig(config);
  }

  getCardSize(): number {
    // Estimate card height in units of 50px
    let size = 2; // Base: bar + padding
    if (this._config?.title) size += 1;
    if (this._config?.facts && this._config.facts.length > 0) size += 1;
    return size;
  }

  getGridOptions(): { rows: number; columns: number; min_rows: number; min_columns: number } {
    return {
      rows: 2,
      columns: 12,
      min_rows: 1,
      min_columns: 6,
    };
  }

  static getConfigElement(): HTMLElement {
    return document.createElement('year-timeline-card-editor');
  }

  override updated(changedProps: PropertyValues): void {
    super.updated(changedProps);
    // Force re-render when hass changes to update markers
    if (changedProps.has('hass')) {
      this.requestUpdate();
    }
  }

  override render(): TemplateResult {
    if (this._error) {
      return this.renderError();
    }

    if (!this._config) {
      return html`<ha-card><div class="card-content">No configuration</div></ha-card>`;
    }

    const year = this._now.getFullYear();
    const progress = yearProgress(this._now);
    const resolvedMarkers = this.resolveMarkers(year);
    const barMarkers = this.toBarMarkers(resolvedMarkers);
    const locale = this._resolveLocale();
    const layout = this._config.layout;

    // Build dynamic styles for layout options
    const cardClass = layout.borderless ? 'borderless' : '';
    const progressColorStyle = this._config.bar.progressColor
      ? `--ytc-primary-color: ${this._config.bar.progressColor}`
      : '';

    return html`
      <ha-card class=${cardClass} style=${progressColorStyle}>
        ${this._config.title
          ? html`<div class="card-header">${this._config.title}</div>`
          : nothing}
        <div class="card-content">
          ${this._config.facts.length > 0
            ? html`
                <ytc-facts-block
                  .date=${this._now}
                  .facts=${this._config.facts}
                  .locale=${locale}
                  .compact=${layout.compactFacts}
                  .columns=${layout.factsColumns}
                ></ytc-facts-block>
              `
            : nothing}
          <ytc-timeline-bar
            .progress=${progress}
            .year=${year}
            .locale=${locale}
            .config=${this._config.bar}
            .markers=${barMarkers}
          ></ytc-timeline-bar>
          ${resolvedMarkers.some((m) => m.showInList)
            ? html`
                <ytc-marker-list
                  .markers=${resolvedMarkers}
                  .locale=${locale}
                ></ytc-marker-list>
              `
            : nothing}
        </div>
      </ha-card>
    `;
  }

  private _resolveLocale(): string {
    const configLocale = this._config?.locale;

    // If 'auto' or not set, detect from HA
    if (!configLocale || configLocale === 'auto') {
      const hassLang = this.hass?.language ?? 'en';
      // Extract base language (e.g., 'de' from 'de-DE')
      const baseLang = hassLang.split('-')[0];
      // Return if we support it, otherwise fallback to English
      return baseLang && (baseLang === 'de' || baseLang === 'en') ? baseLang : 'en';
    }

    return configLocale;
  }

  private renderError(): TemplateResult {
    return html`
      <ha-card>
        <div class="card-content" style="color: var(--error-color, #db4437);">
          ${this._error}
        </div>
      </ha-card>
    `;
  }

  private resolveMarkers(year: number): ResolvedMarker[] {
    if (!this._config || !this.hass) {
      return [];
    }

    return resolveMarkers(this._config.markers, this.hass.states, year);
  }

  private toBarMarkers(resolved: ResolvedMarker[]): BarMarker[] {
    return resolved
      .filter((m) => m.showOnBar)
      .map((m) => ({
        position: m.position,
        label: m.label,
        type: m.type,
        color: m.color,
      }));
  }
}

// Register with Home Assistant's custom card registry
declare global {
  interface HTMLElementTagNameMap {
    'year-timeline-card': YearTimelineCard;
  }
  interface Window {
    customCards?: Array<{ type: string; name: string; description: string }>;
  }
}

// Register card for the picker
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'year-timeline-card',
  name: 'Year Timeline Card',
  description: 'A card displaying the year progress as a horizontal timeline with facts and markers',
});

// Log registration
console.info(
  '%c YEAR-TIMELINE-CARD %c v1.0.1 ',
  'color: white; background: #03a9f4; font-weight: bold;',
  'color: #03a9f4; background: white; font-weight: bold;'
);

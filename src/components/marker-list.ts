/**
 * Marker list component for YearTimelineCard
 * Displays markers as a text list below the timeline
 */

import { LitElement, html, nothing, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { markerListStyles } from '../styles/styles.js';
import type { ResolvedMarker } from '../models/marker.js';
import { formatMarkerDate } from '../models/marker.js';

const TITLES: Record<string, string> = {
  de: 'Ereignisse',
  en: 'Events',
};

@customElement('ytc-marker-list')
export class MarkerList extends LitElement {
  static override styles = markerListStyles;

  @property({ type: Array })
  markers: ResolvedMarker[] = [];

  @property({ type: String })
  locale = 'de';

  override render(): TemplateResult | typeof nothing {
    // Filter to only markers that should show in list
    const listMarkers = this.markers.filter((m) => m.showInList);

    if (listMarkers.length === 0) {
      return nothing;
    }

    const title = TITLES[this.locale] ?? TITLES['de']!;

    return html`
      <div class="marker-list">
        <div class="marker-list-title">${title}</div>
        <div class="marker-list-items">
          ${listMarkers.map((marker) => this.renderMarkerItem(marker))}
        </div>
      </div>
    `;
  }

  private renderMarkerItem(marker: ResolvedMarker): TemplateResult {
    const dateStr = formatMarkerDate(marker.date, this.locale);
    const dotStyle = marker.color ? `background-color: ${marker.color}` : '';

    return html`
      <div class="marker-list-item">
        <div class="marker-list-item-content">
          <span class="marker-list-item-dot" style=${dotStyle}></span>
          <span class="marker-list-item-label">${marker.label}</span>
        </div>
        <span class="marker-list-item-date">${dateStr}</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ytc-marker-list': MarkerList;
  }
}

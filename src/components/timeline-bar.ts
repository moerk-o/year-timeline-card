/**
 * Timeline bar component for YearTimelineCard
 * Renders the horizontal progress bar with segments, labels, and markers
 */

import { LitElement, html, nothing, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { timelineBarStyles } from '../styles/styles.js';
import type { NormalizedBarConfig } from '../models/config.js';
import { getSegmentBoundaries, getLabelPositions } from '../models/date-utils.js';

export interface BarMarker {
  position: number; // 0-100
  label: string;
  type: 'point' | 'rangeStart' | 'rangeEnd' | 'range';
}

@customElement('ytc-timeline-bar')
export class TimelineBar extends LitElement {
  static override styles = timelineBarStyles;

  @property({ type: Number })
  progress = 0;

  @property({ type: Number })
  year = new Date().getFullYear();

  @property({ type: String })
  locale = 'de';

  @property({ type: Object })
  config: NormalizedBarConfig = {
    segments: 'months',
    labels: 'quarters',
    showTodayMarker: true,
    showProgressFill: true,
  };

  @property({ type: Array })
  markers: BarMarker[] = [];

  override render(): TemplateResult {
    return html`
      <div class="timeline-container">
        <div class="timeline-bar">
          ${this.config.showProgressFill ? this.renderProgress() : nothing}
          ${this.renderSegments()}
          ${this.renderMarkers()}
          ${this.config.showTodayMarker ? this.renderTodayMarker() : nothing}
        </div>
        ${this.renderLabels()}
      </div>
    `;
  }

  private renderProgress(): TemplateResult {
    const clampedProgress = Math.min(100, Math.max(0, this.progress));
    return html`
      <div class="timeline-progress" style="width: ${clampedProgress}%"></div>
    `;
  }

  private renderTodayMarker(): TemplateResult {
    const clampedProgress = Math.min(100, Math.max(0, this.progress));
    return html`
      <div class="timeline-today-marker" style="left: ${clampedProgress}%"></div>
    `;
  }

  private renderSegments(): TemplateResult {
    const boundaries = getSegmentBoundaries(this.config.segments, this.year);

    if (boundaries.length === 0) {
      return html``;
    }

    const isWeeks = this.config.segments === 'weeks';

    return html`
      <div class="timeline-segments">
        ${boundaries.slice(1).map(
          (pos) => html`
            <div
              class="timeline-segment-line ${isWeeks ? 'week' : ''}"
              style="left: ${pos}%"
            ></div>
          `
        )}
      </div>
    `;
  }

  private renderLabels(): TemplateResult | typeof nothing {
    const labels = getLabelPositions(this.config.labels, this.year, this.locale);

    if (labels.length === 0) {
      return nothing;
    }

    return html`
      <div class="timeline-labels">
        ${labels.map(
          (item) => html`
            <span class="timeline-label">${item.label}</span>
          `
        )}
      </div>
    `;
  }

  private renderMarkers(): TemplateResult {
    if (this.markers.length === 0) {
      return html``;
    }

    return html`
      <div class="timeline-markers">
        ${this.markers.map((marker) => this.renderMarker(marker))}
      </div>
    `;
  }

  private renderMarker(marker: BarMarker): TemplateResult {
    const clampedPos = Math.min(100, Math.max(0, marker.position));
    let typeClass = '';

    if (marker.type === 'rangeStart') {
      typeClass = 'range-start';
    } else if (marker.type === 'rangeEnd') {
      typeClass = 'range-end';
    }

    return html`
      <div
        class="timeline-marker ${typeClass}"
        style="left: ${clampedPos}%"
        title="${marker.label}"
      ></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ytc-timeline-bar': TimelineBar;
  }
}

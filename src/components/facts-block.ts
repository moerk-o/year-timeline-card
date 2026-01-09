/**
 * Facts block component for YearTimelineCard
 * Displays configurable statistics about the current year
 */

import { LitElement, html, nothing, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { factsBlockStyles } from '../styles/styles.js';
import type { FactType } from '../models/config.js';
import {
  dayOfYear,
  daysInYear,
  isoWeekNumber,
  quarter,
  monthName,
  yearProgress,
  remainingDays,
  weekPrefix,
} from '../models/date-utils.js';

interface FactLabels {
  year: string;
  dayOfYear: string;
  isoWeek: string;
  month: string;
  quarter: string;
  progress: string;
  remainingDays: string;
}

const LABELS: Record<string, FactLabels> = {
  de: {
    year: 'Jahr',
    dayOfYear: 'Tag',
    isoWeek: 'Kalenderwoche',
    month: 'Monat',
    quarter: 'Quartal',
    progress: 'Fortschritt',
    remainingDays: 'Resttage',
  },
  en: {
    year: 'Year',
    dayOfYear: 'Day',
    isoWeek: 'Week',
    month: 'Month',
    quarter: 'Quarter',
    progress: 'Progress',
    remainingDays: 'Days left',
  },
};

@customElement('ytc-facts-block')
export class FactsBlock extends LitElement {
  static override styles = factsBlockStyles;

  @property({ type: Object })
  date: Date = new Date();

  @property({ type: Array })
  facts: FactType[] = [];

  @property({ type: String })
  locale = 'de';

  @property({ type: Boolean })
  compact = false;

  @property({ type: Number })
  columns = 2;

  override render(): TemplateResult {
    if (this.facts.length === 0) {
      return html``;
    }

    // Build dynamic grid styles
    const containerStyle = `
      grid-template-columns: repeat(${this.columns}, 1fr);
      ${this.compact ? 'gap: 2px 12px;' : ''}
    `;
    const itemClass = this.compact ? 'fact-item compact' : 'fact-item';

    return html`
      <div class="facts-container" style=${containerStyle}>
        ${this.facts.map((fact) => this.renderFact(fact, itemClass))}
      </div>
    `;
  }

  private renderFact(fact: FactType, itemClass: string): TemplateResult | typeof nothing {
    const label = this.getLabel(fact);
    const value = this.getValue(fact);

    if (value === null) {
      return nothing;
    }

    return html`
      <div class=${itemClass}>
        <span class="fact-label">${label}</span>
        <span class="fact-value">${value}</span>
      </div>
    `;
  }

  private getLabel(fact: FactType): string {
    const labels = LABELS[this.locale] ?? LABELS['de']!;
    return labels[fact];
  }

  private getValue(fact: FactType): string | null {
    const year = this.date.getFullYear();

    switch (fact) {
      case 'year':
        return String(year);

      case 'dayOfYear': {
        const day = dayOfYear(this.date);
        const total = daysInYear(year);
        return `${day} / ${total}`;
      }

      case 'isoWeek': {
        const week = isoWeekNumber(this.date);
        const prefix = weekPrefix(this.locale);
        return `${prefix} ${week}`;
      }

      case 'month': {
        const monthNum = this.date.getMonth();
        const name = monthName(monthNum, this.locale, false);
        return name;
      }

      case 'quarter': {
        const q = quarter(this.date);
        return `Q${q}`;
      }

      case 'progress': {
        const progress = yearProgress(this.date);
        return `${progress.toFixed(1)}%`;
      }

      case 'remainingDays': {
        const remaining = remainingDays(this.date);
        return String(remaining);
      }

      default:
        return null;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ytc-facts-block': FactsBlock;
  }
}

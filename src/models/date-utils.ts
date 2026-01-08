/**
 * Date utility functions for YearTimelineCard
 * Handles leap years, ISO week calculation, day-of-year, etc.
 */

/**
 * Check if a year is a leap year
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Get the number of days in a year (365 or 366)
 */
export function daysInYear(year: number): number {
  return isLeapYear(year) ? 366 : 365;
}

/**
 * Get the day of year (1-366) for a given date
 */
export function dayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

/**
 * Calculate ISO 8601 week number
 * Week 1 is the week containing the first Thursday of the year
 */
export function isoWeekNumber(date: Date): number {
  const target = new Date(date.valueOf());
  // Set to nearest Thursday: current date + 4 - current day number (Monday = 1, Sunday = 7)
  const dayNum = (date.getDay() + 6) % 7; // Convert Sunday=0 to Monday=0 based
  target.setDate(target.getDate() - dayNum + 3);

  // January 4th is always in week 1
  const firstThursday = new Date(target.getFullYear(), 0, 4);
  const firstDayNum = (firstThursday.getDay() + 6) % 7;
  firstThursday.setDate(firstThursday.getDate() - firstDayNum + 3);

  // Calculate week number
  const diff = target.getTime() - firstThursday.getTime();
  return 1 + Math.round(diff / (7 * 24 * 60 * 60 * 1000));
}

/**
 * Get the ISO week year (may differ from calendar year at year boundaries)
 */
export function isoWeekYear(date: Date): number {
  const target = new Date(date.valueOf());
  const dayNum = (date.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNum + 3);
  return target.getFullYear();
}

/**
 * Get the quarter (1-4) for a given date
 */
export function quarter(date: Date): number {
  return Math.floor(date.getMonth() / 3) + 1;
}

/**
 * Calculate year progress as a percentage (0-100)
 */
export function yearProgress(date: Date): number {
  const year = date.getFullYear();
  const startOfYear = new Date(year, 0, 1).getTime();
  const endOfYear = new Date(year + 1, 0, 1).getTime();
  const now = date.getTime();

  const progress = ((now - startOfYear) / (endOfYear - startOfYear)) * 100;
  return Math.min(100, Math.max(0, progress));
}

/**
 * Calculate remaining days in the year
 */
export function remainingDays(date: Date): number {
  const year = date.getFullYear();
  const total = daysInYear(year);
  const current = dayOfYear(date);
  return total - current;
}

/**
 * Get position (0-100) of a date within a year
 */
export function datePositionInYear(date: Date, targetYear: number): number | null {
  const dateYear = date.getFullYear();

  // If date is not in target year, return null
  if (dateYear !== targetYear) {
    return null;
  }

  return yearProgress(date);
}

/**
 * Parse a date string defensively
 * Supports ISO 8601 formats and common date formats
 * Returns null if parsing fails
 */
export function parseDate(value: unknown): Date | null {
  if (value instanceof Date) {
    return isNaN(value.getTime()) ? null : value;
  }

  if (typeof value !== 'string' || value.trim() === '') {
    return null;
  }

  const str = value.trim();

  // Try ISO format first (most common for HA sensors)
  const isoDate = new Date(str);
  if (!isNaN(isoDate.getTime())) {
    return isoDate;
  }

  // Try common formats: YYYY-MM-DD, DD.MM.YYYY, MM/DD/YYYY
  const patterns: Array<{ regex: RegExp; parse: (m: RegExpMatchArray) => Date }> = [
    {
      // YYYY-MM-DD
      regex: /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
      parse: (m) => new Date(parseInt(m[1]!), parseInt(m[2]!) - 1, parseInt(m[3]!)),
    },
    {
      // DD.MM.YYYY
      regex: /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/,
      parse: (m) => new Date(parseInt(m[3]!), parseInt(m[2]!) - 1, parseInt(m[1]!)),
    },
    {
      // MM/DD/YYYY
      regex: /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,
      parse: (m) => new Date(parseInt(m[3]!), parseInt(m[1]!) - 1, parseInt(m[2]!)),
    },
  ];

  for (const { regex, parse } of patterns) {
    const match = str.match(regex);
    if (match) {
      const parsed = parse(match);
      if (!isNaN(parsed.getTime())) {
        return parsed;
      }
    }
  }

  return null;
}

/**
 * Apply annual recurring behavior: extract month/day and apply to target year
 */
export function applyAnnualRecurring(date: Date, targetYear: number): Date {
  return new Date(targetYear, date.getMonth(), date.getDate());
}

/**
 * Localized month names
 */
const MONTH_NAMES: Record<string, string[]> = {
  de: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};

const MONTH_NAMES_SHORT: Record<string, string[]> = {
  de: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

/**
 * Get localized month name
 */
export function monthName(month: number, locale: string, short = false): string {
  const names = short
    ? (MONTH_NAMES_SHORT[locale] ?? MONTH_NAMES_SHORT['de']!)
    : (MONTH_NAMES[locale] ?? MONTH_NAMES['de']!);
  return names[month] ?? '';
}

/**
 * Get localized week prefix (KW for German, CW for English)
 */
export function weekPrefix(locale: string): string {
  return locale === 'en' ? 'CW' : 'KW';
}

/**
 * Get localized quarter prefix
 */
export function quarterLabel(q: number, _locale: string): string {
  return `Q${q}`;
}

/**
 * Get segment boundaries for different segment types
 * Returns array of positions (0-100) where segments start
 */
export function getSegmentBoundaries(
  type: 'none' | 'quarters' | 'months' | 'weeks',
  year: number
): number[] {
  if (type === 'none') {
    return [];
  }

  const startOfYear = new Date(year, 0, 1).getTime();
  const endOfYear = new Date(year + 1, 0, 1).getTime();
  const yearDuration = endOfYear - startOfYear;

  const toPercent = (date: Date): number => {
    return ((date.getTime() - startOfYear) / yearDuration) * 100;
  };

  if (type === 'quarters') {
    return [
      0,
      toPercent(new Date(year, 3, 1)), // Q2 start (April)
      toPercent(new Date(year, 6, 1)), // Q3 start (July)
      toPercent(new Date(year, 9, 1)), // Q4 start (October)
    ];
  }

  if (type === 'months') {
    const boundaries: number[] = [];
    for (let m = 0; m < 12; m++) {
      boundaries.push(toPercent(new Date(year, m, 1)));
    }
    return boundaries;
  }

  if (type === 'weeks') {
    // Calculate ISO week boundaries
    const boundaries: number[] = [];
    // Find first Monday of the year or last Monday of previous year
    const jan1 = new Date(year, 0, 1);
    const jan1Day = (jan1.getDay() + 6) % 7; // Monday = 0
    let firstMonday: Date;
    if (jan1Day <= 3) {
      // Week 1 starts in this year
      firstMonday = new Date(year, 0, 1 - jan1Day);
    } else {
      // Week 1 starts next Monday
      firstMonday = new Date(year, 0, 8 - jan1Day);
    }

    let currentMonday = firstMonday;
    while (currentMonday.getFullYear() <= year) {
      const pos = toPercent(currentMonday);
      if (pos >= 0 && pos < 100) {
        boundaries.push(pos);
      }
      currentMonday = new Date(currentMonday.getTime() + 7 * 24 * 60 * 60 * 1000);
    }
    return boundaries;
  }

  return [];
}

/**
 * Get label positions for different label types
 * Returns array of { position, label } objects
 */
export function getLabelPositions(
  type: 'none' | 'quarters' | 'months',
  year: number,
  locale: string
): Array<{ position: number; label: string }> {
  if (type === 'none') {
    return [];
  }

  const startOfYear = new Date(year, 0, 1).getTime();
  const endOfYear = new Date(year + 1, 0, 1).getTime();
  const yearDuration = endOfYear - startOfYear;

  const toPercent = (date: Date): number => {
    return ((date.getTime() - startOfYear) / yearDuration) * 100;
  };

  if (type === 'quarters') {
    return [
      { position: toPercent(new Date(year, 1, 1)), label: 'Q1' }, // Center of Q1
      { position: toPercent(new Date(year, 4, 1)), label: 'Q2' }, // Center of Q2
      { position: toPercent(new Date(year, 7, 1)), label: 'Q3' }, // Center of Q3
      { position: toPercent(new Date(year, 10, 1)), label: 'Q4' }, // Center of Q4
    ];
  }

  if (type === 'months') {
    const labels: Array<{ position: number; label: string }> = [];
    for (let m = 0; m < 12; m++) {
      // Position at middle of month
      const monthStart = new Date(year, m, 1);
      const monthEnd = new Date(year, m + 1, 1);
      const midPoint = new Date((monthStart.getTime() + monthEnd.getTime()) / 2);
      labels.push({
        position: toPercent(midPoint),
        label: monthName(m, locale, true),
      });
    }
    return labels;
  }

  return [];
}

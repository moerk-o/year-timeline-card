/**
 * Configuration types and normalization for YearTimelineCard
 */

// ============================================================================
// User-facing config types (what users write in YAML)
// ============================================================================

export type FactType =
  | 'year'
  | 'dayOfYear'
  | 'isoWeek'
  | 'month'
  | 'quarter'
  | 'progress'
  | 'remainingDays';

export type SegmentType = 'none' | 'quarters' | 'months' | 'weeks';
export type LabelType = 'none' | 'quarters' | 'months';
export type MarkerType = 'point' | 'rangeStart' | 'rangeEnd' | 'range';
export type MarkerBehavior = 'fixedDate' | 'annualRecurring';

export interface MarkerConfig {
  entity: string;
  label: string;
  source?: string; // 'state' or 'attribute:<name>', default 'state'
  type?: MarkerType; // default 'point'
  behavior?: MarkerBehavior; // default 'fixedDate'
  showOnBar?: boolean; // default true
  showInList?: boolean; // default false
}

export interface BarConfig {
  segments?: SegmentType;
  labels?: LabelType;
  show_today_marker?: boolean;
  show_progress_fill?: boolean;
}

export interface FactsConfig {
  show?: FactType[] | Record<FactType, boolean>;
}

export interface UserConfig {
  type: string;
  title?: string;
  locale?: string;
  facts?: FactsConfig;
  bar?: BarConfig;
  markers?: MarkerConfig[];
}

// ============================================================================
// Normalized config types (internal use)
// ============================================================================

export interface NormalizedMarkerConfig {
  entity: string;
  label: string;
  source: 'state' | { attribute: string };
  type: MarkerType;
  behavior: MarkerBehavior;
  showOnBar: boolean;
  showInList: boolean;
}

export interface NormalizedBarConfig {
  segments: SegmentType;
  labels: LabelType;
  showTodayMarker: boolean;
  showProgressFill: boolean;
}

export interface NormalizedConfig {
  title: string | null;
  locale: string;
  facts: FactType[];
  bar: NormalizedBarConfig;
  markers: NormalizedMarkerConfig[];
}

// ============================================================================
// Defaults
// ============================================================================

const DEFAULT_FACTS: FactType[] = ['year', 'dayOfYear', 'isoWeek', 'quarter'];

const DEFAULT_BAR: NormalizedBarConfig = {
  segments: 'months',
  labels: 'quarters',
  showTodayMarker: true,
  showProgressFill: true,
};

const DEFAULT_LOCALE = 'de';

// ============================================================================
// Normalization functions
// ============================================================================

function normalizeFacts(factsConfig?: FactsConfig): FactType[] {
  if (!factsConfig || !factsConfig.show) {
    return DEFAULT_FACTS;
  }

  const show = factsConfig.show;

  // If it's already an array, validate and return
  if (Array.isArray(show)) {
    return show.filter((f) => isValidFactType(f));
  }

  // If it's a map, convert to array (order: predefined order, filter by true values)
  const allFacts: FactType[] = [
    'year',
    'dayOfYear',
    'isoWeek',
    'month',
    'quarter',
    'progress',
    'remainingDays',
  ];
  return allFacts.filter((f) => show[f] === true);
}

function isValidFactType(value: unknown): value is FactType {
  const validTypes = [
    'year',
    'dayOfYear',
    'isoWeek',
    'month',
    'quarter',
    'progress',
    'remainingDays',
  ];
  return typeof value === 'string' && validTypes.includes(value);
}

function normalizeBar(barConfig?: BarConfig): NormalizedBarConfig {
  if (!barConfig) {
    return DEFAULT_BAR;
  }

  return {
    segments: normalizeSegmentType(barConfig.segments),
    labels: normalizeLabelType(barConfig.labels),
    showTodayMarker: barConfig.show_today_marker ?? DEFAULT_BAR.showTodayMarker,
    showProgressFill: barConfig.show_progress_fill ?? DEFAULT_BAR.showProgressFill,
  };
}

function normalizeSegmentType(value?: string): SegmentType {
  const valid: SegmentType[] = ['none', 'quarters', 'months', 'weeks'];
  if (value && valid.includes(value as SegmentType)) {
    return value as SegmentType;
  }
  return DEFAULT_BAR.segments;
}

function normalizeLabelType(value?: string): LabelType {
  const valid: LabelType[] = ['none', 'quarters', 'months'];
  if (value && valid.includes(value as LabelType)) {
    return value as LabelType;
  }
  return DEFAULT_BAR.labels;
}

function normalizeMarker(marker: MarkerConfig): NormalizedMarkerConfig | null {
  // Validate required fields
  if (!marker.entity || typeof marker.entity !== 'string') {
    return null;
  }
  if (!marker.label || typeof marker.label !== 'string') {
    return null;
  }

  // Parse source
  let source: 'state' | { attribute: string } = 'state';
  if (marker.source && marker.source !== 'state') {
    const attrMatch = /^attribute:(.+)$/.exec(marker.source);
    if (attrMatch && attrMatch[1]) {
      source = { attribute: attrMatch[1] };
    }
  }

  // Normalize type
  const validTypes: MarkerType[] = ['point', 'rangeStart', 'rangeEnd', 'range'];
  const type: MarkerType = validTypes.includes(marker.type as MarkerType)
    ? (marker.type as MarkerType)
    : 'point';

  // Normalize behavior
  const validBehaviors: MarkerBehavior[] = ['fixedDate', 'annualRecurring'];
  const behavior: MarkerBehavior = validBehaviors.includes(marker.behavior as MarkerBehavior)
    ? (marker.behavior as MarkerBehavior)
    : 'fixedDate';

  return {
    entity: marker.entity,
    label: marker.label,
    source,
    type,
    behavior,
    showOnBar: marker.showOnBar ?? true,
    showInList: marker.showInList ?? false,
  };
}

function normalizeMarkers(markers?: MarkerConfig[]): NormalizedMarkerConfig[] {
  if (!markers || !Array.isArray(markers)) {
    return [];
  }

  const normalized: NormalizedMarkerConfig[] = [];
  for (const marker of markers) {
    const result = normalizeMarker(marker);
    if (result) {
      normalized.push(result);
    }
  }
  return normalized;
}

/**
 * Normalize user config to internal config format
 */
export function normalizeConfig(userConfig: UserConfig): NormalizedConfig {
  return {
    title: userConfig.title ?? null,
    locale: userConfig.locale ?? DEFAULT_LOCALE,
    facts: normalizeFacts(userConfig.facts),
    bar: normalizeBar(userConfig.bar),
    markers: normalizeMarkers(userConfig.markers),
  };
}

/**
 * Validate that a config object has required fields
 */
export function validateConfig(config: unknown): config is UserConfig {
  if (!config || typeof config !== 'object') {
    return false;
  }
  const c = config as Record<string, unknown>;
  return typeof c.type === 'string' && c.type === 'custom:year-timeline-card';
}

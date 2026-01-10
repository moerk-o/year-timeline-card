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

export interface MarkerConfig {
  entity: string;
  label?: string; // optional, falls back to entity friendly_name
  source?: string; // 'state' or 'attribute:<name>', default 'state'
  type?: MarkerType; // default 'point'
  color?: string; // CSS color for marker
  showOnBar?: boolean; // default true
  showInList?: boolean; // default true
}

export interface BarConfig {
  segments?: SegmentType;
  labels?: LabelType;
  show_today_marker?: boolean;
  show_progress_fill?: boolean;
  progress_color?: string; // CSS color for progress fill
}

export interface LayoutConfig {
  borderless?: boolean; // Remove ha-card border/shadow
  compact_facts?: boolean; // Reduce vertical spacing in facts
  facts_columns?: number; // Number of columns for facts (default 2)
}

export interface FactsConfig {
  show?: FactType[] | Record<FactType, boolean>;
}

export interface UserConfig {
  type: string;
  title?: string;
  locale?: string;
  layout?: LayoutConfig;
  facts?: FactsConfig;
  bar?: BarConfig;
  markers?: MarkerConfig[];
}

// ============================================================================
// Normalized config types (internal use)
// ============================================================================

export interface NormalizedMarkerConfig {
  entity: string;
  label: string | null; // null means use entity friendly_name
  source: 'state' | { attribute: string };
  type: MarkerType;
  color: string | null; // null = use default accent color
  showOnBar: boolean;
  showInList: boolean;
}

export interface NormalizedBarConfig {
  segments: SegmentType;
  labels: LabelType;
  showTodayMarker: boolean;
  showProgressFill: boolean;
  progressColor: string | null; // null = use default
}

export interface NormalizedLayoutConfig {
  borderless: boolean;
  compactFacts: boolean;
  factsColumns: number;
}

export interface NormalizedConfig {
  title: string | null;
  locale: string;
  layout: NormalizedLayoutConfig;
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
  progressColor: null,
};

const DEFAULT_LAYOUT: NormalizedLayoutConfig = {
  borderless: false,
  compactFacts: false,
  factsColumns: 2,
};

const DEFAULT_LOCALE = 'auto';

export const DEFAULT_MARKER = {
  type: 'point' as MarkerType,
  color: null as string | null,
  showOnBar: true,
  showInList: true,
};

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
    progressColor: barConfig.progress_color ?? DEFAULT_BAR.progressColor,
  };
}

function normalizeLayout(layoutConfig?: LayoutConfig): NormalizedLayoutConfig {
  if (!layoutConfig) {
    return DEFAULT_LAYOUT;
  }

  return {
    borderless: layoutConfig.borderless ?? DEFAULT_LAYOUT.borderless,
    compactFacts: layoutConfig.compact_facts ?? DEFAULT_LAYOUT.compactFacts,
    factsColumns: layoutConfig.facts_columns ?? DEFAULT_LAYOUT.factsColumns,
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
    : DEFAULT_MARKER.type;

  return {
    entity: marker.entity,
    label: marker.label?.trim() || null, // null = use friendly_name
    source,
    type,
    color: marker.color?.trim() || DEFAULT_MARKER.color,
    showOnBar: marker.showOnBar ?? DEFAULT_MARKER.showOnBar,
    showInList: marker.showInList ?? DEFAULT_MARKER.showInList,
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
    layout: normalizeLayout(userConfig.layout),
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

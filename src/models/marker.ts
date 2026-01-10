/**
 * Marker processing for YearTimelineCard
 * Handles parsing entity states/attributes into positioned markers
 */

import type { NormalizedMarkerConfig } from './config.js';
import { parseDate, yearProgress } from './date-utils.js';

export interface ResolvedMarker {
  label: string;
  date: Date;
  position: number; // 0-100
  type: 'point' | 'rangeStart' | 'rangeEnd' | 'range';
  color: string | null; // null = use default accent color
  showOnBar: boolean;
  showInList: boolean;
}

export interface HassEntity {
  state: string;
  attributes: Record<string, unknown> & {
    friendly_name?: string;
  };
}

export interface HassStates {
  [entityId: string]: HassEntity | undefined;
}

/**
 * Extract date value from entity based on source config
 */
function extractDateValue(entity: HassEntity, source: 'state' | { attribute: string }): unknown {
  if (source === 'state') {
    return entity.state;
  }
  return entity.attributes[source.attribute];
}

/**
 * Get the display label for a marker
 * Uses config label if provided, otherwise falls back to entity friendly_name
 */
function getMarkerLabel(config: NormalizedMarkerConfig, entity: HassEntity): string {
  if (config.label) {
    return config.label;
  }
  // Fallback to friendly_name or entity_id
  return entity.attributes.friendly_name ?? config.entity;
}

/**
 * Resolve a single marker configuration to a positioned marker
 * Returns null if the marker cannot be resolved (invalid date, out of year, etc.)
 */
export function resolveMarker(
  config: NormalizedMarkerConfig,
  hass: HassStates,
  targetYear: number
): ResolvedMarker | null {
  // Get entity
  const entity = hass[config.entity];
  if (!entity) {
    return null;
  }

  // Extract date value
  const rawValue = extractDateValue(entity, config.source);

  // Parse date
  const date = parseDate(rawValue);
  if (!date) {
    return null;
  }

  // Check if date is in target year
  if (date.getFullYear() !== targetYear) {
    // Date outside target year - ignore
    return null;
  }

  // Calculate position
  const position = yearProgress(date);

  // Get label (from config or entity friendly_name)
  const label = getMarkerLabel(config, entity);

  return {
    label,
    date,
    position,
    type: config.type,
    color: config.color,
    showOnBar: config.showOnBar,
    showInList: config.showInList,
  };
}

/**
 * Resolve all marker configurations to positioned markers
 * Filters out invalid/out-of-range markers
 */
export function resolveMarkers(
  configs: NormalizedMarkerConfig[],
  hass: HassStates,
  targetYear: number
): ResolvedMarker[] {
  const resolved: ResolvedMarker[] = [];

  for (const config of configs) {
    const marker = resolveMarker(config, hass, targetYear);
    if (marker) {
      resolved.push(marker);
    }
  }

  // Sort by position (chronological order)
  resolved.sort((a, b) => a.position - b.position);

  return resolved;
}

/**
 * Format a date for display in the marker list
 */
export function formatMarkerDate(date: Date, locale: string): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;

  if (locale === 'en') {
    return `${month}/${day}`;
  }
  // German format
  return `${day}.${month}.`;
}

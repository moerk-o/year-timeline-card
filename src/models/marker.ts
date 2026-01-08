/**
 * Marker processing for YearTimelineCard
 * Handles parsing entity states/attributes into positioned markers
 */

import type { NormalizedMarkerConfig } from './config.js';
import { parseDate, applyAnnualRecurring, yearProgress } from './date-utils.js';

export interface ResolvedMarker {
  label: string;
  date: Date;
  position: number; // 0-100
  type: 'point' | 'rangeStart' | 'rangeEnd' | 'range';
  showOnBar: boolean;
  showInList: boolean;
}

export interface HassEntity {
  state: string;
  attributes: Record<string, unknown>;
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
  let date = parseDate(rawValue);
  if (!date) {
    return null;
  }

  // Apply behavior
  if (config.behavior === 'annualRecurring') {
    date = applyAnnualRecurring(date, targetYear);
  }

  // Check if date is in target year
  if (date.getFullYear() !== targetYear) {
    // Date outside target year - ignore (could add clamp option later)
    return null;
  }

  // Calculate position
  const position = yearProgress(date);

  return {
    label: config.label,
    date,
    position,
    type: config.type,
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

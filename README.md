# Year Timeline Card

A Home Assistant Lovelace custom card that displays the progress of the current year as a horizontal timeline with configurable facts and event markers.

![Year Timeline Card](https://via.placeholder.com/600x200?text=Year+Timeline+Card)

## Features

- Horizontal progress bar showing year completion
- "Today" marker with visual indicator
- Configurable segment lines (quarters, months, weeks)
- Segment labels (quarters, months)
- Facts block with year statistics (day of year, ISO week, quarter, etc.)
- Event markers from Home Assistant entities
- Localization support (German/English)
- Responsive layout

## Installation

### Manual Installation

1. Download `year-timeline-card.js` from the [latest release](../../releases/latest)
2. Copy it to your Home Assistant `config/www/` folder
3. Add the resource in Home Assistant:
   - Go to **Settings** → **Dashboards** → **Resources**
   - Click **Add Resource**
   - URL: `/local/year-timeline-card.js`
   - Resource Type: **JavaScript Module**
4. Refresh your browser

### HACS (Coming Soon)

This card will be available in HACS in the future.

## Configuration

Add the card to your Lovelace dashboard:

```yaml
type: custom:year-timeline-card
```

### Full Configuration Example

```yaml
type: custom:year-timeline-card
title: Year Progress
locale: de

facts:
  show:
    - year
    - dayOfYear
    - isoWeek
    - quarter
    - month
    - progress
    - remainingDays

bar:
  segments: months
  labels: quarters
  show_today_marker: true
  show_progress_fill: true

markers:
  - entity: sensor.summer_solstice
    label: Summer Solstice
    source: state
    behavior: annualRecurring
    showOnBar: true
    showInList: true

  - entity: sensor.vacation_start
    label: Vacation Start
    source: state
    type: rangeStart
    behavior: fixedDate
    showOnBar: true

  - entity: sensor.vacation_end
    label: Vacation End
    source: state
    type: rangeEnd
    behavior: fixedDate
    showOnBar: true
```

### Configuration Options

#### Root Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | string | **required** | Must be `custom:year-timeline-card` |
| `title` | string | none | Optional card title |
| `locale` | string | `de` | Language for labels (`de` or `en`) |
| `facts` | object | see below | Facts block configuration |
| `bar` | object | see below | Timeline bar configuration |
| `markers` | array | `[]` | Event marker definitions |

#### Facts Configuration

```yaml
facts:
  show:
    - year          # Current year (e.g., 2026)
    - dayOfYear     # Day X / 365 (or 366)
    - isoWeek       # KW X (German) / CW X (English)
    - month         # Month name
    - quarter       # Q1-Q4
    - progress      # Percentage (e.g., 12.3%)
    - remainingDays # Days left in year
```

The `show` option accepts either:
- An array of fact types (recommended, controls order)
- An object with fact types as keys and `true`/`false` as values

**Default:** `['year', 'dayOfYear', 'isoWeek', 'quarter']`

#### Bar Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `segments` | string | `months` | Segment lines: `none`, `quarters`, `months`, `weeks` |
| `labels` | string | `quarters` | Segment labels: `none`, `quarters`, `months` |
| `show_today_marker` | boolean | `true` | Show vertical line at current position |
| `show_progress_fill` | boolean | `true` | Show filled progress area |

#### Marker Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity` | string | **required** | Entity ID containing the date |
| `label` | string | **required** | Display name for the marker |
| `source` | string | `state` | Date source: `state` or `attribute:<name>` |
| `type` | string | `point` | Marker type: `point`, `rangeStart`, `rangeEnd` |
| `behavior` | string | `fixedDate` | Date handling: `fixedDate` or `annualRecurring` |
| `showOnBar` | boolean | `true` | Show marker on the timeline bar |
| `showInList` | boolean | `false` | Show marker in the list below the bar |

##### Marker Behaviors

- **fixedDate**: The date from the entity is used as-is. If the date is not in the current year, the marker is hidden.
- **annualRecurring**: The month and day are extracted and applied to the current year. Useful for annual events like solstices, equinoxes, or holidays.

##### Supported Date Formats

The card parses dates defensively and supports:
- ISO 8601 (e.g., `2026-06-21`, `2026-06-21T12:00:00`)
- `YYYY-MM-DD`
- `DD.MM.YYYY` (German format)
- `MM/DD/YYYY` (US format)

## Examples

### Minimal Configuration

```yaml
type: custom:year-timeline-card
```

### English with All Facts

```yaml
type: custom:year-timeline-card
title: Year
locale: en
facts:
  show:
    - year
    - dayOfYear
    - isoWeek
    - month
    - quarter
    - progress
    - remainingDays
```

### Progress Bar Only

```yaml
type: custom:year-timeline-card
facts:
  show: []
bar:
  segments: quarters
  labels: none
```

### With Seasonal Markers

```yaml
type: custom:year-timeline-card
title: Seasons
markers:
  - entity: sensor.spring_equinox
    label: Spring
    behavior: annualRecurring
    showOnBar: true
    showInList: true
  - entity: sensor.summer_solstice
    label: Summer
    behavior: annualRecurring
    showOnBar: true
    showInList: true
  - entity: sensor.autumn_equinox
    label: Autumn
    behavior: annualRecurring
    showOnBar: true
    showInList: true
  - entity: sensor.winter_solstice
    label: Winter
    behavior: annualRecurring
    showOnBar: true
    showInList: true
```

## Troubleshooting

### Card not showing

1. Check browser console for errors (F12 → Console)
2. Verify the resource is loaded correctly in **Settings** → **Dashboards** → **Resources**
3. Clear browser cache and reload

### Markers not appearing

1. Verify the entity exists and has a valid date in its state or attribute
2. Check that the date is parseable (see supported formats above)
3. For `fixedDate` behavior, ensure the date is in the current year
4. For `attribute:<name>` source, verify the attribute name is correct

### Wrong week number

The card uses ISO 8601 week numbering:
- Week 1 is the week containing the first Thursday of the year
- The ISO week year may differ from the calendar year at year boundaries

## Development

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Type checking
npm run typecheck

# Linting
npm run lint
```

## License

MIT

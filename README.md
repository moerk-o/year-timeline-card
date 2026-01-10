# Year Timeline Card

A custom Lovelace card for Home Assistant that displays the progress of the current year as a horizontal timeline with configurable facts and event markers.

## Installation

1. Download `year-timeline-card.js` from the [latest release](../../releases/latest)
2. Copy the file to your `config/www/` folder
3. Add the resource in Home Assistant:
   - Go to **Settings** → **Dashboards** → **Resources**
   - Click **Add Resource**
   - URL: `/local/year-timeline-card.js`
   - Resource Type: **JavaScript Module**
4. Refresh your browser

## Configuration

Add the card via the UI editor or manually in YAML. The card includes a **full visual editor** with:
- Drag & drop reordering of facts and markers
- Color picker for progress fill and individual markers
- YAML editor toggle for advanced marker configuration

### Card Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | string | **required** | `custom:year-timeline-card` |
| title | string | | Optional card title |
| locale | string | `auto` | Language: `auto`, `de`, or `en`. Auto-detects from Home Assistant settings |
| layout | object | | Layout customization options |
| facts | object | | Facts block configuration |
| bar | object | | Timeline bar configuration |
| markers | list | `[]` | Event marker definitions |

### Layout Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| borderless | boolean | `false` | Remove card border and shadow for seamless integration |
| compact_facts | boolean | `false` | Reduce vertical spacing in facts section |
| facts_columns | number | `2` | Number of columns for facts display (1-4) |

### Facts Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| show | list | `['year', 'dayOfYear', 'isoWeek', 'quarter']` | Facts to display, in order |

#### Available Facts

| Fact | Description | Example |
|------|-------------|---------|
| `year` | Current year | 2026 |
| `dayOfYear` | Day of year with total | Tag 156 / 365 |
| `isoWeek` | ISO week number | KW 23 |
| `month` | Current month name | Juni |
| `quarter` | Current quarter | Q2 |
| `progress` | Year progress percentage | 42.7% |
| `remainingDays` | Days remaining in year | 209 Tage |

### Bar Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| segments | string | `months` | Segment lines: `none`, `quarters`, `months`, `weeks` |
| labels | string | `quarters` | Segment labels: `none`, `quarters`, `months` |
| show_today_marker | boolean | `true` | Show vertical "today" indicator |
| show_progress_fill | boolean | `true` | Show filled progress area |
| progress_color | string | | Custom CSS color for progress fill (e.g., `#4CAF50`, `rgba(255,0,0,0.5)`) |

### Marker Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | string | **required** | Entity ID containing the date |
| label | string | | Display name (falls back to entity friendly_name) |
| source | string | `state` | Date source: `state` or `attribute:<name>` |
| type | string | `point` | Marker type: `point`, `rangeStart`, `rangeEnd` |
| color | string | | Custom CSS color for this marker |
| showOnBar | boolean | `true` | Show marker on the timeline bar |
| showInList | boolean | `true` | Show marker in the list below the bar |

#### Marker Types

| Type | Description |
|------|-------------|
| `point` | Single point marker (default) |
| `rangeStart` | Start of a date range |
| `rangeEnd` | End of a date range |

#### Supported Date Formats

The card parses dates defensively and supports:
- ISO 8601: `2026-06-21`, `2026-06-21T12:00:00`
- German format: `21.06.2026`
- US format: `06/21/2026`

## Examples

### Minimal

```yaml
type: custom:year-timeline-card
```

### With Title and English Locale

```yaml
type: custom:year-timeline-card
title: Year Progress
locale: en
```

### All Facts Displayed

```yaml
type: custom:year-timeline-card
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

### Custom Layout

```yaml
type: custom:year-timeline-card
layout:
  borderless: true
  compact_facts: true
  facts_columns: 4
facts:
  show:
    - progress
    - dayOfYear
    - remainingDays
    - isoWeek
```

### Bar Only (No Facts)

```yaml
type: custom:year-timeline-card
facts:
  show: []
bar:
  segments: quarters
  labels: none
```

### Custom Progress Color

```yaml
type: custom:year-timeline-card
bar:
  progress_color: "#4CAF50"
```

### Colored Markers

```yaml
type: custom:year-timeline-card
title: Important Dates
markers:
  - entity: sensor.birthday
    label: Birthday
    color: "#E91E63"
    showOnBar: true
    showInList: true
  - entity: sensor.anniversary
    label: Anniversary
    color: "#9C27B0"
    showOnBar: true
    showInList: true
```

### Date Range (Vacation)

```yaml
type: custom:year-timeline-card
title: Vacation Planner
markers:
  - entity: input_datetime.vacation_start
    label: Vacation Start
    type: rangeStart
    color: "#2196F3"
    showOnBar: true
  - entity: input_datetime.vacation_end
    label: Vacation End
    type: rangeEnd
    color: "#2196F3"
    showOnBar: true
```

### Seasonal Markers

```yaml
type: custom:year-timeline-card
title: Seasons
bar:
  segments: quarters
  labels: months
markers:
  - entity: sensor.spring_equinox
    label: Spring Equinox
    color: "#8BC34A"
    showOnBar: true
    showInList: true
  - entity: sensor.summer_solstice
    label: Summer Solstice
    color: "#FF9800"
    showOnBar: true
    showInList: true
  - entity: sensor.autumn_equinox
    label: Autumn Equinox
    color: "#795548"
    showOnBar: true
    showInList: true
  - entity: sensor.winter_solstice
    label: Winter Solstice
    color: "#03A9F4"
    showOnBar: true
    showInList: true
```

### Full Configuration

```yaml
type: custom:year-timeline-card
title: Year Overview
locale: de
layout:
  borderless: false
  compact_facts: false
  facts_columns: 2
facts:
  show:
    - year
    - dayOfYear
    - isoWeek
    - quarter
    - progress
bar:
  segments: months
  labels: quarters
  show_today_marker: true
  show_progress_fill: true
  progress_color: "#673AB7"
markers:
  - entity: sensor.next_holiday
    label: Holiday
    color: "#F44336"
    showOnBar: true
    showInList: true
```

## Theme Variables

The card respects Home Assistant theme variables:

| Variable | Usage |
|----------|-------|
| `--primary-color` | Default accent color for markers and progress |
| `--primary-text-color` | Text color |
| `--secondary-text-color` | Muted text (labels) |
| `--card-background-color` | Card background |
| `--divider-color` | Segment lines |

## Troubleshooting

### Card not showing

1. Check browser console for errors (F12 → Console)
2. Verify the resource is loaded in **Settings** → **Dashboards** → **Resources**
3. Clear browser cache and reload

### Markers not appearing

1. Verify the entity exists and has a valid date value
2. Check that the date format is supported (see above)
3. For `attribute:<name>` source, verify the attribute name

### Wrong week number

The card uses ISO 8601 week numbering:
- Week 1 is the week containing the first Thursday of the year
- The ISO week year may differ from the calendar year at year boundaries

## License

[MIT](LICENSE)

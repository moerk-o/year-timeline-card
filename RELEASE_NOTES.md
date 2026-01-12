## Added

- Native card-mod support via `card_mod` configuration option
- Styles can now be applied directly without wrapping in mod-card

## Example

```yaml
type: custom:year-timeline-card
card_mod:
  style: |
    ha-card {
      background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
      backdrop-filter: blur(20px);
      border-radius: 12px;
    }
```

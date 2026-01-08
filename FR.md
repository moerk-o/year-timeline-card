# Feature Requests

## FR-1: Attribute-basierte Marker via YAML

### Beschreibung
Ermögliche es Power-Usern, Datumswerte nicht nur aus dem `state` einer Entität zu lesen, sondern auch aus Attributen. Diese Funktion soll nur via YAML-Konfiguration verfügbar sein, nicht im visuellen Editor (um die UI einfach zu halten).

### Anwendungsfall
Manche Entitäten haben relevante Datumswerte in Attributen statt im State, z.B.:
- `sensor.washing_machine` mit Attribut `next_run: "2026-03-15"`
- `calendar.birthdays` mit Attribut `start_time: "2026-06-21T00:00:00"`

### YAML-Syntax (bereits definiert)
```yaml
markers:
  - entity: sensor.washing_machine
    source: "attribute:next_run"
    label: "Nächster Waschgang"
```

### Bestehender Code

**config.ts** - Bereits implementiert:
- `MarkerConfig.source?: string` - Akzeptiert `'state'` oder `'attribute:<name>'`
- `NormalizedMarkerConfig.source: 'state' | { attribute: string }` - Normalisierte Form
- `normalizeMarker()` - Parst `source` mit Regex `/^attribute:(.+)$/`

**marker.ts** - Bereits implementiert:
- `extractDateValue()` - Liest Wert aus `entity.state` oder `entity.attributes[source.attribute]`

### Offene Punkte
1. **Testen**: Die Funktionalität wurde noch nicht mit echten Attribut-basierten Entitäten getestet
2. **Entity-Filter erweitern?**: Aktuell zeigt der Editor nur `device_class: date/timestamp` + `input_datetime`. Für Attribut-Nutzung müsste man ggf. alle Entitäten mit Datums-Attributen einbeziehen - aber das würde den Filter sehr breit machen
3. **Dokumentation**: README sollte die `source: "attribute:..."` Syntax dokumentieren, sobald getestet

### Status
- Backend-Logik: Vorhanden
- Editor-UI: Bewusst nicht implementiert (Komplexität)
- Tests: Ausstehend
- Dokumentation: Ausstehend

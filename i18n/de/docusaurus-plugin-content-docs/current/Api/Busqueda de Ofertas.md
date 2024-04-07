---
sidebar_position: 1
---

# Remote-Job-Suche API

Bietet eine Liste von Fernarbeitsstellenangeboten gemäß verschiedenen Suchkriterien an.

## GET /public/remote-jobs

Ruft eine paginierte Liste von Remote-Jobs basierend auf den bereitgestellten Suchparametern ab.

### Query-Parameter:

- `page` (Integer): Die Seitennummer der abzurufenden Ergebnisse.
- `pageSize` (Integer): Die Anzahl der Jobangebote pro Seite.
- `langCode` (String): Der Sprachcode, um die Jobangebote zu filtern.
- `user_id` (optional, String): Die Benutzerkennung, um die Suche zu personalisieren.
- `searchString` (optional, String): Ein Schlüsselwort, um innerhalb der Jobangebote zu suchen.
- `tagsFilter` (optional, String): Spezifische Tags, um die Jobangebote zu filtern.
- `checkboxFilters` (optional, String): Zusätzliche Filter, die als Checkboxen angegeben sind.
- `categoryFilter` (optional, String): Die Kategorie, um die Jobangebote zu filtern.
- `minSalary` (optional, String): Das Mindestgehalt, um die Jobangebote zu filtern.

### Beispielanfrage:

```http
GET https://trabajos-online-backend-prod.info1780.workers.dev/api/public/remote-jobs?page=0&pageSize=20&langCode=de&searchString=java
```

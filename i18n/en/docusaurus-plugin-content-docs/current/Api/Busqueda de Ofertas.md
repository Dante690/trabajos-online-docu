---
sidebar_position: 1
---

# Remote Job Search API

Provides a list of remote job offers according to various search criteria.

## GET /public/remote-jobs

Retrieves a paginated list of remote jobs based on the provided search parameters.

### Query Parameters:

- `page` (integer): The page number of the results to retrieve.
- `pageSize` (integer): The number of job offers per page.
- `langCode` (string): The language code to filter the job offers.
- `user_id` (optional, string): The user identifier to customize the search.
- `searchString` (optional, string): A keyword to search within the job offers.
- `tagsFilter` (optional, string): Specific tags to filter the job offers.
- `checkboxFilters` (optional, string): Additional filters specified as checkboxes.
- `categoryFilter` (optional, string): The category to filter the job offers.
- `minSalary` (optional, string): The minimum salary to filter the job offers.

### Example Request:

```http
GET https://trabajos-online-backend-prod.info1780.workers.dev/api/public/remote-jobs?page=0&pageSize=20&langCode=en&searchString=java
```

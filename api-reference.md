# API Reference

The Revoya API allows you to programmatically interact with your compliance data.

## Authentication

All API requests require an API key. You can generate one in your dashboard under **Settings → API Keys**.

```bash
curl https://api.revoya.ai/v1/scans \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Base URL

```
https://api.revoya.ai/v1
```

## Endpoints

### Scans

#### List Scans

```http
GET /v1/scans
```

Returns a list of compliance scans for your organization.

**Response:**
```json
{
  "scans": [
    {
      "id": "scan_123",
      "status": "completed",
      "framework": "SOC2",
      "violations_found": 3,
      "created_at": "2025-01-15T10:30:00Z"
    }
  ]
}
```

#### Trigger Scan

```http
POST /v1/scans
```

Triggers a new compliance scan.

**Request Body:**
```json
{
  "framework": "SOC2",
  "target": "github:org/repo"
}
```

### Violations

#### List Violations

```http
GET /v1/violations
```

Returns detected compliance violations.

**Query Parameters:**
- `severity` - Filter by severity (critical, high, medium, low)
- `status` - Filter by status (open, fixed, ignored)
- `framework` - Filter by compliance framework

### Policies

#### List Policies

```http
GET /v1/policies
```

Returns your organization's compliance policies.

## Rate Limits

- **Free tier**: 100 requests/hour
- **Pro tier**: 1,000 requests/hour
- **Enterprise**: Custom limits

## Support

For API support, contact api-support@revoya.ai

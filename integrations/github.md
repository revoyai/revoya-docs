# GitHub Integration

Connect Revoya to your GitHub repositories for automated compliance scanning.

## Setup

1. Navigate to **Settings → Integrations** in your Revoya dashboard
2. Click **Connect GitHub**
3. Authorize Revoya to access your repositories
4. Select which repositories to monitor

## Features

### Automated Scanning

Revoya automatically scans:
- Code commits
- Pull requests
- Repository configurations
- Branch protection rules
- Secrets management

### Pull Request Checks

Enable PR checks to block non-compliant code from being merged:

1. Go to **Settings → Integrations → GitHub**
2. Enable "Block non-compliant PRs"
3. Select your compliance threshold (Critical only, High+, etc.)

### Automated Remediation

Revoya can automatically create pull requests to fix compliance violations:

```yaml
# .revoya.yml
auto-fix:
  enabled: true
  create-prs: true
  severity: high
```

## Permissions Required

Revoya requires the following GitHub permissions:

- **Read access**: Repository contents, pull requests
- **Write access**: Checks (for PR status updates)
- **Optional**: Pull requests (for automated fixes)

## Webhooks

Revoya uses GitHub webhooks to receive real-time updates about:
- Push events
- Pull request events
- Repository changes

## Troubleshooting

### Scans not running

1. Verify webhook is active in your repository settings
2. Check that Revoya has access to the repository
3. Review webhook delivery history for errors

### PR checks failing

1. Check the Revoya dashboard for violation details
2. Review your policy configuration
3. Contact support if you believe it's a false positive

## Support

For GitHub integration support: github-support@revoya.ai

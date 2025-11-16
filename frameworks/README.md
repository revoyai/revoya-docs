# Compliance Frameworks

Revoya supports multiple compliance frameworks out of the box, with automated mapping between your infrastructure and framework requirements.

## Supported Frameworks

### [SOC 2 Type II](./soc2.md)

System and Organization Controls 2 - The gold standard for SaaS security and compliance.

**Controls**: 53 automated controls
**Use cases**: Enterprise sales, security questionnaires
**Industries**: Technology, SaaS, financial services

### [ISO 27001](./iso27001.md)

International standard for information security management systems.

**Controls**: 114 controls across 14 domains
**Use cases**: International compliance, enterprise clients
**Industries**: All industries, especially international operations

### [HIPAA](./hipaa.md)

Health Insurance Portability and Accountability Act - Required for healthcare data.

**Controls**: 18 HIPAA Security Rule requirements
**Use cases**: Healthcare applications, PHI handling
**Industries**: Healthcare, health tech, medical devices

### [PCI DSS](./pcidss.md)

Payment Card Industry Data Security Standard - Required for handling payment card data.

**Controls**: 12 primary requirements, 78 sub-requirements
**Use cases**: E-commerce, payment processing
**Industries**: Retail, e-commerce, fintech

## Custom Frameworks

Create your own compliance frameworks based on:
- Internal security policies
- Industry-specific regulations
- Customer requirements
- Multi-framework combinations

[Learn more about custom frameworks →](./custom.md)

## Framework Mapping

Revoya automatically maps your infrastructure to framework requirements:

```
Your Code/Infrastructure → Revoya Scanner → Framework Controls → Compliance Status
```

## Evidence Collection

All framework compliance includes automatic evidence collection for audits:

- Screenshots of configurations
- Policy documents
- Scan results and remediation history
- Access logs and audit trails

## Getting Started

1. Select your framework in **Settings → Frameworks**
2. Review the mapped controls
3. Run your first scan
4. Address any violations
5. Generate compliance reports

## Need Help?

- Framework selection guidance: compliance@revoya.ai
- Custom framework setup: enterprise@revoya.ai

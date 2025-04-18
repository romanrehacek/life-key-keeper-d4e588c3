
export interface DocumentTemplate {
  id: string;
  title: string;
  description: string;
  content: string;
  category: 'household' | 'finance' | 'crypto' | 'family' | 'instructions';
}

export const documentTemplates: DocumentTemplate[] = [
  {
    id: 'home-info',
    title: 'Home Information',
    description: 'Basic template for storing home-related information',
    category: 'household',
    content: `# Home Information

## Security System
[Add your security system details here]

## Heating System
[Add heating system details here]

## Electrical Box
[Add information about electrical systems]

## Smart Devices
[List smart devices and access information]
`
  },
  {
    id: 'home-maintenance',
    title: 'Home Maintenance Schedule',
    description: 'Template for tracking home maintenance tasks',
    category: 'household',
    content: `# Home Maintenance Schedule

## Spring Maintenance
- [ ] Clean gutters
- [ ] Check AC system
- [ ] Inspect roof

## Summer Maintenance
- [ ] Service lawn equipment
- [ ] Check irrigation system
- [ ] Clean outdoor spaces

## Fall Maintenance
- [ ] Clean gutters again
- [ ] Check heating system
- [ ] Winterize irrigation system

## Winter Maintenance
- [ ] Check insulation
- [ ] Monitor heating system
- [ ] Check for ice dams
`
  },
  {
    id: 'finance-budget',
    title: 'Monthly Budget',
    description: 'Template for creating a monthly budget',
    category: 'finance',
    content: `# Monthly Budget Template

## Income
- Salary: $[Amount]
- Other Income: $[Amount]
- Total: $[Total]

## Fixed Expenses
- Rent/Mortgage: $[Amount]
- Utilities: $[Amount]
- Insurance: $[Amount]
- Loan Payments: $[Amount]
- Total: $[Total]

## Variable Expenses
- Groceries: $[Amount]
- Dining Out: $[Amount]
- Entertainment: $[Amount]
- Transportation: $[Amount]
- Total: $[Total]

## Savings
- Emergency Fund: $[Amount]
- Retirement: $[Amount]
- Other Goals: $[Amount]
- Total: $[Total]
`
  },
  {
    id: 'crypto-portfolio',
    title: 'Crypto Portfolio',
    description: 'Template for tracking cryptocurrency investments',
    category: 'crypto',
    content: `# Cryptocurrency Portfolio

## Wallet Information
- Hardware Wallet: [Type]
- Software Wallets: [List]
- Recovery Phrases: [Stored Location]

## Holdings
| Cryptocurrency | Amount | Purchase Price | Current Price | Storage Location |
|----------------|--------|---------------|---------------|-----------------|
| Bitcoin        |        |               |               |                 |
| Ethereum       |        |               |               |                 |
| [Other]        |        |               |               |                 |

## Exchange Accounts
- [Exchange Name]: [Login Information Storage]
- [Exchange Name]: [Login Information Storage]
`
  },
  {
    id: 'family-contacts',
    title: 'Family Contacts',
    description: 'Template for important family contacts',
    category: 'family',
    content: `# Important Family Contacts

## Immediate Family
- [Name]: [Phone], [Email], [Address]
- [Name]: [Phone], [Email], [Address]

## Extended Family
- [Name]: [Phone], [Email], [Address]
- [Name]: [Phone], [Email], [Address]

## Emergency Contacts
- [Name]: [Phone], [Relationship]
- [Name]: [Phone], [Relationship]
`
  },
  {
    id: 'emergency-instructions',
    title: 'Emergency Instructions',
    description: 'Template for emergency instructions',
    category: 'instructions',
    content: `# Emergency Instructions

## Medical Emergency
1. Call emergency services: [Local Emergency Number]
2. Contact family doctor: [Name] at [Phone]
3. Notify family members: [Names and Numbers]
4. Medical information:
   - Insurance: [Policy Number]
   - Allergies: [List]
   - Medications: [List]

## Home Emergency
1. Shut off main water valve location: [Location]
2. Electrical panel location: [Location]
3. Gas shut-off location: [Location]
4. Emergency contact: [Name] at [Phone]
`
  }
];

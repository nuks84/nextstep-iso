import { Check, ClipboardList, FileText, MessageSquare, BadgeCheck, RefreshCw } from 'lucide-react'

export const checklistGroups = [
  {
    category: 'Leadership & Commitment',
    items: [
      'Top management understands its role in the certification process',
      'A management representative ("champion") has been assigned',
      'Certification objectives and a realistic timeline are agreed and documented',
    ],
  },
  {
    category: 'Documentation',
    items: [
      'A policy statement exists and is communicated to staff',
      'Core business processes are mapped and documented',
      'Required procedures are drafted (document control, nonconformance, corrective action)',
    ],
  },
  {
    category: 'People & Training',
    items: [
      'Staff are aware of the requirements relevant to their role',
      'Roles and responsibilities are clearly defined and assigned',
    ],
  },
  {
    category: 'Operational Readiness',
    items: [
      'Risk assessments have been completed for key processes',
      'Legal and regulatory requirements have been identified',
      'Records are being kept that show the system is actually in use',
    ],
  },
  {
    category: 'Internal Audit & Review',
    items: [
      'At least one internal audit has been completed against the standard',
      'Nonconformances from the internal audit have corrective actions assigned',
      'A management review meeting has been held and minuted',
    ],
  },
  {
    category: 'Certification Audit Prep',
    items: [
      'Stage 1 (documentation review) gaps have been closed',
      'Staff know what to expect and how to answer auditor questions',
      'A mock or pre-audit has been considered',
    ],
  },
]

export const standardsGuide = [
  { name: 'ISO 9001', focus: 'Quality Management', color: '#0d98cd', bestFor: 'Any business that needs to win tenders or prove consistent quality to customers. The most widely adopted ISO standard in Australia.' },
  { name: 'ISO 27001', focus: 'Information Security', color: '#7c3aed', bestFor: 'Tech companies, SaaS providers, and any business handling sensitive client or customer data.' },
  { name: 'ISO 22000', focus: 'Food Safety', color: '#e11d48', bestFor: 'Food manufacturers, processors, and businesses across the food supply chain.' },
  { name: 'ISO 45001', focus: 'Occupational Health & Safety', color: '#ea580c', bestFor: 'Construction, manufacturing, and other industries with physical workplace hazards.' },
  { name: 'ISO 14001', focus: 'Environmental Management', color: '#16a34a', bestFor: 'Businesses with environmental commitments, or facing client and tender requirements around sustainability.' },
]

export const auditSteps = [
  { icon: ClipboardList, title: 'Planning', desc: 'An audit scope, schedule, and checklist are prepared against the relevant standard\'s clauses and your own procedures.' },
  { icon: MessageSquare, title: 'Opening Meeting', desc: 'The auditor confirms scope, timing, and people involved with the process owner before any evidence is reviewed.' },
  { icon: FileText, title: 'Evidence Gathering', desc: 'The auditor reviews records, observes work being done, and talks to staff to check the process matches what\'s documented.' },
  { icon: Check, title: 'Findings', desc: 'Any gaps are recorded as observations or nonconformances, each with a reference to the specific requirement not being met.' },
  { icon: BadgeCheck, title: 'Closing Meeting', desc: 'Findings are presented back to the team on the day — no surprises later — along with an overall assessment.' },
  { icon: RefreshCw, title: 'Corrective Action', desc: 'Process owners investigate the root cause of each finding and implement a fix, which is verified at the next audit.' },
]

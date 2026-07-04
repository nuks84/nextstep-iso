import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Lock, ChefHat, HardHat, Leaf, FileSearch, Shield, CheckCircle } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Button } from '../components/Button'
import CallToAction from '../sections/CallToAction'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: BarChart3,
    title: 'ISO 9001',
    subtitle: 'Quality Management System',
    href: '/iso-9001',
    color: '#0d98cd',
    badge: 'Most Popular',
    desc: "ISO 9001 is Australia's most widely recognised quality standard and a cornerstone requirement for government, construction, and enterprise tenders.",
    includes: [
      'Full gap analysis against ISO 9001:2015',
      'Custom quality policy and procedure documentation',
      'Process mapping and risk assessment',
      'Staff training and system implementation',
      'Internal audit preparation',
      'External certification audit support',
    ],
  },
  {
    icon: Lock,
    title: 'ISO 27001',
    subtitle: 'Information Security Management',
    href: '/iso-27001',
    color: '#7c3aed',
    badge: 'Growing Fast',
    desc: 'As data breaches and cyber incidents increase, ISO 27001 is rapidly becoming a requirement for businesses handling client or government data.',
    includes: [
      'Information asset register and risk assessment',
      'Security policy and control documentation',
      'Statement of Applicability (SoA)',
      'ISMS implementation and training',
      'Vulnerability and incident management procedures',
      'Certification audit representation',
    ],
  },
  {
    icon: ChefHat,
    title: 'ISO 22000',
    subtitle: 'Food Safety Management System',
    href: '/iso-22000',
    color: '#e11d48',
    badge: 'Retail & Export',
    desc: 'ISO 22000 is increasingly required by major retailers, food manufacturers, and export markets — and forms the foundation for GFSI-recognised FSSC 22000 certification.',
    includes: [
      'Food safety hazard analysis (HACCP-based)',
      'Prerequisite programs and operational controls',
      'Food safety policy and documentation',
      'Staff training and system implementation',
      'Internal audit preparation',
      'External certification audit support',
    ],
  },
  {
    icon: HardHat,
    title: 'ISO 45001',
    subtitle: 'Occupational Health & Safety',
    href: '/services',
    color: '#ea580c',
    badge: 'High Demand',
    desc: 'ISO 45001 demonstrates your commitment to worker safety and satisfies OH&S obligations across construction, manufacturing, and government contracts.',
    includes: [
      'OH&S legal register and compliance review',
      'Hazard identification and risk controls',
      'Safe Work Method Statements (SWMS)',
      'Incident reporting and investigation procedures',
      'Emergency management planning',
      'Certification audit support',
    ],
  },
  {
    icon: Leaf,
    title: 'ISO 14001',
    subtitle: 'Environmental Management System',
    href: '/services',
    color: '#16a34a',
    badge: 'ESG Focus',
    desc: 'Demonstrate your environmental credentials, meet regulatory obligations, and win sustainability-scored tenders in government and enterprise.',
    includes: [
      'Environmental aspect and impact assessment',
      'Legal and other requirements register',
      'Environmental objectives and targets',
      'Emergency preparedness for environmental incidents',
      'Monitoring, measurement and analysis',
      'Certification audit support',
    ],
  },
  {
    icon: FileSearch,
    title: 'Internal Audits',
    subtitle: 'Ongoing Compliance & Maintenance',
    href: '/internal-audits',
    color: '#0891b2',
    badge: 'Ongoing',
    desc: 'Keep your certification current between surveillance audits with independent internal audits, management reviews, and corrective action support.',
    includes: [
      'Annual internal audit against your standard',
      'Management review facilitation',
      'Non-conformance and corrective action management',
      'Surveillance audit preparation',
      'Document control updates',
      'Ad-hoc compliance advice',
    ],
  },
  {
    icon: Shield,
    title: 'Integrated Management System',
    subtitle: 'IMS — Multiple Standards Combined',
    href: '/services',
    color: '#6366f1',
    badge: 'Best Value',
    desc: 'Combine ISO 9001, 45001, and 14001 into a single, streamlined management system. One system, one audit cycle, significantly reduced overhead.',
    includes: [
      'Integrated policy and procedure framework',
      'Single system covering all three standards',
      'Combined internal audit program',
      'Streamlined documentation structure',
      'Joint certification audit coordination',
      'Significant cost saving vs. separate certifications',
    ],
  },
]

function ServiceRow({ service, idx }) {
  const ref = useReveal()
  const { icon: Icon, title, subtitle, href, color, badge, desc, includes } = service
  const isEven = idx % 2 === 0

  return (
    <div ref={ref} className="reveal border-b border-gray-100 last:border-0 py-14">
      <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        <div className={!isEven ? 'lg:order-2' : ''}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}14` }}>
              <Icon className="w-5 h-5" style={{ color }} />
            </div>
            <div>
              <h3 className="text-[1.2rem] font-extrabold text-gray-900">{title}</h3>
              <p className="text-[0.8rem] text-gray-400">{subtitle}</p>
            </div>
            <span
              className="ml-auto text-[0.68rem] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full shrink-0"
              style={{ background: `${color}14`, color }}
            >
              {badge}
            </span>
          </div>
          <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-6">{desc}</p>
          <Link
            to={href}
            className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold hover:gap-2.5 transition-all"
            style={{ color }}
          >
            Learn more about {title} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className={`bg-gray-50 rounded-2xl p-6 border border-gray-100 ${!isEven ? 'lg:order-1' : ''}`}>
          <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-gray-400 mb-4">What's included</p>
          <ul className="flex flex-col gap-2.5">
            {includes.map(item => (
              <li key={item} className="flex items-start gap-2.5 text-[0.875rem] text-gray-700">
                <CheckCircle className="w-4 h-4 text-[#0d98cd] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        tag="Our Services"
        title="ISO certification from gap to certificate"
        subtitle="Every engagement is fixed-price, fully managed, and backed by our first-audit pass guarantee. Choose the standard — we handle everything else."
        cta={<Button to="/contact" arrow size="lg">Get a Free Quote</Button>}
      />

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {services.map((s, i) => <ServiceRow key={s.title} service={s} idx={i} />)}
        </div>
      </section>

      <CallToAction />
    </>
  )
}

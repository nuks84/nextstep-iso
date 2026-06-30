import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Lock, HardHat, Leaf, BarChart3, FileSearch } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: BarChart3,
    title: 'ISO 9001',
    subtitle: 'Quality Management',
    desc: "Australia's most recognised standard. Demonstrate consistent quality to customers, win more tenders, and build a foundation for operational excellence.",
    href: '/iso-9001',
    badge: 'Most Popular',
    color: '#0d98cd',
  },
  {
    icon: Lock,
    title: 'ISO 27001',
    subtitle: 'Information Security',
    desc: 'Protect client data, satisfy enterprise and government cyber requirements, and open the door to contracts that demand information security accreditation.',
    href: '/iso-27001',
    badge: 'Fast Growing',
    color: '#7c3aed',
  },
  {
    icon: HardHat,
    title: 'ISO 45001',
    subtitle: 'WHS Management',
    desc: 'Meet workplace health and safety obligations, reduce incidents, demonstrate duty of care, and satisfy contract WHS requirements across Australian industry.',
    href: '/services',
    badge: 'High Demand',
    color: '#ea580c',
  },
  {
    icon: Leaf,
    title: 'ISO 14001',
    subtitle: 'Environmental Management',
    desc: 'Show your environmental commitment, satisfy government sustainability mandates, and win tenders that score on ESG credentials.',
    href: '/services',
    badge: 'Growing Fast',
    color: '#16a34a',
  },
  {
    icon: FileSearch,
    title: 'Internal Audits',
    subtitle: 'Ongoing Compliance',
    desc: 'Maintain your certification confidently between surveillance audits. We conduct independent internal audits and management reviews on your behalf.',
    href: '/internal-audits',
    badge: 'Ongoing Support',
    color: '#0891b2',
  },
  {
    icon: Shield,
    title: 'Integrated Systems',
    subtitle: 'IMS — Multiple Standards',
    desc: 'Combine ISO 9001, 45001, and 14001 into a single, efficient management system. Reduce duplication and deliver a powerful signal to clients and regulators.',
    href: '/services',
    badge: 'Best Value',
    color: '#6366f1',
  },
]

function ServiceCard({ service, delay }) {
  const ref = useReveal()
  const { icon: Icon, title, subtitle, desc, href, badge, color } = service

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} group relative bg-white rounded-2xl border border-gray-200 p-7 hover:border-[#0d98cd]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200"
        style={{ background: `${color}14` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>

      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <h3 className="text-[1.05rem] font-bold text-gray-900">{title}</h3>
          <p className="text-[0.8rem] font-medium text-gray-500">{subtitle}</p>
        </div>
        <span className="shrink-0 text-[0.68rem] font-semibold uppercase tracking-wide bg-gray-100 text-gray-500 rounded-full px-2.5 py-1">
          {badge}
        </span>
      </div>

      <p className="text-[0.875rem] text-gray-500 leading-relaxed mb-5 flex-1">{desc}</p>

      <Link
        to={href}
        className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-[#0d98cd] hover:gap-2.5 transition-all"
      >
        Learn more <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  )
}

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          tag="Our Services"
          title="Everything you need to get certified"
          subtitle="From initial gap analysis to final certification — and everything in between. We handle the complexity so you can focus on your business."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

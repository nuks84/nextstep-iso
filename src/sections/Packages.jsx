import { Link } from 'react-router-dom'
import { Check, Rocket, TrendingUp, Handshake } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { useReveal } from '../hooks/useReveal'

const packages = [
  {
    name: 'Launch',
    icon: Rocket,
    pitch: 'Get Certified',
    audience: 'For businesses pursuing their first ISO certification',
    price: '3,500',
    custom: false,
    desc: 'Everything you need to achieve certification against a single ISO standard, delivered through our proven fixed-price implementation approach.',
    features: [
      'ISO 9001 or ISO 22000 implementation',
      'Gap analysis and implementation roadmap',
      'Process mapping and documentation guidance',
      'Internal audit',
      'Management review support',
      'Certification audit preparation',
      'Email and phone support throughout your project',
    ],
    popular: false,
  },
  {
    name: 'Scale',
    icon: TrendingUp,
    pitch: 'Build Better Systems',
    audience: 'For growing businesses with multiple standards or more complex operations',
    price: '7,500',
    custom: false,
    desc: 'Build an integrated management system that grows with your business while reducing duplicated processes.',
    features: [
      'Multiple ISO standards (Integrated Management System)',
      'End-to-end implementation',
      'Risk assessments and process mapping',
      'Internal audits',
      'Management review support',
      'Staff training and awareness',
      'Certification audit preparation',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Partner',
    icon: Handshake,
    pitch: 'Stay Compliant & Keep Improving',
    audience: 'Your outsourced compliance and continual improvement team',
    price: null,
    custom: true,
    desc: 'Ongoing support to keep your systems effective, compliant and continuously improving long after certification.',
    features: [
      'Scheduled internal audits',
      'Management reviews',
      'Document updates',
      'Corrective action support',
      'Compliance monitoring',
      'Employee training',
      'Certification surveillance audit support',
      'Dedicated compliance advisor',
    ],
    popular: false,
  },
]

function PackageCard({ pkg, idx }) {
  const ref = useReveal()
  const { name, icon: Icon, pitch, audience, price, custom, desc, features, popular } = pkg

  return (
    <div ref={ref} className={`reveal reveal-delay-${idx + 1} relative`}>
      <div
        className={`h-full flex flex-col rounded-2xl p-8 transition-all duration-200 hover:-translate-y-0.5 ${
          popular
            ? 'bg-[#0f0f0f] border border-[#0f0f0f] shadow-xl'
            : 'bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md'
        }`}
      >
        {popular && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0d98cd] text-white text-[0.7rem] font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 shadow-lg shadow-[#0d98cd]/30">
            Client Favorite
          </span>
        )}

        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
          popular ? 'bg-white/10' : 'bg-[#0d98cd]/[0.08]'
        }`}>
          <Icon className={`w-4.5 h-4.5 ${popular ? 'text-[#0d98cd]' : 'text-[#0d98cd]'}`} />
        </div>

        <p className={`text-[0.73rem] font-semibold uppercase tracking-[0.1em] mb-2 ${popular ? 'text-[#0d98cd]' : 'text-[#0d98cd]'}`}>
          {pitch}
        </p>
        <h3 className={`text-[1.15rem] font-bold mb-1 ${popular ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </h3>
        <p className={`text-[0.85rem] leading-snug mb-6 ${popular ? 'text-white/45' : 'text-gray-400'}`}>
          {audience}
        </p>

        <div className="mb-6">
          {custom ? (
            <span className={`text-[2.4rem] font-extrabold tracking-[-0.02em] ${popular ? 'text-white' : 'text-gray-900'}`}>
              Custom Pricing
            </span>
          ) : (
            <>
              <span className={`text-[0.9rem] font-medium ${popular ? 'text-white/50' : 'text-gray-400'}`}>From </span>
              <span className={`text-[2.4rem] font-extrabold tracking-[-0.02em] ${popular ? 'text-white' : 'text-gray-900'}`}>
                ${price}
              </span>
            </>
          )}
        </div>

        <p className={`text-[0.875rem] leading-relaxed mb-6 ${popular ? 'text-white/50' : 'text-gray-500'}`}>
          {desc}
        </p>

        <p className={`text-[0.72rem] font-semibold uppercase tracking-widest mb-3 ${popular ? 'text-white/30' : 'text-gray-400'}`}>
          Includes
        </p>
        <ul className="flex flex-col gap-3 mb-8">
          {features.map(f => (
            <li key={f} className="flex items-start gap-2.5">
              <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#0d98cd]" />
              <span className={`text-[0.85rem] leading-snug ${popular ? 'text-white/70' : 'text-gray-600'}`}>
                {f}
              </span>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className={`mt-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-[0.9rem] transition-all hover:-translate-y-px ${
            popular
              ? 'bg-[#0d98cd] text-white hover:bg-[#0a7aaa] shadow-lg shadow-[#0d98cd]/20'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {custom ? 'Talk to Us' : 'Get Started'}
        </Link>
      </div>
    </div>
  )
}

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-[#fafafa] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          center
          title="Find the right plan for your needs."
          subtitle="From your first certification to ongoing compliance support, pick the level of partnership that fits where your business is at."
        />
        <div className="grid md:grid-cols-3 gap-6 md:gap-5 pt-2">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} idx={i} />
          ))}
        </div>
        <p className="text-center text-[0.8rem] text-gray-400 mt-10">
          All packages are fixed-price with no hidden fees. Final pricing depends on business size, scope, and standard — book a free call for an exact quote.
        </p>
      </div>
    </section>
  )
}

import { Search, CheckCircle, ClipboardCheck, RefreshCw, FileText, Users } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { Button } from '../components/Button'
import CallToAction from '../sections/CallToAction'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: Search,
    title: 'Annual Internal Audit',
    desc: 'A structured audit of your management system against the requirements of your ISO standard — conducted by an independent, qualified lead auditor.',
  },
  {
    icon: Users,
    title: 'Management Review Facilitation',
    desc: 'We facilitate your annual management review meeting, ensuring it meets ISO requirements and produces actionable outputs for the year ahead.',
  },
  {
    icon: FileText,
    title: 'Document Control & Updates',
    desc: 'Keeping your procedures, policies, and records current as your business changes — so your system reflects how you actually operate.',
  },
  {
    icon: ClipboardCheck,
    title: 'Surveillance Audit Preparation',
    desc: 'Pre-audit review and mock audit to identify any gaps before your annual or triennial surveillance visit from your certification body.',
  },
  {
    icon: RefreshCw,
    title: 'Non-Conformance Management',
    desc: 'Expert support to close out non-conformances and corrective actions identified during internal or external audits, on time and to standard.',
  },
  {
    icon: CheckCircle,
    title: 'Compliance Monitoring',
    desc: 'Ongoing monitoring of your legal register and compliance obligations to ensure your system remains aligned with changing regulatory requirements.',
  },
]

function ServiceCard({ service, delay }) {
  const ref = useReveal()
  const { icon: Icon, title, desc } = service
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
      <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-[#0d98cd]" />
      </div>
      <h3 className="text-[0.95rem] font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-[0.875rem] text-gray-500 leading-relaxed">{desc}</p>
    </div>
  )
}

export default function InternalAudits() {
  const ref1 = useReveal()
  const ref2 = useReveal()

  return (
    <>
      <PageHero
        breadcrumb="Internal Audits"
        tag="Internal Audit Services"
        title="Keep your ISO certification healthy between surveillance visits"
        subtitle="Certification is only the beginning. Maintaining it requires ongoing internal audits, management reviews, and corrective action management. We take that off your plate."
        cta={<Button to="/contact" arrow size="lg">Discuss a Maintenance Retainer</Button>}
      />

      {/* Why internal audits matter */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div ref={ref1} className="reveal">
              <div className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-dark rounded-full px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-widest mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0d98cd]" />
                Why It Matters
              </div>
              <h2 className="text-[2rem] font-extrabold text-gray-900 tracking-tight mb-4">
                The leading reason businesses lose certification
              </h2>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                Most businesses pass their initial certification audit with flying colours. Then, 12 months later, they find themselves scrambling before a surveillance audit with outdated procedures, missing records, and a management review that never happened.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                Internal audits are a mandatory ISO requirement — and for good reason. They're the mechanism that keeps your management system alive and improving between external audits.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed">
                Our maintenance retainer handles everything: annual internal audit, management review, document updates, and surveillance prep — so your certification stays current without the stress.
              </p>
            </div>
            <div ref={ref2} className="reveal reveal-delay-2">
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-7">
                <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-gray-400 mb-5">
                  What's included in our retainer
                </p>
                {[
                  '1 × annual internal audit (full-scope)',
                  'Management review facilitation',
                  'Document control & version management',
                  'Corrective action register management',
                  'Surveillance audit preparation & mock audit',
                  'Priority email and phone advice',
                  'Legal and compliance register updates',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 py-2.5 border-b border-gray-200 last:border-0 text-[0.875rem] text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#0d98cd] shrink-0" />
                    {item}
                  </div>
                ))}
                <div className="mt-5 pt-5 border-t border-gray-200">
                  <p className="text-[0.78rem] text-gray-400">Fixed annual price · No lock-in contract</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHeader
            tag="What We Deliver"
            title="Comprehensive ongoing compliance"
            subtitle="Every aspect of your ongoing ISO compliance, managed by qualified auditors who know your system."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.title} service={s} delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}

import { Lock, AlertTriangle, Building2, Globe, CheckCircle, FileKey } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { Button } from '../components/Button'
import CallToAction from '../sections/CallToAction'
import { useReveal } from '../hooks/useReveal'

const benefits = [
  { icon: Building2,   title: 'Win Enterprise Contracts', desc: 'Enterprise and government clients increasingly require ISO 27001 from their technology, professional services, and data-handling suppliers.' },
  { icon: AlertTriangle, title: 'Reduce Breach Risk',     desc: 'ISO 27001\'s risk management framework systematically identifies and addresses your information security vulnerabilities before they become incidents.' },
  { icon: Globe,       title: 'Demonstrate Due Diligence', desc: 'In the event of a breach, ISO 27001 certification demonstrates you took reasonable security precautions — a critical defence in regulatory proceedings.' },
  { icon: Lock,        title: 'Build Client Trust',       desc: 'Clients share sensitive data with your business. An internationally recognised security certification gives them confidence that data is in safe hands.' },
  { icon: FileKey,     title: 'Regulatory Alignment',     desc: 'ISO 27001 controls align closely with the Australian Privacy Act, the Essential Eight, and other regulatory frameworks — reducing compliance duplication.' },
  { icon: CheckCircle, title: 'Competitive Differentiator', desc: 'ISO 27001 remains uncommon among Australian SMEs. Achieving it places you ahead of competitors who cannot demonstrate equivalent security maturity.' },
]

function FAQItem({ q, a }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal border-b border-gray-100 py-5 last:border-0">
      <h3 className="text-[0.95rem] font-semibold text-gray-900 mb-2">{q}</h3>
      <p className="text-[0.875rem] text-gray-500 leading-relaxed">{a}</p>
    </div>
  )
}

function BenefitCard({ b, delay }) {
  const ref = useReveal()
  const { icon: Icon, title, desc } = b
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} flex gap-4`}>
      <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-purple-600" />
      </div>
      <div>
        <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1.5">{title}</h3>
        <p className="text-[0.875rem] text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function ISO27001() {
  return (
    <>
      <PageHero
        breadcrumb="ISO 27001"
        tag="ISO 27001 Certification"
        title="Information security certification for the modern business"
        subtitle="ISO 27001 is the international standard for information security management. In an environment of increasing cyber threats and regulatory scrutiny, it's rapidly becoming a non-negotiable for businesses that handle client or government data."
        cta={
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/contact" arrow size="lg">Book a Free Consultation</Button>
            <Button to="/services" variant="secondary" size="lg">View All Services</Button>
          </div>
        }
      />

      {/* What is ISO 27001 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 rounded-full px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-widest mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                What is ISO 27001?
              </div>
              <h2 className="text-[2rem] font-extrabold text-gray-900 tracking-tight mb-4">
                The global benchmark for information security
              </h2>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                ISO/IEC 27001:2022 is the world's leading information security management standard. It provides a systematic approach to managing sensitive information — ensuring it stays secure through people, processes, and technology.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                ISO 27001 certification is increasingly required by enterprise and government procurement teams. It demonstrates that your business has implemented a structured, audited security program — not just best intentions.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed">
                Our ISO 27001 service is right-sized for your organisation. Whether you're a 10-person technology company or a 200-person professional services firm, we build an ISMS that fits your context and passes your certification audit first time.
              </p>
            </div>
            <div className="bg-[#1a1a2e] rounded-3xl p-8 text-white">
              <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-white/40 mb-5">
                ISO 27001 — Key areas covered
              </p>
              {[
                'Information security risk assessment',
                'Access control & identity management',
                'Cryptography & data protection',
                'Physical & environmental security',
                'Incident management & response',
                'Business continuity planning',
                'Supplier relationship security',
                'Compliance & legal obligations',
              ].map(item => (
                <div key={item} className="flex items-center gap-2.5 py-2.5 border-b border-white/[0.06] last:border-0 text-[0.875rem] text-white/70">
                  <Lock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHeader tag="Why ISO 27001?" title="Six reasons to get certified" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => <BenefitCard key={b.title} b={b} delay={(i % 2) + 1} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <SectionHeader tag="FAQ" title="ISO 27001 questions answered" />
          {[
            {
              q: 'How long does ISO 27001 certification take?',
              a: "ISO 27001 typically takes 3–6 months, depending on your current security posture and business complexity. Technology companies with existing security practices often move faster. We'll assess your current state on our first call.",
            },
            {
              q: 'Do we need to be a large company to get ISO 27001?',
              a: 'Not at all. We regularly certify businesses with 10–50 employees. ISO 27001 scales to your context — we build an ISMS that\'s proportionate to the risks you actually face, not a massive enterprise framework.',
            },
            {
              q: "What's the difference between ISO 27001 and SOC 2?",
              a: 'ISO 27001 is an international standard with formal third-party certification. SOC 2 is a US-originated framework more common in North American enterprise sales. For Australian and international government clients, ISO 27001 is typically preferred.',
            },
            {
              q: "What happens after we're certified?",
              a: 'Your ISO 27001 certificate is valid for three years with annual surveillance audits. We offer ongoing maintenance retainers to keep your ISMS current, conduct internal audits, and prepare you for surveillance visits.',
            },
          ].map(faq => <FAQItem key={faq.q} {...faq} />)}
        </div>
      </section>

      <CallToAction />
    </>
  )
}

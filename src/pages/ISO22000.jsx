import { CheckCircle, TrendingUp, ChefHat, FileCheck, Shield, Users } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { Button } from '../components/Button'
import CallToAction from '../sections/CallToAction'
import Process from '../sections/Process'
import { useReveal } from '../hooks/useReveal'

const accent = '#e11d48'

const benefits = [
  { icon: Shield,      title: 'Meet Regulatory Requirements',   desc: 'ISO 22000 aligns with FSANZ food safety requirements, giving you a structured, auditable framework for demonstrating compliance.' },
  { icon: TrendingUp,  title: 'Win Retail & Export Contracts',  desc: 'Major supermarkets, food manufacturers, and export markets increasingly require certified food safety systems before accepting new suppliers.' },
  { icon: ChefHat,     title: 'Reduce Contamination Risk',      desc: 'A systematic, HACCP-based approach identifies and controls food safety hazards at every stage — before they become incidents or recalls.' },
  { icon: Users,       title: 'Build Consumer & Partner Trust', desc: 'Certification signals to customers, retailers, and partners that food safety is built into how you operate, not an afterthought.' },
  { icon: FileCheck,   title: 'A Pathway to FSSC 22000',        desc: 'ISO 22000 is the foundation of FSSC 22000, the GFSI-recognised scheme required by many major retailers. We can extend your system when you\'re ready.' },
  { icon: CheckCircle, title: 'Continuous Improvement',         desc: 'Like all ISO management systems, ISO 22000 builds in a formal mechanism for reviewing and improving your food safety performance every year.' },
]

function BenefitCard({ b, delay }) {
  const ref = useReveal()
  const { icon: Icon, title, desc } = b
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} flex gap-4`}>
      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${accent}14` }}>
        <Icon className="w-5 h-5" style={{ color: accent }} />
      </div>
      <div>
        <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1.5">{title}</h3>
        <p className="text-[0.875rem] text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function FAQItem({ q, a }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal border-b border-gray-100 py-5 last:border-0">
      <h3 className="text-[0.95rem] font-semibold text-gray-900 mb-2">{q}</h3>
      <p className="text-[0.875rem] text-gray-500 leading-relaxed">{a}</p>
    </div>
  )
}

export default function ISO22000() {
  return (
    <>
      <PageHero
        breadcrumb="ISO 22000"
        tag="ISO 22000 Certification"
        title="Food safety management for the modern supply chain"
        subtitle="ISO 22000 is the internationally recognised standard for food safety management systems. It's rapidly becoming a requirement for suppliers to major retailers, food manufacturers, and export markets across Australia."
        cta={
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/contact" arrow size="lg">Get Certified — Free Quote</Button>
            <Button to="/services" variant="secondary" size="lg">View All Services</Button>
          </div>
        }
      />

      {/* What is ISO 22000 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[0.73rem] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: accent }}>
                What is ISO 22000?
              </p>
              <h2 className="text-[2.2rem] font-extrabold text-gray-900 tracking-[-0.02em] mb-4">
                The global standard for food safety management
              </h2>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                ISO 22000:2018 combines HACCP principles with a full management system approach, providing a structured framework for identifying, controlling, and continually reducing food safety hazards across your operations.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                In Australia, ISO 22000 is increasingly required by major retailers, food manufacturers, food service businesses, and export markets — and forms the foundation of FSSC 22000, a GFSI-recognised scheme required by many supermarket chains.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed">
                At NextStep ISO, we build your food safety management system around how your business actually operates — not a generic template — and guarantee you'll pass your first certification audit.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '30,000+', l: 'Certified organisations globally' },
                { n: '150+',    l: 'Countries with ISO 22000 certified organisations' },
                { n: 'GFSI',    l: 'Foundation for FSSC 22000 recognition' },
                { n: 'HACCP',   l: 'Built into the certification framework' },
              ].map(({ n, l }) => (
                <div key={l} className="rounded-2xl p-5 text-center border" style={{ background: `${accent}0d`, borderColor: `${accent}33` }}>
                  <div className="text-[1.8rem] font-extrabold mb-1" style={{ color: accent }}>{n}</div>
                  <div className="text-[0.78rem] text-gray-500 font-medium">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHeader
            tag="Why ISO 22000?"
            title="Six reasons food businesses get certified"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => <BenefitCard key={b.title} b={b} delay={(i % 2) + 1} />)}
          </div>
        </div>
      </section>

      {/* Process */}
      <Process />

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <SectionHeader tag="FAQ" title="ISO 22000 questions answered" />
          {[
            {
              q: 'How long does ISO 22000 certification take?',
              a: 'The timeline depends on your business size, existing food safety practices, and whether you already have HACCP plans in place. We\'ll assess your current position and give you a realistic timeline on your first call.',
            },
            {
              q: 'How much does ISO 22000 certification cost?',
              a: 'Our fixed consulting fee for a single-standard ISO 22000 engagement typically starts from $3,500–$6,500 + GST, depending on business size and current maturity. Separate certification body fees of approximately $1,800–$4,500 also apply.',
            },
            {
              q: "What's the difference between ISO 22000 and HACCP?",
              a: 'HACCP is a set of food safety principles focused on hazard analysis and critical control points. ISO 22000 incorporates HACCP but wraps it in a full management system — including leadership commitment, documented objectives, and continual improvement — making it a broader, internationally certifiable standard.',
            },
            {
              q: "What's the difference between ISO 22000 and FSSC 22000?",
              a: 'FSSC 22000 builds on ISO 22000 by adding sector-specific prerequisite programs and additional requirements, making it a GFSI-recognised scheme accepted by most major supermarkets. Many clients start with ISO 22000 and extend to FSSC 22000 once retail requirements demand it.',
            },
          ].map(faq => <FAQItem key={faq.q} {...faq} />)}
        </div>
      </section>

      <CallToAction />
    </>
  )
}

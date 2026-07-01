import { CheckCircle, TrendingUp, Leaf, FileCheck, Shield, Globe } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { Button } from '../components/Button'
import CallToAction from '../sections/CallToAction'
import Process from '../sections/Process'
import { useReveal } from '../hooks/useReveal'

const benefits = [
  { icon: Globe,       title: 'Meet Environmental Obligations',  desc: 'ISO 14001 provides a structured framework for identifying, managing, and demonstrating compliance with environmental legislation and permit conditions.' },
  { icon: TrendingUp,  title: 'Win ESG-Scored Tenders',          desc: 'Government and enterprise procurement increasingly scores on sustainability credentials. ISO 14001 certification gives you a verifiable, recognised credential.' },
  { icon: Leaf,        title: 'Reduce Waste & Operating Costs',  desc: 'The process of mapping your environmental impacts often reveals inefficiencies — reducing energy consumption, waste disposal costs, and resource use.' },
  { icon: Shield,      title: 'Manage Regulatory Risk',          desc: 'A documented environmental management system reduces the risk of regulatory non-compliance, fines, and reputational damage from environmental incidents.' },
  { icon: FileCheck,   title: 'Stakeholder & Client Confidence', desc: 'Certification demonstrates to clients, investors, and the community that your environmental commitments are real — not just marketing language.' },
  { icon: CheckCircle, title: 'Build a Sustainable Business',    desc: 'ISO 14001 builds continuous improvement into your environmental performance — so your business gets better every year, not just at audit time.' },
]

function BenefitCard({ b, delay }) {
  const ref = useReveal()
  const { icon: Icon, title, desc } = b
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} flex gap-4`}>
      <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-[#0d98cd]" />
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

export default function ISO14001() {
  return (
    <>
      <PageHero
        breadcrumb="ISO 14001"
        tag="ISO 14001 Certification"
        title="Environmental management for the modern business"
        subtitle="ISO 14001 helps Australian businesses demonstrate environmental responsibility, manage regulatory obligations, and win tenders that require credible sustainability credentials — without the complexity."
        cta={
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/contact" arrow size="lg">Get Certified — Free Quote</Button>
            <Button to="/services" variant="secondary" size="lg">View All Services</Button>
          </div>
        }
      />

      {/* What is ISO 14001 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[0.73rem] font-semibold uppercase tracking-[0.12em] text-[#0d98cd] mb-4">
                What is ISO 14001?
              </p>
              <h2 className="text-[2.2rem] font-extrabold text-gray-900 tracking-[-0.02em] mb-4">
                The global standard for environmental management
              </h2>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                ISO 14001:2015 is the internationally recognised framework for environmental management systems (EMS). It helps organisations systematically identify their environmental impacts, set objectives to reduce them, and demonstrate ongoing improvement.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                In Australia, ISO 14001 is required by many government contracts, infrastructure projects, and enterprise supply chains — particularly in construction, manufacturing, logistics, and mining.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed">
                At NextStep ISO, we build your environmental management system to be practical and proportionate — tailored to your actual environmental impacts, not a generic template that doesn't reflect how you operate.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '300k+', l: 'Certified organisations globally' },
                { n: '25%',   l: 'Average reduction in energy & waste costs' },
                { n: '170+',  l: 'Countries with ISO 14001 certified organisations' },
                { n: 'No. 1', l: 'Most recognised environmental standard worldwide' },
              ].map(({ n, l }) => (
                <div key={l} className="bg-brand-50 border border-brand-200 rounded-2xl p-5 text-center">
                  <div className="text-[1.8rem] font-extrabold text-[#0d98cd] mb-1">{n}</div>
                  <div className="text-[0.78rem] text-gray-500 font-medium">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHeader
            tag="Why ISO 14001?"
            title="Six reasons Australian businesses get certified"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => <BenefitCard key={b.title} b={b} delay={(i % 2) + 1} />)}
          </div>
        </div>
      </section>

      <Process />

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <SectionHeader tag="FAQ" title="ISO 14001 questions answered" />
          {[
            {
              q: 'How long does ISO 14001 certification take?',
              a: 'The timeline varies based on your business size, the nature of your environmental impacts, and your existing practices. We\'ll give you a personalised assessment on your first call.',
            },
            {
              q: 'How much does ISO 14001 certification cost?',
              a: 'Our fixed consulting fee for a single-standard ISO 14001 engagement typically starts from $3,500–$6,500 + GST depending on size and complexity. Certification body fees of approximately $1,800–$4,500 apply separately.',
            },
            {
              q: 'Do we need to already have environmental procedures in place?',
              a: 'No — we can build your EMS from the ground up. If you already have procedures or environmental licences in place, we\'ll incorporate these and build around them, which can reduce the overall effort.',
            },
            {
              q: 'Which industries commonly require ISO 14001?',
              a: 'Construction, manufacturing, logistics, energy, resources, and government contracting are the most common. However, ESG requirements from enterprise clients are extending this into professional services, technology, and many other sectors.',
            },
          ].map(faq => <FAQItem key={faq.q} {...faq} />)}
        </div>
      </section>

      <CallToAction />
    </>
  )
}

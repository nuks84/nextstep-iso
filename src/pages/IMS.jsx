import { CheckCircle, TrendingUp, Users, FileCheck, Shield, Layers } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { SectionHeader } from '../components/SectionHeader'
import { Button } from '../components/Button'
import CallToAction from '../sections/CallToAction'
import Process from '../sections/Process'
import { useReveal } from '../hooks/useReveal'

const benefits = [
  { icon: Layers,      title: 'One System, Multiple Standards',  desc: 'An IMS integrates ISO 9001, ISO 45001, and ISO 14001 into a single management system — sharing common processes, documentation, and controls across all three standards.' },
  { icon: TrendingUp,  title: 'Reduce Duplication',             desc: 'Instead of three separate systems with overlapping requirements, an IMS consolidates them — less documentation to maintain, fewer procedures to train staff on.' },
  { icon: FileCheck,   title: 'Single Audit Cycle',             desc: 'One integrated audit covers all three standards simultaneously, reducing the time, cost, and disruption of multiple separate certification audits each year.' },
  { icon: Shield,      title: 'Stronger Market Signal',         desc: 'Holding ISO 9001, ISO 45001, and ISO 14001 simultaneously sends a powerful message to clients and tender panels about your commitment to quality, safety, and sustainability.' },
  { icon: Users,       title: 'Simpler for Your Team',          desc: 'Staff only need to understand one management system — not three. This improves adoption, reduces confusion, and makes training far more straightforward.' },
  { icon: CheckCircle, title: 'Better Value',                   desc: 'An integrated engagement typically costs less than three separate certifications. You get all the commercial benefits of three certifications for a single, streamlined investment.' },
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

export default function IMS() {
  return (
    <>
      <PageHero
        breadcrumb="Integrated Management Systems"
        tag="IMS Certification"
        title="One system. Multiple certifications."
        subtitle="An Integrated Management System combines ISO 9001 (Quality), ISO 45001 (Safety), and ISO 14001 (Environment) into a single, unified framework — reducing duplication, simplifying audits, and delivering better value than three separate certifications."
        cta={
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/contact" arrow size="lg">Get Certified — Free Quote</Button>
            <Button to="/services" variant="secondary" size="lg">View All Services</Button>
          </div>
        }
      />

      {/* What is IMS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[0.73rem] font-semibold uppercase tracking-[0.12em] text-[#0d98cd] mb-4">
                What is an IMS?
              </p>
              <h2 className="text-[2.2rem] font-extrabold text-gray-900 tracking-[-0.02em] mb-4">
                Three standards. One streamlined system.
              </h2>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                An Integrated Management System (IMS) brings together two or more ISO standards — typically ISO 9001, ISO 45001, and ISO 14001 — into a single coherent management framework. Rather than running parallel systems, your business manages quality, safety, and environmental performance under one set of integrated processes.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-4">
                The three standards share a common high-level structure (Annex SL), which means they integrate naturally. Requirements like leadership commitment, risk management, objectives, and continual improvement apply across all three — so there's no need to duplicate them.
              </p>
              <p className="text-[0.95rem] text-gray-600 leading-relaxed">
                At NextStep ISO, we specialise in integrated implementations — building systems that meet all three standards without the overhead of maintaining them separately.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '3-in-1', l: 'Standards unified in one system' },
                { n: '30%',    l: 'Typical cost saving over separate certifications' },
                { n: '50%',    l: 'Less documentation vs. three standalone systems' },
                { n: '1×',     l: 'Single audit cycle covers all three standards' },
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
            tag="Why an IMS?"
            title="Six advantages of an integrated approach"
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
          <SectionHeader tag="FAQ" title="IMS questions answered" />
          {[
            {
              q: 'Which standards can be integrated?',
              a: 'We most commonly integrate ISO 9001, ISO 45001, and ISO 14001. We can also incorporate ISO 27001 for organisations that require information security certification. Two-standard combinations (e.g. 9001 + 45001) are equally valid.',
            },
            {
              q: 'Is an IMS cheaper than three separate certifications?',
              a: 'Yes — an integrated engagement typically costs less than three independent implementations. Shared documentation, processes, and a single audit cycle reduce both our consulting effort and your certification body fees.',
            },
            {
              q: 'Can we add a new standard to an existing system?',
              a: 'Absolutely. If you\'re already certified to one or two standards, we can extend your existing system to incorporate the additional standard — rather than building from scratch. We\'ll assess the gap and give you a realistic scope and cost.',
            },
            {
              q: 'Does the certification body audit all three at once?',
              a: 'Yes. Most JASANZ-accredited certification bodies offer combined audits for IMS. This means a single audit team reviews all three standards together — saving time and significantly reducing the disruption to your business.',
            },
          ].map(faq => <FAQItem key={faq.q} {...faq} />)}
        </div>
      </section>

      <CallToAction />
    </>
  )
}

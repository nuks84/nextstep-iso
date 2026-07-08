import { useReveal } from '../../hooks/useReveal'

function FAQItem({ q, a, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} border-b border-gray-100 py-5 last:border-0`}>
      <h3 className="text-[1rem] font-bold text-gray-900 mb-2">{q}</h3>
      <p className="text-[0.9rem] text-gray-600 leading-relaxed">{a}</p>
    </div>
  )
}

export function ArticleFAQ({ faqs }) {
  if (!faqs?.length) return null

  return (
    <section className="mt-4 pt-8 border-t border-gray-100">
      <h2 className="text-[1.55rem] sm:text-[1.8rem] font-extrabold text-gray-900 tracking-tight mb-2 scroll-mt-24">
        Frequently Asked Questions
      </h2>
      <div>
        {faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} delay={(i % 5) + 1} />)}
      </div>
    </section>
  )
}

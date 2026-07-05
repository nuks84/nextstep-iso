import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function CallToAction() {
  const ref = useReveal()

  return (
    <section className="py-20 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#0d98cd]/[0.06] blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <div ref={ref} className="reveal max-w-2xl mx-auto">
          <h2 className="text-[2.4rem] sm:text-[3.2rem] font-extrabold tracking-[-0.03em] leading-[1.08] text-white mb-5">
            Ready to Build a System That Scales?
          </h2>
          <p className="text-[1.15rem] text-white font-semibold mb-4">
            Book a free 30-minute discovery call.
          </p>
          <p className="text-[1.05rem] text-white/40 leading-relaxed mb-10">
            We'll discuss your business, where you are today, and the quickest path to certification without unnecessary paperwork or disruption.
          </p>

          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#0d98cd] text-white font-semibold rounded-xl text-[1rem] hover:bg-[#0a7aaa] transition-all hover:-translate-y-px shadow-lg shadow-[#0d98cd]/20"
            >
              Book My Free Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <a
            href="tel:+61494718985"
            className="mt-6 inline-flex items-center justify-center gap-2 text-white/70 font-medium hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            0494 718 985
          </a>

          <p className="mt-8 text-[0.8rem] text-white/25">
            Response within 4 business hours • Monday to Friday • Melbourne, Australia
          </p>
        </div>
      </div>
    </section>
  )
}

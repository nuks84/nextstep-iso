import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function CallToAction() {
  const ref = useReveal()

  return (
    <section className="py-24 bg-[#0d98cd] relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-white/[0.05] blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <div ref={ref} className="reveal max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-white/[0.12] border border-white/20 text-white rounded-full px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Ready to Get Started?
          </div>

          <h2 className="text-[2rem] sm:text-[2.8rem] font-extrabold tracking-tight leading-[1.1] text-white mb-5">
            Book your free discovery call today
          </h2>
          <p className="text-[1.05rem] text-white/75 leading-relaxed mb-10">
            30 minutes. No obligation. No hard sell. Just expert advice on the fastest path to ISO certification for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-gray-900 font-semibold rounded-xl text-[1rem] hover:bg-gray-100 transition-all hover:-translate-y-px shadow-sm"
            >
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+611300000000"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/30 text-white font-semibold rounded-xl text-[1rem] hover:bg-white/10 hover:border-white/60 transition-all"
            >
              <Phone className="w-4 h-4" />
              1300 XXX XXX
            </a>
          </div>

          <p className="mt-6 text-[0.82rem] text-white/50">
            Response within 4 business hours · Monday to Friday 8:30am–5:30pm AEST
          </p>
        </div>
      </div>
    </section>
  )
}

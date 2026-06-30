import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export function PageHero({ breadcrumb, tag, title, subtitle, cta }) {
  return (
    <section className="pt-[100px] pb-16 bg-gradient-to-b from-brand-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 text-center">
        {breadcrumb && (
          <nav className="flex items-center justify-center gap-1.5 text-[0.8rem] text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#0d98cd] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-800 font-medium">{breadcrumb}</span>
          </nav>
        )}
        {tag && (
          <div className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-dark rounded-full px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0d98cd]" />
            {tag}
          </div>
        )}
        <h1 className="text-[2.4rem] sm:text-[3.2rem] font-extrabold tracking-tight leading-[1.1] text-gray-900 mb-5 max-w-3xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[1.1rem] text-gray-500 leading-relaxed max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        {cta && cta}
      </div>
    </section>
  )
}

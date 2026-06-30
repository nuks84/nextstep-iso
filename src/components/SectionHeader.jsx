import { useReveal } from '../hooks/useReveal'

export function SectionHeader({ tag, title, subtitle, center = true, light = false }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal mb-14 ${center ? 'text-center mx-auto max-w-2xl' : 'max-w-xl'}`}
    >
      {tag && (
        <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-widest mb-4 ${
          light
            ? 'bg-white/10 text-white/80'
            : 'bg-brand-100 text-brand-dark'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-white/60' : 'bg-[#0d98cd]'}`} />
          {tag}
        </div>
      )}
      <h2 className={`text-[2rem] sm:text-[2.4rem] font-extrabold tracking-tight leading-[1.12] mb-4 ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[1.05rem] leading-relaxed ${light ? 'text-white/65' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

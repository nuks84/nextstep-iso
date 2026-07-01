import { useReveal } from '../hooks/useReveal'

export function SectionHeader({ tag, title, subtitle, center = false, light = false }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal mb-16 ${center ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}
    >
      {tag && (
        <p className={`text-[0.73rem] font-semibold uppercase tracking-[0.12em] mb-4 ${
          light ? 'text-white/40' : 'text-[#0d98cd]'
        }`}>
          {tag}
        </p>
      )}
      <h2 className={`text-[2.8rem] sm:text-[3.5rem] font-extrabold tracking-[-0.03em] leading-[1.08] mb-5 ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[1.05rem] leading-relaxed max-w-xl ${light ? 'text-white/50' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

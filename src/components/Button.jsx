import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function Button({ children, to, href, onClick, variant = 'primary', size = 'md', arrow = false, className = '' }) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-200'

  const variants = {
    primary:   'bg-[#0d98cd] text-white hover:bg-[#0a7aaa] shadow-sm hover:-translate-y-px',
    secondary: 'bg-white text-gray-900 border border-gray-200 hover:border-gray-300 hover:shadow-md hover:-translate-y-px',
    ghost:     'text-[#0d98cd] hover:text-[#0a7aaa] bg-transparent p-0 rounded-none',
    outline:   'border border-[#0d98cd] text-[#0d98cd] hover:bg-brand-50',
    dark:      'bg-white text-gray-900 hover:bg-gray-100 shadow-sm hover:-translate-y-px',
  }

  const sizes = {
    sm: 'px-4 py-2 text-[0.85rem]',
    md: 'px-5 py-2.5 text-[0.9rem]',
    lg: 'px-6 py-3.5 text-[1rem]',
  }

  const cls = `${base} ${variants[variant]} ${variant !== 'ghost' ? sizes[size] : ''} ${className}`

  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="w-4 h-4" />}
    </>
  )

  if (to) return <Link to={to} className={cls}>{content}</Link>
  if (href) return <a href={href} className={cls}>{content}</a>
  return <button onClick={onClick} className={cls}>{content}</button>
}

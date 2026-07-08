import { Link } from 'react-router-dom'

const linkClass = 'text-[#0d98cd] font-semibold hover:text-[#0a7aaa] underline decoration-[#0d98cd]/30 underline-offset-2'

export function SmartLink({ href, children }) {
  const isInternal = href?.startsWith('/') || href?.startsWith('#')
  if (isInternal) {
    return <Link to={href} className={linkClass}>{children}</Link>
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  )
}

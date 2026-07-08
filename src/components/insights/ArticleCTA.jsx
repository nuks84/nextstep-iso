import { Button } from '../Button'

export function ArticleCTA({
  heading = 'Considering ISO certification but not sure where to start?',
  body = "A gap assessment can help you understand what your business already has in place, identify what's missing and provide a practical roadmap towards certification.",
  buttonLabel = 'Book a Free Gap Assessment',
  to = '/contact',
}) {
  return (
    <div className="my-10 rounded-2xl border border-brand-200 bg-brand-50 p-7 sm:p-9">
      <h3 className="text-[1.15rem] font-bold text-gray-900 mb-2.5">{heading}</h3>
      <p className="text-[0.95rem] text-gray-600 leading-relaxed mb-6 max-w-2xl">{body}</p>
      <Button to={to} arrow>{buttonLabel}</Button>
    </div>
  )
}

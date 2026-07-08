import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import { getAuthor } from '../../data/authors'

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

function ArticleCover({ image, imageAlt, category }) {
  if (image) {
    return <img src={image} alt={imageAlt || ''} className="w-full h-full object-cover" loading="lazy" />
  }
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100">
      <span className="text-[0.72rem] font-semibold uppercase tracking-widest text-brand-dark/70 px-4 text-center">
        {category}
      </span>
    </div>
  )
}

export function ArticleCard({ article, delay = 1 }) {
  const ref = useReveal()
  const author = getAuthor(article.author)

  return (
    <div ref={ref} className={`reveal reveal-delay-${delay} h-full`}>
      <Link
        to={`/insights/${article.slug}`}
        className="group flex flex-col h-full rounded-2xl border border-gray-100 bg-white overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-200"
      >
        <div className="aspect-[16/10] overflow-hidden shrink-0">
          <ArticleCover image={article.image} imageAlt={article.imageAlt} category={article.category} />
        </div>
        <div className="flex flex-col flex-1 p-6">
          {article.category && (
            <span className="inline-flex w-fit items-center gap-1.5 bg-brand-100 text-brand-dark rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-widest mb-3">
              {article.category}
            </span>
          )}
          <h3 className="text-[1.05rem] font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#0d98cd] transition-colors">
            {article.title}
          </h3>
          <p className="text-[0.875rem] text-gray-500 leading-relaxed mb-5 flex-1">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <img src={author.photo} alt="" className="w-7 h-7 rounded-full object-cover object-top shrink-0" />
              <div className="leading-tight min-w-0">
                <p className="text-[0.78rem] font-semibold text-gray-800 truncate">{author.name}</p>
                <p className="text-[0.7rem] text-gray-400">{formatDate(article.publishedDate)}</p>
              </div>
            </div>
            <span className="flex items-center gap-1 text-[0.72rem] text-gray-400 shrink-0">
              <Clock className="w-3 h-3" />
              {article.readingTime} min read
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

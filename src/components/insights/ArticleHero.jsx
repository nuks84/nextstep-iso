import { Link } from 'react-router-dom'
import { ChevronRight, Clock } from 'lucide-react'
import { getAuthor } from '../../data/authors'

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function ArticleHero({ article }) {
  const author = getAuthor(article.author)
  const updated = article.updatedDate && article.updatedDate !== article.publishedDate

  return (
    <section className="pt-[100px] pb-14 bg-gradient-to-b from-brand-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <nav className="flex items-center justify-center gap-1.5 text-[0.8rem] text-gray-500 mb-6 flex-wrap" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#0d98cd] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link to="/insights" className="hover:text-[#0d98cd] transition-colors">Insights</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-gray-800 font-medium truncate max-w-[200px] sm:max-w-xs">{article.title}</span>
        </nav>

        {article.category && (
          <div className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-dark rounded-full px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0d98cd]" />
            {article.category}
          </div>
        )}

        <h1 className="text-[2rem] sm:text-[2.6rem] font-extrabold tracking-tight leading-[1.15] text-gray-900 mb-5">
          {article.title}
        </h1>

        {article.excerpt && (
          <p className="text-[1.05rem] text-gray-500 leading-relaxed mb-8">
            {article.excerpt}
          </p>
        )}

        <div className="flex items-center justify-center gap-3 flex-wrap text-[0.85rem] text-gray-500">
          <div className="flex items-center gap-2">
            <img src={author.photo} alt="" className="w-8 h-8 rounded-full object-cover object-top" />
            <span className="font-semibold text-gray-800">{author.name}</span>
          </div>
          <span className="text-gray-300">•</span>
          <span>{formatDate(article.publishedDate)}</span>
          <span className="text-gray-300">•</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readingTime} min read</span>
          {updated && (
            <>
              <span className="text-gray-300">•</span>
              <span>Updated {formatDate(article.updatedDate)}</span>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

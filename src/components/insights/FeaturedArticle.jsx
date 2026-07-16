import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import { getAuthor } from '../../data/authors'

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

function FeaturedCover({ image, imageAlt, category }) {
  if (image) {
    return <img src={image} alt={imageAlt || ''} className="w-full h-full object-cover" />
  }
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100">
      <span className="text-[0.8rem] font-semibold uppercase tracking-widest text-brand-dark/70 px-4 text-center">
        {category}
      </span>
    </div>
  )
}

export function FeaturedArticle({ article }) {
  const ref = useReveal()
  const author = getAuthor(article.author)

  return (
    <div ref={ref} className="reveal">
      <Link
        to={`/insights/${article.slug}`}
        className="group grid md:grid-cols-2 gap-0 rounded-2xl border border-gray-100 bg-white overflow-hidden transition-all duration-200 hover:shadow-xl hover:border-gray-200"
      >
        <div className="aspect-[16/10] md:aspect-auto md:h-full overflow-hidden">
          <FeaturedCover image={article.image} imageAlt={article.imageAlt} category={article.category} />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-10">
          <span className="inline-flex w-fit items-center gap-1.5 bg-brand-100 text-brand-dark rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-widest mb-4">
            Featured
          </span>
          <h2 className="text-[1.6rem] sm:text-[1.9rem] font-extrabold text-gray-900 leading-snug mb-3 group-hover:text-[#0d98cd] transition-colors">
            {article.title}
          </h2>
          <p className="text-[0.95rem] text-gray-500 leading-relaxed mb-6">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-3 mb-6">
            <img src={author.photo} alt="" className="w-9 h-9 rounded-full object-cover object-top shrink-0" />
            <div className="leading-tight">
              <p className="text-[0.82rem] font-semibold text-gray-800">{author.name}</p>
              <p className="text-[0.72rem] text-gray-400 flex items-center gap-2">
                {formatDate(article.publishedDate)}
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readingTime} min read
                </span>
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-[#0d98cd] group-hover:gap-2.5 transition-all">
            Read article
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </div>
  )
}

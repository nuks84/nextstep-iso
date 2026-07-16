import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Seo } from '../components/Seo'
import { JsonLd } from '../components/JsonLd'
import { ArticleCard } from '../components/insights/ArticleCard'
import { FeaturedArticle } from '../components/insights/FeaturedArticle'
import CallToAction from '../sections/CallToAction'
import { articles, categories, getFeaturedArticle } from '../content/insights'

const SITE_URL = 'https://nextstepiso.com.au'

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')
  const featured = getFeaturedArticle()

  const filtered = useMemo(
    () => (activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory))
      .filter(a => a.slug !== featured?.slug),
    [activeCategory, featured]
  )

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/insights` },
    ],
  }

  const collectionData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Insights — NextStep ISO',
    description: 'Authoritative articles on ISO certification, management systems, auditing and HACCP for Australian small and medium-sized businesses.',
    url: `${SITE_URL}/insights`,
    publisher: { '@type': 'Organization', name: 'NextStep ISO', url: SITE_URL },
  }

  return (
    <>
      <Seo
        title="Insights — ISO Certification & Compliance Guidance"
        description="Practical, authoritative articles on ISO certification, management systems, internal auditing and HACCP — written for Australian SMEs and manufacturers."
        path="/insights"
        type="website"
      />
      <JsonLd data={breadcrumbData} />
      <JsonLd data={collectionData} />

      <section className="pt-[120px] pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <nav className="flex items-center gap-1.5 text-[0.8rem] text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#0d98cd] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-800 font-medium">Insights</span>
          </nav>

          <p className="text-[0.73rem] font-semibold uppercase tracking-[0.12em] text-[#0d98cd] mb-3">
            Insights and updates
          </p>
          <h1 className="text-[2.2rem] sm:text-[2.6rem] font-extrabold tracking-[-0.02em] leading-[1.1] text-gray-900 mb-10">
            Blog articles
          </h1>

          {featured && (
            <div className="mb-14">
              <FeaturedArticle article={featured} />
            </div>
          )}

          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {['All', ...categories].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-[0.82rem] font-semibold transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#0d98cd] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article, i) => (
                <ArticleCard key={article.slug} article={article} delay={(i % 5) + 1} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-16">No articles in this category yet.</p>
          )}
        </div>
      </section>

      <CallToAction />
    </>
  )
}

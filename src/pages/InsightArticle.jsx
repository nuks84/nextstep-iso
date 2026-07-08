import { useParams } from 'react-router-dom'
import { ArticleHero } from '../components/insights/ArticleHero'
import { AuthorBio } from '../components/insights/AuthorBio'
import { ArticleFAQ } from '../components/insights/ArticleFAQ'
import { ArticleCard } from '../components/insights/ArticleCard'
import { mdxComponents } from '../components/insights/mdxComponents'
import { Seo } from '../components/Seo'
import { JsonLd } from '../components/JsonLd'
import { Button } from '../components/Button'
import CallToAction from '../sections/CallToAction'
import { getArticleBySlug, getRelatedArticles } from '../content/insights'
import { getAuthor } from '../data/authors'

const SITE_URL = 'https://nextstepiso.com.au'
const DEFAULT_IMAGE = '/NextSteo ISO Logo removebg v2.png'

export default function InsightArticle() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <section className="pt-[140px] pb-24 text-center max-w-xl mx-auto px-5">
        <Seo title="Article Not Found" description="This article may have been moved or no longer exists." path={`/insights/${slug}`} noindex />
        <h1 className="text-[1.8rem] font-extrabold text-gray-900 mb-4">Article not found</h1>
        <p className="text-gray-500 mb-8">This article may have been moved or no longer exists.</p>
        <Button to="/insights" arrow>Back to Insights</Button>
      </section>
    )
  }

  const { Content } = article
  const author = getAuthor(article.author)
  const url = `${SITE_URL}/insights/${article.slug}`
  const related = getRelatedArticles(article, 3)

  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description || article.excerpt,
    image: article.image ? `${SITE_URL}${article.image}` : `${SITE_URL}${DEFAULT_IMAGE}`,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate || article.publishedDate,
    author: { '@type': 'Person', name: author.name },
    publisher: {
      '@type': 'Organization',
      name: 'NextStep ISO',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}${DEFAULT_IMAGE}` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/insights` },
      { '@type': 'ListItem', position: 3, name: article.title, item: url },
    ],
  }

  const faqData = article.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return (
    <>
      <Seo
        title={article.seoTitle || article.title}
        description={article.description || article.excerpt}
        path={`/insights/${article.slug}`}
        image={article.image}
        type="article"
      />
      <JsonLd data={articleData} />
      <JsonLd data={breadcrumbData} />
      {faqData && <JsonLd data={faqData} />}

      <ArticleHero article={article} />

      <article className="py-4 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          {article.image && (
            <img
              src={article.image}
              alt={article.imageAlt || article.title}
              className="w-full rounded-2xl border border-gray-100 mb-4"
            />
          )}

          <Content components={mdxComponents} />

          <ArticleFAQ faqs={article.faqs} />
          <AuthorBio authorKey={article.author} />
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <h2 className="text-[1.7rem] sm:text-[2rem] font-extrabold text-gray-900 tracking-tight mb-8">
              Related Insights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((a, i) => <ArticleCard key={a.slug} article={a} delay={(i % 5) + 1} />)}
            </div>
          </div>
        </section>
      )}

      <CallToAction />
    </>
  )
}

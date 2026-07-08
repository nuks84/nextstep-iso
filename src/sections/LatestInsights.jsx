import { SectionHeader } from '../components/SectionHeader'
import { Button } from '../components/Button'
import { ArticleCard } from '../components/insights/ArticleCard'
import { articles } from '../content/insights'

export default function LatestInsights() {
  const latest = articles.slice(0, 3)

  if (latest.length === 0) return null

  return (
    <section className="py-20 bg-[#fafafa]" aria-labelledby="latest-insights-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          headingId="latest-insights-heading"
          tag="Insights"
          title="Latest Insights"
          subtitle="Practical guidance and straightforward advice to help Australian businesses understand ISO certification and build management systems that actually work."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((article, i) => (
            <ArticleCard key={article.slug} article={article} delay={(i % 3) + 1} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button to="/insights" variant="secondary" arrow>View All Insights</Button>
        </div>
      </div>
    </section>
  )
}

// Auto-discovers every .mdx file in this folder — drop a new file in here
// (with a `meta` export) and it will appear on /insights automatically.
// See README.md in this folder for the full authoring guide.

const modules = import.meta.glob('./*.mdx', { eager: true })

const DEFAULT_READING_TIME = 5 // used when an article's meta doesn't set readingTime

function slugFromPath(path) {
  return path.replace('./', '').replace(/\.mdx$/, '')
}

export const articles = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = slugFromPath(path)
    const meta = mod.meta ?? {}
    return {
      slug,
      ...meta,
      readingTime: meta.readingTime ?? DEFAULT_READING_TIME,
      Content: mod.default,
    }
  })
  .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))

export function getArticleBySlug(slug) {
  return articles.find(a => a.slug === slug)
}

export function getFeaturedArticle() {
  return articles.find(a => a.featured) ?? articles[0]
}

export function getRelatedArticles(current, limit = 3) {
  return articles
    .filter(a => a.slug !== current.slug)
    .sort((a, b) => (a.category === current.category ? -1 : 0) - (b.category === current.category ? -1 : 0))
    .slice(0, limit)
}

export const categories = [...new Set(articles.map(a => a.category).filter(Boolean))]

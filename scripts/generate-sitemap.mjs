import { createServer } from 'vite'
import path from 'node:path'
import fs from 'node:fs'

const SITE_URL = 'https://nextstepiso.com.au'
const OUT_FILE = path.resolve('public/sitemap.xml')

// Keep in sync with the routes registered in src/App.jsx.
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/services', priority: '0.8', changefreq: 'monthly' },
  { path: '/iso-9001', priority: '0.7', changefreq: 'monthly' },
  { path: '/iso-27001', priority: '0.7', changefreq: 'monthly' },
  { path: '/iso-22000', priority: '0.7', changefreq: 'monthly' },
  { path: '/iso-45001', priority: '0.7', changefreq: 'monthly' },
  { path: '/iso-14001', priority: '0.7', changefreq: 'monthly' },
  { path: '/ims', priority: '0.6', changefreq: 'monthly' },
  { path: '/internal-audits', priority: '0.6', changefreq: 'monthly' },
  { path: '/resources', priority: '0.6', changefreq: 'monthly' },
  { path: '/insights', priority: '0.8', changefreq: 'weekly' },
  { path: '/for/first-certification', priority: '0.6', changefreq: 'monthly' },
  { path: '/for/improving-systems', priority: '0.6', changefreq: 'monthly' },
  { path: '/for/growing-businesses', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.6', changefreq: 'yearly' },
]

function urlEntry({ loc, lastmod, changefreq, priority }) {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
    priority ? `    <priority>${priority}</priority>` : null,
    '  </url>',
  ].filter(Boolean).join('\n')
}

async function main() {
  // Loading the content registry through Vite's SSR module runner lets this
  // plain Node script resolve the same import.meta.glob()-based article list
  // the site itself uses, without needing a separate MDX loader.
  const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
  const { articles } = await server.ssrLoadModule('/src/content/insights/index.js')
  await server.close()

  const today = new Date().toISOString().slice(0, 10)

  const entries = [
    ...staticRoutes.map(r =>
      urlEntry({ loc: `${SITE_URL}${r.path}`, lastmod: today, changefreq: r.changefreq, priority: r.priority })
    ),
    ...articles.map(a =>
      urlEntry({
        loc: `${SITE_URL}/insights/${a.slug}`,
        lastmod: a.updatedDate || a.publishedDate || today,
        changefreq: 'monthly',
        priority: '0.7',
      })
    ),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`

  fs.writeFileSync(OUT_FILE, xml)
  console.log(`Generated ${OUT_FILE} with ${entries.length} URLs (${articles.length} article${articles.length === 1 ? '' : 's'}).`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})

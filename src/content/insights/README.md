# Adding Insights articles

Every article is a single `.mdx` file in this folder. The Insights landing
page (`/insights`) and each article route (`/insights/<slug>`) are generated
automatically from whatever files exist here — there's no CMS, database or
build step to run by hand beyond the ones described below.

## 1. Create a new file

The **filename becomes the URL slug**, so name it exactly as you want the
article to appear:

```
src/content/insights/iso-27001-checklist-australian-smes.mdx
```

→ `https://nextstepiso.com.au/insights/iso-27001-checklist-australian-smes`

Use lowercase, hyphen-separated, descriptive slugs (matches existing SEO
convention across the site).

## 2. Add the frontmatter (`meta`)

Every file must start with an exported `meta` object:

```mdx
export const meta = {
  title: 'Full article title as it appears as the H1',
  seoTitle: 'Optional shorter/keyword-tuned <title> tag override',
  description: 'Meta description, ~150-160 characters, shown in search results.',
  excerpt: 'Short teaser shown on the /insights card grid.',
  category: 'ISO 9001',        // groups articles and powers the category filter
  author: 'ranuka',            // key into src/data/authors.js
  publishedDate: '2026-07-08', // YYYY-MM-DD
  updatedDate: '2026-07-08',   // optional — only shown if different from publishedDate
  readingTime: 8,              // optional, minutes — defaults to 5 if omitted
  image: '/insights/iso-27001-checklist/cover.jpg', // optional, see step 4
  imageAlt: 'Descriptive alt text for the featured image',
  faqs: [                      // optional — renders an FAQ section + FAQPage schema
    { q: 'Question as it should appear?', a: 'Concise, direct answer.' },
  ],
}
```

Only `title`, `category`, `author` and `publishedDate` are required — the
rest are optional but recommended for SEO.

### Adding a new author

Authors live in `src/data/authors.js`. To use someone other than Ranuka, add
a new entry there and reference its key from `author` above.

## 3. Write the article body

After the `meta` export (and any imports), write the article in standard
Markdown:

- **Start headings at `##` (H2)** — the H1 is rendered automatically from
  `meta.title` in the article header, so don't repeat it in the body.
- Use `###` (H3) for sub-sections.
- Bullet and numbered lists, blockquotes, bold text, images and links all
  work as normal Markdown and pick up the site's typography automatically.
- **Internal links** — use a normal Markdown link starting with `/`, e.g.
  `[internal audits](/internal-audits)`. These are automatically rendered as
  fast, client-side navigation rather than a full page reload.
- **External links** — any link not starting with `/` opens in a new tab
  with `rel="noopener noreferrer"` automatically.
- **FAQs** — don't hand-write an FAQ section in the body. Add entries to
  `meta.faqs` instead; the reusable FAQ section and FAQPage structured data
  are both generated from it automatically.
- **Call-to-action blocks** — import and drop in the reusable CTA component
  anywhere it reads naturally in the article:

  ```mdx
  import { ArticleCTA } from '../../components/insights/ArticleCTA'

  <ArticleCTA />
  ```

  `ArticleCTA` accepts optional `heading`, `body`, `buttonLabel` and `to`
  props if you want to override the default gap-assessment copy for a
  specific article.

## 4. Add images

Put article images under `public/insights/<slug>/` and reference them with
an absolute path, e.g. `/insights/iso-27001-checklist/cover.jpg`. Anything in
`public/` is served as-is, so this works both for `meta.image` (the featured
image, shown on the card grid and at the top of the article) and for any
inline images in the article body (standard Markdown `![alt](path)` syntax).

If `meta.image` is omitted, the card grid and article header fall back to a
clean branded placeholder — you don't need a photo to publish.

## 5. Regenerate the sitemap

`public/sitemap.xml` is regenerated automatically every time you run
`npm run build` (via the `prebuild` script). If you want to check it without
doing a full build, run:

```
npm run sitemap
```

## Removing or editing an article

- **Edit**: just edit the `.mdx` file directly — update `updatedDate` in
  `meta` so the site and structured data reflect the change.
- **Remove**: delete the `.mdx` file (and its `public/insights/<slug>/`
  image folder, if any). The article disappears from `/insights` and its
  URL automatically the next time the site is built. Consider adding a
  redirect at your hosting layer if the URL was already indexed by search
  engines.

## Files involved (for reference)

| File | Purpose |
|---|---|
| `src/content/insights/*.mdx` | Article content — one file per article |
| `src/content/insights/index.js` | Auto-discovers the `.mdx` files above via `import.meta.glob` |
| `src/data/authors.js` | Author bios, keyed by the `author` field in `meta` |
| `src/pages/Insights.jsx` | The `/insights` landing page (card grid + category filter) |
| `src/pages/InsightArticle.jsx` | The `/insights/:slug` article template |
| `src/components/insights/*` | ArticleCard, ArticleHero, AuthorBio, ArticleCTA, ArticleFAQ, mdxComponents |
| `src/components/Seo.jsx`, `src/components/JsonLd.jsx` | Per-page meta tags and structured data |
| `scripts/generate-sitemap.mjs` | Regenerates `public/sitemap.xml` (runs on `npm run build`) |

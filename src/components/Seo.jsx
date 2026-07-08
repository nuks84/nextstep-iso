import { useEffect } from 'react'

const SITE_NAME = 'NextStep ISO'
const SITE_URL = 'https://nextstepiso.com.au'
const DEFAULT_IMAGE = '/NextSteo ISO Logo removebg v2.png'

function upsertMeta(attr, key, content) {
  if (!content) return null
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  const existed = !!tag
  const prevContent = tag?.getAttribute('content') ?? null
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
  return { tag, existed, prevValue: prevContent, attrName: 'content' }
}

function upsertLink(rel, href) {
  if (!href) return null
  let tag = document.head.querySelector(`link[rel="${rel}"]`)
  const existed = !!tag
  const prevHref = tag?.getAttribute('href') ?? null
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
  return { tag, existed, prevValue: prevHref, attrName: 'href' }
}

/**
 * Manages per-page title, meta description, canonical URL and social
 * sharing tags directly on document.head — this is a CSR SPA with no
 * SSR, so there's no react-helmet-style head manager already in the
 * stack. Restores the previous (index.html default) values on unmount
 * so navigating to a page without <Seo> doesn't leak stale tags.
 */
export function Seo({ title, description, path, image, type = 'article', noindex = false }) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title ? `${title} | ${SITE_NAME}` : prevTitle

    const url = path ? `${SITE_URL}${path}` : undefined
    const ogImage = image
      ? (image.startsWith('http') ? image : `${SITE_URL}${image}`)
      : `${SITE_URL}${DEFAULT_IMAGE}`

    const records = [
      upsertMeta('name', 'description', description),
      upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow'),
      upsertMeta('property', 'og:title', title),
      upsertMeta('property', 'og:description', description),
      upsertMeta('property', 'og:type', type),
      upsertMeta('property', 'og:url', url),
      upsertMeta('property', 'og:image', ogImage),
      upsertMeta('property', 'og:site_name', SITE_NAME),
      upsertMeta('name', 'twitter:card', 'summary_large_image'),
      upsertMeta('name', 'twitter:title', title),
      upsertMeta('name', 'twitter:description', description),
      upsertMeta('name', 'twitter:image', ogImage),
      upsertLink('canonical', url),
    ].filter(Boolean)

    return () => {
      document.title = prevTitle
      records.forEach(({ tag, existed, prevValue, attrName }) => {
        if (!existed) tag.remove()
        else if (prevValue !== null) tag.setAttribute(attrName, prevValue)
      })
    }
  }, [title, description, path, image, type, noindex])

  return null
}

import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { setTimeout as sleep } from 'node:timers/promises'
import path from 'node:path'
import fs from 'node:fs'

const PORT = 5199
const BASE = `http://localhost:${PORT}`
const OUT_DIR = path.resolve('public/resources')

const pages = [
  { route: '/print/checklist', file: 'iso-certification-readiness-checklist.pdf', thumb: 'iso-certification-readiness-checklist-preview.png' },
  { route: '/print/choosing-a-standard', file: 'choosing-the-right-iso-standard.pdf', thumb: 'choosing-the-right-iso-standard-preview.png' },
  { route: '/print/internal-audit', file: 'what-an-internal-audit-involves.pdf', thumb: 'what-an-internal-audit-involves-preview.png' },
]

// A4 at 96 CSS px/inch, matching the print pages' fixed 210mm width
const PAGE_WIDTH_PX = 794
const PAGE_HEIGHT_PX = 1123
const THUMB_CROP_HEIGHT = 520

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url)
      if (res.ok) return
    } catch {
      // server not up yet
    }
    await sleep(300)
  }
  throw new Error('Dev server did not start in time')
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })

  const server = spawn(`npx vite --port ${PORT} --strictPort`, {
    stdio: 'inherit',
    shell: true,
  })

  try {
    await waitForServer(BASE)

    const browser = await chromium.launch()
    const page = await browser.newPage({ viewport: { width: PAGE_WIDTH_PX, height: PAGE_HEIGHT_PX } })
    await page.emulateMedia({ media: 'screen' })

    for (const { route, file, thumb } of pages) {
      await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' })

      const pdfPath = path.join(OUT_DIR, file)
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '0', bottom: '0', left: '0', right: '0' },
      })
      console.log('Generated', pdfPath)

      const thumbPath = path.join(OUT_DIR, thumb)
      await page.screenshot({
        path: thumbPath,
        clip: { x: 0, y: 0, width: PAGE_WIDTH_PX, height: THUMB_CROP_HEIGHT },
      })
      console.log('Generated', thumbPath)
    }

    await browser.close()
  } finally {
    server.kill()
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})

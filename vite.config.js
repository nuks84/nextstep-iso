import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    tailwindcss(),
    { enforce: 'pre', ...mdx() },
    react({ include: /\.(jsx|js|mdx)$/ }),
  ],
})

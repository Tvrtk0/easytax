// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://tvrtk0.github.io',
  base: '/easytax',
  integrations: [tailwind()],
})

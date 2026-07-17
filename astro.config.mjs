import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO AT LAUNCH: change `site` to 'https://justenuffcabaret.com'
// (this updates the sitemap, canonical URLs, and structured data everywhere)
export default defineConfig({
  site: 'https://just-enuff-cabaret-rockford-website.pages.dev',
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: { format: 'file' }
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://justenuffcabaret.com',
  // Keep the post-payment confirmation page out of the sitemap; it is also
  // marked noindex. It exists only as the Shift4 Return URL target.
  integrations: [sitemap({ filter: (page) => !page.includes('/thank-you') })],
  trailingSlash: 'never',
  build: { format: 'file' }
});

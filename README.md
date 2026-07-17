# Just Enuff Cabaret - Website

Multi-page Astro site for Just Enuff Cabaret (Rockford, IL), hosted on Cloudflare Pages.

## Cloudflare Pages settings

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`

Every push to the main branch auto-deploys.

## Editing content (no code required)

Almost all content lives in **`src/data/site.js`** - hours, phone, packages, menus,
dancers, events, FAQs, gallery photos, and social links.

### Add a dancer photo
1. Save the photo as **1080 × 1440 px** (portrait) into `public/images/dancers/`, e.g. `scarlett.jpg`
2. In `src/data/site.js`, set `image: '/images/dancers/scarlett.jpg'` for that dancer.

### Add an event flyer
1. Save the flyer as **1080 × 1440 px** into `public/images/events/`, e.g. `friday-night.jpg`
2. In `src/data/site.js`, add it to the `events` array:
   `{ title: 'Friday Night Party', date: 'Fri, Aug 7', image: '/images/events/friday-night.jpg' }`

### Add gallery photos
Drop photos into `public/images/gallery/` and list them in `galleryImages` in `src/data/site.js`.

### Hiring form (Microsoft Graph via Cloudflare Pages Function)
The custom form on /hiring posts to `/api/apply` (`functions/api/apply.js`), which
sends each application by email from info@justenuffcabaret.com to the recipients
listed at the top of that file, using the "JustEnuffContactWorker" Entra app.

One-time setup in Cloudflare Pages → your project → **Settings → Environment
variables** (add for Production, mark as Secret):

| Variable | Where to find it |
|---|---|
| `MS_TENANT_ID` | Entra admin center → App registrations → JustEnuffContactWorker → Overview → "Directory (tenant) ID" |
| `MS_CLIENT_ID` | Same Overview page → "Application (client) ID" |
| `MS_CLIENT_SECRET` | App registration → Certificates & secrets → New client secret → copy the **Value** immediately |

Notes: the client secret expires (default 6 months–2 years - set a calendar
reminder to rotate it). The form only works on the deployed site, not in local
`npm run dev`. To change recipients, edit `RECIPIENTS` in `functions/api/apply.js`.

## Going live on justenuffcabaret.com

When you point the domain at this site, make **two** edits:
1. `astro.config.mjs` - change `site` to `'https://justenuffcabaret.com'`
2. `public/robots.txt` - change the Sitemap URL to `https://justenuffcabaret.com/sitemap-index.xml`

Then in Cloudflare Pages → Custom domains, add `justenuffcabaret.com` (and `www`).

## After launch: SEO checklist

- [ ] Add the site to [Google Search Console](https://search.google.com/search-console) and submit `sitemap-index.xml`
- [ ] Add the site to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Create/claim the **Google Business Profile** for Just Enuff Cabaret (biggest factor for local "near me" searches)
- [ ] Add real Instagram/Facebook/X URLs to `socials` in `src/data/site.js`
- [ ] Verify the map pin & `geo` coordinates in `src/data/site.js`
- [ ] Get listed on Yelp, TripAdvisor, and local directories with the exact same name/address/phone

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to dist/
```

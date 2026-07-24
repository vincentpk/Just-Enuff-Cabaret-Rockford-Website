// Server-side Google reviews fetch (Places API New).
// The API key stays here on the server, never in the browser.
//
// Cloudflare env vars (Pages > Settings > Variables & Secrets):
//   GOOGLE_PLACES_KEY  (required, secret) - the restricted Places API key
//   GOOGLE_PLACE_ID    (optional) - skip and we auto-resolve it by name/address
//
// Response is cached at the edge for 6 hours, so Google is called only a few
// times a day no matter how many visitors hit the page. Only reviews rated
// 4 stars or higher are returned.

const CACHE_KEY = 'https://cache.internal/jec-google-reviews-v2';
const TTL = 21600; // 6 hours
const QUERY = 'Just Enuff Cabaret 1609 S Alpine Rd Rockford IL 61108';

export async function onRequest(context) {
  const { env } = context;
  const KEY = env.GOOGLE_PLACES_KEY;
  if (!KEY) return json({ error: 'not_configured', reviews: [] });

  const cache = caches.default;
  const cacheReq = new Request(CACHE_KEY);
  const cached = await cache.match(cacheReq);
  if (cached) return cached;

  try {
    // 1) Resolve the Place ID (unless provided directly)
    let placeId = env.GOOGLE_PLACE_ID;
    if (!placeId) {
      const s = await fetch('https://places.googleapis.com/v1/places:searchText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': KEY,
          'X-Goog-FieldMask': 'places.id'
        },
        body: JSON.stringify({ textQuery: QUERY })
      }).then((r) => r.json());
      placeId = s?.places?.[0]?.id;
    }
    if (!placeId) return json({ error: 'no_place', reviews: [] });

    // 2) Place details + reviews
    const d = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        'X-Goog-Api-Key': KEY,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews'
      }
    }).then((r) => r.json());

    const reviews = (d.reviews || [])
      .filter((r) => (r.rating || 0) >= 4 && r.text && r.text.text)
      .slice(0, 6)
      .map((r) => ({
        author: r.authorAttribution?.displayName || 'Google user',
        photo: r.authorAttribution?.photoUri || '',
        url: r.authorAttribution?.uri || '',
        rating: r.rating,
        text: r.text.text,
        when: r.relativePublishTimeDescription || ''
      }));

    const resp = json(
      { rating: d.rating || null, total: d.userRatingCount || null, reviews },
      200,
      TTL
    );
    context.waitUntil(cache.put(cacheReq, resp.clone()));
    return resp;
  } catch (e) {
    return json({ error: 'fetch_failed', reviews: [] });
  }
}

function json(obj, status = 200, ttl = 0) {
  const headers = { 'content-type': 'application/json' };
  if (ttl) headers['cache-control'] = `public, max-age=${ttl}, s-maxage=${ttl}`;
  return new Response(JSON.stringify(obj), { status, headers });
}

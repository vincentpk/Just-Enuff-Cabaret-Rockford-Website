// ============================================================
// SITE DATA - edit this file to update content across the site
// ============================================================

export const business = {
  name: 'Just Enuff Cabaret',
  tagline: 'Where the Night Comes Alive',
  description:
    "Rockford's premier gentlemen's club and adult nightlife destination, minutes from I-90/I-39.",
  address: {
    street: '1609 S Alpine Rd',
    city: 'Rockford',
    state: 'IL',
    zip: '61108'
  },
  phone: '(815) 399-4600',
  phoneHref: 'tel:+18153994600',
  email: 'info@justenuffcabaret.com',
  hours: 'Open 7 Nights a Week · 4 PM – 2 AM',
  hoursShort: 'Mon–Sun 4 PM – 2 AM',
  geo: { lat: 42.251742, lng: -89.029279 },
  // Google Business Profile link (shows reviews, photos, hours)
  mapsUrl: 'https://maps.app.goo.gl/5UzjVGqgUzbCU1H76',
  // Launches turn-by-turn navigation directly
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Just+Enuff+Cabaret%2C+1609+S+Alpine+Rd%2C+Rockford%2C+IL+61108',
  mapsEmbed:
    'https://www.google.com/maps?q=Just+Enuff+Cabaret+1609+S+Alpine+Rd+Rockford+IL+61108&output=embed',
  // Used in footer links and SEO structured data (sameAs)
  socialLinks: [
    { label: 'Instagram', url: 'https://www.instagram.com/justenuffrockford/' },
    { label: 'Facebook', url: 'https://www.facebook.com/share/1CXcczV9Qs/' },
    { label: 'Snapchat', url: 'https://snapchat.com/t/rkuRN9KX' },
    { label: 'TikTok', url: 'https://www.tiktok.com/@justenuff1609' },
    { label: 'X', url: 'https://x.com/justenuff1609' }
  ],
  get socials() {
    return this.socialLinks.map((s) => s.url);
  }
};

// Nearby cities we want to rank for (used in copy + directions)
export const serviceAreas = [
  { city: 'Chicago, IL', drive: '~90 min via I-90 W', desc: 'Take I-90 West toward Rockford, exit at US-20 W / S Alpine Rd.' },
  { city: 'Elgin, IL', drive: '~55 min via I-90 W', desc: 'Straight shot up I-90 West. An easy night out from the Fox Valley.' },
  { city: 'Aurora / Naperville, IL', drive: '~75 min via I-88 & I-39', desc: 'I-88 West to I-39 North into Rockford.' },
  { city: 'Lake Geneva, WI', drive: '~45 min via US-12 & IL-173', desc: 'US-12 South to IL-173 West, then south on I-90 / Alpine Rd.' },
  { city: 'Madison, WI', drive: '~70 min via I-39/90 S', desc: 'I-39/90 South straight into Rockford.' },
  { city: 'Milwaukee, WI', drive: '~85 min via I-43 & I-90', desc: 'I-43 South to I-90 West toward Rockford.' },
  { city: 'Janesville / Beloit, WI', drive: '~30 min via I-39/90 S', desc: 'Quick trip down I-39/90. Closer than you think.' },
  { city: 'DeKalb, IL', drive: '~45 min via IL-23 & I-39', desc: 'North on I-39 to US-20 W / Alpine Rd.' }
];

// Dancers - add a photo (1080 × 1440 px, portrait) to /public/images/dancers/
// and set `image` to its path. Leave image: null to show a "coming soon" slot.
export const dancers = [
  { name: 'April', image: '/images/dancers/april.jpg' },
  { name: 'Lena', image: '/images/dancers/lena.jpg' },
  { name: 'Ivy', image: '/images/dancers/ivy.jpg' },
  { name: 'Lacey', image: '/images/dancers/lacey.jpg' },
  { name: 'Chanel', image: '/images/dancers/chanel.jpg' },
  { name: 'Marie', image: '/images/dancers/marie.jpg' },
  { name: 'Scarlett', image: null },
  { name: 'Vivienne', image: null },
  { name: 'Raven', image: null },
  { name: 'Diamond', image: null },
  { name: 'Celeste', image: null }
];

// Events - drop flyers (1080 × 1440 px, portrait) into /public/images/events/
// and add them here.
//   date: ISO format 'YYYY-MM-DD'. Events automatically disappear from the
//         site the day after their date passes. No need to delete old ones,
//         but feel free to clean up this list occasionally.
//   desc: shown under the flyer and used for SEO event listings.
export const events = [
  {
    title: 'Amateur Dance Contest',
    date: '2026-08-12',
    desc: 'Think you have what it takes? Compete for cash prizes: $250 for 1st place, $150 for 2nd, and $100 for 3rd. DM us on Instagram or Facebook @justenuffrockford to enter. 21+, full bar, please drink responsibly.',
    image: '/images/events/amateur-dance-contest.jpg'
  }
];

// Gallery - drop photos into /public/images/gallery/ and list them here.
export const galleryImages = [
  { src: '/images/gallery/gallery-1.jpg', alt: 'Inside Just Enuff Cabaret gentlemen\'s club in Rockford, IL' }
];

export const packages = [
  {
    tier: 'Celebrate Freedom',
    name: 'The Divorce Party',
    price: '$249',
    unit: 'up to 5 guests',
    perks: [
      'Show your finalized divorce papers and your first drink is on the house',
      'Premium seating in our VIP section overlooking the stage',
      'Waived cover charge for up to 5 guests',
      '1 bottle of champagne',
      '"Just Divorced" sash for the guest of honor'
    ],
    note: 'Freedom looks good on you. Bring your divorce decree, any date counts, and celebrate the fresh start. Call (815) 399-4600 to reserve.'
  },
  {
    tier: 'Celebrate',
    name: 'The Birthday Package',
    price: '$299',
    unit: 'up to 5 guests',
    perks: [
      'Custom birthday cake with the guest of honor\'s name on it',
      'Premium seating in our VIP section overlooking the stage',
      'Waived cover charge for up to 5 guests',
      '1 on-stage dance with the entertainer of your choice',
      'Choice of a Just Enuff t-shirt or hat for the birthday guest'
    ],
    note: 'Reserve at least one week in advance by calling (815) 399-4600. Because your custom cake is ordered ahead of time, payment is due in full when you book.'
  },
  {
    tier: 'Signature',
    name: 'The Red Heel',
    price: '$449',
    unit: 'up to 5 guests',
    perks: [
      'Premium seating in our VIP section overlooking the stage',
      'Waived cover charge for up to 5 guests',
      '1 bottle of Luc Belaire',
      'Choice of a Just Enuff t-shirt or hat for every guest',
      'Dedicated cocktail server'
    ],
    note: 'Our most popular experience. Book early!',
    featured: true
  },
  {
    tier: 'Elite',
    name: 'Cabaret Royale',
    price: '$699',
    unit: 'up to 8 guests',
    perks: [
      'Premium seating in our VIP section overlooking the stage',
      'Waived cover charge for up to 8 guests',
      '1 bottle of Dom Pérignon Vintage 2015',
      'Dedicated cocktail server'
    ],
    note: 'The ultimate VIP experience. Call to book.'
  }
];

export const bottleMenu = [
  {
    category: 'Champagne & Sparkling',
    items: [
      { name: 'Veuve Clicquot Brut Yellow Label', price: '$195' },
      { name: 'Moët & Chandon Impérial Brut', price: '$195' },
      { name: 'Perrier-Jouët Grand Brut', price: '$230' },
      { name: 'Dom Pérignon Vintage 2015', price: '$510' },
      { name: 'Ace of Spades Brut Gold', price: '$750' }
    ]
  },
  {
    category: 'Rosé',
    items: [
      { name: 'Veuve Clicquot Brut Rosé', price: '$225' },
      { name: 'Moët & Chandon Rosé Impérial', price: '$225' },
      { name: 'Perrier-Jouët Blason Rosé', price: '$280' },
      { name: 'Dom Pérignon Rosé Vintage 2009', price: '$950' },
      { name: 'Ace of Spades Rosé', price: '$1,100' }
    ]
  },
  {
    category: 'Wine',
    items: [
      { name: 'Caymus Vineyards Cabernet Sauvignon', price: '$175' },
      { name: 'Cloudy Bay Sauvignon Blanc', price: '$150' }
    ]
  },
  {
    category: 'Tequila',
    items: [{ name: 'Clase Azul Tequila Reposado', price: '$650' }]
  }
];

export const foodMenu = [
  {
    category: 'Appetizers',
    items: [
      { name: 'Mozzarella Sticks', desc: 'Golden-fried mozzarella served with marinara', price: '$10' },
      { name: 'Loaded Cheese Fries', desc: 'Fries smothered in melted cheese, topped with crispy bacon bits', price: '$12' },
      { name: 'Onion Rings', desc: 'Crunchy onion rings served with ranch', price: '$8' },
      { name: 'Chicken Wings', desc: 'Classic crispy wings tossed in a bold, fiery hot sauce', price: '$16' }
    ]
  },
  {
    category: 'Salads',
    items: [
      { name: 'Caesar Salad', desc: 'Romaine, Caesar dressing, Parmesan, croutons', price: '$12' },
      { name: 'House Salad', desc: 'Romaine, fresh tomatoes, shredded cheese, croutons, choice of dressing', price: '$12' },
      { name: 'Add Grilled Chicken', desc: '', price: '$5' },
      { name: 'Add Grilled Shrimp', desc: '', price: '$10' }
    ]
  },
  {
    category: 'Pizza',
    items: [
      { name: 'Pepperoni Pizza', desc: 'Thin-crust pizza topped with pepperoni', price: '$14' },
      { name: 'Sausage & Pepperoni Pizza', desc: 'Thin-crust pizza topped with sausage and pepperoni', price: '$14' }
    ]
  },
  {
    category: 'Sandwiches',
    items: [
      { name: 'Cheeseburger', desc: 'Classic cheeseburger with pickles, lettuce, tomato, served with fries', price: '$16' },
      { name: 'Chicken Sandwich', desc: 'Crispy chicken, chipotle aioli, lettuce, tomato, served with fries', price: '$17' },
      { name: 'Philly Cheesesteak', desc: 'Thinly sliced steak, grilled onions, provolone or Cheez Whiz on a toasted hoagie', price: '$18' }
    ]
  },
  {
    category: 'Tacos & Quesadillas',
    items: [
      { name: 'Chicken Street Tacos', desc: 'Chicken tacos topped with onions and cilantro', price: '$15' },
      { name: 'Steak Street Tacos', desc: 'Steak tacos topped with onions and cilantro', price: '$17' },
      { name: 'Chicken Quesadilla', desc: 'Grilled chicken and melted cheese, with pico de gallo and sour cream', price: '$15' },
      { name: 'Philly Cheesesteak Quesadilla', desc: 'Steak, onions, and provolone, served with chipotle aioli', price: '$17' }
    ]
  },
  {
    category: 'Dessert',
    items: [
      { name: 'Cheesecake', desc: 'A slice of classic cheesecake', price: '$10' },
      { name: 'Ice Cream', desc: 'Vanilla or cookies and cream', price: '$8' }
    ]
  }
];

export const faqs = [
  {
    q: 'How old do I have to be to enter Just Enuff Cabaret?',
    a: 'All guests must be 21 or older with a valid government-issued photo ID. No exceptions.'
  },
  {
    q: 'What are your hours?',
    a: 'We are open 7 nights a week, Monday through Sunday, from 4 PM to 2 AM.'
  },
  {
    q: 'Where is Just Enuff Cabaret located?',
    a: 'We are at 1609 S Alpine Rd, Rockford, IL 61108, just off US-20 and minutes from I-90/I-39, making us an easy drive from Chicago, Elgin, Aurora, Rockton, Beloit, Janesville, Lake Geneva, Madison, and Milwaukee.'
  },
  {
    q: 'Is there a cover charge?',
    a: 'Cover varies by night and special event. Call us at (815) 399-4600 for tonight\'s details. VIP package guests receive priority entry.'
  },
  {
    q: 'Is there a dress code?',
    a: 'Smart casual. No excessively baggy clothing, tank tops, or athletic wear. Management reserves the right of admission.'
  },
  {
    q: 'Is parking available?',
    a: 'Yes, free on-site parking is available in our private lot on S Alpine Rd.'
  },
  {
    q: 'Do you host bachelor parties and birthdays?',
    a: 'Absolutely. Our group packages include reserved VIP seating, bottle service, and celebration perks. See our VIP Packages page or call to book.'
  },
  {
    q: 'Do you serve food and drinks?',
    a: 'Yes, we have a full bar with premium bottle service every night. Our full kitchen serves appetizers, pizza, sandwiches, tacos, and more until late on Friday, Saturday, and Sunday. On other nights, pizza and mozzarella sticks are always available. See our full menu for bottle service and food.'
  },
  {
    q: 'How do I reserve VIP seating or bottle service?',
    a: 'Call (815) 399-4600 or email info@justenuffcabaret.com. Weekend VIP seating goes fast, so we recommend booking at least a few days ahead.'
  },
  {
    q: 'Is Just Enuff Cabaret worth the drive from Chicago or Wisconsin?',
    a: 'We think so. Guests regularly join us from Chicago (~90 min), Elgin (~55 min), Lake Geneva (~45 min), Madison (~70 min), and Milwaukee (~85 min). Even many of our entertainers drive an hour or more to perform at Just Enuff, which tells you something about the room. With free parking, VIP packages, and no big-city prices, it makes for a great night out.'
  },
  {
    q: 'What makes Just Enuff Cabaret the best strip club in the Rockford area?',
    a: 'Just Enuff Cabaret combines professional entertainers seven nights a week, true VIP bottle service with premium labels like Dom Perignon and Clase Azul, a full late-night kitchen, and free on-site parking, all minutes off I-90 without big-city cover charges or big-city hassle. Guests regularly drive in from Chicago, Madison, Milwaukee, and Lake Geneva. Come see for yourself: open nightly 4 PM to 2 AM.'
  },
  {
    q: 'How do I become an entertainer or join the staff?',
    a: 'Entertainers audition year-round, and we regularly have positions for bartenders, servers, hosts, and security. Fill out the application on our Apply page.'
  }
];

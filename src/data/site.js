// ============================================================
// SITE DATA — edit this file to update content across the site
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
  geo: { lat: 42.24934, lng: -88.9942 }, // approx — verify pin on Google Maps
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Just+Enuff+Cabaret+1609+S+Alpine+Rd+Rockford+IL+61108',
  mapsEmbed:
    'https://www.google.com/maps?q=1609+S+Alpine+Rd,+Rockford,+IL+61108&output=embed',
  // Add real profile URLs when ready, e.g. 'https://www.instagram.com/justenuffcabaret'
  socials: []
};

// Nearby cities we want to rank for (used in copy + directions)
export const serviceAreas = [
  { city: 'Chicago, IL', drive: '~90 min via I-90 W', desc: 'Take I-90 West toward Rockford, exit at US-20 W / S Alpine Rd.' },
  { city: 'Elgin, IL', drive: '~55 min via I-90 W', desc: 'Straight shot up I-90 West — an easy night out from the Fox Valley.' },
  { city: 'Aurora / Naperville, IL', drive: '~75 min via I-88 & I-39', desc: 'I-88 West to I-39 North into Rockford.' },
  { city: 'Lake Geneva, WI', drive: '~45 min via US-12 & IL-173', desc: 'US-12 South to IL-173 West, then south on I-90 / Alpine Rd.' },
  { city: 'Madison, WI', drive: '~70 min via I-39/90 S', desc: 'I-39/90 South straight into Rockford.' },
  { city: 'Milwaukee, WI', drive: '~85 min via I-43 & I-90', desc: 'I-43 South to I-90 West toward Rockford.' },
  { city: 'Janesville / Beloit, WI', drive: '~30 min via I-39/90 S', desc: 'Quick trip down I-39/90 — closer than you think.' },
  { city: 'DeKalb, IL', drive: '~45 min via IL-23 & I-39', desc: 'North on I-39 to US-20 W / Alpine Rd.' }
];

// Dancers — add a photo (1080 × 1440 px, portrait) to /public/images/dancers/
// and set `image` to its path. Leave image: null to show a "coming soon" slot.
export const dancers = [
  { name: 'Marie', image: '/images/dancers/marie.jpg' },
  { name: 'Scarlett', image: null },
  { name: 'Vivienne', image: null },
  { name: 'Raven', image: null },
  { name: 'Diamond', image: null },
  { name: 'Celeste', image: null }
];

// Events — drop flyers (1080 × 1440 px, portrait) into /public/images/events/
// and add them here. Leave image: null for a placeholder slot.
export const events = [
  { title: 'Upcoming Event', date: '', image: null },
  { title: 'Upcoming Event', date: '', image: null },
  { title: 'Upcoming Event', date: '', image: null }
];

// Gallery — drop photos into /public/images/gallery/ and list them here.
export const galleryImages = [
  { src: '/images/gallery/gallery-1.jpg', alt: 'Inside Just Enuff Cabaret gentlemen\'s club in Rockford, IL' }
];

export const packages = [
  {
    tier: 'Tier 1',
    name: 'The Martini',
    price: '$150',
    unit: 'per person',
    perks: [
      'Reserved seating for 2',
      '1 bottle of house wine or 4 cocktails',
      'Appetizer platter for 2',
      'Priority entry — no wait',
      'Welcome champagne toast'
    ],
    note: 'Perfect for date night or a solo evening out.'
  },
  {
    tier: 'Tier 2 · Signature',
    name: 'The Red Heel',
    price: '$350',
    unit: 'up to 4 guests',
    perks: [
      'Premium VIP booth seating',
      '1 bottle of premium liquor',
      'Full appetizer spread',
      'Dedicated cocktail server',
      'Meet & greet with a featured entertainer',
      'Personalized event memento'
    ],
    note: 'Our most popular experience — book early!',
    featured: true
  },
  {
    tier: 'Tier 3 · Elite',
    name: 'Cabaret Royale',
    price: '$750',
    unit: 'up to 8 guests',
    perks: [
      'Front-row stage-side table',
      '2 bottles of premium liquor',
      'Full dinner & dessert',
      'Personal host & cocktail butler',
      'Private 30-min entertainer time',
      'Custom cake or celebration package',
      'Complimentary limo coordination'
    ],
    note: 'The ultimate VIP experience — call to book.'
  },
  {
    tier: 'Group / Bachelor',
    name: 'The Squad',
    price: '$600',
    unit: 'up to 10 guests',
    perks: [
      'Reserved section with booth seating',
      '2 bottles of choice liquor',
      'Shareable food platters',
      'Group photo with entertainers',
      'Groom/birthday sash & crown',
      'Custom playlist for 1 hour'
    ],
    note: 'Bachelor & birthday parties welcome!'
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
      { name: 'Cheeseburger', desc: 'Classic cheeseburger with pickles, lettuce, tomato — served with fries', price: '$16' },
      { name: 'Chicken Sandwich', desc: 'Crispy chicken, chipotle aioli, lettuce, tomato — served with fries', price: '$17' },
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
    a: 'We are at 1609 S Alpine Rd, Rockford, IL 61108 — just off US-20 and minutes from I-90/I-39, making us an easy drive from Chicago, Elgin, Aurora, Rockton, Beloit, Janesville, Lake Geneva, Madison, and Milwaukee.'
  },
  {
    q: 'Is there a cover charge?',
    a: 'Cover varies by night and special event. Call us at (815) 399-4600 for tonight\'s details — VIP package guests receive priority entry.'
  },
  {
    q: 'Is there a dress code?',
    a: 'Smart casual. No excessively baggy clothing, tank tops, or athletic wear. Management reserves the right of admission.'
  },
  {
    q: 'Is parking available?',
    a: 'Yes — free on-site parking is available in our private lot on S Alpine Rd.'
  },
  {
    q: 'Do you host bachelor parties and birthdays?',
    a: 'Absolutely. Our group packages include reserved sections, bottle service, food platters, and celebration extras. See our VIP Packages page or call to book.'
  },
  {
    q: 'Do you serve food and drinks?',
    a: 'Yes — we have a full bar with premium bottle service plus a full kitchen serving appetizers, pizza, sandwiches, tacos, and more until late.'
  },
  {
    q: 'How do I reserve a VIP booth or bottle service?',
    a: 'Call (815) 399-4600 or email info@justenuffcabaret.com. Weekend booths go fast — we recommend booking at least a few days ahead.'
  },
  {
    q: 'Is Just Enuff Cabaret worth the drive from Chicago or Wisconsin?',
    a: 'We think so — guests regularly join us from Chicago (~90 min), Elgin (~55 min), Lake Geneva (~45 min), Madison (~70 min), and Milwaukee (~85 min). With free parking, VIP packages, and no big-city prices, it makes for a great night out.'
  },
  {
    q: 'Are you hiring dancers and staff?',
    a: 'Yes — we are always looking for entertainers, bartenders, servers, security, and DJs. Apply on our Now Hiring page.'
  }
];

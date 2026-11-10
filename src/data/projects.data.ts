/* ─── Flier images ───────────────────────────────────── */
export const adukeFlierImages = [
  '/images/aduke_flier/WhatsApp Image 2026-05-27 at 8.52.50 AM.jpeg',
  '/images/aduke_flier/WhatsApp Image 2026-05-27 at 8.52.51 AM.jpeg',
  '/images/aduke_flier/WhatsApp Image 2026-05-27 at 8.52.49 AM.jpeg',
  '/images/aduke_flier/WhatsApp Image 2026-05-27 at 8.52.53 AM.jpeg',
]

export const elysianFlierImages = [
  '/images/elysian_flier/WhatsApp Image 2026-05-27 at 8.55.51 AM594.jpeg',
  '/images/elysian_flier/WhatsApp Image 2026-05-27 at 8.54.12 AM.jpeg',
  '/images/elysian_flier/WhatsApp Image 2026-05-27 at 8.54.11 AM.jpeg',
  '/images/gallery/elysian/WhatsApp Image 2026-07-05 at 8.00.58 PM.jpeg',
  '/images/gallery/elysian/WhatsApp Image 2026-07-05 at 8.00.59 PM.jpeg',
  '/images/gallery/elysian/WhatsApp Image 2026-07-05 at 8.00.59 PM (1).jpeg',
  '/images/gallery/elysian/WhatsApp Image 2026-07-05 at 8.01.00 PM.jpeg',
]

export const paradisoProducts2 = [
  'Tomato',
  'Pepper',
  'Cucumber',
  'Sweet Potato',
]

export const paradisoProducts3 = [
  'Cocoa',
  'Oil Palm',
  'Farm cluster'
]

/* ─── Aduke unit types ───────────────────────────────── */
export const adukeUnits = [
  { label: '1 Bed Cottage - Terrace',        promo: '₦28M', deposit: '₦5M', plan6: '₦3,833,333/mo', plan12: '₦2,250,000/mo' },
  { label: '2 Bed Cottage - Semi Detached',   promo: '₦39M', deposit: '₦5M', plan6: '₦5,666,666/mo', plan12: '₦3,166,666/mo' },
  { label: '3 Bed Cottage - Fully Detached',  promo: '₦54M', deposit: '₦5M', plan6: '₦8,166,666/mo', plan12: '₦4,416,666/mo' },
]

export type AdukeUnit = typeof adukeUnits[number]

/* ─── Data ───────────────────────────────────────────── */
export const allListings = [
  
  {
    id: 3, title: 'Elysian Farms and Resort',       
    location: 'Ido-Eruwa Expressway, Ibadan', 
    state: 'Oyo',
    price: 0, acreage: 0, type: 'resort',
    image: '/products/elysian.png',
    badge: '🌿 Land Offer', verified: true,
    priceLabel: 'Contact Us', acreageLabel: 'Available on Sale',
    link: 'https://elysianfarmsandresort.agrolocale.com',
    linkLabel: 'View Elysian Farms & Resort',
    pdfUrl: undefined as string | undefined,
    note: '',
    cofo: true, paymentPlan: true,
    flierImages: elysianFlierImages,
    units: undefined as AdukeUnit[] | undefined,
    status: undefined as string | undefined,
    products: undefined as string[] | undefined,
  },
  {
    id: 2, title: 'Aduke Cottages',               
    location: 'Inside Elysian Farm & Resort, Ido-Eruwa Expressway, Ibadan', 
    state: 'Oyo',
    price: 0, acreage: 0, type: 'resort',
    image: '/products/cottages.jpeg',
    badge: '🏠 Housing Offer', verified: true,
    priceLabel: 'From ₦28M', acreageLabel: 'Available on Sale',
    link: 'https://elysianfarmsandresort.agrolocale.com/#cottages',
    linkLabel: 'View Aduke Cottages',
    pdfUrl: undefined as string | undefined,
    note: '6 months interest free · Initial deposit ₦5M · Managed by Localite Hospitality',
    cofo: true, paymentPlan: true,
    flierImages: adukeFlierImages,
    units: adukeUnits as AdukeUnit[] | undefined,
    status: undefined as string | undefined,
    products: undefined as string[] | undefined,
  },
  {
    id: 5, title: 'Paradiso Farms III',                  
    location: 'Alabata Road, Abeokuta', 
    state: 'Ogun',
    price: 0, acreage: 0, type: 'produce',
    image: '/products/paradiso_iii.jpeg',
    badge: 'Sold Out', verified: true,
    priceLabel: 'Contact Us', acreageLabel: 'Sold Out',
    link: '/contact',
    linkLabel: 'Sold Out',
    pdfUrl: undefined as string | undefined,
    note: '',
    products: paradisoProducts3 as string[] | undefined,
    cofo: false, paymentPlan: false,
    flierImages: [] as string[],
    units: undefined as AdukeUnit[] | undefined,
    status: 'sold-out' as string | undefined,
  },
  {
    id: 4, title: 'Paradiso Farms II', 
    location: 'Alabata Road, Abeokuta',
    state: 'Ogun',
    price: 0, acreage: 0, type: 'produce',
    image: '/products/paradiso_2_listing.jpeg',
    badge: 'Sold Out', verified: true,
    status: 'sold-out' as string | undefined,
    priceLabel: 'Contact Us', acreageLabel: 'Sold Out',
    link: '/contact',
    linkLabel: 'Sold Out',
    pdfUrl: undefined as string | undefined,
    note: '',
    products: paradisoProducts2 as string[] | undefined,
    cofo: false, paymentPlan: false,
    flierImages: [] as string[],
    units: undefined as AdukeUnit[] | undefined,
  },
//   {
//     id: 6, title: 'Garri Go! – Fresh & Crispy Garri Ijebu', location: 'Nationwide Delivery', state: 'All States',
//     price: 24_590, acreage: 0, type: 'produce',
//     image: '/products/garri.jpeg',
//     badge: '🔥 Hot Cake', verified: true,
//     priceLabel: '₦24,590 (25kg) · ₦48,590 (50kg)', acreageLabel: 'In Stock',
//     pdfUrl: undefined as string | undefined,
//     note: '',
//     cofo: false, paymentPlan: false,
//     flierImages: [] as string[],
//     units: undefined as AdukeUnit[] | undefined,
//     status: undefined as string | undefined,
//     products: undefined as string[] | undefined,
//   },
  {
    id: 1, title: 'Paradiso Farms I',                  
    location: 'Alabata Road, Abeokuta', 
    state: 'Ogun',
    price: 0, acreage: 0, type: 'produce',
    image: '/products/paradiso_new.jpeg',
    badge: 'Sold Out', verified: true,
    status: 'sold-out' as string | undefined,
    priceLabel: 'Contact Us', acreageLabel: 'Sold Out',
    link: '/contact',
    linkLabel: 'Sold Out',
    pdfUrl: undefined as string | undefined,
    note: '',
    cofo: false, paymentPlan: false,
    flierImages: [] as string[],
    units: undefined as AdukeUnit[] | undefined,
    products: undefined as string[] | undefined,
  },
]

export const propTypes = [
  { value: '',         label: 'All Types'       },
  { value: 'resort',   label: 'Farm & Resort'   },
  { value: 'produce',  label: 'Farm Produce'    },
]

export const states = ['All States', 'Oyo']

export const sortOpts = [
  { value: 'default',     label: 'Default'               },
  { value: 'price-asc',   label: 'Price: Low → High'     },
  { value: 'price-desc',  label: 'Price: High → Low'     },
  { value: 'acre-asc',    label: 'Acreage: Smallest'     },
  { value: 'acre-desc',   label: 'Acreage: Largest'      },
]

export type Listing = typeof allListings[number]

export function fmt(n: number, label?: string) {
  if (label) return label
  if (n >= 1e9) return `₦${(n / 1e9).toFixed(1)}B`
  return `₦${(n / 1e6).toFixed(0)}M`
}
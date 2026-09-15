export type ProjectId = "aduke" | "elysian" | "paradiso";
type FeaturedProjects = {
  id: ProjectId;
  title: string;
  image?: string;
  video?: string;
  alt: string;
  badge: string;
  badgeIcon: string;
  tags: string[];
  location: string;
  status: string;
};

export const featuredProjects: FeaturedProjects[] = [
  {
    id: "aduke",
    title: "Aduke Cottages",
    image: "/products/cottages.jpeg",
    alt: "Aduke Cottages",
    badge: "Housing Offer",
    badgeIcon: "🏠",
    tags: ["📜 CofO", "💳 Payment Plan Available"],
    location: "Inside Elysian Farm & Resort, Ibadan",
    status: "Available on Sale",
  },
  {
    id: "elysian",
    title: "Elysian Farms and Resort",
    video:
      "https://www.youtube.com/embed/XRTeuAO_ZQQ?autoplay=1&mute=1&loop=1&playlist=XRTeuAO_ZQQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1",

    alt: "Elysian Farm & Resort 3D Model",
    badge: "Land Offer",
    badgeIcon: "🌿",
    tags: ["📜 CofO", "💳 Payment Plan Available"],
    location: "Ido-Eruwa Expressway, Ibadan",
    status: "Available on Sale",
  },
  {
    id: "paradiso",
    title: "Paradiso III – Cocoa & Oil-palm",
    image: "/images/paradiso3/paradiso3_payment_plan.jpeg",
    alt: "Paradiso III – Cocoa & Oil-palm",
    badge: "Land Offer",
    badgeIcon: "🌿",
    tags: ["📜 CofO", "💳 Payment Plan Available"],
    location: "Alabata road, Abeokuta, Ogun State",
    status: "Available on Sale",
  },
];

export const farmProduce = [
  {
    id: 1,
    title: "Garri Go! – Fresh & Crispy",
    location: "Nationwide Delivery",
    price: "₦2,000",
    variants: "Variants: 1.5kg, 2kg, 25kg",
    type: "Farm Produce",
    image: "/farm-produce/garri-go/garri-go-4.jpg",
    badge: "In Stock",
    badgeKey: "green",
    href: "/farm-produce/garri-go",
  },

  {
    id: 2,
    title: "Garri Go Mix! – Crunchy & Creamy",
    location: "Nationwide Delivery",
    price: "₦2,800",
    variants: "Variants: 330ml, 500ml",
    type: "Farm Produce",
    image: "/farm-produce/garri-go-mix/garri-mix1.jpg",
    badge: "In Stock",
    badgeKey: "green",
    href: "/farm-produce/garri-go-mix",
  },

  {
    id: 3,
    title: "Habanero! – Hot & Fiery",
    location: "Nationwide Delivery",
    price: "₦4,000",
    variants: "Variants: 1kg",
    type: "Farm Produce",
    image: "/farm-produce/pepper/pepper3.jpg",
    badge: "In Stock",
    badgeKey: "green",
    href: "/farm-produce/habanero",
  },

  {
    id: 4,
    title: "Tomato! – Fresh & Juicy",
    location: "Nationwide Delivery",
    price: "₦3,000",
    variants: "Variants: 1kg",
    type: "Farm Produce",
    image: "/farm-produce/tomato/tomato.jpg",
    badge: "In Stock",
    badgeKey: "green",
    href: "/farm-produce/tomato",
  },

  {
    id: 5,
    title: "Plantain! – Fresh & Naturally Sweet",
    location: "Nationwide Delivery",
    price: "₦10,000 (bunch)",
    variants: "",
    type: "Farm Produce",
    image: "/farm-produce/plantain/plantain.png",
    badge: "In Stock",
    badgeKey: "green",
    href: "/farm-produce/plantain",
  },

  {
    id: 6,
    title: "Potatoes! – Fresh & Tasty",
    location: "Nationwide Delivery",
    price: "₦500",
    variants: "Variants: 1kg",
    type: "Farm Produce",
    image: "/farm-produce/potato.jpg",
    badge: "In Stock",
    badgeKey: "green",
    href: "/farm-produce/potatoes",
  },

  // {
  //   id: 7,
  //   title: "Garri Go Mix! – Crunchy & Creamy",
  //   location: "Nationwide Delivery",
  //   price: "₦2,000 (330ml)",
  //   acreage: "In Stock",
  //   type: "Farm Produce",
  //   image: "/farm-produce/garri_go_mix_330ml.jpeg",
  //   badge: "In Stock",
  //   badgeKey: "green",
  //   href: "/products/garri-go-mix",
  // },

  // {
  //   id: 8,
  //   title: 'Maize! – Fresh & Wholesome',
  //   location: 'Nationwide Delivery',
  //   price: '₦24,590 (25kg)',
  //   acreage: 'In Stock',
  //   type: 'Farm Produce',
  //   image: '/farm-produce/maize.jpg',
  //   badge: 'In Stock',
  //   badgeKey: 'red',
  //   href: '/products/maize',
  // },

  // {
  //   id: 9,
  //   title: 'Yam Tuber! – Fresh & Nutritious',
  //   location: 'Nationwide Delivery',
  //   price: '₦24,590 (25kg)',
  //   acreage: 'In Stock',
  //   type: 'Farm Produce',
  //   image: '/farm-produce/yam.jpg',
  //   badge: 'In Stock',
  //   badgeKey: 'red',
  //   href: '/products/yam-tuber',
  // },

  // {
  //   id: 10,
  //   title: 'Cucumber! – Crisp & Refreshing',
  //   location: 'Nationwide Delivery',
  //   price: '₦24,590 (25kg)',
  //   acreage: 'In Stock',
  //   type: 'Farm Produce',
  //   image: '/farm-produce/cucumber.jpg',
  //   badge: 'In Stock',
  //   badgeKey: 'red',
  //   href: '/products/cucumber',
  // },
  {
    id: 10,
    title: "Ugu! – Green & Fresh",
    location: "Nationwide Delivery",
    price: "₦1,000 (bundle)",
    variants: "",
    type: "Farm Produce",
    image: "/farm-produce/ugu/ugu1.jpg",
    badge: "In Stock",
    badgeKey: "green",
    href: "/farm-produce/ugu",
  },
  // {
  //   id: 11,
  //   title: 'Garri Go! – Fresh & Crispy',
  //   location: 'Nationwide Delivery',
  //   price: '₦24,590 (1.5Kg)',
  //   acreage: 'In Stock',
  //   type: 'Farm Produce',
  //   image: '/farm-produce/garrigo_1kg.jpeg',
  //   badge: 'In Stock',
  //   badgeKey: 'red',
  //   href: '/products/garri-go',
  // },
  // {
  //   id: 12,
  //   title: 'Garri Go! – Fresh & Crispy',
  //   location: 'Nationwide Delivery',
  //   price: '₦24,590 (2kg)',
  //   acreage: 'In Stock',
  //   type: 'Farm Produce',
  //   image: '/farm-produce/garrigo_2kg.jpeg',
  //   badge: 'In Stock',
  //   badgeKey: 'red',
  //   href: '/products/garri-go',
  // },
];

export const homeData = [
  { value: 9, prefix: "", suffix: "+", label: "Projects Completed" },
  { value: 832, prefix: "", suffix: "+", label: "Registered Investors" },
  { value: 139, prefix: "", suffix: "+", label: "Hectares Sold Out" },
  { value: 350, prefix: "", suffix: "+", label: "Households Served" },
];

export const whyItems = [
  {
    icon: "🤝",
    title: "Expert Guidance",
    desc: "Dedicated agro-realty consultants guide you through every step — from discovery to title transfer.",
  },
  {
    icon: "🌍",
    title: "Nationwide Coverage",
    desc: "Discover agricultural land across all 36 states and the FCT with our continuously growing network.",
  },
  {
    icon: "🔒",
    title: "Secure Transactions",
    desc: "End-to-end legal documentation and title verification protects your investment at every stage.",
  },
];

export const testimonials = [
  {
    name: "Adeola Bankole",
    role: "Commercial Farmer, Lagos",
    initials: "AB",
    color: "#1e4530",
    quote:
      "Agrolocale helped me find a 60-acre plantation in Kwara that met every requirement. The process was seamless and their support team was outstanding throughout the entire deal.",
  },
  {
    name: "Ibrahim Musa",
    role: "Agricultural Investor, Abuja",
    initials: "IM",
    color: "#c9a84c",
    quote:
      "I've used several platforms but nothing matches Agrolocale's listing quality and verification rigour. I've made three successful acquisitions through them and I keep coming back.",
  },
  {
    name: "Ngozi Okafor",
    role: "Agri-Business Owner, Enugu",
    initials: "NO",
    color: "#2a6344",
    quote:
      "Found the perfect irrigated farmland in Benue through Agrolocale. Their due-diligence support saved us from potential title issues — the deal closed smoothly and on time.",
  },
];

export const cropTabs = [
  {
    key: "habanero",
    label: "🌶️ Habanero",
    images: [
      "/images/gallery/habanero-1.jpeg",
      "/images/gallery/habanero-2.jpeg",
      "/images/gallery/habanero-3.jpeg",
      "/images/gallery/habanero-4.jpeg",
      "/images/gallery/habanero-5.jpeg",
      "/images/gallery/habanero-6.jpeg",
    ],
  },
  {
    key: "maize",
    label: "🌽 Maize",
    images: [
      "/images/gallery/maize-1.jpeg",
      "/images/gallery/maize-2.jpeg",
      "/images/gallery/maize-3.jpeg",
      "/images/gallery/maize-4.jpeg",
      "/images/gallery/maize-5.jpeg",
    ],
  },
  {
    key: "potato",
    label: "🥔 Sweet Potato",
    images: [
      "/images/gallery/potato-1.jpeg",
      "/images/gallery/potato-2.jpeg",
      "/images/gallery/potato-3.jpeg",
      "/images/gallery/potato-4.jpeg",
      "/images/gallery/potato-5.jpeg",
    ],
  },
];

/* ─── Flier images ───────────────────────────────────── */
export const adukeFlierImages = [
  "/images/aduke_flier/WhatsApp Image 2026-05-27 at 8.52.50 AM.jpeg",
  "/images/aduke_flier/WhatsApp Image 2026-05-27 at 8.52.51 AM.jpeg",
  "/images/aduke_flier/WhatsApp Image 2026-05-27 at 8.52.49 AM.jpeg",
  "/images/aduke_flier/WhatsApp Image 2026-05-27 at 8.52.53 AM.jpeg",
];

export const elysianFlierImages = [
  "/images/elysian_flier/WhatsApp Image 2026-05-27 at 8.55.51 AM594.jpeg",
  "/images/elysian_flier/WhatsApp Image 2026-05-27 at 8.54.12 AM.jpeg",
  "/images/elysian_flier/WhatsApp Image 2026-05-27 at 8.54.11 AM.jpeg",
  "/images/gallery/elysian/WhatsApp Image 2026-07-05 at 8.00.58 PM.jpeg",
  "/images/gallery/elysian/WhatsApp Image 2026-07-05 at 8.00.59 PM.jpeg",
  "/images/gallery/elysian/WhatsApp Image 2026-07-05 at 8.00.59 PM (1).jpeg",
  "/images/gallery/elysian/WhatsApp Image 2026-07-05 at 8.01.00 PM.jpeg",
];

export const paradisoFlierImages = [];

export const anniversaryEventImages = [
  {
    src: "/images/gallery/anniversary/WhatsApp Image 2026-07-05 at 8.00.58 PM.jpeg",
    alt: "Agrolocale Celebration Moment 1",
  },
  {
    src: "/images/gallery/anniversary/WhatsApp Image 2026-07-05 at 8.00.59 PM.jpeg",
    alt: "Agrolocale Celebration Moment 2",
  },
  {
    src: "/images/gallery/anniversary/WhatsApp Image 2026-07-05 at 8.00.59 PM (1).jpeg",
    alt: "Agrolocale Celebration Moment 3",
  },
  {
    src: "/images/gallery/anniversary/WhatsApp Image 2026-07-05 at 8.01.00 PM.jpeg",
    alt: "Agrolocale Celebration Moment 4",
  },
];

/* ─── Aduke unit types ───────────────────────────────── */
// const adukeUnits = [
//   { label: '1 Bed – Terrace',       promo: '₦28M', plan6: '₦3,833,333/mo', plan12: '₦2,250,000/mo' },
//   { label: '2 Bed – Semi Detached', promo: '₦39M', plan6: '₦5,666,666/mo', plan12: '₦3,166,666/mo' },
//   { label: '3 Bed – Fully Detached',promo: '₦54M', plan6: '₦8,166,666/mo', plan12: '₦4,416,666/mo' },
// ]

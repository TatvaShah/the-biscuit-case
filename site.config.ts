import type { SiteConfig } from "@/lib/types";

const ig = "https://www.instagram.com/thebiscuitcase/reel/";

export const site: SiteConfig = {
  name: "The Biscuit Case",
  tagline: "Custom cookies and macarons in Toronto, with pickup in Scarborough and delivery across the GTA.",
  category: "Custom cookies and macarons",
  schemaType: "Bakery",
  area: "Toronto and Scarborough, ON",
  siteUrl: "https://the-biscuit-case.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#3f7fb5" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Custom cookies and macarons in Toronto",
    headline: "Cookies made just for your celebration",
    subhead: "Hand decorated sugar cookies and macarons for birthdays, weddings, and events. Send a DM with your date and idea, at least 2 weeks ahead.",
    images: [
      { src: "/images/post-4.jpg", alt: "Floral decorated cookie set by The Biscuit Case" },
      { src: "/images/post-7.jpg", alt: "Wedding couple sugar cookies" },
      { src: "/images/post-6.jpg", alt: "Hand painted scenic sugar cookie" },
    ],
    secondaryCta: { label: "See the cookies", href: "#gallery" },
  },

  highlights: ["Custom sugar cookies", "Macarons", "Pickup in Scarborough", "Delivery in Toronto and the GTA"],

  about: {
    title: "One of a kind cookie sets",
    body: [
      "The Biscuit Case makes custom cookies and macarons in Toronto. Every set is designed around your event, from birthdays and retirements to weddings.",
      "Tell us your date, quantity, and design idea, and we will bring it to life. Pickup is in Scarborough, with delivery across Toronto and the GTA.",
    ],
    image: { src: "/images/post-2.jpg", alt: "Personalised custom cookie set" },
  },

  menu: {
    title: "What we make",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for a quote on your design, quantity, and date.",
    groups: [
      {
        title: "Custom orders",
        note: "Minimum 2 weeks notice",
        items: [
          { name: "Custom sugar cookies", description: "Hand decorated to match your theme." },
          { name: "Macarons" },
          { name: "Wedding and event cookie sets" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent cookie sets",
    items: [
      { src: "/images/post-4.jpg", width: 360, height: 640, alt: "Floral cookie set", caption: "Darling dessert set", href: ig + "C-kwGfbumTH/" },
      { src: "/images/post-7.jpg", width: 360, height: 640, alt: "Wedding couple cookies", caption: "Wedding set", href: ig + "Db3O7P5O_Iv/" },
      { src: "/images/post-6.jpg", width: 360, height: 640, alt: "Hand painted cookie", caption: "Our most detailed cookie yet", href: ig + "DYSdu-4JFUv/" },
      { src: "/images/post-1.jpg", width: 361, height: 640, alt: "Birthday sugar cookies", caption: "Bespoke 37th birthday cookies", href: ig + "Dbi8-GetPvA/" },
      { src: "/images/post-2.jpg", width: 360, height: 640, alt: "One of a kind cookie set", caption: "A one of a kind set", href: ig + "DCb-Iq8xK4L/" },
      { src: "/images/post-5.jpg", width: 361, height: 640, alt: "Wild One elephant cookie", caption: "Wild One birthday cookies", href: ig + "DUTTE_8DZPL/" },
      { src: "/images/post-8.jpg", width: 360, height: 640, alt: "Retirement cookie in progress", caption: "65th birthday and retirement", href: ig + "DGBPVfwRrR_/" },
      { src: "/images/post-3.jpg", width: 360, height: 640, alt: "Large custom cookie order", caption: "500 custom cookies", href: ig + "DT-yvmtDfD5/" },
    ],
  },

  instagram: { handle: "thebiscuitcase" },

  order: {
    title: "Order in a quick DM",
    intro: "Orders are taken by Instagram DM. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi The Biscuit Case! I would love to order custom cookies.\nDate needed:\nQuantity:\nFlavour:\nDesign idea (I can send an inspo photo):\nPickup or delivery:",
    links: [],
    note: "Minimum 2 weeks notice required. Pickup in Scarborough, delivery in Toronto and the GTA.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a DM on Instagram with your date, quantity, flavour, and design idea." },
    { q: "How much notice do you need?", a: "A minimum of 2 weeks notice is required for every order." },
    { q: "Do you deliver?", a: "Yes. Pickup is in Scarborough, and delivery is available in Toronto and the GTA." },
  ],

  contact: {
    area: "Toronto and Scarborough, Ontario",
    email: "",
    socials: [],
  },

  seo: {
    title: "The Biscuit Case | Custom cookies and macarons in Toronto",
    description: "Custom sugar cookies and macarons in Toronto. Pickup in Scarborough, delivery across the GTA. Order by Instagram DM with at least 2 weeks notice.",
    keywords: ["custom cookies Toronto", "macarons Toronto", "custom sugar cookies Scarborough", "wedding cookies GTA"],
    ogPhoto: "/images/og-photo.jpg",
  },
};

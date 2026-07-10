// =============================================================================
// SITE CONTENT CONFIG
// -----------------------------------------------------------------------------
// This is the ONLY file you should need to edit to update text, phone numbers,
// address, hours, services or gallery photos on the website.
//
// To change a photo: drop the new file in /public/images and update the
// `src` path below (keep the same folder). To add/remove a gallery photo,
// add/remove an entry in the `gallery` array.
//
// After editing, save the file and (if deployed on Vercel) push to GitHub —
// the live site rebuilds automatically in ~1 minute.
// =============================================================================

export const site = {
  businessName: "Hanumat Battery Service",
  shortName: "Hanumat Battery",
  ownerName: "Ajad Singh",
  tagline: "Genuine Exide & Luminous Batteries in Karwi, Chitrakoot Dham",
  description:
    "Hanumat Battery Service is a trusted Exide battery dealer in Karwi, Chitrakoot Dham, Uttar Pradesh, offering car, bike, inverter, solar and commercial vehicle batteries with free installation, battery charging and old-battery exchange.",

  // Public URL of the deployed site — update this after your first Vercel deploy
  // (e.g. "https://hanumatbattery.vercel.app") so SEO tags & sitemap are correct.
  siteUrl: "https://hanumat-battery.vercel.app",

  // ---- Contact -------------------------------------------------------------
  phones: [
    { number: "9532048072", label: "Ajad Singh (Primary)" },
    { number: "8851904799", label: "Alternate number" },
  ],
  primaryPhone: "9532048072",
  whatsappNumber: "919532048072", // country code + number, digits only
  whatsappMessage:
    "Hello, I found your shop online. I want to enquire about a battery.",
  email: null,

  // ---- Address & Map ---------------------------------------------------
  address: {
    line1: "Tulsi Nagar, Kasahai Road",
    locality: "Karwi, Chitrakoot Dham",
    state: "Uttar Pradesh",
    pincode: "210205",
    country: "India",
    full: "Tulsi Nagar, Kasahai Road, Karwi, Chitrakoot Dham, Uttar Pradesh 210205",
  },
  geo: { lat: 25.222318, lng: 80.9282516 },
  directionsUrl:
    "https://www.google.com/maps/dir//HANUMAT+Battery+service,+Tulsi+Nagar,+kasahai+road,+Chitrakoot+Dham,+Uttar+Pradesh+210205/@28.436958,77.0679584,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3984af1cd9f65903:0xa718a15ad18a6520!2m2!1d80.9282516!2d25.222318",
  mapEmbedSrc:
    "https://www.google.com/maps?q=25.222318,80.9282516&hl=en&z=16&output=embed",

  // ---- Hours -----------------------------------------------------------
  hoursDisplay: "Open All Days • 8:00 AM – 9:00 PM",
  hoursSchema: ["Mo-Su 08:00-21:00"], // used in JSON-LD structured data

  // ---- Services ----------------------------------------------------------
  services: [
    {
      title: "Car & SUV Batteries",
      description:
        "Genuine Exide car batteries for all makes and models, fitted for free on the spot.",
      icon: "car",
    },
    {
      title: "Bike & Two-Wheeler Batteries",
      description:
        "Long-life Exide bike batteries with instant fitting for scooters and motorcycles.",
      icon: "bike",
    },
    {
      title: "Inverter Batteries",
      description:
        "Exide & Luminous inverter batteries for uninterrupted home and shop power backup.",
      icon: "bolt",
    },
    {
      title: "Commercial & Three-Wheeler Batteries",
      description:
        "Heavy-duty batteries for trucks, tractors, e-rickshaws and three-wheelers.",
      icon: "truck",
    },
    {
      title: "Solar Batteries & Panels",
      description:
        "Solar battery solutions for homes and shops looking to cut electricity bills.",
      icon: "sun",
    },
    {
      title: "Battery Charging Service",
      description:
        "Quick battery charging and testing service for all battery types.",
      icon: "charge",
    },
    {
      title: "Old Battery Exchange",
      description:
        "Get the best exchange value on your old battery against a new one.",
      icon: "exchange",
    },
    {
      title: "Free Home Delivery & Fitting",
      description:
        "Order by phone or WhatsApp — we deliver and fit your battery at your doorstep in Karwi & Chitrakoot.",
      icon: "delivery",
    },
  ],

  // ---- Trust points (replaces fake testimonials) --------------------------
  trustPoints: [
    {
      title: "100% Genuine Exide Products",
      description:
        "We are a genuine battery dealer — every battery comes with full manufacturer warranty.",
    },
    {
      title: "Free Fitting & Doorstep Delivery",
      description:
        "Call or WhatsApp us and we'll deliver and install your new battery in Karwi & Chitrakoot Dham.",
    },
    {
      title: "Best Exchange Value",
      description:
        "Get a fair price for your old battery when you upgrade to a new one.",
    },
    {
      title: "All Vehicles, All Brands",
      description:
        "Car, bike, truck, tractor, inverter, solar — we stock batteries for every need.",
    },
  ],

  googleReviewUrl:
    "https://www.google.com/maps/dir//HANUMAT+Battery+service,+Tulsi+Nagar,+kasahai+road,+Chitrakoot+Dham,+Uttar+Pradesh+210205/@28.436958,77.0679584,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3984af1cd9f65903:0xa718a15ad18a6520!2m2!1d80.9282516!2d25.222318",

  // ---- Gallery -------------------------------------------------------------
  // Add or remove photos here. `src` must point to a file in /public/images.
  gallery: [
    {
      src: "/images/hanumat-battery-store-karwi-1.webp",
      alt: "Hanumat Battery Service shop signboard at night in Tulsi Nagar, Kasahai Road, Karwi Chitrakoot",
      caption: "Our shop signboard — Tulsi Nagar, Kasahai Road, Karwi",
    },
    {
      src: "/images/hanumat-battery-shop-front-chitrakoot.webp",
      alt: "Exide car and inverter battery display shelf inside Hanumat Battery Service Karwi",
      caption: "Wide range of Exide car & inverter batteries in stock",
    },
    {
      src: "/images/exide-battery-showcase-hanumat.webp",
      alt: "Exide bike, car and three-wheeler battery boxes on display at Hanumat Battery Service",
      caption: "Exide batteries for bikes, cars & three-wheelers",
    },
    {
      src: "/images/hanumat-battery-karwi.webp",
      alt: "Hanumat Battery Service poster showing Exide and Luminous inverter batteries with contact number and address",
      caption: "Exide & Luminous inverter batteries available",
    },
    {
      src: "/images/hanumat-battery-shop-interior.webp",
      alt: "Hanumat Battery Service shop interior with Exide battery stock, Karwi Chitrakoot",
      caption: "Inside our store — always stocked and ready",
    },
    {
      src: "/images/hanumat-battery-karwi-chitrakoot.webp",
      alt: "Hanumat Battery Service promotional banner with proprietor Ajad Singh contact details",
      caption: "Proprietor: Ajad Singh",
    },
    {
      src: "/images/hanumat-battery-kasahi-road-karwi.webp",
      alt: "Hanumat Battery Service inverter and solar battery display, Kasahai Road Karwi",
      caption: "Power your home with a smart inverter",
    },
  ],

  keywords: [
    "Exide battery dealer Chitrakoot",
    "battery shop Karwi",
    "Hanumat Battery Service",
    "car battery Karwi Chitrakoot",
    "bike battery shop Chitrakoot Dham",
    "inverter battery dealer Karwi",
    "Luminous battery Chitrakoot",
    "solar battery Karwi",
    "battery charging service Chitrakoot",
    "old battery exchange Karwi",
    "battery shop near Kasahai road",
    "battery shop Tulsi Nagar Karwi",
  ],
};

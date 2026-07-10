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
  tagline: "Your Trusted Battery Shop in Karwi & Chitrakoot Dham",
  description:
    "Need a battery? Hanumat Battery Service in Karwi, Chitrakoot Dham sells genuine Exide, Luminous, Microtek, Livguard and Amaron batteries for cars, bikes, inverters, solar, tractors and more. Free fitting, fast doorstep delivery, and a fair price for your old battery.",

  // Brands stocked, in order of emphasis — Exide is our primary/flagship brand.
  brands: ["Exide", "Luminous", "Microtek", "Livguard", "Amaron"],

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
  hoursDisplay: "Open All Days • 8:00 AM – 10:00 PM",
  hoursSchema: ["Mo-Su 08:00-22:00"], // used in JSON-LD structured data

  // ---- Services ----------------------------------------------------------
  // `href` (optional) links the card to its dedicated SEO landing page.
  services: [
    {
      title: "Car & SUV Batteries",
      description: "Exide & Amaron car batteries for any car. We fit it on the spot, free.",
      icon: "car",
      href: "/car-battery-chitrakoot",
    },
    {
      title: "Bike & Two-Wheeler Batteries",
      description: "Strong, long-life batteries for your bike or scooter. Fitted in minutes.",
      icon: "bike",
      href: "/bike-battery-chitrakoot",
    },
    {
      title: "E-Rickshaw & Auto Batteries",
      description: "Tough batteries built for e-rickshaws that run all day, every day.",
      icon: "truck",
      href: "/e-rickshaw-battery-chitrakoot",
    },
    {
      title: "Tractor & Farm Batteries",
      description: "Strong starting power for Mahindra, Swaraj, John Deere & Eicher tractors.",
      icon: "truck",
      href: "/tractor-battery-chitrakoot",
    },
    {
      title: "Inverter Batteries",
      description: "Exide, Luminous, Microtek & Livguard — never sit in the dark during a power cut.",
      icon: "bolt",
      href: "/inverter-battery-chitrakoot",
    },
    {
      title: "Solar Batteries & Panels",
      description: "Cut your electricity bill with a solar battery from Exide or Luminous.",
      icon: "sun",
      href: "/solar-battery-chitrakoot",
    },
    {
      title: "UPS & Computer Backup Batteries",
      description: "Keep your computer and shop billing running through every power cut.",
      icon: "charge",
      href: "/ups-battery-chitrakoot",
    },
    {
      title: "Truck, Bus & Commercial Vehicle Batteries",
      description: "Heavy-duty batteries for trucks, buses, tempos and generators.",
      icon: "truck",
      href: "/exide-battery-dealer-chitrakoot",
    },
    {
      title: "Battery Charging & Testing",
      description: "Not sure if your battery is dead or just needs a charge? We'll check it free.",
      icon: "charge",
      href: "/battery-replacement-chitrakoot",
    },
    {
      title: "Old Battery Exchange",
      description: "Hand over your old battery and get a good price against a new one.",
      icon: "exchange",
    },
    {
      title: "Free Home Delivery & Fitting",
      description: "Just call or WhatsApp us — we'll bring the battery to your door and fit it.",
      icon: "delivery",
      href: "/battery-home-delivery-chitrakoot",
    },
  ],

  // ---- Trust points (replaces fake testimonials) --------------------------
  trustPoints: [
    {
      title: "100% Genuine Batteries",
      description: "No local duplicates, ever. Every battery comes with full company warranty.",
    },
    {
      title: "Free Fitting & Doorstep Delivery",
      description: "Just call or WhatsApp — we'll bring it home and fit it for you, free.",
    },
    {
      title: "Best Exchange Value",
      description: "Bring your old battery, get a good price against your new one.",
    },
    {
      title: "All Vehicles, All Brands",
      description: "Exide, Luminous, Microtek, Livguard, Amaron — one shop for every battery need.",
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
    "Exide battery shop Chitrakoot",
    "genuine Exide battery",
    "battery shop near me",
    "battery dealer near me",
    "battery shop Karwi",
    "battery dealer Chitrakoot Dham",
    "Hanumat Battery Service",
    "car battery Karwi Chitrakoot",
    "car battery replacement Chitrakoot",
    "bike battery shop Chitrakoot Dham",
    "two wheeler battery Karwi",
    "e-rickshaw battery Chitrakoot",
    "tractor battery Chitrakoot",
    "inverter battery dealer Karwi",
    "Luminous battery Chitrakoot",
    "Microtek battery dealer Chitrakoot",
    "Livguard battery dealer Karwi",
    "Amaron battery dealer Chitrakoot",
    "solar battery Karwi",
    "UPS battery dealer Chitrakoot",
    "battery charging service Chitrakoot",
    "battery home delivery Chitrakoot",
    "old battery exchange Karwi",
    "battery shop near Kasahai road",
    "battery shop Tulsi Nagar Karwi",
    "battery shop near Chitrakoot Dham railway station",
    "एक्साइड बैटरी चित्रकूट",
    "बैटरी की दुकान चित्रकूट",
  ],
};

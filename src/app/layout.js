import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopContactBar from "@/components/TopContactBar";
import MobileStickyCallBar from "@/components/MobileStickyCallBar";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import { site } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.businessName} | ${site.tagline}`,
    template: `%s | ${site.businessName}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.ownerName }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.businessName,
    title: `${site.businessName} | ${site.tagline}`,
    description: site.description,
    url: site.siteUrl,
    images: [{ url: site.gallery[0]?.src, width: 1200, height: 900, alt: site.businessName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName} | ${site.tagline}`,
    description: site.description,
    images: [site.gallery[0]?.src],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <LocalBusinessJsonLd />
        <TopContactBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCallBar />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

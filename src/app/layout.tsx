import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import { organizationLd, websiteLd } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Traditional Spell Casting & Healing`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "spell caster",
    "love spells",
    "bring back lost lover",
    "protection spells",
    "curse removal",
    "money spells",
    "court case spells",
    "traditional spiritual healer",
    "spiritual healer online",
    "distance spell casting",
  ],
  authors: [{ name: site.caster.name, url: `${site.url}/about/` }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    url: "/",
    title: `${site.name} | Traditional Spell Casting & Healing`,
    description: site.description,
    images: [{ url: "/images/hero-hand-candle.jpg", width: 2000, height: 1250, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Traditional Spell Casting & Healing`,
    description: site.description,
    images: ["/images/hero-hand-candle.jpg"],
  },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
  verification: {
    google: site.verification.google || undefined,
    other: site.verification.bing ? { "msvalidate.01": site.verification.bing } : undefined,
  },
  category: "spirituality",
};

export const viewport: Viewport = {
  themeColor: "#0b0a14",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={[websiteLd, { "@context": "https://schema.org", ...organizationLd }]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

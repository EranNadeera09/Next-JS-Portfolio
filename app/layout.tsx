import type { Metadata } from "next";
import { Archivo, Roboto } from 'next/font/google';
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-archivo",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  // Primary SEO
  title: "Eran Nadeera | Creative Web Developer & Technical SEO Developer — Sri Lanka",
  description:
    "Eran Nadeera is a Creative Web Developer and Technical SEO Developer based in Sri Lanka with 6+ years of experience building fast, SEO-optimised websites on WordPress, Webflow, Shopify, and Next.js.",


  // Keywords (still used by some engines)
  keywords: [
    "web developer Sri Lanka",
    "technical SEO developer",
    "WordPress developer Sri Lanka",
    "Webflow developer",
    "Shopify developer",
    "Next.js developer",
    "freelance web developer",
    "Eran Nadeera",
    "SEO web developer",
    "WooCommerce developer",
  ],

  // Canonical
  alternates: {
    canonical: "https://erannadeera.com", // update with your real domain
  },

  // Open Graph — for social sharing
  openGraph: {
    title: "Eran Nadeera | Creative Web Developer & Technical SEO Developer",
    description:
      "Building fast, SEO-optimised websites on WordPress, Webflow, Shopify & Next.js. Based in Sri Lanka. Available for freelance projects.",
    url: "https://erannadeera.com",
    siteName: "Eran Nadeera Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // create a 1200×630 OG image and place it in /public
        width: 1200,
        height: 630,
        alt: "Eran Nadeera — Web Developer & Technical SEO Developer",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Eran Nadeera | Creative Web Developer & Technical SEO Developer",
    description:
      "Building fast, SEO-optimised websites on WordPress, Webflow, Shopify & Next.js. Based in Sri Lanka.",
    images: ["/og-image.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Icons
icons: {
  icon: [
    {
      url: "/menscreations-favicon.svg",
      type: "image/svg+xml",
    },
  ],
  apple: "/menscreations-favicon.svg",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${roboto.variable}`}>
      <body className="antialiased bg-stone-200 text-stone-900 font-body">
        {children}
      </body>
    </html>
  );
}
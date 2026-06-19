import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";
import StructuredData from "../components/StructuredData";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Lolly's Nail Bar | Gel Manicures & Acrylic Nails",
  description: "A futuristic approach to nail health and artistry. Custom designs reflecting your mood, style, and everyday energy. Gel manicures and acrylic sculpt services in South Africa.",
  keywords: ["nail studio", "gel manicure", "acrylic nails", "nail art", "South Africa", "nail technician", "manicure", "pedicure"],
  authors: [{ name: "Lolly's Nail Bar" }],
  creator: "Lolly's Nail Bar",
  publisher: "Lolly's Nail Bar",
  verification: {
    google: ["ULV7-BlxigOs1UuNEMhmBvLH4vMcB4Jyl8in6dSsdLU", "DImk03TLIgUnAZGpFU0gZpJD9qVvmg9IFWcMeNySwk0"],
  },
  openGraph: {
    title: "Lolly's Nail Bar | Gel Manicures & Acrylic Nails",
    description: "A futuristic approach to nail health and artistry. Custom designs reflecting your mood, style, and everyday energy.",
    url: "https://lollybeautybar.co.za",
    siteName: "Lolly's Nail Bar",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lolly's Nail Bar | Gel Manicures & Acrylic Nails",
    description: "A futuristic approach to nail health and artistry. Custom designs reflecting your mood, style, and everyday energy.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="canonical" href="https://lollybeautybar.co.za" />
        <link rel="preload" href="/mpumi.webp" as="image" type="image/webp" />
        <StructuredData />
      </head>
      <body className={`${playfairDisplay.variable} ${dancingScript.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

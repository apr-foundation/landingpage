import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "APR Foundation",
  description:
    "APR Foundation merupakan ekosistem pengembangan SDM & Organisasi berbasis kolaborasi multipihak, dengan pengalaman langsung menangani program pemerintah, korporasi, dan komunitas akar rumput di Indonesia.",

  metadataBase: new URL("https://aprfoundation.id"), // ganti dengan domain Anda

  applicationName: "APR Foundation",

  icons: {
    icon: [
      {
        url: "/assets/favicons/favicon-192x192.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/assets/favicons/favicon.ico",
        type: "image/x-icon",
      },
    ],
    shortcut: "/assets/favicons/favicon.ico",
    apple: "/assets/favicons/apple-touch-icon.png",
  },

  manifest: "/assets/favicons/site.webmanifest",

  appleWebApp: {
    title: "APR Foundation",
  },

  openGraph: {
    title: "APR Foundation",
    description:
      "APR Foundation merupakan ekosistem pengembangan SDM & Organisasi berbasis kolaborasi multipihak.",
    url: "https://aprfoundation.org",
    siteName: "APR Foundation",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "APR Foundation",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "APR Foundation",
    description:
      "APR Foundation merupakan ekosistem pengembangan SDM & Organisasi berbasis kolaborasi multipihak.",
    images: ["/assets/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

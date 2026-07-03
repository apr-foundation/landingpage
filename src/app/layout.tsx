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

  metadataBase: new URL("https://aprfoundation.org"),

  applicationName: "APR Foundation",

  icons: {
    icon: [
      {
        url: "/assets/favicons/web-app-manifest-192x192.png",
        sizes: "192x192",
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
    type: "website",
    locale: "id_ID",
    siteName: "Legal Corpora",
  },

  twitter: {
    card: "summary_large_image",
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

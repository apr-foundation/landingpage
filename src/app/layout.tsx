import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

type Props = {
  params: Promise<{
    locale: "id" | "en";
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const isID = locale === "id";

  return {
    title: {
      default: "APR Foundation",
      template: "%s | APR Foundation",
    },

    description: isID
      ? "APR Foundation merupakan ekosistem pengembangan SDM & Organisasi berbasis kolaborasi multipihak, dengan pengalaman langsung menangani program pemerintah, korporasi, dan komunitas akar rumput di Indonesia."
      : "APR Foundation is a collaborative ecosystem for talent and organizational development, delivering impactful programs for government, corporate, and grassroots communities across Indonesia.",

    metadataBase: new URL("https://aprfoundation.org"),

    applicationName: "APR Foundation",

    keywords: [
      "APR Foundation",
      "Indonesia",
      "Talent Development",
      "Leadership",
      "Community Development",
      "Agriculture",
      "Agripreneurship",
      "CSR",
      "Training",
      "Program Management",
      "Youth Development",
      "Social Impact",
    ],

    authors: [
      {
        name: "APR Foundation",
      },
    ],

    creator: "APR Foundation",

    publisher: "APR Foundation",

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    alternates: {
      canonical: `/${locale}`,
      languages: {
        id: "/id",
        en: "/en",
      },
    },

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
      locale: isID ? "id_ID" : "en_US",
      siteName: "APR Foundation",
      title: "APR Foundation",
      description: isID
        ? "APR Foundation merupakan ekosistem pengembangan SDM & Organisasi berbasis kolaborasi multipihak."
        : "APR Foundation is a collaborative ecosystem for talent and organizational development.",
      url: `/${locale}`,
    },

    twitter: {
      card: "summary_large_image",
      title: "APR Foundation",
      description: isID
        ? "APR Foundation merupakan ekosistem pengembangan SDM & Organisasi."
        : "APR Foundation is a collaborative ecosystem for talent and organizational development.",
    },
  };
}

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

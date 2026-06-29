import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TabProvider } from "@/context/TabContext";
import ClientLayout from "@/components/shared/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "APR Foundation",
  description:
    "APR Foundation merupakan ekosistem pengembangan SDM & Organisasi berbasis kolaborasi multipihak, dengan pengalaman langsung menangani program pemerintah, korporasi, dan komunitas akar rumput di Indonesia.",

  applicationName: "APR Foundation",

  appleWebApp: {
    title: "APR Foundation",
  },

  icons: {
    icon: [
      {
        url: "/assets/favicons/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/assets/favicons/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/assets/favicons/favicon.ico",
    apple: "/assets/favicons/apple-touch-icon.png",
  },

  manifest: "/assets/favicons/site.webmanifest",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="relative min-h-screen flex flex-col justify-between bg-white text-gray-800 font-sans selection:bg-primary-teal/20 selection:text-primary-blue antialiased">
        <TabProvider>
          <ClientLayout>{children}</ClientLayout>
        </TabProvider>
      </body>
    </html>
  );
}

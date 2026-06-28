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

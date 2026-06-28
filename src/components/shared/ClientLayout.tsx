"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTab } from "@/context/TabContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import CTASection from "./CTASection";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const { setActiveTab } = useTab();

  useEffect(() => {
    setMounted(true);
  }, []);
  // Update activeTab based on pathname
  useEffect(() => {
    const path = pathname.split("/")[1] || "home";
    setActiveTab(path);
  }, [pathname, setActiveTab]);

  const getViewKey = () => {
    const path = pathname.split("/")[1] || "home";
    return path;
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={getViewKey()}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <CTASection />
      <Footer />
    </>
  );
}

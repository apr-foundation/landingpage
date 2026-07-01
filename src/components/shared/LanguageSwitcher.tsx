"use client";

import { useLanguage } from "@/context/LanguageContext";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { locale, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const handleToggleLanguage = () => {
    const newLocale = locale === "id" ? "en" : "id";

    // Get current path without locale
    const pathSegments = pathname.split("/");
    const currentLocale = pathSegments[1];
    let newPath = "";

    if (currentLocale && (currentLocale === "id" || currentLocale === "en")) {
      // Replace locale in path
      pathSegments[1] = newLocale;
      newPath = pathSegments.join("/");
    } else {
      // Add locale
      newPath = `/${newLocale}${pathname}`;
    }

    router.push(newPath);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4 text-gray-700" />
      <span className="text-sm font-medium text-gray-700 uppercase">
        {locale === "id" ? "EN" : "ID"}
      </span>
    </motion.button>
  );
}

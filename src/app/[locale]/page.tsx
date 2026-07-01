"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { useTab } from "@/context/TabContext";
import HomeView from "@/components/landing/HomeView";

export default function HomePage() {
  const { locale } = useLanguage();
  const { t, loading } = useTranslation(locale);
  const { setActiveTab } = useTab();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-teal border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return <HomeView setActiveTab={setActiveTab} t={t} />;
}

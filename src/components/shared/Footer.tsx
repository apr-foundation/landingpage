"use client";

import { useTab } from "@/context/TabContext";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { setActiveTab } = useTab();
  const { locale } = useLanguage();
  const { t, loading } = useTranslation(locale, "footer");

  const handleQuickLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <footer className="relative bg-gray-950 text-gray-300 pt-20 pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="h-12 w-32 bg-gray-800 rounded mb-4"></div>
                <div className="h-4 w-full bg-gray-800 rounded mb-2"></div>
                <div className="h-4 w-3/4 bg-gray-800 rounded"></div>
              </div>
              <div>
                <div className="h-6 w-40 bg-gray-800 rounded mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 w-48 bg-gray-800 rounded"></div>
                  <div className="h-4 w-56 bg-gray-800 rounded"></div>
                  <div className="h-4 w-52 bg-gray-800 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative bg-gray-950 text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Decorative subtle background grid and glow blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-teal/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-secondary-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col space-y-5 ">
            <div className="flex items-center space-x-3">
              <Image
                src={"/assets/logos/Logo APR.png"}
                alt="Logo APR"
                width={100}
                height={100}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t?.description ||
                "APR Foundation merupakan ekosistem pengembangan SDM & Organisasi berbasis kolaborasi multipihak, dengan pengalaman langsung menangani program pemerintah, korporasi, dan komunitas akar rumput di Indonesia."}
            </p>
            <div className="flex items-center space-x-3.5">
              <a
                href="https://www.linkedin.com/company/aprfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 hover:border-primary-teal hover:text-primary-teal flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/aprfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 hover:border-secondary-purple hover:text-secondary-purple flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-5 ">
            <h4 className="text-white font-semibold font-sans text-sm uppercase tracking-wider border-l-2 border-primary-teal pl-3">
              {t?.quickNavigation || "Quick Navigation"}
            </h4>
            <ul className="flex flex-col space-y-3.5 text-sm text-gray-400">
              <li>
                <Link
                  href={`/${locale}`}
                  onClick={() => handleQuickLinkClick("home")}
                  className="hover:text-white transition-colors duration-250 cursor-pointer focus:outline-none"
                >
                  {t?.homeLink || "Home / Vision & Manifesto"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/programs`}
                  onClick={() => handleQuickLinkClick("programs")}
                  className="hover:text-white transition-colors duration-250 cursor-pointer focus:outline-none"
                >
                  {t?.programsLink || "Programs & Services (ILP, Agri)"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/portfolio`}
                  onClick={() => handleQuickLinkClick("portfolio")}
                  className="hover:text-white transition-colors duration-250 cursor-pointer focus:outline-none"
                >
                  {t?.portfolioLink || "Portfolio Sprints & Galleries"}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@aprfoundation.org"
                  className="hover:text-white transition-colors duration-250 cursor-pointer"
                >
                  {t?.inquiryLink || "Direct Inquiry (Email)"}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-5 lg:col-span-2 ">
            <h4 className="text-white font-semibold font-sans text-sm uppercase tracking-wider border-l-2 border-primary-blue pl-3">
              {t?.headquarters || "Headquarters & Contact"}
            </h4>
            <div className="grid gap-6 text-sm text-gray-400 ">
              <div className="flex flex-col space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-teal shrink-0 mt-0.5" />
                  <span>{t?.address || "South Jakarta, Indonesia"}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary-blue shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@aprfoundation.org"
                    className="hover:text-white transition-colors"
                  >
                    info@aprfoundation.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-850 pt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            {t?.copyright ||
              "© {year} APR Foundation. All Rights Reserved. South Jakarta, Indonesia."}
          </p>
          <div className="flex items-center space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">
              {t?.termsOfUse || "Terms of Use"}
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              {t?.privacyPolicy || "Privacy Policy"}
            </a>
            <button
              onClick={handleBackToTop}
              className="flex items-center space-x-1.5 py-1.5 px-3 rounded-lg bg-gray-900 border border-gray-850 hover:bg-gray-850 hover:text-white transition-all text-xs font-semibold focus:outline-none cursor-pointer"
            >
              <span>{t?.backToTop || "Back to top"}</span>
              <ArrowUp className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

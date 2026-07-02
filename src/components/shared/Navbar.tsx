"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Compass,
  Award,
  Sprout,
  Sparkles,
} from "lucide-react";
import Button from "./Button";
import { useTab } from "@/context/TabContext";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeTab, setActiveTab } = useTab();
  const { locale } = useLanguage();
  const { t, loading } = useTranslation(locale, "navbar");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items dengan path yang sudah termasuk locale
  const getNavItems = () => {
    const baseItems = [
      {
        id: "home",
        label: t?.home || "Home",
        icon: <Compass className="w-4 h-4" />,
        href: `/${locale}`,
      },
      {
        id: "programs",
        label: t?.programs || "Programs & Services",
        icon: <Award className="w-4 h-4" />,
        href: `/${locale}/programs`,
      },
      {
        id: "portfolio",
        label: t?.portfolio || "Portfolio",
        icon: <Sprout className="w-4 h-4" />,
        href: `/${locale}/portfolio`,
      },
    ];
    return baseItems;
  };

  const navItems = getNavItems();

  const handleNavClick = (id: string, href: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get current tab from pathname
  useEffect(() => {
    const pathSegments = pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];
    if (lastSegment === "" || lastSegment === locale) {
      setActiveTab("home");
    } else if (lastSegment === "programs") {
      setActiveTab("programs");
    } else if (lastSegment === "portfolio") {
      setActiveTab("portfolio");
    }
  }, [pathname, locale, setActiveTab]);

  if (loading) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/70 backdrop-blur-xl border-b border-gray-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="w-32 h-12 bg-gray-200 animate-pulse rounded"></div>
            <div className="hidden md:flex space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-24 h-10 bg-gray-200 animate-pulse rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <motion.header
        id="app-navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-white/70 backdrop-blur-xl shadow-md shadow-gray-100/30 border-b border-gray-200/40"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brandmark */}
            <button
              onClick={() => handleNavClick("home", `/${locale}`)}
              className="flex items-center space-x-3 group cursor-pointer focus:outline-none"
            >
              <div className="flex flex-col text-left">
                <Image
                  src={"/assets/logos/app/APR Foundation Rectangle.png"}
                  alt="Logo APR"
                  width={200}
                  height={200}
                />
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 bg-gray-100/60 p-1.5 rounded-full border border-gray-200/30">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <Link
                    href={item.href}
                    key={item.id}
                    onClick={() => handleNavClick(item.id, item.href)}
                    className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none cursor-pointer ${
                      isActive
                        ? "text-gray-950"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabGlow"
                        className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-150/40"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative flex items-center space-x-1.5 z-10">
                      {item.icon}
                      <span>{item.label}</span>
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Header CTA Button (Desktop) + Language Switcher */}
            <div className="hidden md:flex items-center gap-3">
              <LanguageSwitcher />
              <Button
                variant="primary"
                icon={
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                }
                onClick={() => {
                  window.location.href =
                    "mailto:info@aprfoundation.org?subject=Collaboration%20Inquiry";
                }}
                className="group py-2 md:py-2.5 px-5 md:px-6"
              >
                {t?.collaborate || "Collaborate"}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center justify-center p-2 rounded-xl bg-gray-100/80 text-gray-700 hover:bg-gray-200 transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gray-950/40 backdrop-blur-md md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-8 mt-16">
                <div className="flex flex-col space-y-4">
                  <div className="text-xs font-mono uppercase text-gray-400 tracking-widest border-b border-gray-100 pb-2">
                    {t?.navigationMenu || "Navigation Menu"}
                  </div>
                  {navItems.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <Link
                        href={item.href}
                        key={item.id}
                        onClick={() => handleNavClick(item.id, item.href)}
                        className={`flex items-center space-x-3 p-3.5 rounded-2xl text-left transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-primary-teal/10 to-primary-blue/10 text-primary-blue font-bold"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-xl ${
                            isActive ? "bg-primary-blue/10" : "bg-gray-150"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <span className="text-base font-medium">
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col space-y-4 pb-6">
                <div className="text-xs font-mono uppercase text-gray-400 tracking-widest border-b border-gray-100 pb-2 mb-2">
                  {t?.readyToStart || "Ready to start?"}
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    window.location.href = "mailto:info@aprfoundation.org";
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-center"
                >
                  {t?.collaborateWithUs || "Collaborate With Us"}
                </Button>
                <div className="text-center text-[10px] text-gray-400 font-mono">
                  info@aprfoundation.org
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

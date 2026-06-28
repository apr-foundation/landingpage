"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Award,
  Sprout,
  Sparkles,
  Users,
  Briefcase,
  Handshake,
  Calendar,
  GraduationCap,
  ShieldCheck,
  Globe,
  Tv,
  BarChart3,
  Network,
  Mail,
  Linkedin,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import {
  statsData,
  focusAreas,
  timelineJourney,
  teamMembers,
  whyChooseAPR,
  manifestoData,
} from "../../data/landing";
import Button from "../shared/Button";
import GlassCard from "../shared/GlassCard";
import Counter from "../shared/Counter";
import SectionTitle from "../shared/SectionTitle";
import LogoSlider from "../shared/LogoSlider";
import { useTab } from "@/context/TabContext";
import Image from "next/image";

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
}

export default function HomeView() {
  const { setActiveTab } = useTab();
  // Custom helper to dynamically fetch icons for statistics
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="w-7 h-7 text-primary-teal" />;
      case "Briefcase":
        return <Briefcase className="w-7 h-7 text-primary-blue" />;
      case "Handshake":
        return <Handshake className="w-7 h-7 text-secondary-purple" />;
      case "Calendar":
        return <Calendar className="w-7 h-7 text-emerald-500" />;
      default:
        return <Users className="w-7 h-7 text-gray-500" />;
    }
  };

  // Custom helper to fetch icons for focus areas
  const getFocusIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className={className} />;
      case "Award":
        return <Award className={className} />;
      case "Sprout":
        return <Sprout className={className} />;
      case "Sparkles":
        return <Sparkles className={className} />;
      default:
        return <Compass className={className} />;
    }
  };

  // Custom helper to fetch icons for feature cards
  const getFeatureIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className={className} />;
      case "ShieldCheck":
        return <ShieldCheck className={className} />;
      case "Globe":
        return <Globe className={className} />;
      case "Tv":
        return <Tv className={className} />;
      case "BarChart3":
        return <BarChart3 className={className} />;
      case "Network":
        return <Network className={className} />;
      default:
        return <Award className={className} />;
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById("about-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home-view" className="relative w-full pt-20">
      {/* SECTION 1: HERO BANNER */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-white py-20">
        {/* Animated Gradient Blobs in background */}
        <div className="blob top-[-100px] left-[-100px] animate-pulse-slow" />
        <div
          className="blob bottom-[-100px] right-[-100px] animate-pulse-slow"
          style={{
            background: "radial-gradient(circle,#6952AD 0%,transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline and CTAs */}
            <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center space-x-2.5 px-3 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary-teal/10 to-primary-blue/10 text-primary-blue border border-primary-teal/25 shadow-sm w-max"
              >
                <Sparkles className="w-4 h-4 text-primary-teal animate-spin-slow " />
                <span>APR Foundation</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 font-sans leading-[1.1]"
              >
                Wujudkan Potensi Terbaik bersama{" "}
                <br className="hidden sm:inline" />
                <span className="gradient-text-primary">APR Foundation</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl"
              >
                <span className="gradient-text-primary font-bold">
                  Create Your Force,
                </span>{" "}
                Shape The Future!
              </motion.p>

              {/* CTA Group */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <Button
                  variant="primary"
                  onClick={() => setActiveTab("programs")}
                >
                  Explore Programs & Services
                </Button>
                <Button variant="outline" onClick={scrollToAbout}>
                  Learn Our Story
                </Button>
              </motion.div>
            </div>

            {/* Right Column: Visual Floating Illustration & Overlapping Glass Cards */}

            <div className="lg:col-span-5 relative flex items-center justify-center mt-10 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-md"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&h=800&q=80"
                    alt="APR Foundation Activities"
                    className="w-full h-auto object-cover"
                  />

                  {/* Glass overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-purple-500/10" />

                  {/* Glass card di dalam gambar */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-effect backdrop-blur-md border bg-primary-teal/20 border-white/30">
                    <p className="text-white font-medium text-sm text-center">
                      Membangun Masa Depan Indonesia
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -top-6 -right-4 md:-right-8 p-4 rounded-2xl glass-effect shadow-lg border border-white/50 max-w-[200px] flex items-center space-x-3 select-none"
              >
                <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-600">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 font-mono">PILOTS</div>
                  <div className="font-extrabold text-sm text-gray-900 leading-tight">
                    100% Organic
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Down Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center mt-20"
          >
            <button
              onClick={scrollToAbout}
              className="group flex flex-col items-center space-y-2 cursor-pointer focus:outline-none"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400 group-hover:text-primary-blue transition-colors">
                Scroll To Explore
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-5 h-8.5 rounded-full border-2 border-gray-300 flex items-start justify-center p-1.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ABOUT APR FOUNDATION */}
      <section id="about-section" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Image with floating glass indicators */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="APR Foundation Team Session"
                  className="w-full object-cover aspect-4/5 hover:scale-102 transition-transform duration-700"
                />
              </div>

              {/* Overlay Glass Stat */}
              <div className="absolute -bottom-8 right-6 p-6 rounded-[2rem] glass-card bento-item shadow-xl text-left max-w-[260px]">
                <p className="text-xs text-gray-800 font-mono tracking-wider mb-1.5 uppercase font-bold">
                  FOUNDED IN
                </p>
                <p className="text-2xl font-extrabold text-gray-900 leading-tight">
                  South Jakarta
                </p>
                <p className="text-xs text-gray-800 mt-2">
                  Serving communities with biological science and ethical
                  governance frameworks.
                </p>
              </div>
            </div>

            {/* Right Column: Narrative content */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-teal">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
                Membangun Masa Depan Melalui Pengembangan Manusia
              </h2>
              <p className="text-base text-gray-500 leading-relaxed">
                <strong>APR Foundation</strong> merupakan ekosistem pengembangan
                SDM & Organisasi berbasis kolaborasi multipihak, dengan
                pengalaman langsung menangani program pemerintah, korporasi, dan
                komunitas akar rumput di Indonesia. Kami hadir untuk membantu
                menciptakan masa depan yang lebih baik
              </p>
              <p className="font-bold">
                Tagline Kami:{" "}
                <strong className="gradient-text-primary ">
                  Create Your Force, Shape The Future!
                </strong>
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Dengan semangat menemukan potensi yang tertanam dalam diri, APR
                berkomitmen mengembangkan kualitas sumber daya manusia,
                menumbuhkan jiwa kewirausahaan dan menyediakan layanan kreatif
                terbaik agar membentuk masa depan Indonesia yang lebih baik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: APR IN NUMBERS */}
      <section className="py-20 bg-gradient-to-tr from-gray-50 to-white relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="DATA-DRIVEN IMPACT"
            title=" Dampak yang Terukur dalam Angka"
            subtitle="Kami bangga dengan perjalanan dan pencapaian ini, yang mencerminkan komitmen kami terhadap pengembangan Sumber Daya Manusia dan Organisasi."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, idx) => (
              <GlassCard
                key={stat.id}
                glowColor={idx % 2 === 0 ? "blue" : "purple"}
                delay={idx * 0.1}
                className="text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                    {getStatIcon(stat.icon)}
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base tracking-tight mb-1">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">
                    {stat.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: APR FOCUS AREAS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="CORE FOCUS AREAS"
            title="Fokus Isu APR: Bidang Utama Perubahan"
            subtitle="APR memiliki komitmen kuat untuk menciptakan perubahan positif di berbagai sektor yang krusial bagi masa depan Indonesia."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className="glass-card bento-item p-8 rounded-[2rem] text-left flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${area.gradient} flex items-center justify-center text-white mb-6 shadow-md shadow-gray-200/50`}
                  >
                    {getFocusIcon(area.icon, "w-7 h-7")}
                  </div>
                  <Image
                    src={area.logo}
                    alt={area.title}
                    width={64}
                    height={64}
                  />
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight my-3 font-sans">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: VISION & MISSION */}
      <section className="py-24 bg-gradient-to-tr from-gray-50 via-white to-gray-50/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            badge="OUR COMPASS"
            title="Vision & Mission"
            subtitle="The fundamental values that direct our actions, cohorts, partnerships, and scientific audits."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mt-4">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100/50 hover:border-emerald-200/60 flex flex-col"
            >
              {/* Decorative top accent */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-100/20 to-emerald-50/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Badge */}
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100/50 w-fit mb-6">
                  Visi Kami
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-emerald-100/50 group-hover:bg-emerald-100 transition-colors duration-300 flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                  Menjadi Ekosistem Kolaboratif
                </h3>

                <p className="text-base text-gray-600 leading-relaxed flex-1">
                  dalam pengembangan Sumber Daya Manusia & Organisasi yang
                  berkualitas, kreatif dan berdampak positif bagi masyarakat
                  Indonesia.
                </p>

                {/* Decorative divider */}
                <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-200 rounded-full" />
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100/50 hover:border-purple-200/60 flex flex-col"
            >
              {/* Decorative top accent */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-100/20 to-purple-50/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Badge */}
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-100/50 w-fit mb-6">
                  Misi Kami
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-purple-100/50 group-hover:bg-purple-100 transition-colors duration-300 flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                  Misi Kami
                </h3>

                {/* Mission list */}
                <ul className="space-y-4 flex-1">
                  {[
                    "Menyelenggarakan program & proses kreatif berkualitas tinggi.",
                    "Menciptakan ekosistem kolaboratif yang inklusif.",
                    "Memfasilitasi pengembangan individu serta organisasi secara berkelanjutan.",
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 group-hover/item:bg-purple-200 transition-colors duration-300 flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-base text-gray-600 leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Decorative divider */}
                <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-purple-200 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: JOURNEY & MANIFESTO */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-50/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-50/20 rounded-full blur-3xl translate-y-1/3 translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-50/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            badge="OUR MANIFESTO"
            title="Perjalanan dan Manifesto"
            subtitle="Perjalanan dan Manifesto Kami"
          />

          <div className="max-w-4xl mx-auto mt-16">
            {/* Manifesto Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.21, 0.45, 0.27, 0.9] }}
              className="relative bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/60 rounded-3xl p-8 sm:p-12 border border-emerald-100/50 shadow-sm"
            >
              {/* Decorative quote marks */}
              <div className="absolute -top-3 -left-2 text-7xl font-serif text-emerald-200/60 leading-none">
                "
              </div>
              <div className="absolute -bottom-8 -right-2 text-7xl font-serif text-emerald-200/60 leading-none rotate-180">
                "
              </div>

              {/* Quote Content */}
              <div className="relative z-10">
                <blockquote className="text-2xl sm:text-3xl font-light text-gray-800 leading-relaxed text-center">
                  "{manifestoData.quote}"
                </blockquote>

                <div className="mt-6 flex justify-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Description Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {manifestoData.descriptions.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                  className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-emerald-200/60 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100/50 group-hover:bg-emerald-100 transition-colors duration-300 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Legal Foundation Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 bg-gray-50/80 rounded-2xl p-6 sm:p-8 border border-gray-100/80"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    {manifestoData.legal.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {manifestoData.legal.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: APR EXECUTIVE TEAM */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            badge="OUR CO-FOUNDERS & DIRECTORS"
            title="The Visionary Board"
            subtitle="Meet the educators, agriculturalists, and storytellers orchestrating our nationwide initiatives."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.21, 0.45, 0.27, 0.9],
                }}
                className="group flex flex-col bg-white/70 backdrop-blur-sm rounded-3xl p-7 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gray-100/50 hover:border-emerald-200/60"
              >
                {/* Header with image and name */}
                <div className="flex items-start gap-5">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-emerald-100 group-hover:ring-emerald-300 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white" />
                  </div>

                  <div className="pt-1 flex-1">
                    <h3 className="text-2xl font-bold leading-tight text-gray-900 group-hover:text-emerald-800 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-lg font-medium text-gray-600 mt-0.5">
                      <span className="text-emerald-600">—</span>{" "}
                      {member.position}
                    </p>
                  </div>
                </div>

                {/* Decorative divider */}
                <div className="ml-[84px] mt-4 h-0.5 w-12 bg-gradient-to-r from-emerald-300 to-emerald-100 rounded-full" />

                {/* Description */}
                <p className="mt-5 ml-[84px] text-gray-600 leading-relaxed text-base">
                  {member.description}
                </p>

                {/* Social Icons - Only show if socials exist */}
                {member.socials && (
                  <div className="ml-[84px] mt-5 flex items-center gap-3">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-emerald-600 transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}

                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-emerald-600 transition-colors duration-300"
                        aria-label="Instagram"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                    )}

                    {member.socials.email && (
                      <a
                        href={`mailto:${member.socials.email}`}
                        className="text-gray-400 hover:text-emerald-600 transition-colors duration-300"
                        aria-label="Email"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY CHOOSE APR */}
      <section className="py-24 bg-gradient-to-tr from-gray-50 to-white relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="WHY CHOOSE APR"
            title="Mengapa Memilih APR?"
            subtitle="Dengan pendekatan kolaboratif dan proses kerja yang kreatif, kami membantu individu dan organisasi mencapai potensi terbaik mereka. Kami berkomitmen untuk memberikan nilai tambah yang nyata"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
            {whyChooseAPR.map((feat, idx) => (
              <GlassCard
                key={feat.id}
                glowColor="blue"
                delay={idx * 0.08}
                className="text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-primary-teal/10 flex items-center justify-center text-primary-teal mb-5.5 shadow-sm">
                    {getFeatureIcon(feat.icon, "w-5.5 h-5.5")}
                  </div>
                  <h4 className="font-extrabold text-gray-950 text-base sm:text-lg tracking-tight my-2 font-sans">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                    {feat.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: TRUSTED PARTNERS */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <span className="text-xs font-mono uppercase text-gray-400 tracking-widest">
            STRENGTHENED BY TRUSTED INSTITUTIONS
          </span>
        </div>
        <LogoSlider />
      </section>
    </div>
  );
}

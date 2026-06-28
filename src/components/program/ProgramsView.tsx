import { motion } from "framer-motion";
import {
  Compass,
  Award,
  Sprout,
  Sparkles,
  Search,
  Sliders,
  Zap,
  TrendingUp,
  Check,
  ArrowRight,
  Mail,
  ChevronRight,
  Route,
  Rocket,
  ClipboardCheck,
} from "lucide-react";
import { programsData, processSteps } from "../../data/program";
import SectionTitle from "../shared/SectionTitle";
import GlassCard from "../shared/GlassCard";
import Button from "../shared/Button";
import { useTab } from "@/context/TabContext";
import Link from "next/link";

interface ProgramsViewProps {
  setActiveTab: (tab: string) => void;
}

export default function ProgramsView() {
  const { setActiveTab } = useTab();
  // Custom helper to fetch icons for focus areas
  const getProgramIcon = (iconName: string, className: string) => {
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

  // Custom helper to fetch icons for IDEA steps
  const getStepIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Search":
        return <Search className={className} />;
      case "Route":
        return <Route className={className} />;
      case "Rocket":
        return <Rocket className={className} />;
      case "ClipboardCheck":
        return <ClipboardCheck className={className} />;
      default:
        return <Search className={className} />;
    }
  };

  return (
    <div id="programs-view" className="relative w-full pt-20">
      {/* SECTION 1: HERO BANNER WITH BREADCRUMB */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Unsplash beautiful background of South Jakarta skyscraper skyline at twilight */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1600&q=80"
            alt="South Jakarta Skyline Banner"
            className="w-full h-full object-cover opacity-35"
          />
          {/* Custom Dual Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#111827] via-[#111827]/80 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs md:text-sm font-medium font-sans text-gray-400 mb-4 select-none">
            <Link
              href="/"
              onClick={() => setActiveTab("home")}
              className="hover:text-primary-teal transition-colors cursor-pointer"
            >
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Program dan Layanan</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans leading-none"
          >
            Program dan Layanan Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl"
          >
            Mengubah ekosistem korporasi, pemerintahan, dan pertanian melalui
            workshop berkualitas tinggi yang dirancang secara selektif,
            berorientasi praktik, dan memberikan kredensial resmi.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: PROGRAMS GRID */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4">
            <SectionTitle
              badge="ACTIVE COHORTS"
              title="Program dan Layanan"
              subtitle="APR menawarkan serangkaian program dan layanan kreatif yang dirancang untuk mengembangkan kualitas Sumber Daya Manusia serta Organisasi secara holistik."
            />
          </div>

          <div className="flex flex-col space-y-16">
            {programsData.map((prog, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={prog.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center glass-card rounded-[2rem] p-8 md:p-12 bento-item shadow-sm"
                >
                  {/* Image Block: alternating left-right on desktop */}
                  <div
                    className={`lg:col-span-5 relative ${
                      !isEven ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-video sm:aspect-4/3 lg:aspect-square">
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Left category badge floating */}
                    <div className="absolute top-4 left-4 py-1.5 px-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md shadow-md text-primary-blue border border-gray-150/50">
                      {prog.category}
                    </div>
                  </div>

                  {/* Narrative Block */}
                  <div
                    className={`lg:col-span-7 text-left flex flex-col space-y-5 ${
                      !isEven ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-xl bg-primary-teal/10 text-primary-teal">
                        {getProgramIcon(prog.icon, "w-6 h-6")}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight font-sans">
                        {prog.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-sans">
                      {prog.description}
                    </p>

                    {/* Benefit bullets checklists */}
                    <div className="flex flex-col space-y-3.5 pt-3 mb-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Key Outcomes & Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {prog.benefits.map((benefit, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start space-x-2.5 text-sm text-gray-600"
                          >
                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: WORKING PROCESS (IDEA FRAMEWORK) */}
      <section className="py-24 bg-gradient-to-tr from-gray-50 via-white to-gray-50/50 relative border-t border-gray-100">
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary-teal/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            badge="THE METRIC METHODOLOGY"
            title="Bagaimana Proses Kerja Kami? Pendekatan IDEA"
            subtitle="APR mengimplementasikan pendekatan sistematis IDEA (Insight, Direction, Execution, Assessment) untuk memastikan setiap proyek berjalan efektif dan efisien."
          />

          {/* Process Timeline Sprints */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative mt-16">
            {/* Visual connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary-teal via-primary-blue to-secondary-purple opacity-30 -z-10" />

            {/* Steps map */}
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col text-left group"
              >
                {/* Step Letter/Icon Circle block */}
                <div className="flex items-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4 lg:items-start mb-5">
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-gray-150 group-hover:border-primary-teal transition-colors shadow-sm font-extrabold text-lg text-primary-teal font-sans">
                    {step.letter}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-gray-50 border border-gray-150 flex items-center justify-center text-gray-500 scale-85 group-hover:scale-95 group-hover:bg-primary-teal/10 group-hover:text-primary-teal transition-all">
                      {getStepIcon(step.icon, "w-3 h-3")}
                    </div>
                  </div>
                </div>

                {/* Text Block inside white cards */}
                <GlassCard
                  glowColor="blue"
                  hoverEffect={false}
                  className="flex-1 p-5.5 rounded-2xl border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-base font-extrabold text-gray-950 tracking-tight font-sans mb-2 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Step checklists */}
                  <div className="border-t border-gray-100 pt-3 flex flex-col space-y-1.5">
                    {step.details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center space-x-2 text-[11px] text-gray-500 font-sans"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-blue shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

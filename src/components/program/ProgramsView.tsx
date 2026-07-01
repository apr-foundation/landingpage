"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Award,
  Sprout,
  Sparkles,
  Search,
  Check,
  ChevronRight,
  Route,
  Rocket,
  ClipboardCheck,
  Users,
  PlayCircle,
} from "lucide-react";
import { programsData, processSteps } from "../../data/program";
import SectionTitle from "../shared/SectionTitle";
import GlassCard from "../shared/GlassCard";
import { useTab } from "@/context/TabContext";
import Link from "next/link";

interface ProgramsViewProps {
  setActiveTab: (tab: string) => void;
  t: any; // Translation object
}

export default function ProgramsView({ setActiveTab, t }: ProgramsViewProps) {
  const { setActiveTab: setTab } = useTab();

  // Custom helper to fetch icons for programs
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
      case "Users":
        return <Users className={className} />;
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
      case "PlayCircle":
        return <PlayCircle className={className} />;
      case "ClipboardCheck":
        return <ClipboardCheck className={className} />;
      default:
        return <Search className={className} />;
    }
  };

  // Helper untuk mendapatkan data program dari terjemahan
  const getTranslatedProgram = (program: any) => {
    const translated = t.programs?.items?.[program.id];
    return {
      title: translated?.title || program.title,
      description: translated?.description || program.description,
      category: translated?.category || program.category,
      benefits: translated?.benefits || program.benefits,
    };
  };

  // Helper untuk mendapatkan data step dari terjemahan
  const getTranslatedStep = (step: any) => {
    const translated = t.process?.steps?.[step.letter];
    return {
      title: translated?.title || step.title,
      description: translated?.description || step.description,
      details: translated?.details || step.details,
    };
  };

  return (
    <div id="programs-view" className="relative w-full pt-20">
      {/* SECTION 1: HERO BANNER WITH BREADCRUMB */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/leadership/background1.jpg"
            alt="South Jakarta Skyline Banner"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#111827] via-[#111827]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <nav className="flex items-center space-x-2 text-xs md:text-sm font-medium font-sans text-gray-400 mb-4 select-none">
            <Link
              href="/"
              onClick={() => setTab("home")}
              className="hover:text-primary-teal transition-colors cursor-pointer"
            >
              {t.hero?.breadcrumbHome || "Beranda"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">
              {t.hero?.breadcrumbProgram || "Program dan Layanan"}
            </span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans leading-none"
          >
            {t.hero?.title || "Program dan Layanan Kami"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl"
          >
            {t.hero?.subtitle ||
              "Mengubah ekosistem korporasi, pemerintahan, dan pertanian melalui workshop berkualitas tinggi yang dirancang secara selektif, berorientasi praktik, dan memberikan kredensial resmi."}
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: PROGRAMS GRID */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4">
            <SectionTitle
              badge={t.programs?.badge || "ACTIVE COHORTS"}
              title={t.programs?.title || "Program dan Layanan"}
              subtitle={
                t.programs?.subtitle ||
                "APR menawarkan serangkaian program dan layanan kreatif yang dirancang untuk mengembangkan kualitas Sumber Daya Manusia serta Organisasi secara holistik."
              }
            />
          </div>

          <div className="flex flex-col space-y-16">
            {programsData.map((prog, idx) => {
              const isEven = idx % 2 === 0;
              const translated = getTranslatedProgram(prog);

              return (
                <motion.div
                  key={prog.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center glass-card rounded-[2rem] p-8 md:p-12 bento-item shadow-sm"
                >
                  <div
                    className={`lg:col-span-5 relative ${
                      !isEven ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-video sm:aspect-4/3 lg:aspect-square">
                      <img
                        src={prog.image}
                        alt={translated.title}
                        className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="absolute top-4 left-4 py-1.5 px-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md shadow-md text-primary-blue border border-gray-150/50">
                      {translated.category}
                    </div>
                  </div>

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
                        {translated.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-sans">
                      {translated.description}
                    </p>

                    <div className="flex flex-col space-y-3.5 pt-3 mb-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        {t.programs?.keyOutcomes ||
                          "Key Outcomes & Deliverables"}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {translated.benefits.map(
                          (benefit: string, bIdx: number) => (
                            <div
                              key={bIdx}
                              className="flex items-start space-x-2.5 text-sm text-gray-600"
                            >
                              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </div>
                          )
                        )}
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
            badge={t.process?.badge || "THE METRIC METHODOLOGY"}
            title={
              t.process?.title || "Bagaimana Proses Kerja Kami? Pendekatan IDEA"
            }
            subtitle={
              t.process?.subtitle ||
              "APR mengimplementasikan pendekatan sistematis IDEA (Insight, Direction, Execution, Assessment) untuk memastikan setiap proyek berjalan efektif dan efisien."
            }
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative mt-16">
            <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary-teal via-primary-blue to-secondary-purple opacity-30 -z-10" />

            {processSteps.map((step, idx) => {
              const translated = getTranslatedStep(step);

              return (
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
                  <div className="flex items-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4 lg:items-start mb-5">
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-gray-150 group-hover:border-primary-teal transition-colors shadow-sm font-extrabold text-lg text-primary-teal font-sans">
                      {step.letter}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-gray-50 border border-gray-150 flex items-center justify-center text-gray-500 scale-85 group-hover:scale-95 group-hover:bg-primary-teal/10 group-hover:text-primary-teal transition-all">
                        {getStepIcon(step.icon, "w-3 h-3")}
                      </div>
                    </div>
                  </div>

                  <GlassCard
                    glowColor="blue"
                    hoverEffect={false}
                    className="flex-1 p-5.5 rounded-2xl border border-gray-100 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-base font-extrabold text-gray-950 tracking-tight font-sans mb-2 leading-tight">
                        {translated.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-sans mb-4">
                        {translated.description}
                      </p>
                    </div>

                    <div className="border-t border-gray-100 pt-3 flex flex-col space-y-1.5">
                      {translated.details.map(
                        (detail: string, dIdx: number) => (
                          <div
                            key={dIdx}
                            className="flex items-center space-x-2 text-[11px] text-gray-500 font-sans"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-blue shrink-0" />
                            <span>{detail}</span>
                          </div>
                        )
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

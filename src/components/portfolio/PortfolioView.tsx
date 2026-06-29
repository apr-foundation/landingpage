import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronRight, X } from "lucide-react";
import {
  agricultureData,
  creativeData,
  leadershipData,
  videoPortfolio,
} from "../../data/portfolio";
import { useTab } from "@/context/TabContext";
import Link from "next/link";
import ProgramSection from "./ProgramSection";

export default function PortfolioView() {
  const { setActiveTab } = useTab();
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <div id="portfolio-view" className="relative w-full pt-20">
      {/* SECTION 1: HERO BANNER */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/leadership/background2.jpg"
            alt="Corporate Project Team"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#111827] via-[#111827]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <nav className="flex items-center space-x-2 text-xs md:text-sm font-medium font-sans text-gray-400 mb-4 select-none">
            <Link
              href={"/"}
              onClick={() => setActiveTab("home")}
              className="hover:text-primary-teal transition-colors cursor-pointer"
            >
              Beranda
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Portofolio</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans leading-none"
          >
            Projek dan Portofolio Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl"
          >
            Dokumentasi berbagai proyek, program, dan kolaborasi yang telah kami
            realisasikan sebagai wujud komitmen dalam menciptakan dampak nyata
            melalui pengembangan talenta, manajemen program, kepemimpinan, dan
            solusi kreatif.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: INDONESIA LEADERSHIP PROJECT */}
      <ProgramSection data={leadershipData} variant="leadership" />

      {/* SECTION 3: REGENERATIVE AGRICULTURE */}
      <ProgramSection data={agricultureData} variant="agriculture" />

      {/* SECTION 4: CREATIVE MANAGEMENT */}
      <ProgramSection data={creativeData} variant="creative" />

      {/* SECTION 5: VIDEO CARDS (COMPANY PROFILE & TVC) */}
      <section className="py-24 bg-gray-950 text-gray-300 relative overflow-hidden">
        {/* Soft decorative background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-teal/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-gray-300 mb-4 border border-white/10 shadow-sm">
              APR CINEMATICS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Featured TVC & Film Profiles
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-gray-400">
              Watch our custom documentaries and official graduation summaries
              detailing South Jakarta and West Java programs. Click play to
              watch.
            </p>
          </div>

          {/* Grid Layout of video cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {videoPortfolio.map((vid, idx) => (
              <motion.div
                key={vid.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-gray-900/80 backdrop-blur-md border border-gray-800/80 rounded-[2rem] overflow-hidden flex flex-col justify-between text-left shadow-lg bento-item hover:border-primary-teal/30"
              >
                {/* Thumbnail Block with Play button hover effect */}
                <div
                  className="relative aspect-video bg-gray-950 cursor-pointer overflow-hidden"
                  onClick={() => setActiveVideoId(vid.youtubeId)}
                >
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-104 group-hover:opacity-90 transition-all duration-500"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      className="w-14 h-14 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-lg transition-transform"
                    >
                      <Play className="w-6 h-6 fill-gray-900 ml-1" />
                    </motion.div>
                  </div>

                  {/* Duration and category tags */}
                  <div className="absolute bottom-3 left-3 py-1 px-2.5 rounded-md text-[10px] font-mono font-bold bg-gray-950/85 text-white">
                    {vid.category}
                  </div>
                  {vid.duration && (
                    <div className="absolute bottom-3 right-3 py-1 px-2.5 rounded-md text-[10px] font-mono font-bold bg-gray-950/85 text-white">
                      {vid.duration}
                    </div>
                  )}
                </div>

                {/* Info Text */}
                <div className="p-6">
                  <h4 className="font-extrabold text-white text-base sm:text-lg mb-2 leading-snug group-hover:text-primary-teal transition-colors">
                    {vid.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    {vid.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL YOUTUBE PLAYER OVERLAY */}
      <AnimatePresence>
        {activeVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gray-950/95 flex items-center justify-center p-4 sm:p-6 md:p-8"
            onClick={() => setActiveVideoId(null)}
          >
            {/* Close Button top-right */}
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus:outline-none"
              aria-label="Close video player"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Frame */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                title="YouTube Video Player"
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

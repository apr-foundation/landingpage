import { motion } from "framer-motion";
import { Calendar, Sprout } from "lucide-react";
import Image from "next/image";

interface ProgramSectionProps {
  data?: any;
  variant?: "leadership" | "agriculture" | "creative";
  t?: any; // Translation object
}

const ProgramSection = ({
  data = {},
  variant = "leadership",
  t,
}: ProgramSectionProps) => {
  const { icon, title, badge, description, tags, pillars, portfolio } = data;

  // Helper untuk mendapatkan terjemahan
  const getTranslated = () => {
    if (!t) return null;

    const sectionKey = variant;
    const translatedSection = t.sections?.[sectionKey];
    return {
      title: translatedSection?.title || title,
      description: translatedSection?.description || description,
      badge: translatedSection?.badge || badge,
      tags: translatedSection?.tags || tags,
      pillars: pillars?.map((pillar: any) => {
        const pillarKey = pillar.title.toLowerCase().replace(/\s+/g, "-");
        const translated = translatedSection?.pillars?.[pillarKey];
        return {
          ...pillar,
          title: translated?.title || pillar.title,
          description: translated?.description || pillar.description,
        };
      }),
      portfolio: portfolio?.map((item: any) => {
        const translated = translatedSection?.portfolio?.[item.id];
        return {
          ...item,
          title: translated?.title || item.title,
          subtitle: translated?.subtitle || item.subtitle,
          category: translated?.category || item.category,
          description: translated?.description || item.description || "",
        };
      }),
    };
  };

  const translatedData = getTranslated() || data;

  console.log(translatedData);
  const {
    title: translatedTitle,
    description: translatedDescription,
    tags: translatedTags,
    pillars: translatedPillars,
    portfolio: translatedPortfolio,
  } = translatedData;

  // Variant-specific styling
  const getVariantStyles = () => {
    switch (variant) {
      case "leadership":
        return {
          bg: "bg-white",
          border: "border-primary-teal/15",
          badgeBg: "bg-primary-teal/10",
          badgeText: "text-primary-teal",
          accent: "bg-primary-teal/10",
          tagBg: "bg-gray-100",
          tagText: "text-gray-600",
          hoverBorder: "hover:border-primary-teal/30",
        };
      case "agriculture":
        return {
          bg: "bg-gradient-to-tr from-gray-50 via-white to-gray-50/50",
          border: "border-green-300/15",
          badgeBg: "bg-green-300/10",
          badgeText: "text-green-700",
          accent: "bg-green-100",
          tagBg: "bg-gray-150/60",
          tagText: "text-gray-700",
          hoverBorder: "hover:border-emerald-300",
        };
      case "creative":
        return {
          bg: "bg-white",
          border: "border-secondary-purple/15",
          badgeBg: "bg-secondary-purple/10",
          badgeText: "text-secondary-purple",
          accent: "bg-secondary-purple/10",
          tagBg: "bg-gray-100",
          tagText: "text-gray-600",
          hoverBorder: "hover:border-secondary-purple/30",
        };
      default:
        return {};
    }
  };

  const styles = getVariantStyles();
  const isAgriculture = variant === "agriculture";
  const isCreative = variant === "creative";

  // Fungsi untuk menentukan apakah portofolio menggunakan gaya agriculture atau creative
  const getPortfolioStyle = () => {
    if (isAgriculture) return "creative";
    if (isCreative) return "agriculture";
    return "default";
  };

  const portfolioStyle = getPortfolioStyle();
  const useAgricultureStyle = portfolioStyle === "agriculture";
  const useCreativeStyle = portfolioStyle === "creative";

  // Menentukan grid columns berdasarkan variant
  const getGridColumns = () => {
    if (isCreative) {
      return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";
    }
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  };

  // Menentukan aspect ratio untuk agriculture style (creative variant)
  const getAspectRatio = () => {
    if (isCreative && useAgricultureStyle) {
      return "aspect-[9/16]";
    }
    if (useAgricultureStyle) {
      return "aspect-[4/3]";
    }
    return "";
  };

  return (
    <section
      className={`py-24 ${styles.bg} relative ${
        !isAgriculture ? "" : "border-y border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left max-w-2xl ">
            <Image
              src={icon}
              alt={translatedTitle}
              width={icon == "/assets/logos/Mudatani.png" ? 120 : 60}
              height={icon == "/assets/logos/Mudatani.png" ? 120 : 60}
              className="mb-4"
            />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight font-sans mb-3">
              {translatedTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-sans leading-relaxed">
              {translatedDescription}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
            {translatedTags?.map((tag: any) => (
              <span
                key={tag}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold ${styles.tagBg} ${styles.tagText} border border-gray-150/40`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            isCreative ? "lg:grid-cols-2" : "lg:grid-cols-3"
          }  gap-6 mb-14`}
        >
          {translatedPillars?.map((pillar: any, idx: number) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100/50 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-xl ${styles.accent} flex items-center justify-center text-xl`}
                >
                  {idx === 0 ? "1" : idx === 1 ? "2" : "3"}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800 mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Grid - dengan styling yang ditukar */}
        <div>
          {isCreative && (
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-text-primary tracking-tight font-sans mb-12">
              {t?.sections?.creative?.portfolioTitle ||
                "Portfolio Social Media Management"}
            </h2>
          )}
          <div
            className={`grid ${getGridColumns()} gap-4 md:gap-6 lg:gap-8 justify-items-center`}
          >
            {translatedPortfolio?.map((item: any, idx: number) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className={`group flex flex-col justify-between rounded-[2rem] overflow-hidden glass-card bento-item text-left shadow-sm w-full ${
                  useAgricultureStyle ? getAspectRatio() : ""
                }`}
              >
                {useAgricultureStyle ? (
                  // Gaya Agriculture
                  <>
                    <div className="relative w-full h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent flex flex-col justify-end p-4 sm:p-6 text-left opacity-90 sm:opacity-75 group-hover:opacity-95 transition-opacity duration-300">
                        <span className="inline-flex items-center space-x-1.5 text-[8px] sm:text-[10px] font-mono tracking-wider font-bold text-emerald-400 uppercase mb-1 sm:mb-2">
                          <Sprout className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span>{item.category}</span>
                        </span>
                        <h3 className="text-white font-extrabold text-sm sm:text-base lg:text-lg tracking-tight mb-0.5 sm:mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-gray-300 leading-normal max-h-0 group-hover:max-h-16 overflow-hidden transition-all duration-300 ease-in-out">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  // Gaya Card
                  <>
                    <div className="overflow-hidden aspect-video relative bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />

                      <div
                        className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-white/90 backdrop-blur-md ${
                          useCreativeStyle
                            ? "text-secondary-purple"
                            : "text-primary-blue"
                        } shadow-sm`}
                      >
                        {item.category}
                      </div>
                    </div>

                    <div className="p-6">
                      {!useCreativeStyle && (
                        <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono mb-2">
                          <Calendar className="w-3.5 h-3.5 text-primary-teal" />
                          <span>
                            {t?.sections?.[variant]?.yearLabel || "Year"}:{" "}
                            {item.year}
                          </span>
                        </div>
                      )}
                      <h3
                        className={`text-lg font-bold text-gray-950 mb-2 leading-snug group-hover:text-${
                          useCreativeStyle ? "secondary-purple" : "primary-blue"
                        } transition-colors`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans mb-3 font-medium">
                        {item.subtitle}
                      </p>
                      {item.description && (
                        <p className="text-xs text-gray-400 leading-relaxed font-sans border-t border-gray-100 pt-3.5">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;

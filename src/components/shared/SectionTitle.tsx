import { motion } from "framer-motion";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  id?: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
  id,
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <motion.div
      id={id || `sec-title-${Math.random().toString(36).substr(2, 9)}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignmentClasses[align]} ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-primary-teal/10 to-primary-blue/10 text-primary-blue mb-4 border border-primary-teal/15 shadow-sm">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 font-sans leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-500 font-sans font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="h-1.5 w-20 rounded-full mt-6 bg-gradient-to-r from-primary-teal to-primary-blue opacity-80" />
    </motion.div>
  );
}

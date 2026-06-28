import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "emerald" | "none";
  hoverEffect?: boolean;
  delay?: number;
  id?: string;
  key?: string | number;
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "none",
  hoverEffect = true,
  delay = 0,
  id,
}: GlassCardProps) {
  const glowStyles = {
    blue: "hover:shadow-[0_0_30px_rgba(52,168,184,0.15)]",
    purple: "hover:shadow-[0_0_30px_rgba(105,82,173,0.15)]",
    emerald: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    none: "hover:shadow-md",
  };

  return (
    <motion.div
      id={id || `glass-${Math.random().toString(36).substr(2, 9)}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverEffect ? { y: -2 } : undefined}
      className={`glass-card rounded-[2rem] p-6 md:p-8 bento-item transition-shadow duration-500 ${
        hoverEffect ? glowStyles[glowColor] : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

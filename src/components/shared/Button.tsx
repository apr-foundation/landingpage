import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  id?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  icon,
  iconPosition = "right",
  id,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none text-sm md:text-base px-6 py-2.5 md:px-8 md:py-3.5 shadow-sm";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-primary-teal to-primary-blue text-white hover:shadow-lg hover:shadow-primary-blue/20 focus:ring-primary-teal",
    secondary:
      "bg-gradient-to-r from-primary-blue to-secondary-purple text-white hover:shadow-lg hover:shadow-secondary-purple/20 focus:ring-primary-blue",
    accent:
      "bg-white text-primary-blue hover:bg-gray-50 focus:ring-white border border-gray-100",
    outline:
      "bg-transparent text-primary-blue border-2 border-primary-blue/30 hover:border-primary-blue hover:bg-primary-blue/5 focus:ring-primary-blue",
    ghost:
      "bg-transparent text-gray-600 hover:text-primary-blue hover:bg-gray-100/50 focus:ring-gray-300 shadow-none",
  };

  return (
    <motion.button
      id={id || `btn-${Math.random().toString(36).substr(2, 9)}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </motion.button>
  );
}

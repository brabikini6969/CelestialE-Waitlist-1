import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowingAccentProps {
  children: ReactNode;
  variant?: "purple" | "gold" | "pink" | "teal";
  className?: string;
}

const glowVariants = {
  purple: "shadow-glow hover:shadow-[0_0_50px_hsl(262,83%,68%/0.6)]",
  gold: "shadow-glow-gold hover:shadow-[0_0_50px_hsl(45,100%,50%/0.5)]",
  pink: "shadow-glow-pink hover:shadow-[0_0_50px_hsl(330,100%,70%/0.5)]",
  teal: "shadow-glow-teal hover:shadow-[0_0_50px_hsl(180,100%,50%/0.5)]",
};

export const GlowingAccent = ({ 
  children, 
  variant = "purple",
  className = "" 
}: GlowingAccentProps) => {
  return (
    <motion.div
      className={`${glowVariants[variant]} transition-shadow duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

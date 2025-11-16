import { motion } from "framer-motion";

interface AnimatedPlanetProps {
  size?: "sm" | "md" | "lg";
  variant?: "purple" | "gold" | "pink" | "teal";
  className?: string;
}

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-32 h-32",
  lg: "w-48 h-48",
};

const variantClasses = {
  purple: "bg-gradient-to-br from-cosmic-purple to-primary shadow-glow",
  gold: "bg-gradient-to-br from-stellar-gold to-yellow-600 shadow-glow-gold",
  pink: "bg-gradient-to-br from-nebula-pink to-pink-600 shadow-glow-pink",
  teal: "bg-gradient-to-br from-galaxy-teal to-cyan-600 shadow-glow-teal",
};

export const AnimatedPlanet = ({ 
  size = "md", 
  variant = "purple",
  className = "" 
}: AnimatedPlanetProps) => {
  return (
    <motion.div
      className={`rounded-full ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 360],
      }}
      transition={{
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      }}
    />
  );
};

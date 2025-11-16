import { StarField } from "./StarField";
import { ParticleEffect } from "./ParticleEffect";
import { ReactNode } from "react";

interface CosmicBackgroundProps {
  children: ReactNode;
  showStars?: boolean;
  showParticles?: boolean;
  variant?: "space" | "nebula" | "cosmic";
  className?: string;
}

const backgroundVariants = {
  space: "bg-gradient-space",
  nebula: "bg-gradient-nebula",
  cosmic: "bg-gradient-cosmic",
};

export const CosmicBackground = ({ 
  children, 
  showStars = true,
  showParticles = false,
  variant = "space",
  className = "" 
}: CosmicBackgroundProps) => {
  return (
    <div className={`relative min-h-screen ${backgroundVariants[variant]} ${className}`}>
      {showStars && <StarField density={150} />}
      {showParticles && <ParticleEffect count={30} />}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AnimatedPlanet } from "@/components/cosmic";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 overflow-hidden">
      {/* Animated planets in background */}
      <AnimatedPlanet 
        size="lg" 
        variant="purple" 
        className="absolute top-20 left-10 opacity-20" 
      />
      <AnimatedPlanet 
        size="md" 
        variant="gold" 
        className="absolute bottom-32 right-20 opacity-20" 
      />
      <AnimatedPlanet 
        size="sm" 
        variant="teal" 
        className="absolute top-40 right-40 opacity-20" 
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-6 bg-gradient-cosmic bg-clip-text text-transparent">
            Welcome to CelestialE
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 max-w-3xl mx-auto font-inter"
        >
          Embark on an extraordinary cosmic journey. Join our exclusive waitlist 
          and be among the first to explore the future of digital innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            onClick={() => navigate("/signup")}
            className="bg-gradient-cosmic hover:shadow-glow transition-shadow duration-300 text-lg px-8 py-6 font-orbitron"
          >
            Join Waitlist Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/features")}
            className="border-primary/40 hover:bg-primary/10 text-lg px-8 py-6 font-orbitron"
          >
            Explore Features
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-8 text-sm text-muted-foreground font-inter"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-stellar-gold animate-pulse-glow" />
            <span>1,000+ Early Adopters</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-galaxy-teal animate-pulse-glow" />
            <span>Launching Soon</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

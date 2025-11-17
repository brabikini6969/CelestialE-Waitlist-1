import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Rocket, Shield, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Launch Ready",
    description: "Seamless integration with cutting-edge blockchain technology for instant deployment.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with advanced encryption and multi-layer protection.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance delivering results at the speed of light.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with users worldwide through our distributed network infrastructure.",
  },
];

export const FeatureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const currentFeature = features[currentIndex];
  const Icon = currentFeature.icon;

  return (
    <div className="relative max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-background/40 backdrop-blur-sm border border-primary/20 rounded-lg p-8 shadow-elegant"
        >
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-cosmic p-4 rounded-full shadow-glow mb-4">
              <Icon className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-2xl font-orbitron font-bold mb-3 text-foreground">
              {currentFeature.title}
            </h3>
            <p className="text-muted-foreground font-inter">
              {currentFeature.description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary/20 hover:bg-primary/40 p-2 rounded-full transition-colors shadow-glow"
        aria-label="Previous feature"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary/20 hover:bg-primary/40 p-2 rounded-full transition-colors shadow-glow"
        aria-label="Next feature"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-8 shadow-glow"
                : "bg-muted-foreground/30"
            }`}
            aria-label={`Go to feature ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

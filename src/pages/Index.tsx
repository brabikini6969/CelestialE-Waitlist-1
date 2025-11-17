import { Layout } from "@/components/Layout";
import { CosmicBackground } from "@/components/cosmic";
import { HeroSection } from "@/components/home/HeroSection";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import { FeatureCarousel } from "@/components/home/FeatureCarousel";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      <CosmicBackground showStars showParticles>
        <HeroSection />
        
        {/* Countdown Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-foreground">
              Launch Countdown
            </h2>
            <p className="text-muted-foreground mb-12 font-inter max-w-2xl mx-auto">
              Be part of something extraordinary. The cosmic journey begins soon.
            </p>
            <CountdownTimer />
          </div>
        </motion.section>

        {/* Feature Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-center text-foreground">
              Why Join CelestialE?
            </h2>
            <p className="text-muted-foreground mb-12 text-center font-inter max-w-2xl mx-auto">
              Discover the features that make us the future of digital innovation.
            </p>
            <FeatureCarousel />
          </div>
        </motion.section>
      </CosmicBackground>
    </Layout>
  );
};

export default Index;

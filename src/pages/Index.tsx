import { Layout } from "@/components/Layout";
import { CosmicBackground } from "@/components/cosmic";

const Index = () => {
  return (
    <Layout>
      <CosmicBackground showStars showParticles>
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 bg-gradient-cosmic bg-clip-text text-transparent">
              Welcome to CelestialE
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Embark on an extraordinary cosmic journey. Join our waitlist today.
            </p>
          </div>
        </div>
      </CosmicBackground>
    </Layout>
  );
};

export default Index;

import { Layout } from "@/components/Layout";
import { CosmicBackground } from "@/components/cosmic";

const Features = () => {
  return (
    <Layout>
      <CosmicBackground showStars variant="cosmic">
        <div className="min-h-[calc(100vh-80px)] p-4">
          <div className="text-center py-20">
            <h1 className="text-4xl font-orbitron font-bold mb-4">Features</h1>
            <p className="text-muted-foreground">Discover what we offer...</p>
          </div>
        </div>
      </CosmicBackground>
    </Layout>
  );
};

export default Features;

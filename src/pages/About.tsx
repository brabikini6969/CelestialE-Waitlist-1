import { Layout } from "@/components/Layout";
import { CosmicBackground } from "@/components/cosmic";

const About = () => {
  return (
    <Layout>
      <CosmicBackground showStars variant="space">
        <div className="min-h-[calc(100vh-80px)] p-4">
          <div className="text-center py-20">
            <h1 className="text-4xl font-orbitron font-bold mb-4">About Us</h1>
            <p className="text-muted-foreground">Learn about our mission...</p>
          </div>
        </div>
      </CosmicBackground>
    </Layout>
  );
};

export default About;

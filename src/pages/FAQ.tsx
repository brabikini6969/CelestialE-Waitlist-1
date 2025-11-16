import { Layout } from "@/components/Layout";
import { CosmicBackground } from "@/components/cosmic";

const FAQ = () => {
  return (
    <Layout>
      <CosmicBackground showStars variant="space">
        <div className="min-h-[calc(100vh-80px)] p-4">
          <div className="text-center py-20">
            <h1 className="text-4xl font-orbitron font-bold mb-4">FAQ</h1>
            <p className="text-muted-foreground">Find answers to common questions...</p>
          </div>
        </div>
      </CosmicBackground>
    </Layout>
  );
};

export default FAQ;

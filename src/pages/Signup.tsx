import { Layout } from "@/components/Layout";
import { CosmicBackground } from "@/components/cosmic";

const Signup = () => {
  return (
    <Layout>
      <CosmicBackground showStars variant="nebula">
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-4xl font-orbitron font-bold mb-4">Join the Waitlist</h1>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </div>
      </CosmicBackground>
    </Layout>
  );
};

export default Signup;

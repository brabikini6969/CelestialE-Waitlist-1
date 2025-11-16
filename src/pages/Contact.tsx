import { Layout } from "@/components/Layout";
import { CosmicBackground } from "@/components/cosmic";

const Contact = () => {
  return (
    <Layout>
      <CosmicBackground showStars variant="nebula">
        <div className="min-h-[calc(100vh-80px)] p-4">
          <div className="text-center py-20">
            <h1 className="text-4xl font-orbitron font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground">Get in touch with us...</p>
          </div>
        </div>
      </CosmicBackground>
    </Layout>
  );
};

export default Contact;

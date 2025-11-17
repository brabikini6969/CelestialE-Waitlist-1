import { Layout } from "@/components/Layout";
import { CosmicBackground } from "@/components/cosmic";
import { SignupForm } from "@/components/signup/SignupForm";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <Layout>
      <CosmicBackground showStars showParticles variant="nebula">
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 py-20">
          <div className="w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
                Secure Your Spot
              </h1>
              <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
                Join thousands of early adopters and be the first to experience the future of digital innovation.
              </p>
            </motion.div>

            <SignupForm />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-sm text-muted-foreground font-inter mb-4">
                What happens next?
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center max-w-3xl mx-auto">
                <div className="flex-1 bg-background/40 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
                  <div className="text-2xl font-orbitron mb-2">1</div>
                  <div className="text-sm text-foreground/80 font-inter">Instant confirmation email</div>
                </div>
                <div className="flex-1 bg-background/40 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
                  <div className="text-2xl font-orbitron mb-2">2</div>
                  <div className="text-sm text-foreground/80 font-inter">Exclusive early access updates</div>
                </div>
                <div className="flex-1 bg-background/40 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
                  <div className="text-2xl font-orbitron mb-2">3</div>
                  <div className="text-sm text-foreground/80 font-inter">Priority when we launch</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </CosmicBackground>
    </Layout>
  );
};

export default Signup;

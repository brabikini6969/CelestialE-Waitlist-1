import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export const SuccessModal = ({ open, onClose }: SuccessModalProps) => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative bg-background border border-primary/20 rounded-lg p-8 max-w-md w-full shadow-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="bg-gradient-cosmic p-4 rounded-full mb-6 shadow-glow"
              >
                <CheckCircle className="w-16 h-16 text-foreground" />
              </motion.div>

              <h3 className="text-2xl font-orbitron font-bold mb-3 text-foreground">
                Welcome Aboard! 🚀
              </h3>

              <p className="text-muted-foreground mb-6 font-inter">
                You've successfully joined the CelestialE waitlist. We'll notify you as soon as we launch.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Button
                  onClick={() => {
                    onClose();
                    navigate("/");
                  }}
                  className="flex-1 bg-gradient-cosmic hover:shadow-glow transition-shadow duration-300 font-orbitron"
                >
                  Back to Home
                </Button>
                <Button
                  onClick={() => {
                    onClose();
                    navigate("/features");
                  }}
                  variant="outline"
                  className="flex-1 border-primary/40 hover:bg-primary/10 font-orbitron"
                >
                  Explore Features
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

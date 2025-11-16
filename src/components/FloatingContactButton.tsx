import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const FloatingContactButton = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 md:hidden"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link
        to="/contact"
        className="flex items-center justify-center w-14 h-14 bg-cosmic-purple text-white rounded-full shadow-glow hover:shadow-[0_0_50px_hsl(262,83%,68%/0.8)] transition-shadow"
        aria-label="Contact us"
      >
        <MessageCircle className="w-6 h-6" />
      </Link>
    </motion.div>
  );
};

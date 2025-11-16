import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlowingAccent } from "@/components/cosmic";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/features", label: "Features" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Rocket className="w-8 h-8 text-cosmic-purple" />
            </motion.div>
            <span className="text-2xl font-orbitron font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              CelestialE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-cosmic-purple transition-colors font-inter font-medium"
              >
                {link.label}
              </Link>
            ))}
            <GlowingAccent variant="purple">
              <Button asChild className="bg-cosmic-purple hover:bg-cosmic-purple/90 text-white font-orbitron">
                <Link to="/signup">Join Waitlist</Link>
              </Button>
            </GlowingAccent>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-4 pb-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground hover:text-cosmic-purple transition-colors font-inter font-medium py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="bg-cosmic-purple hover:bg-cosmic-purple/90 text-white font-orbitron mt-2">
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    Join Waitlist
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

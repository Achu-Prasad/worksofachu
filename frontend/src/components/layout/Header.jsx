import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { personalInfo } from '../../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollThreshold = 10; // Minimum scroll distance to trigger hide/show

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state for background styling
      setIsScrolled(currentScrollY > 20);

      // Determine scroll direction with threshold
      if (Math.abs(currentScrollY - lastScrollY.current) > scrollThreshold) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
          // Scrolling down & past threshold - hide navbar
          setIsVisible(false);
        } else {
          // Scrolling up - show navbar
          setIsVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  const scrollToSection = (href) => {
    // Determine if we are on mobile (this helps apply different scroll logic if needed)
    const isMobile = window.innerWidth < 768;

    // Close mobile menu first
    setIsMobileMenuOpen(false);

    // Use a small timeout for mobile to let the menu closing start
    const delay = isMobile ? 150 : 0;

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Offset to account for sticky navbar
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, delay);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-lg font-semibold text-slate-900 tracking-tight hover:text-slate-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {personalInfo.name.split(' ')[0]}
            <span className="text-slate-400">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-slate-900 transition-all duration-200 ease-out group-hover:w-full" />
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('#contact')}
                className="text-sm px-5 py-2.5 rounded-xl transition-all duration-300 bg-slate-800 hover:bg-slate-700 text-white font-medium"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </div>

      {/* Mobile Navigation - Outside the max-w container for proper alignment */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full max-w-6xl mx-auto px-6 lg:px-12"
          >
            <div className="overflow-hidden bg-white/95 backdrop-blur-md rounded-3xl shadow-lg border border-slate-100">
              <div className="py-6 px-6">
                <div className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-slate-600 hover:text-slate-900 transition-colors py-3 px-2 rounded-lg hover:bg-slate-50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button
                      onClick={() => scrollToSection('#contact')}
                      className="text-sm px-5 py-2.5 rounded-xl mt-2 w-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all duration-300"
                    >
                      Get in Touch
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

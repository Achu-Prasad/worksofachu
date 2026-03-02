import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { FileText } from '@phosphor-icons/react';
import { Button } from '../ui/button';
import { personalInfo } from '../../data/mock';
import UnicornScene from "unicornstudio-react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // 768px is the standard 'md' breakpoint in Tailwind
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
      {/* 
          Conditional Unicorn Studio Integration 
          - Desktop/Tablet: Official React SDK with 3D waves
          - Mobile: Optimized subtle gradient (Zero CPU load)
      */}
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          <UnicornScene
            projectId="9hmDeXdrrNmE7gG6uBee"
            sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
            width="100%"
            height="100vh"
            lazyLoad={true}
            production={true}
            fps={60}
            dpi={window.devicePixelRatio > 1 ? 1.5 : 1}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-tr from-[#eff6ff]/40 via-white to-white opacity-100 animate-pulse-slow"></div>
        )}
      </div>

      <style>{`
        #unicorn-studio-canvas { 
          opacity: 1 !important; 
          transform: translateZ(0) !important; 
          pointer-events: none;
          width: 100% !important;
          height: 100% !important;
        }
        [class*="unicorn-studio-badge"], .unicorn-studio-badge { display: none !important; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Content - Instant & Premium */}
      <div className="max-w-6xl w-full mx-auto px-6 lg:px-12 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-3xl relative z-20"
        >
          {/* Subtle Tag */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 text-slate-500 text-sm mb-6"
          >
            <Sparkles size={14} />
            <span>Available for new opportunities</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-light text-slate-800 tracking-tight leading-[1.1] mb-2"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl sm:text-2xl text-slate-600 font-light mb-8 tracking-tight"
          >
            {personalInfo.role}
          </motion.p>

          {/* Personal Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg text-slate-600 leading-relaxed max-w-xl mb-12"
          >
            {personalInfo.statement}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Button
                onClick={scrollToProjects}
                className="w-full flex items-center justify-center gap-2 px-8 py-7 text-sm rounded-2xl transition-all duration-300 hover:shadow-xl bg-slate-950 hover:bg-slate-800 text-white font-medium"
              >
                View My Work
                <ArrowDown size={18} />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 px-8 py-7 text-sm rounded-2xl transition-all duration-300"
                >
                  Download CV
                  <FileText size={18} />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

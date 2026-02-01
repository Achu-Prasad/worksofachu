import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { personalInfo, projects } from '../../data/mock';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-slate-400 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-slate-300 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Abstract Rotating Shape */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-5 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full rounded-full border-[40px] border-slate-900" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Subtle Tag */}
            <motion.div
              className="inline-flex items-center gap-2 text-slate-500 text-sm mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Sparkles size={14} />
              <span>Available for new opportunities</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-3xl sm:text-3xl lg:text-3xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {personalInfo.name}
            </motion.h1>

            {/* Role */}
            <motion.p
              className="text-lg sm:text-lg text-slate-600 font-light mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {personalInfo.role}
            </motion.p>

            {/* Personal Statement */}
            <motion.p
              className="text-lg text-slate-500 leading-relaxed max-w-xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              {personalInfo.statement}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={scrollToProjects}
                  className="w-full px-8 py-6 text-base rounded-full transition-all duration-300 hover:shadow-lg text-slate-900 font-medium"
                  style={{ backgroundColor: '#E3F410' }}
                >
                  View My Work
                </Button>
              </motion.div>
              <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-base rounded-full transition-all duration-300"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Project Preview with Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
              {/* Project Preview Card with Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/50 shadow-lg cursor-pointer group"
                  onClick={() => navigate(`/project/${currentProject.slug}`)}
                >
                  {/* Image/Video Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={currentProject.thumbnail}
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                    {/* Project Type Badge */}
                    {/* <div className="absolute top-4 left-4">
                      <span className="text-xs uppercase tracking-wider text-white font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        {currentProject.type}
                      </span>
                    </div> */}
                  </div>

                  {/* Project Info */}
                  {/* <div className="p-6">
                    <h3 className="text-xl font-medium text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">
                      {currentProject.title}
                    </h3>

                    <p className="text-slate-500 text-sm mb-4">
                      {currentProject.subtitle}
                    </p> */}

                  {/* <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {currentProject.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <motion.div
                        className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-slate-800 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 45 }}
                      >
                        <ArrowRight size={18} className="text-white" />
                      </motion.div>
                    </div> */}
                  {/* </div> */}
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="group relative"
                  >
                    <div className={`w-8 h-1 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-slate-900' : 'bg-slate-200 hover:bg-slate-300'
                      }`} />
                    {index === currentIndex && !isHovered && (
                      <motion.div
                        className="absolute inset-0 bg-slate-900 rounded-full origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 3.5, ease: "linear" }}
                        key={currentIndex}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Floating Badge */}
              {/* <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg border border-slate-100"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              >
                <span className="text-sm font-medium text-slate-900">{projects.length} Projects</span>
              </motion.div> */}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.button
            onClick={scrollToProjects}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

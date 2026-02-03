import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { workExperience } from '../../data/mock';
import { FadeUp } from '../animations/MotionWrapper';

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <FadeUp>
          <div className="mb-10 sm:mb-16">
            <span className="text-xs sm:text-sm text-slate-500 tracking-wide uppercase">Experience</span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light text-slate-900 mt-2 tracking-tight">
              Where I've worked
            </h2>
          </div>
        </FadeUp>

        {/* Accordion */}
        <motion.div
          ref={containerRef}
          className="space-y-3 sm:space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {workExperience.map((job, index) => (
            <motion.div
              key={`${job.id}-${index}`}
              variants={itemVariants}
            >
              <motion.div
                className={`bg-white rounded-xl sm:rounded-2xl border transition-colors duration-200 overflow-hidden ${expandedId === job.id
                  ? 'border-slate-300 shadow-lg'
                  : 'border-slate-200 hover:border-slate-300'
                  }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.995 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Header - Always Visible */}
                <button
                  onClick={() => toggleExpand(job.id)}
                  className="w-full p-4 sm:p-6 flex items-start sm:items-center justify-between text-left gap-3 sm:gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                      <h3 className="text-base sm:text-lg font-medium text-slate-900 truncate ">
                        {job.role}
                      </h3>
                      <span className="text-sm sm:text-base text-slate-500 mt-0.5 sm:mt-0">
                        at {job.company}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">{job.duration}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === job.id ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex-shrink-0 p-1.5 sm:p-2 rounded-full bg-slate-100"
                  >
                    <CaretDown size={18} className="text-slate-600 sm:w-5 sm:h-5" />
                  </motion.div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence mode="wait">
                  {expandedId === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2, delay: 0.1 }
                        }
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.15 }
                        }
                      }}
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-slate-100">
                        <motion.p
                          className="text-sm sm:text-base text-slate-600 leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15, duration: 0.3 }}
                        >
                          {job.impact}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

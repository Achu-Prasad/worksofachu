import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { workExperience } from '../../data/mock';
import { FadeUp } from '../animations/MotionWrapper';

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <FadeUp>
          <div className="mb-16">
            <span className="text-sm text-slate-500 tracking-wide uppercase">Experience</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mt-2 tracking-tight">
              Where I've worked
            </h2>
          </div>
        </FadeUp>

        {/* Timeline */}
        <div ref={containerRef} className="space-y-0">
          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              className="group relative"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            >
              {/* Timeline Line */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 hidden lg:block"
                style={{ left: '7.5px' }}
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
              />

              <motion.div
                className="flex gap-6 lg:gap-12 py-8 border-b border-slate-200 last:border-b-0 -mx-6 px-6 rounded-lg"
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex items-center">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-slate-200 relative z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 300 }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 grid md:grid-cols-3 gap-4 md:gap-8">
                  {/* Role & Company */}
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium text-slate-900">
                      {job.role}
                    </h3>
                    <p className="text-slate-600 mt-1">{job.company}</p>
                    <p className="text-sm text-slate-400 mt-2">{job.duration}</p>
                  </div>

                  {/* Impact */}
                  <div className="md:col-span-2">
                    <p className="text-slate-600 leading-relaxed">
                      {job.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

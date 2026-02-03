import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { aboutData, personalInfo } from '../../data/mock';
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '../animations/MotionWrapper';
import profilePic from '../../Assets/Profile Pic.jpg';

const AboutSection = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const stats = [
    { number: "4 Yrs", label: "Years In Design" },
    { number: "6 Mo", label: "UI/UX Experience" },
    { number: "10+", label: "Projects Delivered" }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <FadeUp>
          <div className="mb-16">
            <span className="text-sm text-slate-500 tracking-wide uppercase">About</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mt-2 tracking-tight">
              A bit about me
            </h2>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Photo Placeholder */}
          <SlideInLeft delay={0.2} className="lg:col-span-2">
            <motion.div
              className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={profilePic}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
              {/* Decorative Element */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-slate-200 rounded-2xl -z-10"
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.div>
            <motion.p
              className="text-sm text-slate-400 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {personalInfo.location}
            </motion.p>
          </SlideInLeft>

          {/* Content */}
          <div className="lg:col-span-3 space-y-8">
            <SlideInRight delay={0.3}>
              <p className="text-lg lg:text-xl text-slate-700 leading-relaxed">
                {aboutData.intro}
              </p>
            </SlideInRight>

            <FadeUp delay={0.4}>
              <div className="h-px bg-slate-200 w-16" />
            </FadeUp>

            <SlideInRight delay={0.5}>
              <p className="text-slate-600 leading-relaxed">
                {aboutData.philosophy}
              </p>
            </SlideInRight>

            <SlideInRight delay={0.6}>
              <p className="text-slate-600 leading-relaxed">
                {aboutData.transition}
              </p>
            </SlideInRight>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.15, duration: 0.5 }}
                >
                  <motion.p
                    className="text-2xl font-light text-slate-900"
                    initial={{ scale: 0.5 }}
                    animate={statsInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.15, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

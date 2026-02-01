import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { title: "Clarity over complexity", description: "Simple solutions to complex problems" },
    { title: "Empathy first", description: "Understanding before designing" },
    { title: "Continuous learning", description: "Growing with every project" }
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Section Header */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm text-slate-400 tracking-wide uppercase">Values</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mt-2 tracking-tight">
              What I Stand For
            </h2>
          </motion.div>

          {/* Main Statement */}
          <motion.p 
            className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            I believe in designing for impact, not just aesthetics. Every project is an opportunity to make someone's life a little easier, a little better.
          </motion.p>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="h-px bg-slate-700 w-12 mb-6"
                  whileHover={{ width: 64, backgroundColor: "#ffffff" }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-slate-200 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

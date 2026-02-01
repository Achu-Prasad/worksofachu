import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, BookOpen, Compass, ChefHat } from 'lucide-react';
import { FadeUp } from '../animations/MotionWrapper';

const interests = [
  { name: "Photography", description: "Capturing moments and compositions", Icon: Camera },
  { name: "Reading", description: "Design thinking and philosophy", Icon: BookOpen },
  { name: "Travel", description: "Finding inspiration in new places", Icon: Compass },
  { name: "Cooking", description: "Creating with different ingredients", Icon: ChefHat }
];

const BeyondWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <FadeUp>
          <div className="mb-16">
            <span className="text-sm text-slate-500 tracking-wide uppercase">Personal</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mt-2 tracking-tight">
              Beyond Work
            </h2>
            <p className="text-slate-500 mt-4">
              Things that inspire me outside the screen
            </p>
          </div>
        </FadeUp>

        {/* Interests Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.Icon;
            return (
              <motion.div
                key={index}
                className="group p-6 bg-slate-50 rounded-xl cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                whileHover={{ 
                  y: -8, 
                  backgroundColor: "rgba(241, 245, 249, 1)",
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)"
                }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4"
                  whileHover={{ backgroundColor: "#0f172a", scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Icon size={20} className="text-slate-600 group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-lg font-medium text-slate-900 mb-1">
                  {interest.name}
                </h3>
                <p className="text-sm text-slate-500">
                  {interest.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BeyondWorkSection;

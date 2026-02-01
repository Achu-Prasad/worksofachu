import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import { FadeUp, HoverScale } from '../animations/MotionWrapper';

const ProjectCard = ({ index, title, client, role, outcome, description, tags, isHovered, onHover, onLeave }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className="border border-slate-200 rounded-2xl p-8 lg:p-10 bg-white"
        whileHover={{ 
          borderColor: "rgba(148, 163, 184, 0.5)",
          boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)",
          y: -5
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
          {/* Project Number */}
          <motion.div 
            className="text-6xl font-light text-slate-200 leading-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
          >
            {String(index + 1).padStart(2, '0')}
          </motion.div>

          {/* Project Info */}
          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl lg:text-2xl font-medium text-slate-900 group-hover:text-slate-700 transition-colors">
                  {title}
                </h3>
                <p className="text-slate-500 mt-1">
                  {client} • {role}
                </p>
              </div>
              <motion.div 
                className="p-3 rounded-full bg-slate-100 group-hover:bg-slate-900 transition-colors"
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ArrowUpRight size={20} className="text-slate-600 group-hover:text-white transition-colors" />
              </motion.div>
            </div>

            <p className="text-slate-600 leading-relaxed max-w-2xl">{description}</p>

            {/* Outcome */}
            <motion.p 
              className="text-slate-900 font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {outcome}
            </motion.p>

            {/* Tags */}
            <motion.div 
              className="flex flex-wrap gap-2 pt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {tags.map((tag, tagIndex) => (
                <motion.div
                  key={tagIndex}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors font-normal cursor-pointer"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectsData = [
    {
      title: "Payment Checkout Reimagined",
      client: "Razorpay",
      role: "Lead Designer",
      outcome: "23% improvement in checkout conversion rate",
      description: "Complete redesign of the payment checkout experience focusing on trust signals, clarity, and speed.",
      tags: ["Product Design", "User Research", "Design System"]
    },
    {
      title: "Restaurant Discovery",
      client: "Swiggy",
      role: "Product Designer",
      outcome: "40% increase in user engagement",
      description: "Redesigned how users discover restaurants with personalized recommendations and intuitive filters.",
      tags: ["Mobile App", "UX Design", "A/B Testing"]
    },
    {
      title: "Healthcare Dashboard",
      client: "Enterprise Client",
      role: "UI/UX Designer",
      outcome: "Reduced task completion time by 35%",
      description: "Designed a comprehensive dashboard for healthcare professionals to manage patient data efficiently.",
      tags: ["Enterprise", "Dashboard", "Data Visualization"]
    },
    {
      title: "Fintech Mobile App",
      client: "Startup",
      role: "Design Lead",
      outcome: "Launched to 50K+ users in first month",
      description: "End-to-end design for a personal finance app targeting young professionals.",
      tags: ["Mobile App", "Fintech", "Brand Identity"]
    }
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <div>
              <span className="text-sm text-slate-500 tracking-wide uppercase">Work</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mt-2 tracking-tight">
                Selected Projects
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm">
              A curated selection of projects that showcase my approach to design.
            </p>
          </div>
        </FadeUp>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
              isHovered={hoveredProject === index}
              onHover={() => setHoveredProject(index)}
              onLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

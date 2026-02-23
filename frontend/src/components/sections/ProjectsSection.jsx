import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import { projects } from '../../data/mock';
import { FadeUp } from '../animations/MotionWrapper';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();

  const handleClick = () => {
    if (project.framerCaseStudyUrl) {
      window.open(project.framerCaseStudyUrl, "_blank", "noopener,noreferrer");
    } else {
      navigate(`/project/${project.slug}`);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="group cursor-pointer"
      onClick={handleClick}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="bg-white rounded-3xl overflow-hidden border border-slate-200"
        whileHover={{
          borderColor: "rgba(148, 163, 184, 0.5)",
          boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)",
          y: -8
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Image Preview */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6 }}
          />

          {/* Project Type Badge */}
          {/* <div className="absolute top-4 left-4">
            <span className="text-xs uppercase tracking-wider text-white font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {project.type}
            </span>
          </div> */}

          {/* Project Number */}
          {/* <div className="absolute bottom-4 right-4">
            <span className="text-5xl font-light text-white/30">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div> */}
        </div>

        {/* Project Info */}
        <div className="p-6 lg:p-8">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="text-xl lg:text-xl font-medium text-slate-900 group-hover:text-slate-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 mt-2">
                {project.subtitle}
              </p>
            </div>
            <motion.div
              className="p-3 rounded-full bg-slate-100 group-hover:bg-slate-900 transition-colors flex-shrink-0"
              whileHover={{ rotate: 45 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <ArrowUpRight size={20} className="text-slate-600 group-hover:text-white transition-colors" />
            </motion.div>
          </div>

          {/* Tags - Simplified without map */}
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
              {project.tags[0]}
            </Badge>
            {project.tags[1] && (
              <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
                {project.tags[1]}
              </Badge>
            )}
            {project.tags[2] && (
              <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
                {project.tags[2]}
              </Badge>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <div>
              <span className="text-sm text-slate-500 tracking-wide uppercase">Work</span>
              <h2 className="text-3xl sm:text-3xl lg:text-3xl font-medium text-slate-900 mt-2 tracking-tight">
                Selected Projects
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm">
              A curated selection of projects that showcase my approach to design.
            </p>
          </div>
        </FadeUp>

        {/* Projects Grid - Explicit rendering */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

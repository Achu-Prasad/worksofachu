import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projects } from '../data/mock';
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from "@phosphor-icons/react";
import Footer from '../components/layout/Footer';

// Spring config for smooth animations
const smoothSpringConfig = { stiffness: 80, damping: 25, restDelta: 0.001 };

// Custom Icons
const BackIcon = () => (
  <ArrowLeft size={16} weight="bold" />
);

const ExternalIcon = () => (
  <ArrowUpRight size={16} weight="bold" />
);

const PlayIcon = () => (
  <Play size={16} weight="bold" />
);

const InfoSection = ({ title, children, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className="flex flex-col gap-1.5"
    >
      <h3 className="text-sm text-slate-400 dark:text-slate-500 font-medium font-sans capitalize">{title}</h3>
      <div className="text-base leading-snug text-slate-900 dark:text-white font-normal font-sans">
        {children}
      </div>
    </motion.div>
  );
};

const ScrollRevealItem = ({ children }) => {
  const ref = useRef(null);

  // Entrance: Start at hit-bottom, 100% progress when 70% of element is visible
  const { scrollYProgress: entranceProgress } = useScroll({
    target: ref,
    offset: ["start end", "0.7 end"]
  });

  // Exit: Start when top hits top, track until bottom hits top
  const { scrollYProgress: exitProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const smoothEntrance = useSpring(entranceProgress, smoothSpringConfig);
  const smoothExit = useSpring(exitProgress, smoothSpringConfig);

  const y = useTransform(smoothEntrance, [0, 1], [80, 0]);
  const opacityEntrance = useTransform(smoothEntrance, [0, 1], [0, 1]);
  const scaleEntrance = useTransform(smoothEntrance, [0, 1], [0.92, 1]);

  // Exit transforms: Hold 100% until 50% away (0.5), then fade to 30% (0.7) then 0% (1.0).
  const opacityExit = useTransform(smoothExit, [0, 0.5, 0.7, 1], [1, 1, 0.3, 0]);
  const scaleExit = useTransform(smoothExit, [0, 1], [1, 0.96]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity: opacityEntrance, scale: scaleEntrance }}
      className="will-change-transform"
    >
      <motion.div style={{ opacity: opacityExit, scale: scaleExit }} className="will-change-transform">
        {children}
      </motion.div>
    </motion.div>
  );
};

// Next Project Card Component matching ProjectDetailPage design
const NextProjectCard = ({ project, direction }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      className="group cursor-pointer relative w-full"
      onClick={handleClick}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="relative overflow-hidden rounded-[20px] bg-slate-100 dark:bg-slate-900 aspect-[16/10]">
        <motion.img
          src={project.heroMedia?.url || project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Direction Indicator */}
        <div className="absolute top-6 left-6 flex items-center gap-2 text-white/90 text-sm font-medium font-sans">
          {direction === 'prev' && <ArrowLeft size={14} weight="bold" />}
          <span>{direction === 'prev' ? 'Previous' : 'Next'} Project</span>
          {direction === 'next' && <ArrowRight size={14} weight="bold" />}
        </div>

        {/* Project Info */}
        <div className="absolute bottom-6 left-6 right-6">
          <h4 className="text-white text-xl md:text-xl font-medium group-hover:text-white/90 transition-colors tracking-tight font-sans">
            {project.title}
          </h4>
          <p className="text-white/60 text-sm mt-1.5 font-medium">{project.type}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectDetailsV2 = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, smoothSpringConfig);

  if (!project) return <div className="min-h-screen flex items-center justify-center font-sans">Project not found</div>;

  const galleryData = project.gallery || [];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] font-sans text-slate-900 selection:bg-[#e2ff31] selection:text-black antialiased">
      {/* Scroll Progress Indicator */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#0f172a] dark:bg-[#e2ff31] origin-left z-[110]" style={{ scaleX }} />

      {/* Back Button */}
      <div className="flex fixed top-6 left-6 lg:top-12 lg:left-12 z-[100]">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="group flex gap-2 items-center px-5 py-2.5 rounded-xl
                     border border-[#0f172a] dark:border-white/20
                     bg-white dark:bg-[#0a0a0a] hover:bg-[#0f172a] dark:hover:bg-white
                     text-[#0f172a] dark:text-white hover:text-white dark:hover:text-[#0f172a]
                     transition-all duration-300 ease-out"
        >
          <div className="flex items-center justify-center transition-transform group-hover:-translate-x-1 duration-300">
            <BackIcon />
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase font-sans">Back</span>
        </motion.button>
      </div>

      <div className="max-w-[1100px] mx-auto pt-8 lg:pt-12 px-6">
        {/* Hero Graphic */}
        <motion.div
          initial={{ opacity: 0, y: -60, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.8 }
          }}
          className="w-full h-[350px] md:h-[550px] rounded-[24px] overflow-hidden bg-[#d9d9d9] dark:bg-slate-900 shadow-xl relative group"
        >
          {project.heroMedia?.type === 'video' ? (
            <video src={project.heroMedia.url} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          ) : (
            <img
              src={project.heroMedia?.url || project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>

        {/* Narrative Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
          className="mt-16 space-y-4"
        >
          <h1 className="text-3xl md:text-3xl font-medium leading-none tracking-tight text-[#0f172b] dark:text-white">
            {project.title}
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
            className="bg-[#0f172a] dark:bg-[#e2ff31] h-[5px] w-12 rounded-full origin-left"
          />
        </motion.div>

        {/* Brief Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
          className="mt-10 text-base md:text-lg leading-[1.6] text-slate-700 dark:text-slate-300 font-normal max-w-4xl font-sans"
        >
          {project.description}
        </motion.p>

        {/* Divider Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
          className="mt-16 h-px bg-slate-100 dark:bg-slate-800 w-full origin-left"
        />

        {/* Specification Box - Original Layout */}
        <div className="mt-16 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 w-full">
          {/* Left: Metadata Content - Original 3-column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 sm:gap-x-12 sm:gap-y-12 flex-1 w-full">
            <InfoSection title="Project type" index={0}>
              {project.type}
            </InfoSection>

            <InfoSection title="The team" index={1}>
              <div className="flex flex-col gap-2">
                {project.team?.map((member, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-900 dark:text-white">
                    <span>{member.name}</span>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-600 tracking-tight px-1.5 py-0.5 border border-slate-200 dark:border-slate-800 rounded">{member.role}</span>
                  </div>
                ))}
              </div>
            </InfoSection>

            <div className="col-span-2 md:col-span-1 md:row-span-2">
              <InfoSection title="Contribution" index={2}>
                <div className="flex flex-col gap-2 text-slate-900 dark:text-white">
                  {project.contribution?.map((item, i) => (
                    <p key={i} className="capitalize">{item}</p>
                  ))}
                </div>
              </InfoSection>
            </div>

            <InfoSection title="Duration" index={3}>
              {project.timeline}
            </InfoSection>

            <InfoSection title="My role" index={4}>
              {project.role}
            </InfoSection>
          </div>

          {/* Right: Operational Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 w-full lg:w-[240px] shrink-0"
          >
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="w-full">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-between px-6 py-4 text-sm rounded-xl transition-all duration-300 hover:shadow-lg bg-slate-800 hover:bg-slate-700 text-white font-medium font-sans"
                >
                  Live Project
                  <ExternalIcon />
                </motion.button>
              </a>
            )}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between px-6 py-4 text-sm rounded-xl transition-all duration-300 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-900 dark:text-white font-medium font-sans hover:shadow-md"
            >
              Video Demo
              <PlayIcon />
            </motion.button>
          </motion.div>
        </div>

        {/* Visualization Sequence */}
        <div className="mt-24 space-y-24">
          {galleryData.map((item, index) => (
            <ScrollRevealItem key={index}>
              <div className="flex flex-col gap-5">
                <div className="w-full rounded-[24px] overflow-hidden bg-slate-50 dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-white/5 group">
                  <div className="overflow-hidden">
                    {item.type === 'video' ? (
                      <video src={item.url} autoPlay loop muted playsInline className="w-full h-auto" />
                    ) : (
                      <img src={item.url} alt={item.caption} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
                    )}
                  </div>
                </div>
                {item.caption && (
                  <div className="px-1">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 font-sans">{item.caption}</p>
                  </div>
                )}
              </div>
            </ScrollRevealItem>
          ))}
        </div>

        {/* Final Progression - Matching ProjectDetailPage grid */}
        <div className="mt-48 py-24 border-t border-slate-100 dark:border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-16 text-center"
          >
            <span className="text-xs tracking-[0.5em] uppercase opacity-30 mb-4 font-bold text-slate-500 dark:text-slate-400 font-sans">
              Discover More
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <NextProjectCard project={prevProject} direction="prev" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <NextProjectCard project={nextProject} direction="next" />
            </motion.div>
          </div>

          <div className="mt-24 flex justify-center">
            <Link to="/#contact" className="text-[10px] uppercase tracking-[0.4em] font-bold border-b-2 border-slate-900 dark:border-white pb-3 hover:opacity-50 transition-all font-sans">
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetailsV2;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Figma } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { projects } from '../data/mock';

// Spring config for smooth scroll animations
const smoothSpringConfig = { stiffness: 80, damping: 25, restDelta: 0.001 };

// Scroll-animated gallery item component with focus effect
const GalleryItem = ({ url, type, caption, index }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "0.7 end"]
  });

  const { scrollYProgress: exitProgress } = useScroll({
    target: ref,
    offset: ["0.7 start", "end start"]
  });

  const smoothEntrance = useSpring(scrollYProgress, smoothSpringConfig);
  const smoothExit = useSpring(exitProgress, smoothSpringConfig);

  const yEntrance = useTransform(smoothEntrance, [0, 1], [100, 0]);
  const opacityEntrance = useTransform(smoothEntrance, [0, 1], [0, 1]);
  const scaleEntrance = useTransform(smoothEntrance, [0, 1], [0.92, 1]);

  const opacityExit = useTransform(smoothExit, [0, 1], [1, 0.15]);
  const scaleExit = useTransform(smoothExit, [0, 1], [1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{
        y: yEntrance,
        opacity: opacityEntrance,
        scale: scaleEntrance
      }}
      className="relative will-change-transform"
    >
      <motion.div
        style={{
          opacity: opacityExit,
          scale: scaleExit
        }}
        className="relative overflow-hidden rounded-2xl bg-slate-100 group will-change-transform border border-slate-200"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
      >
        {type === 'video' ? (
          <video
            src={url}
            autoPlay
            loop
            muted
            playsInline
            className="w-full aspect-[16/10] object-cover"
          />
        ) : (
          <img
            src={url}
            alt={caption}
            className="w-full aspect-[16/10] object-cover"
          />
        )}

        {/* Watermark Cover - Responsive & hidden on mobile - Only for videos */}
        {type === 'video' && (
          <div className="hidden md:block absolute bottom-2 right-0 w-[12vw] h-[4vw] max-w-[160px] max-h-[48px] min-w-[100px] min-h-[32px] bg-white rounded-l-md" />
        )}
      </motion.div>
    </motion.div>
  );
};

// Next Project Card
const NextProjectCard = ({ project, direction }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      className="group cursor-pointer"
      onClick={handleClick}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-slate-100">
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="w-full aspect-[16/9] object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Direction Indicator */}
        <div className="absolute top-4 left-4 flex items-center gap-2 text-white/80 text-sm">
          {direction === 'prev' && <ArrowLeft size={16} />}
          <span>{direction === 'prev' ? 'Previous' : 'Next'} Project</span>
          {direction === 'next' && <ArrowRight size={16} />}
        </div>

        {/* Project Info */}
        <div className="absolute bottom-4 left-4 right-4">
          <h4 className="text-white text-lg font-medium group-hover:text-white/90 transition-colors">
            {project.title}
          </h4>
          <p className="text-white/70 text-sm mt-1">{project.type}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef(null);

  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Smooth the hero scroll progress for buttery animations
  const smoothHeroProgress = useSpring(scrollYProgress, smoothSpringConfig);
  const heroScale = useTransform(smoothHeroProgress, [0, 1], [1, 1.05]);
  const heroOpacity = useTransform(smoothHeroProgress, [0, 0.6], [1, 0.4]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-slate-900 mb-4">Project not found</h1>
          <Button onClick={() => navigate('/')} variant="outline">
            Go back home
          </Button>
        </div>
      </div>
    );
  }

  const gallery = project.gallery || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Back Button */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-200"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back</span>
        </motion.button>
      </motion.div>

      {/* Hero Section with Image */}
      <section ref={heroRef} className="relative h-[70vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          {project.heroMedia.type === 'video' ? (
            <video
              src={project.heroMedia.url}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={project.heroMedia.url}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </motion.div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-4">
                {project.type}
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-3">
                {project.title}
              </h1>
              <p className="text-xl text-white/80 font-light">
                {project.subtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Info Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Description */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm text-slate-500 uppercase tracking-wide mb-4">About the Project</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Project Details */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Role */}
              <div>
                <h3 className="text-sm text-slate-500 uppercase tracking-wide mb-3">My Role</h3>
                <p className="text-slate-700">{project.role}</p>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-sm text-slate-500 uppercase tracking-wide mb-3">Skills & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                    {project.tags[0]}
                  </Badge>
                  {project.tags[1] && (
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                      {project.tags[1]}
                    </Badge>
                  )}
                  {project.tags[2] && (
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                      {project.tags[2]}
                    </Badge>
                  )}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-4">
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-900 hover:text-slate-700 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                      <ExternalLink size={18} className="text-white" />
                    </div>
                    <span className="font-medium">View Live Project</span>
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                )}

                {project.prototypeLink && (
                  <motion.a
                    href={project.prototypeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                      <Figma size={18} className="text-slate-600" />
                    </div>
                    <span className="font-medium">View Prototype</span>
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="h-px bg-slate-200" />
      </div>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-sm text-slate-500 uppercase tracking-wide mb-2">Project Visuals</h2>
            <p className="text-slate-600">A closer look at the design process and final deliverables.</p>
          </motion.div>

          {/* Gallery Grid with Scroll Animations - Explicit rendering */}
          <div className="space-y-16">
            {gallery.map((item, index) => (
              <GalleryItem
                key={index}
                url={item.url}
                type={item.type}
                caption={item.caption}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Next/Prev Project Navigation */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.h2
            className="text-sm text-slate-500 uppercase tracking-wide mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            More Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <NextProjectCard project={prevProject} direction="prev" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <NextProjectCard project={nextProject} direction="next" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-600 mb-6">Interested in working together?</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link to="/#contact">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-base rounded-full">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;

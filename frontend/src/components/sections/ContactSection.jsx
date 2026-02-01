import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { personalInfo, socialLinks } from '../../data/mock';
import { FadeUp, SlideInLeft, SlideInRight } from '../animations/MotionWrapper';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <SlideInLeft>
            <span className="text-sm text-slate-500 tracking-wide uppercase">Contact</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mt-2 tracking-tight">
              Let's work together
            </h2>
            <p className="text-lg text-slate-600 mt-6 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>

            <motion.div 
              className="mt-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
                  whileHover={{ backgroundColor: "#e2e8f0", scale: 1.1 }}
                >
                  <Mail size={18} />
                </motion.div>
                <span>{personalInfo.email}</span>
              </motion.a>
              <motion.div 
                className="flex items-center gap-3 text-slate-600"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span>{personalInfo.location}</span>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="mt-10 pt-8 border-t border-slate-200"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-slate-500 mb-4">Find me online</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors px-4 py-2 bg-white rounded-full border border-slate-200 group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ 
                      borderColor: "#cbd5e1",
                      boxShadow: "0 4px 12px -2px rgba(0,0,0,0.08)",
                      y: -2
                    }}
                  >
                    {link.name}
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                    >
                      <ArrowUpRight size={14} />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </SlideInLeft>

          {/* Right Content - CTA Card */}
          <SlideInRight delay={0.2}>
            <motion.div 
              className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm"
              whileHover={{ 
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)",
                y: -5
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <h3 className="text-2xl font-light text-slate-900 mb-4">
                Ready to start a project?
              </h3>
              <p className="text-slate-600 mb-8">
                I'm currently accepting new projects. Let's discuss how I can help
                bring your vision to life.
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-base rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <a href={`mailto:${personalInfo.email}`}>
                    Send me an email
                  </a>
                </Button>
              </motion.div>

              <p className="text-center text-sm text-slate-400 mt-6">
                I typically respond within 24-48 hours
              </p>
            </motion.div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

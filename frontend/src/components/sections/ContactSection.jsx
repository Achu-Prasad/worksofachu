import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Mail, MapPin, Linkedin, MessageCircle } from 'lucide-react';
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
            <h2 className="text-3xl sm:text-3xl lg:text-3xl font-medium text-slate-900 mt-2 tracking-tight">
              Let's work together
            </h2>
            <p className="text-lg text-slate-600 mt-6 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>

            {/* Social Action Links */}
            <div className="flex flex-wrap gap-4 mt-10">
              {socialLinks.filter(link => ["LinkedIn", "WhatsApp"].includes(link.name)).map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:border-slate-900 transition-colors duration-300"
                >
                  {link.name === "LinkedIn" ? (
                    <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  ) : (
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  )}
                  <span className="text-sm font-medium text-slate-800">{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </motion.a>
              ))}
            </div>
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
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-base rounded-xl transition-all duration-300 hover:shadow-lg"
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

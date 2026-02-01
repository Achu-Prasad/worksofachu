import React from 'react';
import { User } from 'lucide-react';
import { aboutData, personalInfo } from '../../data/mock';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm text-slate-500 tracking-wide uppercase">About</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mt-2 tracking-tight">
            A bit about me
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Photo Placeholder */}
          <div className="lg:col-span-2">
            <div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                <User size={80} className="text-slate-300" />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-slate-200 rounded-2xl -z-10" />
            </div>
            <p className="text-sm text-slate-400 mt-4">
              {personalInfo.location}
            </p>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-8">
            <p className="text-lg lg:text-xl text-slate-700 leading-relaxed">
              {aboutData.intro}
            </p>

            <div className="h-px bg-slate-200 w-16" />

            <p className="text-slate-600 leading-relaxed">
              {aboutData.philosophy}
            </p>

            <p className="text-slate-600 leading-relaxed">
              {aboutData.transition}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div>
                <p className="text-3xl font-light text-slate-900">6+</p>
                <p className="text-sm text-slate-500 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-light text-slate-900">50+</p>
                <p className="text-sm text-slate-500 mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-light text-slate-900">20+</p>
                <p className="text-sm text-slate-500 mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from 'react';
import { Quote } from 'lucide-react';
import { whyIDesign } from '../../data/mock';

const WhyIDesignSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm text-slate-500 tracking-wide uppercase">Philosophy</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mt-2 tracking-tight">
            Why I Design
          </h2>
        </div>

        {/* Quote Block */}
        <div className="max-w-4xl">
          <div className="relative">
            <Quote size={48} className="text-slate-200 absolute -top-6 -left-4" />
            <blockquote className="relative z-10">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-800 leading-relaxed tracking-tight">
                {whyIDesign.quote}
              </p>
              <footer className="mt-6 text-slate-500 text-lg">
                {whyIDesign.author}
              </footer>
            </blockquote>
          </div>

          <div className="h-px bg-slate-200 w-24 my-12" />

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            {whyIDesign.personal}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyIDesignSection;

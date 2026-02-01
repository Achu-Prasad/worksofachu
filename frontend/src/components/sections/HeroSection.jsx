import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { personalInfo } from '../../data/mock';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-slate-400 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-slate-300 blur-3xl" />
      </div>

      {/* Abstract Shape */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-5 hidden lg:block">
        <div className="w-full h-full rounded-full border-[40px] border-slate-900 animate-[spin_60s_linear_infinite]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="max-w-3xl">
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm mb-8 animate-fade-in">
            <Sparkles size={14} />
            <span>Available for new opportunities</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-900 tracking-tight leading-[1.1] mb-6">
            {personalInfo.name}
          </h1>

          {/* Role */}
          <p className="text-xl sm:text-2xl text-slate-600 font-light mb-6 tracking-tight">
            {personalInfo.role}
          </p>

          {/* Personal Statement */}
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl mb-10">
            {personalInfo.statement}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={scrollToProjects}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-base rounded-full transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <button
            onClick={scrollToProjects}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

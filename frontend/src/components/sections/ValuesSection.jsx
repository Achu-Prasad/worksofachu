import React from 'react';

const ValuesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Section Header */}
          <div className="mb-12">
            <span className="text-sm text-slate-400 tracking-wide uppercase">Values</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mt-2 tracking-tight">
              What I Stand For
            </h2>
          </div>

          {/* Main Statement */}
          <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-16">
            I believe in designing for impact, not just aesthetics. Every project is an opportunity to make someone's life a little easier, a little better.
          </p>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="h-px bg-slate-700 group-hover:bg-white w-12 mb-6 transition-all duration-300 group-hover:w-16" />
              <h3 className="text-lg font-medium text-white mb-2">Clarity over complexity</h3>
              <p className="text-slate-400">Simple solutions to complex problems</p>
            </div>

            <div className="group">
              <div className="h-px bg-slate-700 group-hover:bg-white w-12 mb-6 transition-all duration-300 group-hover:w-16" />
              <h3 className="text-lg font-medium text-white mb-2">Empathy first</h3>
              <p className="text-slate-400">Understanding before designing</p>
            </div>

            <div className="group">
              <div className="h-px bg-slate-700 group-hover:bg-white w-12 mb-6 transition-all duration-300 group-hover:w-16" />
              <h3 className="text-lg font-medium text-white mb-2">Continuous learning</h3>
              <p className="text-slate-400">Growing with every project</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

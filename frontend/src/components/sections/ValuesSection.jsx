import React from 'react';
import { personalValues } from '../../data/mock';

const ValuesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Section Header */}
          <div className="mb-12">
            <span className="text-sm text-slate-400 tracking-wide uppercase">Values</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mt-2 tracking-tight">
              {personalValues.title}
            </h2>
          </div>

          {/* Main Statement */}
          <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-16">
            {personalValues.statement}
          </p>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {personalValues.values.map((value, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="h-px bg-slate-700 group-hover:bg-white w-12 mb-6 transition-all duration-300 group-hover:w-16" />
                <h3 className="text-lg font-medium text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

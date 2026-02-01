import React from 'react';
import { workExperience } from '../../data/mock';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm text-slate-500 tracking-wide uppercase">Experience</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mt-2 tracking-tight">
            Where I've worked
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {workExperience.map((job, index) => (
            <div
              key={job.id}
              className="group relative"
            >
              {/* Timeline Line */}
              {index !== workExperience.length - 1 && (
                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 hidden lg:block" style={{ left: '7px' }} />
              )}

              <div className="flex gap-6 lg:gap-12 py-8 border-b border-slate-200 last:border-b-0 hover:bg-white transition-colors -mx-6 px-6 rounded-lg">
                {/* Timeline Dot */}
                <div className="hidden lg:flex items-start pt-2">
                  <div className="w-4 h-4 rounded-full bg-slate-200 group-hover:bg-slate-900 transition-colors relative z-10" />
                </div>

                {/* Content */}
                <div className="flex-1 grid md:grid-cols-3 gap-4 md:gap-8">
                  {/* Role & Company */}
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium text-slate-900 group-hover:text-slate-700 transition-colors">
                      {job.role}
                    </h3>
                    <p className="text-slate-600 mt-1">{job.company}</p>
                    <p className="text-sm text-slate-400 mt-2">{job.duration}</p>
                  </div>

                  {/* Impact */}
                  <div className="md:col-span-2">
                    <p className="text-slate-600 leading-relaxed">
                      {job.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

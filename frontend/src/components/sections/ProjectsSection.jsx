import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import { projects } from '../../data/mock';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div>
            <span className="text-sm text-slate-500 tracking-wide uppercase">Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mt-2 tracking-tight">
              Selected Projects
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm">
            A curated selection of projects that showcase my approach to design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="border border-slate-200 rounded-2xl p-8 lg:p-10 hover:border-slate-300 hover:shadow-lg transition-all duration-500 bg-white">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                  {/* Project Number */}
                  <div className="text-6xl font-light text-slate-200 leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-medium text-slate-900 group-hover:text-slate-700 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-500 mt-1">
                          {project.client} • {project.role}
                        </p>
                      </div>
                      <div className={`p-3 rounded-full bg-slate-100 group-hover:bg-slate-900 transition-all duration-300 ${
                        hoveredProject === project.id ? 'rotate-45' : ''
                      }`}>
                        <ArrowUpRight
                          size={20}
                          className="text-slate-600 group-hover:text-white transition-colors"
                        />
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>

                    {/* Outcome */}
                    <p className="text-slate-900 font-medium">
                      {project.outcome}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
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

export default ProjectsSection;

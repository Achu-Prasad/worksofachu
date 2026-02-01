import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/badge';

const ProjectCard = ({ index, title, client, role, outcome, description, tags, isHovered, onHover, onLeave }) => (
  <div
    className="group cursor-pointer"
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
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
                {title}
              </h3>
              <p className="text-slate-500 mt-1">
                {client} • {role}
              </p>
            </div>
            <div className={`p-3 rounded-full bg-slate-100 group-hover:bg-slate-900 transition-all duration-300 ${isHovered ? 'rotate-45' : ''}`}>
              <ArrowUpRight size={20} className="text-slate-600 group-hover:text-white transition-colors" />
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed max-w-2xl">{description}</p>

          {/* Outcome */}
          <p className="text-slate-900 font-medium">{outcome}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, tagIndex) => (
              <Badge
                key={tagIndex}
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
);

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectsData = [
    {
      title: "Payment Checkout Reimagined",
      client: "Razorpay",
      role: "Lead Designer",
      outcome: "23% improvement in checkout conversion rate",
      description: "Complete redesign of the payment checkout experience focusing on trust signals, clarity, and speed.",
      tags: ["Product Design", "User Research", "Design System"]
    },
    {
      title: "Restaurant Discovery",
      client: "Swiggy",
      role: "Product Designer",
      outcome: "40% increase in user engagement",
      description: "Redesigned how users discover restaurants with personalized recommendations and intuitive filters.",
      tags: ["Mobile App", "UX Design", "A/B Testing"]
    },
    {
      title: "Healthcare Dashboard",
      client: "Enterprise Client",
      role: "UI/UX Designer",
      outcome: "Reduced task completion time by 35%",
      description: "Designed a comprehensive dashboard for healthcare professionals to manage patient data efficiently.",
      tags: ["Enterprise", "Dashboard", "Data Visualization"]
    },
    {
      title: "Fintech Mobile App",
      client: "Startup",
      role: "Design Lead",
      outcome: "Launched to 50K+ users in first month",
      description: "End-to-end design for a personal finance app targeting young professionals.",
      tags: ["Mobile App", "Fintech", "Brand Identity"]
    }
  ];

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
          <ProjectCard
            index={0}
            {...projectsData[0]}
            isHovered={hoveredProject === 0}
            onHover={() => setHoveredProject(0)}
            onLeave={() => setHoveredProject(null)}
          />
          <ProjectCard
            index={1}
            {...projectsData[1]}
            isHovered={hoveredProject === 1}
            onHover={() => setHoveredProject(1)}
            onLeave={() => setHoveredProject(null)}
          />
          <ProjectCard
            index={2}
            {...projectsData[2]}
            isHovered={hoveredProject === 2}
            onHover={() => setHoveredProject(2)}
            onLeave={() => setHoveredProject(null)}
          />
          <ProjectCard
            index={3}
            {...projectsData[3]}
            isHovered={hoveredProject === 3}
            onHover={() => setHoveredProject(3)}
            onLeave={() => setHoveredProject(null)}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

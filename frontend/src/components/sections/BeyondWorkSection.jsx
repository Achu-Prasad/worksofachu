import React from 'react';
import { Camera, BookOpen, Compass, ChefHat } from 'lucide-react';
import { beyondWork } from '../../data/mock';

const getIcon = (name) => {
  switch (name) {
    case 'Photography':
      return Camera;
    case 'Reading':
      return BookOpen;
    case 'Travel':
      return Compass;
    case 'Cooking':
      return ChefHat;
    default:
      return Camera;
  }
};

const BeyondWorkSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm text-slate-500 tracking-wide uppercase">Personal</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mt-2 tracking-tight">
            {beyondWork.title}
          </h2>
          <p className="text-slate-500 mt-4">
            {beyondWork.subtitle}
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beyondWork.interests.map((interest, index) => {
            const Icon = getIcon(interest.name);
            return (
              <div
                key={index}
                className="group p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 group-hover:bg-slate-900 transition-colors">
                  <Icon size={20} className="text-slate-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-1">
                  {interest.name}
                </h3>
                <p className="text-sm text-slate-500">
                  {interest.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BeyondWorkSection;

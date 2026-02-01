import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              {personalInfo.name}
            </h3>
            <p className="text-slate-500 text-sm max-w-xs">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 group"
              >
                {link.name}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 flex items-center gap-1">
            Crafted with <Heart size={14} className="text-slate-400" /> and intention
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

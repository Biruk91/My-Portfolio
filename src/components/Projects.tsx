'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { projects, Project } from '@/data/portfolioData';
import { GithubIcon } from '@/components/SocialIcons';

const categories = ['All', 'Full-Stack', 'Frontend', 'Clone', 'Games'] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-[#1e1e1e]">
            Portfolio
          </h3>
          <p className="mt-2 text-base text-[#4e4e4e]">Recent Works</p>
          <div className="w-12 h-1 bg-[#0078ff] mx-auto mt-3 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              suppressHydrationWarning
              className={`px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-[#0078ff] text-white shadow-md shadow-[#0078ff]/30 scale-105'
                  : 'bg-white text-[#4e4e4e] hover:text-[#0078ff] border border-slate-200 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Preview */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#0078ff] shadow-md backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-lg font-bold text-[#1e1e1e] mb-2 group-hover:text-[#0078ff] transition-colors">
                  {project.title}
                </h4>

                <p className="text-[#4e4e4e] text-sm leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-medium bg-slate-100 text-slate-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Links */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {/* Live Preview */}
                  {project.demoUrl ? (
                    <div>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0078ff] hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Preview</span>
                      </a>
                    </div>
                  ) : (
                    <div className="text-xs text-slate-400 italic">Internal Prototype</div>
                  )}

                  {/* GitHub Links directly below Live Preview */}
                  {project.githubLinks && project.githubLinks.length > 0 && (
                    <div className="flex flex-wrap items-center gap-3 pt-0.5">
                      {project.githubLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-[#0078ff] transition-colors"
                          aria-label={`View ${link.label} on GitHub`}
                        >
                          <GithubIcon className="w-4 h-4 shrink-0" />
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

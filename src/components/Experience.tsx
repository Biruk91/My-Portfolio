'use client';

import { Briefcase, Calendar, MapPin, Check, Building2 } from 'lucide-react';
import { experiences } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching .title-box */}
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-[#1e1e1e]">
            Experience
          </h3>
          <p className="mt-2 text-base text-[#4e4e4e]">My Work Experience</p>
          <div className="w-12 h-1 bg-[#0078ff] mx-auto mt-3 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Marker Icon */}
              <div
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all shadow-sm ${
                  exp.current
                    ? 'bg-[#0078ff] border-[#0078ff] text-white shadow-[#0078ff]/30 scale-105'
                    : 'bg-white border-[#0078ff] text-[#0078ff] group-hover:bg-[#0078ff] group-hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg shadow-black/5 p-6 sm:p-8 border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-xl sm:text-2xl font-bold text-[#1e1e1e]">
                        {exp.role}
                      </h4>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="font-semibold text-[#0078ff] flex items-center gap-1.5">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </span>
                      {exp.employmentType && (
                        <>
                          <span className="text-slate-300">&bull;</span>
                          <span className="text-slate-500 text-xs px-2 py-0.5 rounded bg-slate-100">
                            {exp.employmentType}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-[#0078ff]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-[#0078ff]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-[#4e4e4e] leading-relaxed mb-5 text-sm sm:text-base">
                  {exp.description}
                </p>

                {/* Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <h5 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                      Key Contributions & Impact
                    </h5>
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-[#4e4e4e]">
                        <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0078ff] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills tags */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="pt-4 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs text-slate-400 font-medium mr-1">Skills:</span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { personalInfo, skillCategories } from '@/data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* White Card matching .box-shadow-full */}
        <div className="bg-white rounded-2xl shadow-xl shadow-black/5 p-6 sm:p-10 lg:p-12 border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Image, Info & Skills */}
            <div className="lg:col-span-6 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                {/* Photo */}
                <div className="sm:col-span-5 flex justify-center sm:justify-start">
                  <div className="relative w-44 h-48 sm:w-full sm:h-52 rounded-xl overflow-hidden shadow-md border-2 border-white">
                    <Image
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 176px, 220px"
                      priority
                    />
                  </div>
                </div>

                {/* About info */}
                <div className="sm:col-span-7 space-y-2.5 text-sm">
                  <p>
                    <span className="font-bold text-[#1e1e1e]">Name: </span>
                    <span className="text-[#4e4e4e]">{personalInfo.name}</span>
                  </p>
                  <p>
                    <span className="font-bold text-[#1e1e1e]">Profile: </span>
                    <span className="text-[#4e4e4e]">
                      Full-Stack Web Developer, ERPNext Developer, Odoo Developer
                    </span>
                  </p>
                  <p>
                    <span className="font-bold text-[#1e1e1e]">Email: </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-[#0078ff] hover:underline break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-bold text-[#1e1e1e]">Phone: </span>
                    <a href={`tel:${personalInfo.phone}`} className="text-[#4e4e4e] hover:text-[#0078ff]">
                      {personalInfo.phone}
                    </a>
                  </p>
                </div>
              </div>

              {/* Skills Grid matching .skills-list */}
              <div className="pt-6 border-t border-slate-100">
                <p className="font-bold text-[#1e1e1e] text-lg mb-4">Skills & Proficiencies</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {skillCategories.map((cat) => (
                    <div key={cat.category} className="space-y-2">
                      <h4 className="text-xs font-bold text-[#0078ff] uppercase tracking-wider">
                        {cat.category.split(' ')[0]}
                      </h4>
                      <ul className="space-y-1.5 text-sm text-[#4e4e4e]">
                        {cat.skills.map((skill) => (
                          <li
                            key={skill.name}
                            className="flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0078ff]" />
                            <span>{skill.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: About Me Lead Text */}
            <div className="lg:col-span-6 space-y-6 pt-4 lg:pt-0">
              <div className="relative pb-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1e1e1e]">
                  About Me
                </h3>
                <div className="w-20 h-1 bg-[#0078ff] mt-2 rounded-full" />
              </div>

              <div className="space-y-4 text-base text-[#4e4e4e] leading-relaxed">
                <p>
                  Hardworking and passionate job seeker with strong organizational skill eager
                  to secure a challenging position as a{' '}
                  <strong className="text-[#1e1e1e]">
                    Full-Stack Web Developer, App Developer, ERPNext Developer, or Odoo Developer
                  </strong>
                  . I am ready to seek and maintain full-time or part-time positions that offer
                  professional challenges utilizing interpersonal skills, excellent time management,
                  and problem-solving abilities.
                </p>
                <p>
                  Detail-orientated Web Developer adept at interpreting blueprints, working with
                  others, and meeting production deadlines. Skilled at quickly learning new
                  processes, technologies, and machinery. Self-motivated with strong organizational
                  and time management abilities. Most importantly, I&apos;m constantly trying to
                  learn new skills to improve myself and my work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

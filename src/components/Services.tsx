'use client';

import { Briefcase, CheckSquare, BarChart3, Search, Sun, CalendarDays } from 'lucide-react';
import { services } from '@/data/portfolioData';

const iconMap = {
  Briefcase: Briefcase,
  CheckSquare: CheckSquare,
  BarChart3: BarChart3,
  Search: Search,
  Sun: Sun,
  CalendarDays: CalendarDays,
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide text-[#1e1e1e]">
            Services
          </h3>
          <p className="mt-2 text-base text-[#4e4e4e]">
            I&apos;m a great team player, and I enjoy working with others. Some of my work qualities are listed below.
          </p>
          <div className="w-12 h-1 bg-[#0078ff] mx-auto mt-3 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap] || Briefcase;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl p-8 text-center shadow-lg shadow-black/5 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Circle Icon matching DevFolio .ico-circle */}
                <div className="w-20 h-20 rounded-full border-4 border-[#0078ff] flex items-center justify-center text-[#1e1e1e] group-hover:bg-[#0078ff] group-hover:text-white mx-auto mb-6 transition-all duration-300">
                  <Icon className="w-8 h-8" />
                </div>

                <h4 className="text-xl font-bold text-[#1e1e1e] mb-3">
                  {item.title}
                </h4>

                <p className="text-sm text-[#4e4e4e] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

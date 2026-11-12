'use client';

import { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const roles = personalInfo.roles;

  // Typewriter loop
  useEffect(() => {
    if (subIndex === roles[roleIndex].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, 1600);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 45 : 85);

    return () => clearTimeout(timeout);
  }, [subIndex, roleIndex, reverse, roles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed text-white"
      style={{ backgroundImage: `url('${personalInfo.heroBackground}')` }}
    >
      {/* Dark overlay matching overlay-itro */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-16">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
          I am {personalInfo.shortName}
        </h1>

        <div className="h-14 sm:h-16 flex items-center justify-center mb-8">
          <p className="text-xl sm:text-3xl md:text-4xl font-semibold text-white">
            <span className="border-b-2 border-[#0078ff] pb-1">
              {roles[roleIndex].substring(0, subIndex)}
            </span>
            <span className="inline-block w-1 h-6 sm:h-8 ml-1 bg-white animate-pulse align-middle" />
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <a
            href="#about"
            className="px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#0078ff] hover:bg-[#0062d3] text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            About Me
          </a>
          <a
            href="#work"
            className="px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider bg-white/10 hover:bg-white hover:text-[#1e1e1e] text-white border border-white/40 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105"
          >
            My Work
          </a>
        </div>
      </div>
    </section>
  );
}

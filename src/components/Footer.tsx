'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const [year, setYear] = useState('2026');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0062d3] text-white py-8 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <p className="text-sm font-medium">
          &copy; Copyright <strong className="font-bold">{personalInfo.name}</strong>. All Rights Reserved
        </p>
      </div>

      {/* Back to top floating button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        suppressHydrationWarning
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0078ff] text-white shadow-xl hover:bg-[#0055b8] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

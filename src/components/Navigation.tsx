import React from 'react';
import { NAV_ITEMS } from '../constants';

const Navigation: React.FC = () => {
  // Native scrolling via CSS scroll-behavior: smooth handles this well
  // and respects accessibility preferences.

  return (
    <div className="fixed bottom-6 left-0 right-0 z-[9999] flex justify-center pointer-events-none px-4">
      {/* Container for floating dock */}
      <nav className="pointer-events-auto bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 px-4 py-3 md:px-6 md:py-4 rounded-full shadow-2xl flex items-center gap-4 md:gap-8 transition-transform duration-300 hover:scale-[1.01] max-w-[90vw] overflow-x-auto no-scrollbar">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.external ? item.href : item.url}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            // onClick removed to use native anchor behavior
            className="group relative flex items-center justify-center cursor-pointer min-w-[40px]"
            aria-label={item.label}
          >
            {/* Icon container */}
            <div className={`p-2.5 rounded-xl transition-all duration-300 group-hover:bg-white/10 ${item.label === 'Resume' ? 'bg-white/5 border border-white/10' : ''}`}>
              <item.icon
                size={22}
                className={`transition-all duration-300 ${item.external ? 'text-gray-300 group-hover:text-white' : 'text-gray-400 group-hover:text-brand-blue group-hover:scale-110'}`}
                strokeWidth={1.5}
              />
            </div>

            {/* Tooltip (Hidden on mobile for cleaner look) */}
            <span className="hidden md:block absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 bg-white text-black text-xs font-bold font-sans px-3 py-1.5 rounded-lg whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.2)] pointer-events-none border border-white/20">
              {item.label}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
            </span>

            {/* Active Indicator for Resume */}
            {item.external && (
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-blue"></span>
              </span>
            )}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
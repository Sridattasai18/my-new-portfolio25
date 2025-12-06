import React from 'react';
import { PERSONAL_DETAILS } from '../constants';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-32 md:pt-40 pb-32 px-6 md:px-12 lg:px-20 overflow-hidden relative scroll-mt-20">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main CTA Content */}
        <div className="max-w-4xl mb-12">
          <p className="font-mono text-base md:text-lg text-gray-400 mb-6 font-medium tracking-wide">That's all for now.</p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none tracking-tight mb-8 text-white"
          >
            Got a project in mind? <br/> 
            <span className="text-white">Let's talk</span>
          </motion.h2>
        </div>

        {/* Divider and Floating Button Container */}
        <div className="relative mt-20 mb-20 md:mb-32">
          {/* Horizontal Line */}
          <div className="w-full h-[1px] bg-white/20 absolute top-1/2 left-0 -translate-y-1/2 z-0"></div>
          
          {/* Circular Button */}
          <div className="relative z-10 flex justify-end md:mr-20">
            <motion.a 
              href={`mailto:${PERSONAL_DETAILS.email}`}
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-32 h-32 md:w-56 md:h-56 bg-brand-blue rounded-full flex items-center justify-center text-white cursor-pointer shadow-2xl hover:shadow-brand-blue/50 transition-all duration-300"
            >
              <div className="text-center">
                <span className="block text-lg md:text-2xl font-display font-bold">Get in touch</span>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
           {/* Email */}
           <div className="break-all">
             <span className="block text-gray-500 font-mono text-sm mb-2 font-medium uppercase tracking-wider">Email:</span>
             <a 
               href={`mailto:${PERSONAL_DETAILS.email}`} 
               className="text-xl md:text-3xl font-display font-medium hover:text-brand-blue transition-colors text-white"
             >
                {PERSONAL_DETAILS.email}
             </a>
           </div>

           {/* Phone / Socials */}
           <div className="flex flex-col md:items-end gap-6">
             <div className="flex gap-6 md:gap-8">
                <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noreferrer" className="text-lg md:text-2xl font-mono text-gray-400 hover:text-white transition-colors hover:underline decoration-brand-blue underline-offset-4">
                  LinkedIn
                </a>
                <a href={PERSONAL_DETAILS.github} target="_blank" rel="noreferrer" className="text-lg md:text-2xl font-mono text-gray-400 hover:text-white transition-colors hover:underline decoration-brand-blue underline-offset-4">
                  GitHub
                </a>
             </div>
           </div>
        </div>

        {/* Footer Bottom info */}
        <div className="mt-20 md:mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 font-mono text-sm gap-4 text-center md:text-left font-medium">
          <p>© {new Date().getFullYear()} {PERSONAL_DETAILS.shortName}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with code.</p>
        </div>

      </div>
      
      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-brand-blue/10 blur-[150px] pointer-events-none" />
    </footer>
  );
};

export default Footer;
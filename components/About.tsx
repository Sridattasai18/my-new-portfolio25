import React from 'react';
import { PERSONAL_DETAILS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-20 bg-brand-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-white">
              Driven by <span className="text-gray-500">curiosity.</span>
            </h2>
             <div className="rounded-3xl overflow-hidden border border-white/5 h-64 md:h-96 w-full relative group shadow-lg bg-brand-card">
                <img 
                  src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=1000&auto=format&fit=crop" 
                  alt="Design and Develop" 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6">
                   <p className="text-white font-mono text-xs md:text-sm bg-black/60 backdrop-blur-md inline-block px-3 py-1.5 rounded-lg border border-white/10 uppercase tracking-wide">
                     Design & Develop
                   </p>
                </div>
            </div>
            
            <div className="flex gap-4">
              <a href={PERSONAL_DETAILS.github} target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all transform hover:scale-105 border border-white/5 group" aria-label="Github">
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-6 h-6 md:w-8 md:h-8 invert opacity-70 group-hover:opacity-100 transition-opacity" alt="Github"/>
              </a>
              <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all transform hover:scale-105 border border-white/5 group" aria-label="LinkedIn">
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-6 h-6 md:w-8 md:h-8 opacity-70 group-hover:opacity-100 transition-opacity" alt="Linkedin"/>
              </a>
            </div>
          </motion.div>
          
          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 lg:pt-2"
          >
             <div className="flex items-center gap-3 text-brand-blue font-mono text-sm tracking-wider uppercase font-medium">
                <span className="w-8 h-[1px] bg-brand-blue"></span>
                About Me
            </div>
            <div className="text-lg md:text-xl text-gray-400 font-sans font-normal leading-relaxed whitespace-pre-line space-y-6">
              {PERSONAL_DETAILS.about}
            </div>

            <button 
              onClick={scrollToProjects}
              className="flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full font-sans font-bold text-sm md:text-base hover:bg-brand-blue hover:text-white transition-all duration-300 group shadow-lg hover:shadow-brand-blue/30 mt-4"
            >
              See my work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
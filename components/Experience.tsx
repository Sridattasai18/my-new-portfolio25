import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-20 bg-brand-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-4xl md:text-6xl font-display font-bold mb-16 text-white"
         >
           Experience
         </motion.h2>

         <div className="grid grid-cols-1 gap-8">
           {EXPERIENCE.map((exp, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: index * 0.1 }}
               className="bg-brand-card p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-brand-blue/30 transition-all duration-300 group shadow-md"
             >
               <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-8 gap-4">
                 <div>
                   <h3 className="text-2xl md:text-4xl font-display font-bold text-white group-hover:text-brand-blue transition-colors">{exp.company}</h3>
                   <p className="text-brand-blue text-lg md:text-xl font-mono mt-2 font-medium">{exp.role}</p>
                 </div>
                 <div className="bg-white/5 px-5 py-2 rounded-full border border-white/10 font-mono text-sm text-gray-400 font-medium whitespace-nowrap">
                   {exp.year}
                 </div>
               </div>
               <p className="text-lg md:text-xl text-gray-400 font-sans leading-relaxed max-w-4xl font-normal border-l-2 border-white/10 pl-6">
                 {exp.description}
               </p>
             </motion.div>
           ))}
         </div>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-20 bg-brand-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight text-white"
           >
            Skills that fuel <br/> <span className="text-gray-500">my passion</span>
           </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-10">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-brand-card p-8 rounded-[2rem] border border-white/5 hover:border-brand-blue/30 transition-all duration-300 group flex flex-col ${category.className} shadow-lg`}
            >
              <div className="mb-8">
                 <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 group-hover:text-brand-blue transition-colors text-white">{category.title}</h3>
                 <p className="text-gray-400 text-base md:text-lg font-sans font-normal">{category.description}</p>
              </div>

              {/* Skills Icons Grid */}
              <div className="flex flex-wrap gap-4 mt-auto">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex flex-col items-center gap-3 group/icon"
                  >
                    {category.title === "Soft Skills" ? (
                      <span className="text-xs md:text-sm font-medium px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-gray-300 group-hover/icon:text-white group-hover/icon:border-brand-blue/30 transition-all cursor-default font-sans">
                        {skill.name}
                      </span>
                    ) : (
                      <>
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center border border-white/5 group-hover/icon:border-brand-blue/50 group-hover/icon:bg-neutral-800 transition-all duration-300 shadow-sm">
                          {skill.iconUrl ? (
                            <img src={skill.iconUrl} alt={skill.name} className="w-7 h-7 md:w-8 md:h-8 opacity-70 group-hover/icon:opacity-100 transition-opacity transform group-hover/icon:scale-110 duration-300" />
                          ) : (
                            <span className="text-lg font-bold font-mono text-white">{skill.name[0]}</span>
                          )}
                        </div>
                        <span className="text-[10px] md:text-xs font-mono text-gray-500 group-hover/icon:text-brand-blue transition-colors font-medium">
                          {skill.name}
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
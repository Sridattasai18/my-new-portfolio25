import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-20 bg-white text-black scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 pt-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 tracking-tight"
          >
            My Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl lg:text-2xl md:w-2/3 text-gray-600 font-display font-medium leading-relaxed"
          >
            Welcome to my realm of wild projects and awesome creations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 pb-20">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[4/3] mb-6 bg-gray-100 shadow-lg border border-black/5">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-mono font-bold border border-black/5 shadow-sm text-black">
                  {project.year}
                </div>
              </div>

              <div className="flex justify-between items-start gap-6 flex-grow">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold group-hover:text-brand-blue transition-colors leading-tight text-black">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs md:text-sm font-mono px-3 py-1.5 bg-gray-100 rounded-lg text-gray-700 font-medium border border-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-base md:text-lg text-gray-600 font-sans font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-gray-200 flex-shrink-0 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 group-hover:border-black text-black">
                  <ArrowUpRight size={24} className="md:w-7 md:h-7" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
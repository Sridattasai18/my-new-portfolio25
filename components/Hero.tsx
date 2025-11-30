import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  
  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20 pb-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 md:gap-8 z-10 relative"
        >
          <div className="flex items-center gap-4 text-brand-gray font-mono text-sm md:text-base lg:text-lg tracking-wider uppercase">
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-brand-blue rounded-full animate-pulse"></span>
            Based in India
          </div>

          {/* Name - use Inter (font-sans) as requested */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-bold text-gray-200 tracking-wide">
            Kaligotla Sri Datta Sai Vithal
          </h2>

          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.05] md:leading-[0.95] tracking-tight text-white">
            Creative <br />
            Developer <br />
            <span className="text-gray-500">& Learner</span>
          </h1>
        </motion.div>

        {/* Hero Image / User Picture - Fully Responsive with optimized srcset */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
           className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 relative w-full aspect-video sm:aspect-auto sm:h-[280px] md:h-[380px] lg:h-[480px] xl:h-[560px] rounded-xl sm:rounded-2xl md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden bg-brand-card border border-white/5 shadow-2xl"
        >
          {/* Placeholder image for LQIP (Low Quality Image Placeholder) effect */}
          {!imgLoaded && (
            <img 
              src="/images/profile-placeholder.jpg"
              alt="" 
              className="absolute inset-0 w-full h-full object-cover blur-sm"
              aria-hidden="true"
            />
          )}
          
          {/* Profile Image - Responsive picture element with WebP and JPEG variants */}
          <picture>
            {/* WebP variants for modern browsers */}
            <source
              srcSet="/images/profile-480w.webp 480w, /images/profile-768w.webp 768w, /images/profile-1200w.webp 1200w"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 80vw"
              type="image/webp"
            />
            {/* JPEG fallback for older browsers */}
            <source
              srcSet="/images/profile-480w.jpg 480w, /images/profile-768w.jpg 768w, /images/profile-1200w.jpg 1200w"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 80vw"
              type="image/jpeg"
            />
            {/* Fallback img tag */}
            <img 
              src="/images/profile-1200w.jpg"
              alt="Kaligotla Sri Datta Sai Vithal" 
              className={`w-full h-full object-contain object-center transition-all duration-[1.5s] grayscale hover:grayscale-0 hover:scale-[1.01] ${
                imgLoaded ? 'opacity-90 hover:opacity-100' : 'opacity-0'
              }`}
              loading="eager"
              decoding="async"
              onLoad={() => setImgLoaded(true)}
              onError={(e) => { 
                e.currentTarget.onerror = null; 
                e.currentTarget.src = 'https://ui-avatars.com/api/?name=Kaligotla+Sri+Datta+Sai+Vithal&background=222&color=fff&size=512';
                setImgLoaded(true);
              }}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
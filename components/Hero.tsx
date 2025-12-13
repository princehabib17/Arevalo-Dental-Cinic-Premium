
import React from 'react';
import type { HeroContent } from '../types';

interface HeroProps {
  content: HeroContent;
  whatsappLink: string;
}

const Hero: React.FC<HeroProps> = ({ content, whatsappLink }) => {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-zinc-50">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src="https://res.cloudinary.com/deulmakpv/video/upload/v1762143355/wmremove-transformed_deo0ga.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-16">
         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Glass Card - Shadcn Style */}
            <div className="animate-enter w-full md:w-[60%] lg:w-[55%] bg-white/75 backdrop-blur-2xl p-8 sm:p-12 rounded-[2rem] border border-white/50 shadow-sm ring-1 ring-zinc-900/5">
                
                <div className="flex items-center gap-3 mb-8">
                    <span className="flex h-2.5 w-2.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006C35] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#006C35]"></span>
                    </span>
                    <span className="text-[#006C35] text-xs font-bold tracking-[0.2em] uppercase font-sans">
                        {content.eyebrow}
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-zinc-950 mb-8 leading-[1.1]">
                    {content.h1}
                </h1>

                <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed mb-10 font-light border-l-2 border-[#006C35]/30 pl-6">
                    {content.subhead}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                     {/* Primary Button */}
                     <a 
                       href={whatsappLink}
                       className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#006C35] text-white font-semibold text-sm transition-colors hover:bg-[#005028] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-[#006C35] focus-visible:ring-offset-2 shadow-sm"
                     >
                        {content.primaryCTA}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                     </a>
                     
                     {/* Secondary Button */}
                     {content.secondaryCTA && (
                        <a href="#services" className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2">
                            {content.secondaryCTA}
                        </a>
                     )}
                </div>
            </div>

            <div className="hidden md:block w-full md:w-[40%]"></div>
         </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent"></div>
    </section>
  );
};

export default Hero;


import React from 'react';
import type { HeroContent } from '../types';

interface HeroProps {
  content: HeroContent;
  whatsappLink: string;
}

const Hero: React.FC<HeroProps> = ({ content, whatsappLink }) => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-[#F8F8F6]">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] bg-gradient-to-b from-[#D8E6EA] to-transparent rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }}></div>
         <div className="absolute top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-gradient-to-tr from-[#E6F4F1] to-transparent rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1 pt-10 lg:pt-0">
                <div className="animate-enter">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#006C35]/20 bg-[#006C35]/5 text-[#006C35] text-xs font-bold tracking-widest uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#006C35] animate-pulse"></span>
                        {content.eyebrow}
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-[#101010] tracking-tight">
                        {content.h1.split(' ').map((word, i) => (
                            <span key={i} className="inline-block mr-3 lg:mr-4">{word}</span>
                        ))}
                    </h1>
                </div>

                <p className="text-xl text-gray-600 max-w-lg leading-relaxed animate-enter delay-200">
                    {content.subhead}
                </p>

                <div className="flex flex-wrap items-center gap-4 animate-enter delay-300">
                     <a 
                       href={whatsappLink}
                       className="group relative px-8 py-4 bg-[#101010] text-white rounded-full font-bold overflow-hidden transition-transform active:scale-95"
                     >
                        <div className="absolute inset-0 bg-[#333] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                        <span className="relative z-10 flex items-center gap-2">
                            {content.primaryCTA}
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </span>
                     </a>
                     
                     <a href="#services" className="px-8 py-4 bg-white border border-gray-200 text-[#101010] rounded-full font-bold hover:bg-gray-50 transition-colors">
                        {content.secondaryCTA}
                     </a>
                </div>
                
                {/* Stats / Trust indicators */}
                <div className="flex items-center gap-8 pt-8 animate-enter delay-500 border-t border-black/5 mt-4">
                    <div>
                        <p className="text-3xl font-bold text-[#101010]">30+</p>
                        <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Years Exp.</p>
                    </div>
                    <div className="w-px h-10 bg-gray-200"></div>
                    <div>
                        <p className="text-3xl font-bold text-[#101010]">5k+</p>
                        <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Patients</p>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 order-1 lg:order-2 animate-enter delay-200">
                 <div className="relative rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out will-change-transform group">
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                        alt="Modern Dental Chair" 
                        className="w-full h-[500px] lg:h-[700px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                     />
                     
                     {/* Floating Badge */}
                     <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1,2,3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <img src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} alt="Client" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#101010]">Trusted by GCC Patients</p>
                                <div className="flex text-yellow-500 text-xs">★★★★★</div>
                            </div>
                        </div>
                     </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

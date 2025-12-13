
import React from 'react';
import type { JourneyContent } from '../types';

interface JourneyProps {
  content: JourneyContent;
  whatsappLink: string;
}

const Journey: React.FC<JourneyProps> = ({ content, whatsappLink }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="text-[#006C35] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Process</span>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-950">
                {content.title}
            </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
             {/* Central Line */}
             <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 transform md:-translate-x-1/2"></div>

             <div className="space-y-12">
                {content.steps.map((step, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Empty Space for alignment */}
                        <div className="flex-1 hidden md:block"></div>

                        {/* Center Icon */}
                        <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                            <div className="w-12 h-12 bg-[#006C35] rounded-full flex items-center justify-center border-4 border-white shadow-sm ring-1 ring-zinc-100">
                                <span className="text-white font-bold font-serif">{index + 1}</span>
                            </div>
                        </div>

                        {/* Content Card */}
                        <div className="flex-1 w-full pl-20 md:pl-0">
                            <div className={`bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm relative group hover:border-[#006C35]/50 transition-all ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                <h3 className="text-lg font-bold text-zinc-950 mb-2">{step.title}</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </div>

                    </div>
                ))}
             </div>
        </div>
        
        <div className="text-center mt-24">
             <a href={whatsappLink} className="inline-flex items-center justify-center h-12 px-8 bg-zinc-950 text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2">
                {content.cta}
             </a>
        </div>
      </div>
    </section>
  );
};

export default Journey;

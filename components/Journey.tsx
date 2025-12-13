
import React from 'react';
import type { JourneyContent } from '../types';

interface JourneyProps {
  content: JourneyContent;
  whatsappLink: string;
}

const Journey: React.FC<JourneyProps> = ({ content, whatsappLink }) => {
  return (
    <section className="py-32 bg-[#F8F8F6] relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#101010] mb-4">
            {content.title}
          </h2>
          <p className="text-gray-500">Your path to a perfect smile in 5 simple steps.</p>
        </div>

        <div className="relative">
             {/* Connection Line */}
             <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#006C35]/0 via-[#006C35]/30 to-[#006C35]/0 hidden md:block"></div>
             <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 md:hidden"></div>

             <div className="space-y-16">
                {content.steps.map((step, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                        
                        {/* Content Half */}
                        <div className="md:w-1/2 md:px-12">
                             <div className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}`}>
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#006C35]/5 rounded-bl-full -mr-10 -mt-10"></div>
                                <h3 className="text-xl font-bold text-[#101010] mb-2 relative z-10">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed relative z-10">{step.description}</p>
                             </div>
                        </div>

                        {/* Center Node */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-[#006C35] rounded-full z-10 shadow-[0_0_0_4px_rgba(255,255,255,1)] group-hover:scale-150 transition-transform duration-300"></div>

                        {/* Number Half (Desktop) */}
                        <div className={`hidden md:flex md:w-1/2 md:px-12 items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                            <span className="text-8xl font-bold text-gray-100 select-none group-hover:text-[#006C35]/10 transition-colors">
                                0{index + 1}
                            </span>
                        </div>
                        
                        {/* Number (Mobile) */}
                         <div className="absolute left-0 -top-8 text-6xl font-bold text-gray-100 md:hidden -z-10">
                            0{index + 1}
                         </div>

                    </div>
                ))}
             </div>
        </div>
        
        <div className="text-center mt-20">
             <a href={whatsappLink} className="inline-block px-10 py-4 bg-[#006C35] text-white rounded-full font-bold shadow-lg shadow-[#006C35]/30 hover:bg-[#005229] hover:shadow-xl hover:-translate-y-1 transition-all">
                {content.cta}
             </a>
        </div>
      </div>
    </section>
  );
};

export default Journey;

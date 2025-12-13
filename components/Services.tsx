
import React from 'react';
import type { ServicesContent } from '../types';

interface ServicesProps {
    content: ServicesContent;
}

const ServiceCard: React.FC<{ title: string, description: string, icon: string, index: number }> = ({ title, description, icon, index }) => {
    return (
        <div className="group h-full bg-white rounded-xl border border-zinc-200 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#006C35]/50 flex flex-row items-start gap-4">
            <div className="flex flex-col justify-between h-full flex-1">
                <div>
                    <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-[#006C35] transition-colors tracking-tight">{title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                        {description}
                    </p>
                </div>
                {/* Decorative Indicator */}
                <div className="w-8 h-0.5 bg-zinc-100 mt-4 group-hover:bg-[#006C35] transition-colors"></div>
            </div>
            
            <div className="w-12 h-12 flex-shrink-0 bg-zinc-50 rounded-lg p-2.5 border border-zinc-100 group-hover:scale-105 transition-transform duration-300">
                <img src={icon} alt={title} className="w-full h-full object-contain opacity-80 group-hover:opacity-100" />
            </div>
        </div>
    );
};

const Services: React.FC<ServicesProps> = ({ content }) => {
    return (
        <section id="services" className="py-24 bg-zinc-50 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center rounded-full border border-[#006C35]/20 bg-[#006C35]/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#006C35] mb-4">
                            Our Expertise
                        </span>
                        <h2 className="text-4xl md:text-5xl font-medium text-zinc-950 tracking-tight">
                            {content.title}
                        </h2>
                    </div>
                    <p className="text-zinc-500 max-w-sm text-lg font-light leading-relaxed">
                        Precision dentistry backed by 30 years of experience and advanced technology.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.services.map((service, index) => (
                        <ServiceCard key={index} index={index} title={service.title} description={service.description} icon={service.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

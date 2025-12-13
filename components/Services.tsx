
import React from 'react';
import type { ServicesContent } from '../types';

interface ServicesProps {
    content: ServicesContent;
}

const ServiceIcon: React.FC<{ index: number }> = ({ index }) => {
    // Reusing paths but styling them for dark mode
    const paths = [
        "M8 6h8a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z M8 12h8", 
        "M12 2v20M8 18h8M7 6l5-4 5 4",
        "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5M2 12l10 5 10-5",
        "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        "M12 2l3 6 5 2-4 4 1 5-5-3-5 3 1-5-4-4 5-2 3-6z",
        "M4 4h16v16H4z M8 8h8v8H8z",
        "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.7-3.7a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0l-3.7 3.7z M5 19l4-4",
        "M4 8h16M4 12h16M4 16h16M7 6v12M12 6v12M17 6v12",
        "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
        "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
        "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
        "M13 10V3L4 14h7v7l9-11h-7z"
    ];
    
    return (
        <svg className="w-10 h-10 text-[#006C35] stroke-1 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d={paths[index % paths.length]} />
        </svg>
    );
}

const ServiceCard: React.FC<{ title: string, description: string, index: number }> = ({ title, description, index }) => {
    return (
        <div className="group relative bg-[#1A1A1A] hover:bg-[#006C35] rounded-xl p-8 transition-all duration-300 ease-out border border-white/5 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#006C35]/20">
            <div className="mb-6 w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ServiceIcon index={index} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-sm text-gray-400 group-hover:text-white/80 leading-relaxed transition-colors">
                {description}
            </p>
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </div>
    );
};

const Services: React.FC<ServicesProps> = ({ content }) => {
    return (
        <section id="services" className="py-32 bg-[#101010] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[#006C35] font-bold tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                            {content.title}
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-sm text-lg text-right md:text-left">
                         Comprehensive dental solutions tailored to global standards.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {content.services.map((service, index) => (
                        <ServiceCard key={index} index={index} title={service.title} description={service.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

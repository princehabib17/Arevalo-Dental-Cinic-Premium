
import React from 'react';
import type { TeamContent } from '../types';

interface TeamProps {
    content: TeamContent;
}

const Team: React.FC<TeamProps> = ({ content }) => {
    return (
        <section className="bg-white py-24 relative border-t border-zinc-100">
             <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-50 to-transparent pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-zinc-950 mb-6">
                        {content.title}
                    </h2>
                    <p className="max-w-2xl text-lg text-zinc-500 font-light leading-relaxed">
                        {content.subhead}
                    </p>
                    
                    {/* Stats Display */}
                    <div className="grid grid-cols-2 gap-8 mt-12 w-full max-w-lg">
                        {content.stats && content.stats.map((stat, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm flex flex-col items-center">
                                <div className="text-3xl font-bold text-[#006C35] mb-1">{stat.value}</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {content.doctors.map((doctor, index) => (
                        <div key={index} className="group cursor-pointer flex flex-col items-center">
                            <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-100 mb-6 relative shadow-sm border border-zinc-100 group-hover:shadow-md transition-all duration-300">
                                {/* Doctor Image */}
                                <img 
                                    src={doctor.image} 
                                    alt={doctor.name} 
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            
                            <div className="text-center">
                                <h3 className="text-lg font-bold text-zinc-950 mb-1">{doctor.name}</h3>
                                <p className="text-[#006C35] font-medium text-sm uppercase tracking-wide opacity-80">{doctor.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

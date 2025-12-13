
import React from 'react';
import type { TeamContent } from '../types';

interface TeamProps {
    content: TeamContent;
}

const Team: React.FC<TeamProps> = ({ content }) => {
    return (
        <section className="bg-white py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-20">
                    <span className="text-[#006C35] font-bold tracking-widest text-sm uppercase mb-3">Our Experts</span>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101010]">
                        {content.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {content.doctors.map((doctor, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl bg-[#F0F0F0] mb-6 relative shadow-lg">
                                <img 
                                    src={doctor.image} 
                                    alt={doctor.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                     <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        Specializing in cosmetic and restorative dentistry.
                                     </p>
                                </div>
                            </div>
                            <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-[#101010]">{doctor.name}</h3>
                                <p className="text-[#006C35] font-semibold mt-1 uppercase text-sm tracking-wider">{doctor.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

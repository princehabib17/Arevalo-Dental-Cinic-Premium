
import React from 'react';
import type { TeamContent } from '../types';

interface TeamProps {
    content: TeamContent;
}

const Team: React.FC<TeamProps> = ({ content }) => {
    return (
        <section className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600 ring-premium">
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"></span>
                        Our doctors
                    </span>
                    <h2 className="mt-5 text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
                        {content.title}
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
                        {content.subhead}
                    </p>
                </div>

                {/* Stats: mobile-first, premium chips */}
                {content.stats && (
                    <div className="mt-10 grid grid-cols-2 gap-4 sm:max-w-xl">
                        {content.stats.map((stat, idx) => (
                            <div key={idx} className="surface-glass ring-premium rounded-3xl p-5">
                                <div className="text-2xl sm:text-3xl font-semibold text-zinc-950">{stat.value}</div>
                                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Mobile-first: scroll-snap profile rail */}
                <div className="mt-10 sm:hidden -mx-4 px-4 overflow-x-auto no-scrollbar mask-fade-x">
                    <div className="flex gap-4 w-max pr-10 snap-x snap-mandatory">
                        {content.doctors.map((doctor, index) => (
                            <div key={index} className="snap-start w-[82vw] max-w-[340px]">
                                <div className="surface-glass ring-premium rounded-3xl overflow-hidden">
                                    <div className="aspect-[4/5] bg-zinc-100">
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="h-full w-full object-cover object-top"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-base font-semibold text-zinc-950">{doctor.name}</h3>
                                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)] opacity-90">
                                            {doctor.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop: premium grid */}
                <div className="hidden sm:grid mt-12 grid-cols-3 gap-6 lg:gap-8">
                    {content.doctors.map((doctor, index) => (
                        <div key={index} className="surface-glass ring-premium rounded-3xl overflow-hidden transition-transform duration-300 hover:-translate-y-0.5">
                            <div className="aspect-[4/5] bg-zinc-100">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="h-full w-full object-cover object-top"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-7">
                                <h3 className="text-base font-semibold text-zinc-950">{doctor.name}</h3>
                                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)] opacity-90">{doctor.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

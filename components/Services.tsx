
import React from 'react';
import type { ServicesContent } from '../types';

interface ServicesProps {
    content: ServicesContent;
}

const ServiceCard: React.FC<{ title: string; description: string; icon: string; featured?: boolean }> = ({
    title,
    description,
    icon,
    featured = false,
}) => {
    return (
        <div
            className={[
                "group relative overflow-hidden rounded-3xl",
                "surface-glass ring-premium",
                "transition-transform duration-300 hover:-translate-y-0.5",
                featured ? "p-7 sm:p-8" : "p-6",
            ].join(" ")}
        >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(var(--accent-rgb),0.22),transparent_62%)] blur-2xl"></div>
            </div>

            <div className="relative flex items-start gap-4">
                <div className={featured ? "flex-1" : "flex-1"}>
                    <h3 className={[featured ? "text-xl" : "text-base", "font-semibold tracking-tight text-zinc-950"].join(" ")}>
                        {title}
                    </h3>
                    <p className={[featured ? "mt-3 text-sm sm:text-base" : "mt-2 text-sm", "text-zinc-600 leading-relaxed"].join(" ")}>
                        {description}
                    </p>
                </div>

                <div
                    className={[
                        "flex-shrink-0 rounded-2xl border border-zinc-200/70 bg-white/70 backdrop-blur-md ring-premium",
                        featured ? "h-14 w-14 p-3" : "h-12 w-12 p-2.5",
                    ].join(" ")}
                >
                    <img src={icon} alt={title} className="h-full w-full object-contain opacity-90" loading="lazy" />
                </div>
            </div>

            <div className="relative mt-6 flex items-center gap-3">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"></span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">Premium care</span>
            </div>
        </div>
    );
};

const Services: React.FC<ServicesProps> = ({ content }) => {
    const services = content.services;
    const featured = services[0];
    const rest = services.slice(1);

    return (
        <section id="services" className="relative py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600 ring-premium">
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"></span>
                        Our expertise
                    </span>
                    <h2 className="mt-5 text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
                        {content.title}
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
                        Precision dentistry backed by decades of experience and a calm, modern treatment style.
                    </p>
                </div>

                {/* Mobile-first: featured + scroll-snap bento rail */}
                {featured && (
                    <div className="mt-10">
                        <ServiceCard title={featured.title} description={featured.description} icon={featured.icon} featured />
                    </div>
                )}

                <div className="mt-6 sm:mt-10">
                    <div className="sm:hidden overflow-x-auto no-scrollbar -mx-4 px-4 mask-fade-x">
                        <div className="flex gap-4 w-max pr-10 snap-x snap-mandatory">
                            {rest.map((service, index) => (
                                <div key={index} className="snap-start w-[85vw] max-w-[360px]">
                                    <ServiceCard title={service.title} description={service.description} icon={service.icon} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop: bento grid */}
                    <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {rest.map((service, index) => (
                            <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

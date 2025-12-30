
import React from 'react';
import type { TrustMarqueeContent } from '../types';

interface TrustMarqueeProps {
  content: TrustMarqueeContent;
}

const TrustMarquee: React.FC<TrustMarqueeProps> = ({ content }) => {
  return (
    <section className="relative overflow-hidden py-14 sm:py-18 animate-enter delay-200">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        /* Refined tint for luxury look */
        .logo-tint {
           filter: grayscale(100%) opacity(0.4);
           transition: all 0.5s ease;
        }
        .logo-tint:hover {
           filter: grayscale(0%) opacity(1);
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="surface-glass rounded-3xl px-5 py-7 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-[0.26em]">
              {content.line}
            </p>
            <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"></span>
              <span className="font-medium">Insurance ready</span>
            </div>
          </div>

          {/* Mobile-first: tactile horizontal rail (no marquee) */}
          <div className="mt-6 sm:hidden overflow-x-auto no-scrollbar mask-fade-x">
            <div className="flex items-center gap-10 w-max pr-10">
              {content.logos.map((logo, index) => (
                <img
                  key={index}
                  className="h-8 w-auto object-contain flex-none logo-tint"
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Desktop: calm marquee (masked edges) */}
          <div className="mt-8 hidden sm:block overflow-hidden mask-fade-x">
            <div className="flex w-max gap-x-24 items-center animate-marquee">
              {[...content.logos, ...content.logos, ...content.logos].map((logo, index) => (
                <img
                  key={index}
                  className="h-10 w-auto object-contain flex-none logo-tint"
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;

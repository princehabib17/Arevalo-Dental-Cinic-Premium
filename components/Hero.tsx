
import React from 'react';
import type { HeroContent } from '../types';

interface HeroProps {
  content: HeroContent;
  whatsappLink: string;
}

const Hero: React.FC<HeroProps> = ({ content, whatsappLink }) => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-black">
      {/* Video Background (Apple-style: clean video + controlled gradients for consistent contrast) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover scale-[1.06] motion-reduce:hidden"
        >
          <source
            src="https://res.cloudinary.com/deulmakpv/video/upload/v1762143355/wmremove-transformed_deo0ga.mp4"
            type="video/mp4"
          />
        </video>

        {/* Subtle vignette + top scrim (keeps header/text readable on any frame) */}
        <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_15%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_72%,rgba(0,0,0,0.78)_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-zinc-50"></div>
        {/* Premium accent glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,108,53,0.22),transparent_62%)] blur-2xl opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Use padding (not margin) to avoid awkward header overlap across devices */}
        <div className="min-h-[92svh] flex items-end sm:items-center py-16 pt-32">
          <div className="w-full max-w-3xl text-start">
            <div className="animate-enter">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md ring-premium">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#006C35]"></span>
                <span className="text-white/85 text-[11px] font-semibold tracking-[0.22em] uppercase">
                  {content.eyebrow}
                </span>
              </div>

              <h1 className="mt-6 text-white text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.03]">
                {content.h1}
              </h1>

              <p className="hero-subhead mt-6 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed border-l-2 border-[#006C35]/35 pl-6">
                {content.subhead}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#006C35] text-white font-semibold text-sm transition-colors hover:bg-[#005028] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006C35] focus-visible:ring-offset-2 focus-visible:ring-offset-black shadow-sm"
                >
                  {content.primaryCTA}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                {content.secondaryCTA && (
                  <a
                    href="#services"
                    className="h-12 px-8 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white font-medium text-sm hover:bg-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    {content.secondaryCTA}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-50 to-transparent"></div>
    </section>
  );
};

export default Hero;

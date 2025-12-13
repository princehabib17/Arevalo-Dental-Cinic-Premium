
import React from 'react';
import type { TrustMarqueeContent } from '../types';

interface TrustMarqueeProps {
  content: TrustMarqueeContent;
}

const TrustMarquee: React.FC<TrustMarqueeProps> = ({ content }) => {
  return (
    <div className="bg-white py-16 relative overflow-hidden z-20 -mt-10 pt-20">
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-12">
            {content.line}
          </p>
          <div className="relative w-full overflow-hidden mask-image-gradient-sides">
            <div 
                className="flex w-max gap-x-24 items-center animate-marquee"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                }}
            >
                {[...content.logos, ...content.logos, ...content.logos].map((logo, index) => (
                  <img
                    key={index}
                    className="h-10 w-auto object-contain flex-none logo-tint"
                    src={logo}
                    alt={`Partner Logo ${index + 1}`}
                  />
                ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default TrustMarquee;

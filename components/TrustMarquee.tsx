
import React from 'react';
import type { TrustMarqueeContent } from '../types';

interface TrustMarqueeProps {
  content: TrustMarqueeContent;
}

const logos = [
  'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg',
  'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg',
  'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg',
  'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg',
  'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg',
];

const TrustMarquee: React.FC<TrustMarqueeProps> = ({ content }) => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            {content.line}
          </h2>
          <div className="mt-10 relative overflow-hidden">
            <div className="flex w-max gap-x-16 hover:[animation-play-state:paused] animate-marquee">
                {[...logos, ...logos, ...logos].map((logo, index) => (
                  <img
                    key={index}
                    className="max-h-12 w-full object-contain flex-none"
                    src={logo}
                    alt={`Partner Logo ${index + 1}`}
                    width={158}
                    height={48}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustMarquee;

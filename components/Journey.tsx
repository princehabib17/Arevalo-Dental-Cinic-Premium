
import React from 'react';
import type { JourneyContent } from '../types';

interface JourneyProps {
  content: JourneyContent;
  whatsappLink: string;
}

const Journey: React.FC<JourneyProps> = ({ content, whatsappLink }) => {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600 ring-premium">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"></span>
              Process
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
              {content.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
              A simple, calm sequence — designed for predictable results and zero guesswork.
            </p>

            <div className="mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-950 text-white font-semibold text-sm hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
              >
                {content.cta}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="surface-glass ring-premium rounded-3xl p-4 sm:p-6">
              <ol className="space-y-3">
                {content.steps.map((step, index) => (
                  <li key={index} className="relative overflow-hidden rounded-2xl bg-white/70 border border-zinc-200/70 ring-premium">
                    <div className="p-5 sm:p-6 flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center font-semibold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm sm:text-base font-semibold text-zinc-950">{step.title}</h3>
                        <p className="mt-1 text-sm text-zinc-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(var(--accent-rgb),0.18),transparent_60%)] blur-2xl opacity-60"></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

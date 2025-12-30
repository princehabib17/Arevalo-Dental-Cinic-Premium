
import React, { useState } from 'react';
import type { FAQContent, FAQItem } from '../types';

interface FAQProps {
  content: FAQContent;
}

const FAQItemComponent: React.FC<{ item: FAQItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="surface-glass ring-premium rounded-2xl overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-5 py-5 text-left transition-colors hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
                aria-expanded={isOpen}
            >
                <span className="text-sm sm:text-base font-semibold text-zinc-950">{item.question}</span>
                <span className="ml-4 flex-shrink-0 h-9 w-9 rounded-full border border-zinc-200/70 bg-white/70 flex items-center justify-center ring-premium">
                    <svg className={`h-4 w-4 text-zinc-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-zinc-600">
                    {item.answer}
                </div>
            </div>
        </div>
    );
};


const FAQ: React.FC<FAQProps> = ({ content }) => {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600 ring-premium">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"></span>
            FAQ
          </span>
          <h2 className="mt-5 text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
            {content.title}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4">
          {content.faqs.map((faq, index) => (
            <FAQItemComponent key={index} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

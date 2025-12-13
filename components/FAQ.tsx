
import React, { useState } from 'react';
import type { FAQContent, FAQItem } from '../types';

interface FAQProps {
  content: FAQContent;
}

const FAQItemComponent: React.FC<{ item: FAQItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-zinc-200">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-4 text-left transition-all hover:text-[#006C35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006C35] rounded-sm"
                aria-expanded={isOpen}
            >
                <span className="text-base font-medium text-zinc-900">{item.question}</span>
                <span className="ml-4 flex-shrink-0">
                    <svg className={`h-4 w-4 text-zinc-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pb-4 pt-0 text-sm leading-relaxed text-zinc-600">
                    {item.answer}
                </div>
            </div>
        </div>
    );
};


const FAQ: React.FC<FAQProps> = ({ content }) => {
  return (
    <div className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 text-center mb-12">
            {content.title}
          </h2>
          <div className="divide-y divide-zinc-200">
            {content.faqs.map((faq, index) => (
              <FAQItemComponent key={index} item={faq} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default FAQ;

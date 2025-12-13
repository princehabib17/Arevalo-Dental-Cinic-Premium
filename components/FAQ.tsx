
import React, { useState } from 'react';
import type { FAQContent, FAQItem } from '../types';

interface FAQProps {
  content: FAQContent;
}

const FAQItemComponent: React.FC<{ item: FAQItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="py-5 border-b border-gray-200">
            <dt>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full items-start justify-between text-start text-gray-900"
                    aria-expanded={isOpen}
                >
                    <span className="text-base font-semibold leading-7">{item.question}</span>
                    <span className="ms-6 flex h-7 items-center">
                        <svg className={`h-6 w-6 transform transition-transform duration-200 ${isOpen ? '-rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </button>
            </dt>
            <dd className={`mt-2 pr-12 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-base leading-7 text-gray-600 py-2">{item.answer}</p>
            </dd>
        </div>
    );
};


const FAQ: React.FC<FAQProps> = ({ content }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-3xl sm:text-4xl font-bold leading-10 tracking-tight text-gray-900 text-center">
            {content.title}
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {content.faqs.map((faq, index) => (
              <FAQItemComponent key={index} item={faq} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

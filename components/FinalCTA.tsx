
import React from 'react';
import type { FinalCTAContent } from '../types';

interface FinalCTAProps {
  content: FinalCTAContent;
  whatsappLink: string;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ content, whatsappLink }) => {
  return (
    <section className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#101010] sm:text-4xl mb-8">
            {content.line}
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-6 py-4 rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-[#006C35] w-full sm:w-auto min-w-[300px]"
                />
                <button
                    className="rounded-full bg-[#006C35] px-10 py-4 text-center font-bold text-white shadow-lg transition hover:bg-[#005c2e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AECBD6]"
                >
                {content.button}
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

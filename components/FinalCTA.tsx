
import React from 'react';
import type { FinalCTAContent } from '../types';

interface FinalCTAProps {
  content: FinalCTAContent;
  whatsappLink: string;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ content, whatsappLink }) => {
  return (
    <section className="bg-white border-t border-zinc-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl mb-6">
            {content.line}
            </h2>
            <p className="text-lg text-zinc-500 mb-10 leading-relaxed font-light">
                {content.body}
            </p>
            <div className="flex justify-center">
                <a
                    href={whatsappLink}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1fb855] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-2.846-.848-.919-.386-1.526-1.291-1.609-1.429-.084-.138-.637-.892-.379-1.357.144-.258.607-.297.837-.297.094 0 .185.006.262.006.236 0 .38.037.545.433.172.417.585 1.458.636 1.565.051.107.085.231.025.352-.061.121-.092.197-.184.295-.092.097-.245.216-.35.291-.115.082-.249.195-.107.438.141.243.626 1.042 1.353 1.692.68.608 1.253.799 1.432.887.178.087.283.076.388-.046.106-.122.454-.53.575-.711.121-.181.243-.151.408-.09.165.061 1.042.493 1.221.583.178.09.297.135.339.208.042.073.042.423-.102.828z"/>
                    </svg>
                    {content.button}
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

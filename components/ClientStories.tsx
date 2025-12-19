
import React from 'react';
import type { ClientStoriesContent, Story } from '../types';

interface ClientStoriesProps {
  content: ClientStoriesContent;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-[#006C35] fill-[#006C35]' : 'text-zinc-200 fill-zinc-200'}`} 
            viewBox="0 0 24 24"
        >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

const StoryCard: React.FC<{ story: Story }> = ({ story }) => {
    return (
        <div className="surface-glass ring-premium p-7 rounded-3xl flex flex-col justify-between h-full transition-transform duration-300 hover:-translate-y-0.5">
            <div>
                <StarRating rating={story.rating || 5} />
                <blockquote className="text-base sm:text-lg text-zinc-700 leading-relaxed mb-6">
                    "{story.text}"
                </blockquote>
            </div>
            
            <div className="flex items-center gap-3 pt-6 border-t border-zinc-200/60">
                <div className="h-10 w-10 rounded-full bg-white/70 border border-zinc-200/70 flex items-center justify-center text-[#006C35] font-semibold text-sm ring-premium">
                    {story.author.charAt(0)}
                </div>
                <div>
                    <div className="text-sm font-bold text-zinc-950">{story.author}</div>
                    <div className="text-[11px] text-zinc-500 font-semibold uppercase tracking-[0.22em]">Verified patient</div>
                </div>
            </div>
        </div>
    );
};

const ClientStories: React.FC<ClientStoriesProps> = ({ content }) => {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600 ring-premium">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#006C35]"></span>
              Testimonials
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
              {content.title}
            </h2>
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 hover:text-[#006C35] transition-colors">
            {content.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Mobile-first: scroll-snap carousel */}
        <div className="mt-10 sm:hidden -mx-4 px-4 overflow-x-auto no-scrollbar mask-fade-x">
          <div className="flex gap-4 w-max pr-10 snap-x snap-mandatory">
            {content.stories.map((story, index) => (
              <div key={index} className="snap-start w-[88vw] max-w-[380px]">
                <StoryCard story={story} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: premium grid */}
        <div className="hidden sm:grid mt-10 grid-cols-3 gap-6">
          {content.stories.map((story, index) => (
            <StoryCard key={index} story={story} />
          ))}
        </div>
        
        <div className="mt-10 sm:hidden">
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 hover:text-[#006C35] transition-colors">
            {content.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientStories;

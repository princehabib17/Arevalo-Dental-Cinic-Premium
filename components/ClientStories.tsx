
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
        <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between h-full transition-colors hover:border-[#006C35]/30">
            <div>
                <StarRating rating={story.rating || 5} />
                <blockquote className="text-lg text-zinc-600 font-light leading-relaxed mb-6">
                    "{story.text}"
                </blockquote>
            </div>
            
            <div className="flex items-center gap-3 pt-6 border-t border-zinc-100">
                <div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center text-[#006C35] font-bold text-sm">
                    {story.author.charAt(0)}
                </div>
                <div>
                    <div className="text-sm font-bold text-zinc-950">{story.author}</div>
                    <div className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Verified Patient</div>
                </div>
            </div>
        </div>
    );
};

const ClientStories: React.FC<ClientStoriesProps> = ({ content }) => {
  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div className="max-w-xl">
                 <span className="text-[#006C35] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Testimonials</span>
                 <h2 className="text-3xl md:text-4xl font-medium text-zinc-950 tracking-tight">
                    {content.title}
                 </h2>
             </div>
             
             <button className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-zinc-950 hover:text-[#006C35] transition-colors">
                {content.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.stories.map((story, index) => (
                <StoryCard key={index} story={story} />
            ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <button className="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 hover:text-[#006C35] transition-colors">
                {content.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </button>
        </div>
      </div>
    </section>
  );
};

export default ClientStories;


import React, { useState, useRef } from 'react';
import type { ClientStoriesContent, Story } from '../types';

interface ClientStoriesProps {
  content: ClientStoriesContent;
}

const BeforeAfterSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;
        
        const { left, width } = containerRef.current.getBoundingClientRect();
        let clientX;
        
        if ('touches' in event) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = (event as React.MouseEvent).clientX;
        }

        const position = ((clientX - left) / width) * 100;
        setSliderPosition(Math.min(100, Math.max(0, position)));
    };

    return (
        <div 
            ref={containerRef}
            className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden cursor-col-resize select-none touch-none shadow-2xl group"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
        >
            <img 
                src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=2070&auto=format&fit=crop" 
                alt="After" 
                className="absolute inset-0 w-full h-full object-cover filter brightness-105"
            />
            <div 
                className="absolute inset-0 overflow-hidden border-r-2 border-white/50 backdrop-blur-[2px]"
                style={{ width: `${sliderPosition}%` }}
            >
                <img 
                    src="https://images.unsplash.com/photo-1588776813677-77aa57e4322c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Before" 
                    className="absolute inset-0 w-full h-full object-cover max-w-none grayscale-[30%]"
                    style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
                />
            </div>
            
            {/* Slider Handle */}
            <div 
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.3)] z-20 group-hover:scale-110 transition-transform"
                style={{ left: `${sliderPosition}%` }}
            >
                <svg className="w-5 h-5 text-[#101010]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
                </svg>
            </div>
            
            <div className="absolute top-6 left-6 bg-black/60 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest backdrop-blur-md border border-white/10 z-10">BEFORE</div>
            <div className="absolute top-6 right-6 bg-white/90 text-black px-4 py-1.5 rounded-full text-xs font-bold tracking-widest backdrop-blur-md shadow-lg z-10">AFTER</div>
        </div>
    );
}

const TestimonialCard: React.FC<{ story: Story }> = ({ story }) => (
    <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-[#006C35]/30 transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#006C35] to-teal-400 p-[2px]">
                <img src={`https://ui-avatars.com/api/?name=${story.author}&background=000&color=fff`} alt={story.author} className="w-full h-full object-cover rounded-full border-2 border-white" />
             </div>
             <div>
                <h4 className="font-bold text-[#101010] leading-none">{story.author}</h4>
                <div className="flex text-[#006C35] text-xs mt-1">
                    {'★'.repeat(story.rating || 5)}
                </div>
             </div>
        </div>
        <p className="text-lg text-gray-700 font-medium leading-relaxed italic">"{story.text}"</p>
    </div>
);

const ClientStories: React.FC<ClientStoriesProps> = ({ content }) => {
  return (
    <section className="bg-[#F8F8F6] py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 space-y-8">
                 <div>
                    <span className="text-[#006C35] font-bold tracking-widest text-sm uppercase mb-4 block">Success Stories</span>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#101010] mb-6">
                    {content.title}
                    </h2>
                    <p className="text-gray-500 text-lg max-w-md">Real results from real people. See the difference tailored dental care makes.</p>
                 </div>

                 <div className="flex flex-col gap-6">
                    {content.stories.map((story, index) => (
                        <TestimonialCard key={index} story={story} />
                    ))}
                 </div>
                 
                 <button className="text-[#006C35] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    {content.cta} <span className="text-xl">→</span>
                 </button>
            </div>

            <div className="order-1 lg:order-2">
                <BeforeAfterSlider />
            </div>

        </div>
      </div>
    </section>
  );
};

export default ClientStories;

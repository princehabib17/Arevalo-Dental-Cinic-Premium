
import React, { useState, useEffect } from 'react';
import type { Language } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Logo: React.FC = () => (
    <a href="#" className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--accent)] rounded-xl px-2 -ml-2">
        <img 
            src="https://res.cloudinary.com/deulmakpv/image/upload/v1761683378/Group_475_hbbgt2.png" 
            alt="Arevalo Dental" 
            className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 drop-shadow-sm opacity-95" 
        />
    </a>
);

const LanguageToggle: React.FC<HeaderProps> = ({ language, setLanguage }) => {
    const isEn = language === 'en';
    
    return (
        <div className="flex items-center bg-white/70 backdrop-blur-md border border-zinc-200/70 rounded-full p-1 shadow-sm gap-1 ring-premium">
            <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] ${
                    isEn ? 'bg-zinc-950 text-white shadow-sm' : 'text-zinc-600 hover:text-zinc-950 hover:bg-white/70'
                }`}
            >
                <img 
                    src="https://flagcdn.com/w40/us.png" 
                    srcSet="https://flagcdn.com/w80/us.png 2x" 
                    width="20" 
                    height="15" 
                    alt="English" 
                    className="rounded-sm object-cover shadow-sm ring-1 ring-white/10"
                />
                <span className="leading-none pb-0.5">EN</span>
            </button>
            <button
                onClick={() => setLanguage('ar')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] ${
                    !isEn ? 'bg-[color:var(--accent)] text-white shadow-sm' : 'text-zinc-600 hover:text-zinc-950 hover:bg-white/70'
                }`}
            >
                <img 
                    src="https://flagcdn.com/w40/sa.png" 
                    srcSet="https://flagcdn.com/w80/sa.png 2x" 
                    width="20" 
                    height="15" 
                    alt="Arabic" 
                    className="rounded-sm object-cover shadow-sm ring-1 ring-white/10"
                />
                <span className="leading-none pb-0.5">AR</span>
            </button>
        </div>
    );
};


const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'py-3' : 'py-5'
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-3 sm:px-4 py-3 transition-all duration-300 ${
            scrolled ? 'surface-glass' : 'surface-glass bg-white/55'
          }`}
        >
            <Logo />
            
            <div className="flex items-center gap-4">
                <LanguageToggle language={language} setLanguage={setLanguage} />
                
                <a 
                    href="#contact" 
                    className="hidden sm:inline-flex items-center justify-center h-10 w-10 rounded-full border border-zinc-200/70 bg-white/70 backdrop-blur-md text-zinc-950 hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--accent)] ring-premium"
                    aria-label="Contact Us"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </a>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

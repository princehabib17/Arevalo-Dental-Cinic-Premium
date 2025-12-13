
import React, { useState, useEffect } from 'react';
import type { Language } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Logo: React.FC = () => (
    <a href="#" className="flex items-center gap-2 group">
        <span className="font-extrabold text-2xl tracking-tighter text-[#101010] group-hover:text-[#006C35] transition-colors duration-500">
            AREVALO<span className="text-[#006C35]">.</span>
        </span>
    </a>
);

const LanguageToggle: React.FC<HeaderProps> = ({ language, setLanguage }) => {
    const isEn = language === 'en';
    const isAr = language === 'ar';

    return (
        <div className="flex items-center bg-gray-100 rounded-full p-1 relative">
            <div 
                className={`absolute top-1 bottom-1 w-[45%] bg-white shadow-sm rounded-full transition-all duration-300 ease-in-out ${isEn ? 'left-1' : 'left-[52%]'}`}
            ></div>
            <button
                onClick={() => setLanguage('en')}
                className={`relative z-10 px-4 py-1.5 text-xs font-bold transition-colors ${isEn ? 'text-[#101010]' : 'text-gray-400 hover:text-gray-600'}`}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage('ar')}
                className={`relative z-10 px-4 py-1.5 text-xs font-bold transition-colors ${isAr ? 'text-[#101010]' : 'text-gray-400 hover:text-gray-600'}`}
            >
                AR
            </button>
        </div>
    );
};


const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-4' : 'bg-transparent py-8'
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
            <Logo />
            
            <div className="flex items-center gap-6 sm:gap-8">
                <LanguageToggle language={language} setLanguage={setLanguage} />
                <button className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:bg-[#101010] hover:text-white hover:border-[#101010] transition-all duration-300 group">
                    <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

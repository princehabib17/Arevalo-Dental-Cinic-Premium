
import React from 'react';
import type { Language, FooterContent } from '../types';

interface FooterProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: FooterContent;
}

const Footer: React.FC<FooterProps> = ({ language, setLanguage, content }) => {
  return (
    <footer className="bg-[#101010] text-white overflow-hidden pt-20 pb-8 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
            <div className="max-w-md">
                <p className="text-2xl font-light text-gray-400 mb-6">{content.tagline}</p>
                <div className="flex flex-col gap-2 text-gray-400">
                    <p>Manila, Philippines</p>
                    <p>+63 918 910 3146</p>
                    <p>contact@arevaloclinic.com</p>
                </div>
            </div>
            
            <div className="flex gap-8 text-lg font-bold">
                 <a href="#" className="hover:text-[#006C35] transition-colors">Instagram</a>
                 <a href="#" className="hover:text-[#006C35] transition-colors">Facebook</a>
                 <a href="#" className="hover:text-[#006C35] transition-colors">LinkedIn</a>
            </div>
        </div>

        {/* Massive Logo Background */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center opacity-[0.03] pointer-events-none select-none">
             <span className="text-[15vw] font-black leading-none tracking-tighter whitespace-nowrap">AREVALO</span>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Arevalo Dental Clinic.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">{content.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{content.terms}</a>
            <div className="w-px h-4 bg-gray-700"></div>
            <div className="flex gap-4">
                <button onClick={() => setLanguage('en')} className={`${language === 'en' ? 'text-white' : 'text-gray-600'}`}>EN</button>
                <button onClick={() => setLanguage('ar')} className={`${language === 'ar' ? 'text-white' : 'text-gray-600'}`}>AR</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

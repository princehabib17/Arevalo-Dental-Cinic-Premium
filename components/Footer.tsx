
import React from 'react';
import type { Language, FooterContent } from '../types';

interface FooterProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: FooterContent;
}

const Footer: React.FC<FooterProps> = ({ language, setLanguage, content }) => {
  return (
    <footer className="bg-[#1B3C35] text-white overflow-hidden pt-24 pb-12 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
                <a href="#" className="flex items-center gap-2 mb-6">
                    <img 
                        src="https://res.cloudinary.com/deulmakpv/image/upload/v1761683378/Group_475_hbbgt2.png" 
                        alt="Arevalo Dental" 
                        className="h-10 w-auto brightness-0 invert opacity-90" 
                    />
                </a>
                <p className="text-2xl font-light text-gray-300 max-w-md leading-relaxed">{content.tagline}</p>
            </div>
            
            <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Contact</h4>
                <div className="flex flex-col gap-4 text-gray-300 font-light">
                    <p>Manila, Philippines</p>
                    <p>+63 918 910 3146</p>
                    <p>contact@arevaloclinic.com</p>
                </div>
            </div>

            <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Social</h4>
                <div className="flex flex-col gap-4 text-gray-300 font-bold">
                     <a href="#" className="hover:text-white transition-colors">Instagram</a>
                     <a href="#" className="hover:text-white transition-colors">Facebook</a>
                     <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arevalo Dental Clinic.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">{content.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{content.terms}</a>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex gap-4">
                <button onClick={() => setLanguage('en')} className={`${language === 'en' ? 'text-white font-bold' : 'text-gray-500 hover:text-white'}`}>EN</button>
                <button onClick={() => setLanguage('ar')} className={`${language === 'ar' ? 'text-white font-bold' : 'text-gray-500 hover:text-white'}`}>AR</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

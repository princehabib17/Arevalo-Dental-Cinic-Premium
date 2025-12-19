
import React from 'react';
import type { Language, FooterContent } from '../types';

interface FooterProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: FooterContent;
}

const Footer: React.FC<FooterProps> = ({ language, setLanguage, content }) => {
  return (
    <footer className="relative overflow-hidden pt-20 sm:pt-28 pb-10 bg-zinc-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_0%,rgba(0,108,53,0.22),transparent_55%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <a href="#" className="inline-flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/deulmakpv/image/upload/v1761683378/Group_475_hbbgt2.png"
                alt="Arevalo Dental"
                className="h-10 w-auto brightness-0 invert opacity-90"
              />
            </a>
            <p className="mt-6 text-xl sm:text-2xl text-white/75 leading-relaxed max-w-md">
              {content.tagline}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">Contact</h4>
            <div className="mt-4 space-y-3 text-white/75">
              <p>Manila, Philippines</p>
              <p>+63 918 910 3146</p>
              <p>contact@arevaloclinic.com</p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">Language</h4>
            <div className="mt-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-md">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  language === 'en' ? 'bg-white text-zinc-950' : 'text-white/75 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  language === 'ar' ? 'bg-white text-zinc-950' : 'text-white/75 hover:text-white'
                }`}
              >
                AR
              </button>
            </div>

            <div className="mt-6">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">Links</h4>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
                <a href="#" className="hover:text-white transition-colors">{content.privacy}</a>
                <a href="#" className="hover:text-white transition-colors">{content.terms}</a>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-white/55">
          <p>&copy; {new Date().getFullYear()} Arevalo Dental Clinic.</p>
          <p className="text-white/45">Designed for clarity, comfort, and premium outcomes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

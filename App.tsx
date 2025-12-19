
import React, { useState, useEffect } from 'react';
import type { Language } from './types';
import { content } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import Services from './components/Services';
import ClientStories from './components/ClientStories';
import Team from './components/Team';
import Journey from './components/Journey';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const currentContent = content[language];
  const whatsappLink = `https://wa.me/639189103146?text=${encodeURIComponent(currentContent.whatsappPrefill)}`;

  return (
    <div className="bg-premium lux-noise text-zinc-50 antialiased font-sans selection:bg-[#006C35] selection:text-white">
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex flex-col w-full">
        <Hero content={currentContent.hero} whatsappLink={whatsappLink} />
        <TrustMarquee content={currentContent.trustMarquee} />
        <Services content={currentContent.services} />
        <ClientStories content={currentContent.clientStories} />
        <Team content={currentContent.team} />
        <Journey content={currentContent.journey} whatsappLink={whatsappLink} />
        <FAQ content={currentContent.faq} />
        <FinalCTA content={currentContent.finalCTA} whatsappLink={whatsappLink} />
      </main>
      <Footer language={language} setLanguage={setLanguage} content={currentContent.footer} />
      <WhatsAppFAB whatsappLink={whatsappLink} ariaLabel={currentContent.hero.primaryCTA}/>
    </div>
  );
};

export default App;

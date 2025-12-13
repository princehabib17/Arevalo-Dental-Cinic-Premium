
import React from 'react';

interface WhatsAppFABProps {
  whatsappLink: string;
  ariaLabel: string;
}

const WhatsAppFAB: React.FC<WhatsAppFABProps> = ({ whatsappLink, ariaLabel }) => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="fixed bottom-8 right-8 z-40 group flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:scale-110 hover:shadow-[0_15px_40px_rgba(37,211,102,0.4)] transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20"></div>
      <svg
        width="30"
        height="30"
        fill="currentColor"
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="relative z-10"
      >
        <path d="M19.332,4.687C17.26,2.613,14.72,1.5,12.002,1.5c-5.523,0-10,4.478-10,10c0,1.751,0.453,3.402,1.25,4.857L2,22l5.293-1.373   c1.385,0.74,2.96,1.15,4.654,1.15c0.016,0,0.03,0,0.046,0l0,0c5.523,0,10-4.478,10-10C22.002,9.28,20.892,6.74,19.332,4.687z    M12.002,20.676c-1.378,0-2.689-0.34-3.857-0.953l-0.276-0.165l-2.862,0.74l0.755-2.797l-0.181-0.286   c-0.65-1.025-1-2.228-1-3.486c0-4.411,3.589-8,8-8s8,3.589,8,8S16.413,20.676,12.002,20.676z M17.243,14.058   c-0.271-0.137-1.594-0.785-1.841-0.876c-0.246-0.091-0.426-0.136-0.606,0.136s-0.697,0.876-0.854,1.056   c-0.158,0.18-0.317,0.203-0.588,0.068c-0.271-0.137-1.144-0.422-2.179-1.343c-0.806-0.716-1.349-1.604-1.507-1.875   c-0.158-0.271-0.017-0.415,0.119-0.551c0.123-0.121,0.271-0.316,0.407-0.473c0.136-0.158,0.181-0.271,0.271-0.451   s0.045-0.34,0.023-0.611C10.366,9.15,9.866,7.91,9.646,7.363C9.426,6.816,9.206,6.861,9.026,6.861c-0.165,0-0.36,0-0.539,0   s-0.473,0.068-0.719,0.339s-0.814,0.795-0.814,1.931c0,1.137,0.838,2.24,0.963,2.401c0.125,0.158,1.643,2.508,4.004,3.522   c0.57,0.242,1.018,0.387,1.364,0.498c0.52,0.168,0.99,0.145,1.364,0.088c0.42-0.064,1.34-0.548,1.529-1.079   c0.189-0.53-0.137-0.817-0.271-0.953C17.653,14.288,17.514,14.195,17.243,14.058z" />
      </svg>
    </a>
  );
};

export default WhatsAppFAB;

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const CTASticky: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-3">
      <a
        href="https://wa.me/41123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:shadow-xl min-h-[56px] min-w-[56px] flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </a>
      <a
        href="tel:+41123456789"
        className="bg-perle-honey text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-perle-light-honey transition-all duration-300 hover:scale-110 hover:shadow-xl min-h-[56px] min-w-[56px] flex items-center justify-center"
        aria-label="Téléphoner"
      >
        <Phone className="w-6 h-6 md:w-7 md:h-7" />
      </a>

    </div>
  );
};

export default CTASticky;
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "+201234567890"; // Replace with your WhatsApp number (include country code)
  const message = "Hi! I'm interested in discussing a project with you.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
      </div>
    </button>
  );
};

export default WhatsAppButton;
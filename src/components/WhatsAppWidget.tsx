import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppWidget: React.FC = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        {isTooltipVisible && (
          <div className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-lg p-4 w-64 transform transition-all duration-300 animate-bounce">
            <button
              onClick={() => setIsTooltipVisible(false)}
              className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
            >
              <X className="h-4 w-4 text-gray-600" />
            </button>
            <p className="text-sm text-gray-700">
              👋 Need help with your cake order? Message us on WhatsApp!
            </p>
          </div>
        )}
        <a
          href="https://wa.me/918248477869?text=Hi%20Ayath_iCakes!%20I%20would%20like%20to%20enquire%20about%20ordering%20a%20cake.%20%F0%9F%8E%82"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group relative"
          onMouseEnter={() => setIsTooltipVisible(true)}
        >
          <MessageCircle className="h-8 w-8" />
          <div className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
            1
          </div>
        </a>
      </div>
    </>
  );
};

export default WhatsAppWidget;
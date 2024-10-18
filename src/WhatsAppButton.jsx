import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+447473255886?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-0 bottom-6 ml-4 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >

      <img
      
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp_float" style={{width:"80px"}}
      />
    </a>
  );
};

export default WhatsAppButton;
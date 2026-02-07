import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaTimes, FaCommentDots } from 'react-icons/fa';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      icon: FaPhone,
      label: 'Call Us',
      href: 'tel:+919896941400',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/919896941400',
      color: 'bg-green-600 hover:bg-green-700',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: 'mailto:19shagunyadavnnl@gmail.com',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 space-y-3 animate-fade-in-up">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${contact.color} text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-3 transform hover:scale-105 transition-all whitespace-nowrap`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <contact.icon className="text-xl" />
              <span className="font-medium">{contact.label}</span>
            </a>
          ))}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl transform hover:scale-110 transition-all ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700 pulse-glow'
          }`}
        aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
      >
        {isOpen ? <FaTimes /> : <FaCommentDots />}
      </button>
    </div>
  );
};

export default FloatingContact;

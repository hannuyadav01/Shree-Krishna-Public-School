import React from 'react';
import { FaTrophy, FaStar, FaMedal, FaGraduationCap, FaBook, FaUsers, FaAward, FaHeart, FaRocket, FaLightbulb } from 'react-icons/fa';

const InfiniteSlider = () => {
  const slides = [
    { icon: FaTrophy, text: 'In Top 1000 Schools', color: 'text-yellow-500', bgColor: 'bg-yellow-50' },
    { icon: FaUsers, text: '30000+ Happy Students', color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { icon: FaStar, text: '95% Success Rate', color: 'text-green-500', bgColor: 'bg-green-50' },
    { icon: FaGraduationCap, text: '20+ Years Experience', color: 'text-purple-500', bgColor: 'bg-purple-50' },
    { icon: FaMedal, text: 'Best Principal Award', color: 'text-orange-500', bgColor: 'bg-orange-50' },
    { icon: FaHeart, text: '3000+ Satisfied Parents', color: 'text-red-500', bgColor: 'bg-red-50' },
    { icon: FaBook, text: 'Modern Curriculum', color: 'text-indigo-500', bgColor: 'bg-indigo-50' },
    { icon: FaRocket, text: 'Future Ready Education', color: 'text-pink-500', bgColor: 'bg-pink-50' },
    { icon: FaLightbulb, text: 'Innovative Teaching', color: 'text-teal-500', bgColor: 'bg-teal-50' },
    { icon: FaAward, text: 'RBSE Affiliated', color: 'text-cyan-500', bgColor: 'bg-cyan-50' },
  ];

  // Duplicate the slides for seamless infinite loop
  const duplicatedSlides = [...slides, ...slides, ...slides];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary-50 via-white to-primary-50 py-8 border-y-4 border-primary-200">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* Scrolling Container */}
      <div className="flex animate-scroll">
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className={`flex-shrink-0 mx-4 ${slide.bgColor} rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 transform`}
            style={{ minWidth: '280px' }}
          >
            <div className="flex items-center space-x-4">
              <div className={`${slide.color} text-4xl`}>
                <slide.icon />
              </div>
              <div className="font-bold text-gray-800 text-lg whitespace-nowrap">
                {slide.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fun decorative elements for kids */}
      
    </div>
  );
};

export default InfiniteSlider;

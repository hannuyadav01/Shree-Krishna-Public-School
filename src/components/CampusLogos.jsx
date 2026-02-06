import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const CampusLogos = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [logosRef, logosVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-8 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Our Two Campuses
          </h3>
          <p className="text-gray-600">Serving students from early years to senior secondary</p>
        </div>

        <div 
          ref={logosRef}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Shri Krishna Public School */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all transform hover:scale-105">
            <div className="bg-white rounded-xl p-4 inline-block mb-4 shadow-md">
              <img 
                src="/logo.png" 
                alt="Shree Krishna Public School Logo"
                className="w-32 h-32 object-contain mx-auto"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              Shree Krishna Public School
            </h4>
            <p className="text-sm text-gray-600 mb-3">Main Campus • Since 2004</p>
            <p className="text-xs text-gray-500 mb-4">Classes 1-12 • RBSE Affiliated</p>
            <div className="flex items-center justify-center space-x-2 text-sm text-primary-600 font-semibold">
              <span>🏆 In Top 1000 Schools in India</span>
            </div>
          </div>

          {/* LKPS English Academy */}
          <div className={`bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all transform hover:scale-105 duration-700 delay-300 ${
            logosVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="bg-white rounded-xl p-4 inline-block mb-4 shadow-md">
              <img 
                src="/images/lkps-english-academy-logo.png" 
                alt="LKPS English Academy Logo"
                className="w-32 h-32 object-contain mx-auto"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              LKPS English Academy
            </h4>
            <p className="text-sm text-gray-600 mb-3">A Branch of SKPS Udairamsar</p>
            <p className="text-xs text-gray-500 mb-4">Pre-Nursery to Class 5 • Play-Based Learning</p>
            <div className="flex items-center justify-center space-x-2 text-sm text-orange-600 font-semibold">
              <span>🌟 Early Years Excellence</span>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            📍 Both campuses located in Udairamsar, Bikaner, Rajasthan 334402
          </p>
        </div>
      </div>
    </section>
  );
};

export default CampusLogos;

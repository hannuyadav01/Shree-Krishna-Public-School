import React from 'react';
import Campuses from '../components/Campuses';
import InfiniteSlider from '../components/InfiniteSlider';
import { FaSchool, FaBaby, FaMapMarkedAlt, FaBus } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const CampusesPage = () => {
  const [heroStatsRef, heroStatsVisible] = useScrollAnimation({ threshold: 0.2 });
  const [featuresRef, featuresVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30% 55%, white 1px, transparent 1px), radial-gradient(circle at 70% 45%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="text-center md:text-left animate-slide-in-left">
              <div className="flex justify-center md:justify-start mb-6 space-x-4">
                <img 
                  src="/logo.png" 
                  alt="SKPS Logo" 
                  className="w-20 h-20 md:w-24 md:h-24 object-contain animate-float"
                />
                <img 
                  src="/images/lkps-english-academy-logo.png" 
                  alt="LKPS Logo" 
                  className="w-20 h-20 md:w-24 md:h-24 object-contain animate-float"
                  style={{ animationDelay: '0.2s' }}
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Our <span className="text-emerald-400">Campuses</span><br />
                Two Locations
              </h1>
              
              <p className="text-lg md:text-xl text-emerald-100 mb-6 leading-relaxed">
                Two modern campuses in Bikaner, Rajasthan, designed to provide the best learning environment for all age groups
              </p>

              {/* Campus Features */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto md:mx-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaSchool className="text-2xl mx-auto mb-1 text-emerald-400" />
                  <div className="text-xs text-emerald-200">Main Campus</div>
                  <div className="text-[10px] text-emerald-300">SKPS</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaBaby className="text-2xl mx-auto mb-1 text-emerald-400" />
                  <div className="text-xs text-emerald-200">Early Years</div>
                  <div className="text-[10px] text-emerald-300">LKPS</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaMapMarkedAlt className="text-2xl mx-auto mb-1 text-emerald-400" />
                  <div className="text-xs text-emerald-200">Udairamsar</div>
                  <div className="text-[10px] text-emerald-300">Bikaner</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaBus className="text-2xl mx-auto mb-1 text-emerald-400" />
                  <div className="text-xs text-emerald-200">Transport</div>
                  <div className="text-[10px] text-emerald-300">Available</div>
                </div>
              </div>

              {/* Campus Stats */}
              <div 
                ref={heroStatsRef}
                className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto md:mx-0"
              >
                <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center transition-all duration-700 ${
                  heroStatsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}>
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400">2</div>
                  <div className="text-xs text-emerald-200">Campuses</div>
                </div>
                <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center transition-all duration-700 delay-150 ${
                  heroStatsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}>
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400">30000+</div>
                  <div className="text-xs text-emerald-200">Happy Students</div>
                </div>
                <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center transition-all duration-700 delay-300 ${
                  heroStatsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}>
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400">450+</div>
                  <div className="text-xs text-emerald-200">Satisfied Parents</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#campuses"
                  className="bg-emerald-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-emerald-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  🏫 Explore Campuses
                </a>
                <a
                  href="/contact"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
                >
                  📍 Visit Us
                </a>
              </div>
            </div>

            {/* Right Side - Image Grid */}
            <div className="hidden md:block animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/images/school-building.png" 
                    alt="Main Campus" 
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/images/gallery/photo_2026-02-05 18.29.26.jpeg" 
                    alt="Campus Life" 
                    className="rounded-2xl shadow-2xl w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="/images/gallery/photo_2026-02-05 18.30.26.jpeg" 
                    alt="Students" 
                    className="rounded-2xl shadow-2xl w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/images/gallery/photo_2026-02-05 18.29.33.jpeg" 
                    alt="Campus View" 
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Banner */}
          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-emerald-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg">
              <span>🏫 SKPS - Main Campus</span>
              <span className="hidden sm:inline">•</span>
              <span>👶 LKPS - Early Years</span>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Infinite Slider */}
      <InfiniteSlider />

      <div id="campuses">
        <Campuses />
      </div>

      {/* Campus Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">What Makes Our Campuses Special</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Strategic Locations</h3>
                    <p className="text-gray-600">Both campuses are strategically located in Udairamsar and Gangashahar areas of Bikaner, providing easy accessibility for families across the region.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Age-Appropriate Infrastructure</h3>
                    <p className="text-gray-600">Main campus for older students with advanced facilities, and LKPS English Academy specially designed for early years education with safe, child-friendly spaces.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Modern Amenities</h3>
                    <p className="text-gray-600">State-of-the-art classrooms, laboratories, libraries, sports facilities, and technology-enabled learning environments at both locations.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Safe & Secure</h3>
                    <p className="text-gray-600">24/7 security, CCTV surveillance, secure entry systems, and trained security personnel ensure the safety of our students at all times.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Transportation Facility</h3>
                    <p className="text-gray-600">Reliable bus service covering major routes in Bikaner with GPS-enabled buses and trained drivers for safe commute.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusesPage;

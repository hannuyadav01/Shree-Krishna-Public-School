import React from 'react';
import Events from '../components/Events';
import { FaCalendarAlt, FaTrophy, FaMusic, FaPalette, FaTheaterMasks } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const EventsPage = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-900 via-pink-800 to-purple-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 35% 45%, white 1px, transparent 1px), radial-gradient(circle at 65% 65%, white 1px, transparent 1px)',
            backgroundSize: '55px 55px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="text-center md:text-left animate-slide-in-left">
              <div className="flex justify-center md:justify-start mb-6">
                <img 
                  src="/logo.png" 
                  alt="SKPS Logo" 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain animate-float"
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                School <span className="text-pink-400">Events</span><br />
                & Celebrations
              </h1>
              
              <p className="text-lg md:text-xl text-rose-100 mb-6 leading-relaxed">
                Stay updated with the latest happenings, celebrations, and memorable moments at our school
              </p>

              {/* Event Categories */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 max-w-md mx-auto md:mx-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaCalendarAlt className="text-2xl mx-auto mb-1 text-pink-400" />
                  <div className="text-xs text-rose-200">Annual Day</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaTrophy className="text-2xl mx-auto mb-1 text-pink-400" />
                  <div className="text-xs text-rose-200">Sports Day</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaMusic className="text-2xl mx-auto mb-1 text-pink-400" />
                  <div className="text-xs text-rose-200">Cultural</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaPalette className="text-2xl mx-auto mb-1 text-pink-400" />
                  <div className="text-xs text-rose-200">Art & Craft</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaTheaterMasks className="text-2xl mx-auto mb-1 text-pink-400" />
                  <div className="text-xs text-rose-200">Drama</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaCalendarAlt className="text-2xl mx-auto mb-1 text-pink-400" />
                  <div className="text-xs text-rose-200">Festivals</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#events"
                  className="bg-pink-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-pink-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  🎉 View Events
                </a>
                <a
                  href="/gallery"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
                >
                  📸 Photo Gallery
                </a>
              </div>
            </div>

            {/* Right Side - Image Grid */}
            <div className="hidden md:block animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/images/gallery/photo_2026-02-05 18.29.05.jpeg" 
                    alt="School Event" 
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/images/gallery/photo_2026-02-05 18.29.25.jpeg" 
                    alt="Cultural Program" 
                    className="rounded-2xl shadow-2xl w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="/images/gallery/photo_2026-02-05 18.29.43.jpeg" 
                    alt="Assembly" 
                    className="rounded-2xl shadow-2xl w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/images/gallery/photo_2026-02-05 18.29.48.jpeg" 
                    alt="Celebration" 
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Banner */}
          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-pink-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg">
              <span>🎭 Cultural Events</span>
              <span className="hidden sm:inline">•</span>
              <span>🏆 Competitions</span>
              <span className="hidden sm:inline">•</span>
              <span>🎨 Exhibitions</span>
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

      <div id="events">
        <Events />
      </div>

      {/* Past Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-800 mb-4">Past Events Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Memorable moments from our recent celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=2070&auto=format&fit=crop"
                alt="Annual Function 2025"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Annual Function 2025</h3>
                <p className="text-gray-600">A spectacular showcase of student talents and achievements.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
                alt="Science Fair 2025"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Science Fair 2025</h3>
                <p className="text-gray-600">Innovative projects demonstrating scientific creativity.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
                alt="Sports Day 2025"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sports Day 2025</h3>
                <p className="text-gray-600">A day of athletic excellence and team spirit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;

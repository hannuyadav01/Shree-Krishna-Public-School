import React from 'react';
import Gallery from '../components/Gallery';
import { FaCamera, FaImages, FaInstagram } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const GalleryPage = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 40% 50%, white 1px, transparent 1px), radial-gradient(circle at 60% 70%, white 1px, transparent 1px)',
            backgroundSize: '45px 45px'
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
                Photo <span className="text-orange-400">Gallery</span><br />
                Our Memories
              </h1>
              
              <p className="text-lg md:text-xl text-amber-100 mb-6 leading-relaxed">
                Glimpses of life at Shree Krishna Public School - Capturing moments, creating memories
              </p>

              {/* Gallery Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto md:mx-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl md:text-3xl font-bold text-orange-400">47+</div>
                  <div className="text-xs text-amber-200">Photos</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl md:text-3xl font-bold text-orange-400">7</div>
                  <div className="text-xs text-amber-200">Categories</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <div className="text-2xl md:text-3xl font-bold text-orange-400">2</div>
                  <div className="text-xs text-amber-200">Campuses</div>
                </div>
              </div>

              {/* Gallery Features */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-xs mx-auto md:mx-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <FaImages className="text-2xl mx-auto mb-1 text-orange-400" />
                  <div className="text-xs text-amber-200">Events</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <FaCamera className="text-2xl mx-auto mb-1 text-orange-400" />
                  <div className="text-xs text-amber-200">Activities</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#gallery"
                  className="bg-orange-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-orange-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  📸 Browse Photos
                </a>
                <a
                  href="https://www.instagram.com/shree_krishna_publicudairamsar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all inline-flex items-center justify-center space-x-2"
                >
                  <FaInstagram />
                  <span>Follow Us</span>
                </a>
              </div>
            </div>

            {/* Right Side - Image Grid */}
            <div className="hidden md:block animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/images/gallery/photo_2026-02-05 18.29.26.jpeg" 
                    alt="Campus Life" 
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/images/gallery/photo_2026-02-05 18.29.46.jpeg" 
                    alt="School Activity" 
                    className="rounded-2xl shadow-2xl w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="/images/gallery/photo_2026-02-05 18.29.34.jpeg" 
                    alt="Students" 
                    className="rounded-2xl shadow-2xl w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/images/gallery/photo_2026-02-05 18.29.54.jpeg" 
                    alt="School Life" 
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Banner */}
          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-orange-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg">
              <span>📷 Campus Life</span>
              <span className="hidden sm:inline">•</span>
              <span>🎉 Events</span>
              <span className="hidden sm:inline">•</span>
              <span>🏆 Achievements</span>
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

      <div id="gallery">
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;

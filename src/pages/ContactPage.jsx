import React from 'react';
import Contact from '../components/Contact';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ContactPage = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-900 via-blue-800 to-indigo-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 60%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
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
                Get In <span className="text-sky-400">Touch</span><br />
                With Us
              </h1>

              <p className="text-lg md:text-xl text-sky-100 mb-6 leading-relaxed">
                We'd love to hear from you. Reach out for admissions, queries, or just to say hello!
              </p>

              {/* Quick Contact Options */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto md:mx-0">
                <a
                  href="tel:+919896941400"
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all group"
                >
                  <FaPhone className="text-2xl mx-auto mb-1 text-sky-400 group-hover:animate-bounce" />
                  <div className="text-xs text-sky-200">Call Us</div>
                </a>
                <a
                  href="mailto:19shagunyadavnnl@gmail.com"
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all group"
                >
                  <FaEnvelope className="text-2xl mx-auto mb-1 text-sky-400 group-hover:animate-bounce" />
                  <div className="text-xs text-sky-200">Email Us</div>
                </a>
                <a
                  href="https://wa.me/919896941400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all group"
                >
                  <FaWhatsapp className="text-2xl mx-auto mb-1 text-sky-400 group-hover:animate-bounce" />
                  <div className="text-xs text-sky-200">WhatsApp</div>
                </a>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <FaClock className="text-2xl mx-auto mb-1 text-sky-400" />
                  <div className="text-xs text-sky-200">8 AM - 5 PM</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-8 max-w-md mx-auto md:mx-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center space-x-3">
                  <FaPhone className="text-sky-400 text-xl" />
                  <div className="text-left">
                    <div className="text-xs text-sky-200">Phone</div>
                    <div className="font-semibold">+919896941400</div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-sky-400 text-xl" />
                  <div className="text-left">
                    <div className="text-xs text-sky-200">Location</div>
                    <div className="font-semibold text-sm">Udairamsar, Bikaner</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#contact-form"
                  className="bg-sky-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-sky-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  💬 Send Message
                </a>
                <a
                  href="#maps"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
                >
                  📍 Get Directions
                </a>
              </div>
            </div>

            {/* Right Side - Image Grid */}
            <div className="hidden md:block animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/images/school-building.png"
                    alt="School Building"
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/images/gallery/photo_2026-02-05 18.29.29.jpeg"
                    alt="School Infrastructure"
                    className="rounded-2xl shadow-2xl w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="/images/gallery/photo_2026-02-05 18.29.33.jpeg"
                    alt="Campus View"
                    className="rounded-2xl shadow-2xl w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/images/gallery/photo_2026-02-05 18.30.31.jpeg"
                    alt="School Transport"
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Banner */}
          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-sky-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg">
              <span>📞 Quick Response</span>
              <span className="hidden sm:inline">•</span>
              <span>🗺️ Easy to Locate</span>
              <span className="hidden sm:inline">•</span>
              <span>🤝 Always Available</span>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      <div id="contact-form">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;

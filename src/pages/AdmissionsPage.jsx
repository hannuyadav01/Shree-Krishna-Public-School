import React from 'react';
import Admissions from '../components/Admissions';
import DownloadCenter from '../components/DownloadCenter';
import InfiniteSlider from '../components/InfiniteSlider';
import { FaGraduationCap, FaFileAlt, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AdmissionsPage = () => {
  const [heroStatsRef, heroStatsVisible] = useScrollAnimation({ threshold: 0.2 });
  const [procedureRef, procedureVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-teal-800 to-cyan-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
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
                Admissions <span className="text-cyan-400">2026-27</span><br />
                Now Open!
              </h1>

              <p className="text-lg md:text-xl text-teal-100 mb-6 leading-relaxed">
                Join our family and give your child the best start in education. Limited seats available!
              </p>

              {/* Admission Steps */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto md:mx-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaFileAlt className="text-2xl mx-auto mb-1 text-cyan-400" />
                  <div className="text-xs text-teal-200">Download Form</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaCheckCircle className="text-2xl mx-auto mb-1 text-cyan-400" />
                  <div className="text-xs text-teal-200">Submit Details</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaCalendarAlt className="text-2xl mx-auto mb-1 text-cyan-400" />
                  <div className="text-xs text-teal-200">Visit Campus</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all">
                  <FaGraduationCap className="text-2xl mx-auto mb-1 text-cyan-400" />
                  <div className="text-xs text-teal-200">Join SKPS</div>
                </div>
              </div>

              {/* Stats */}
              <div
                ref={heroStatsRef}
                className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto md:mx-0"
              >
                <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center transition-all duration-700 ${heroStatsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}>
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">30000+</div>
                  <div className="text-xs text-teal-200">Students</div>
                </div>
                <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center transition-all duration-700 delay-150 ${heroStatsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}>
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">3000+</div>
                  <div className="text-xs text-teal-200">Parents</div>
                </div>
                <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center transition-all duration-700 delay-300 ${heroStatsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}>
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">20+</div>
                  <div className="text-xs text-teal-200">Years</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#admission-form"
                  className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  📝 Apply Now
                </a>
                <a
                  href="#download"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
                >
                  Download Forms
                </a>
              </div>
            </div>

            {/* Right Side - Image Grid */}
            <div className="hidden md:block animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/images/gallery/photo_2026-02-05 18.29.30.jpeg"
                    alt="Happy Students"
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
                    src="/images/gallery/photo_2026-02-05 18.29.13.jpeg"
                    alt="Students Learning"
                    className="rounded-2xl shadow-2xl w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/images/school-building.png"
                    alt="School Building"
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Banner */}
          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg">
              <span>🎓 Quality Education</span>
              <span className="hidden sm:inline">•</span>
              <span>🏆 In Top 1000 Schools</span>
              <span className="hidden sm:inline">•</span>
              <span>👨‍🏫 Experienced Faculty</span>
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

      {/* Infinite Slider */}
      <InfiniteSlider />

      <div id="admission-form">
        <Admissions />
      </div>

      {/* Download Center */}
      <section id="download" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <DownloadCenter />
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;

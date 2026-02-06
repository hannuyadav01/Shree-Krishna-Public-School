import React from 'react';
import About from '../components/About';
import Leadership from '../components/Leadership';
import InfiniteSlider from '../components/InfiniteSlider';
import { FaHistory, FaEye, FaBullseye, FaHeart, FaTrophy } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AboutPage = () => {
  const [storyRef, storyVisible] = useScrollAnimation({ threshold: 0.2 });
  const [visionRef, visionVisible] = useScrollAnimation({ threshold: 0.1 });
  const [timelineRef, timelineVisible] = useScrollAnimation({ threshold: 0.1 });
  const timeline = [
    { year: '2004', event: 'School Established in Udairamsar, Bikaner' },
    { year: '2008', event: 'RBSE Affiliation Received' },
    { year: '2012', event: 'LKPS English Academy Campus Opened' },
    { year: '2016', event: 'New Science Block Inaugurated' },
    { year: '2020', event: 'Digital Classrooms Implemented' },
    { year: '2024', event: 'Best Principal Award - In Top 1000 Schools' },
  ];

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-primary-800 to-indigo-900 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="text-center md:text-left animate-slide-in-left">
              {/* School Logo */}
              <div className="flex justify-center md:justify-start mb-6">
                <img 
                  src="/logo.png" 
                  alt="SKPS Logo" 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain animate-float"
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                About <span className="text-yellow-400">Shri Krishna</span><br />
                Public School
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 mb-6 leading-relaxed">
                A premier educational institution committed to providing quality education and nurturing future leaders since 2004
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto md:mx-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400">20+</div>
                  <div className="text-xs text-blue-200">Years</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400">30000+</div>
                  <div className="text-xs text-blue-200">Students</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400">3000+</div>
                  <div className="text-xs text-blue-200">Parents</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#story"
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Our Story
                </a>
                <a
                  href="/contact"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
                >
                  Contact Us
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
                    src="/images/gallery/photo_2026-02-05 18.29.26.jpeg" 
                    alt="Students" 
                    className="rounded-2xl shadow-2xl w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="/images/gallery/photo_2026-02-05 18.29.05.jpeg" 
                    alt="School Event" 
                    className="rounded-2xl shadow-2xl w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/images/gallery/photo_2026-02-05 18.29.30.jpeg" 
                    alt="Campus" 
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Awards Banner */}
          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center space-x-3 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg">
              <FaTrophy className="text-2xl" />
              <span>Best Principal Award 2024 • In Top 1000 Schools in India</span>
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

      <About />

      {/* Infinite Slider */}
      <InfiniteSlider />

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div 
              ref={storyRef}
              className="grid md:grid-cols-2 gap-12 items-center mb-16"
            >
              <div className={`transition-all duration-1000 ${
                storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}>
                <h2 className="text-4xl font-bold text-primary-800 mb-6">
                  <FaHistory className="inline-block mr-3 text-primary-600" />
                  Our Story
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded in 2004 in Udairamsar, Bikaner, Shree Krishna Public School began with a vision to provide quality education to the children of Rajasthan. What started as a small institution has grown into a renowned educational center with two thriving campuses, earning recognition as one of India's In Top 1000 schools.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our 20+ year journey has been marked by continuous growth, innovation, and an unwavering commitment to academic excellence. We have evolved to meet the changing needs of education while staying true to our core values of integrity, compassion, and excellence. In 2024, our Principal Suresh Yadav was honored with the Best Principal Award by Indian Talent Olympiad.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we serve over 30000+ happy students across our two campuses - Shree Krishna Public School and LKPS English Academy - with 3000+ satisfied parents trusting us. Our dedicated team of 30+ experienced educators with 20+ years of experience are passionate about nurturing young minds and achieving a 95% success rate that benefits countless families in our community.
                </p>
              </div>
              <div className={`relative transition-all duration-1000 delay-300 ${
                storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/images/gallery/photo_2026-02-05 18.29.13.jpeg"
                    alt="School Journey"
                    className="rounded-2xl shadow-2xl w-full h-full object-cover"
                  />
                  <img
                    src="/images/gallery/photo_2026-02-05 18.29.15.jpeg"
                    alt="Campus Life"
                    className="rounded-2xl shadow-2xl w-full h-full object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white p-4 rounded-2xl shadow-2xl">
                  <div className="text-3xl font-bold">2004</div>
                  <div className="text-sm">Est.</div>
                </div>
              </div>
            </div>

            {/* Mission, Vision, Values */}
            <div 
              ref={visionRef}
              className="grid md:grid-cols-3 gap-8 mb-16"
            >
              <div className={`bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl transition-all duration-700 ${
                visionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}>
                <FaBullseye className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide quality education that empowers students to become responsible global citizens with strong moral values and academic excellence.
                </p>
              </div>
              
              <div className={`bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl transition-all duration-700 delay-150 ${
                visionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}>
                <FaEye className="text-4xl text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be a leading educational institution recognized for academic excellence, innovation, and holistic development of students.
                </p>
              </div>
              
              <div className={`bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl transition-all duration-700 delay-300 ${
                visionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}>
                <FaHeart className="text-4xl text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Integrity, Excellence, Compassion, Innovation, and Respect form the foundation of everything we do at Shree Krishna Public School.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div 
              ref={timelineRef}
              className="bg-gray-50 rounded-2xl p-8 md:p-12"
            >
              <h2 className={`text-3xl font-bold text-center text-primary-800 mb-12 transition-all duration-700 ${
                timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>Our Journey</h2>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-4 transition-all duration-700 ${
                      timelineVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    }`}
                    style={{ 
                      transitionDelay: timelineVisible ? `${200 + index * 100}ms` : '0ms'
                    }}
                  >
                    <div className="bg-gradient-accent text-white font-bold px-4 py-2 rounded-full whitespace-nowrap">
                      {item.year}
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-lg shadow">
                      <p className="text-gray-700 font-medium">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Component - Showing Principal & Director */}
      <Leadership />

      {/* Old Leadership Section (hidden) */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50" style={{display: 'none'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-800 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by visionary leaders committed to educational excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center relative overflow-hidden">
              {/* Award Badge */}
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                <FaTrophy />
                <span>Best Principal</span>
              </div>
              
              {/* Principal Photo */}
              <div className="w-48 h-48 mx-auto mb-4 relative">
                <img 
                  src="/images/leadership/principal-suresh-yadav.png"
                  alt="Principal Suresh Yadav"
                  className="w-full h-full object-cover object-top rounded-full border-4 border-yellow-400 shadow-lg scale-110"
                  style={{ objectPosition: 'center 20%' }}
                />
                <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <FaTrophy className="text-xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">Principal Suresh Yadav</h3>
              <p className="text-yellow-600 dark:text-yellow-400 font-semibold mb-3">
                🏆 Best Principal Award Winner
              </p>
              <p className="text-gray-600 dark:text-gray-300 italic mb-2">
                "Education is not preparation for life; education is life itself. At Shree Krishna Public School, we strive to make every moment a learning opportunity."
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Selected In Top 1000 out of 15 Lakh Schools
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center">
              <div className="w-32 h-32 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaHeart className="text-5xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "Our commitment is to provide an environment where every child discovers their potential and develops into a confident, capable individual. We aim to nurture not just students, but future leaders."
              </p>
            </div>
          </div>
          
          {/* Achievement Highlights */}
          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
              🏆 Recent Achievements
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-accent-400">38</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Gold Medals</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">SOF Olympiad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-accent-400">5</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Black Belts</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Karate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-accent-400">25</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Sports Medals</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">District Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-accent-400">90%+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Board Results</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">29 Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

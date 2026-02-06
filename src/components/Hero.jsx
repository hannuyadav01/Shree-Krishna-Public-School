import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { FaGraduationCap, FaTrophy, FaStar } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const slides = [
    {
      image: '/images/school-building.png',
      title: 'Shree Krishna Public Sr. Sec. School',
      subtitle: 'Quality Education Since 2004 • In Top 1000 Schools in India',
    },
    {
      image: '/images/gallery/photo_2026-02-05 18.29.05.jpeg',
      title: 'Excellence in Education',
      subtitle: 'Nurturing Young Minds for a Brighter Tomorrow',
    },
    {
      image: '/images/gallery/photo_2026-02-05 18.29.26.jpeg',
      title: 'Award-Winning Institution',
      subtitle: '38 Gold Medals • 5 Black Belts • 90%+ Board Results',
    },
    {
      image: '/images/gallery/photo_2026-02-05 18.29.30.jpeg',
      title: 'LKPS English Academy',
      subtitle: 'Where Every Child Matters',
    },
  ];

  const stats = [
    { icon: FaTrophy, value: 'In Top 1000', label: 'Schools in India' },
    { icon: FaStar, value: '30000+', label: 'Happy Students' },
    { icon: FaGraduationCap, value: '95%+', label: 'Success Rate' },
  ];

  return (
    <section id="home" className="relative h-screen -mt-28">
      {/* Hero Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center pt-28">
        <div className="max-w-4xl text-white">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in-up">
                Welcome to <br />
                <span className="text-accent-300">Shree Krishna</span> Public School
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                🏆 In Top 1000 Schools in India • 📍 Udairamsar, Bikaner, Rajasthan
              </p>
              <p className="text-base md:text-lg mb-8 text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Empowering students through quality education at our two campuses since 2004
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <a
                  href="/admissions"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-2xl transform hover:scale-105 transition-all inline-block text-center"
                >
                  Apply for Admission 2026-27
                </a>
                <a
                  href="/contact"
                  className="bg-white text-primary-800 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-all inline-block text-center"
                >
                  Schedule a Visit
                </a>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div 
            ref={statsRef}
            className="grid grid-cols-3 gap-3 md:gap-4 mt-8 md:mt-12"
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-xl border border-white/20 transition-all duration-700 ${
                  statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ 
                  transitionDelay: statsVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                <stat.icon className="text-3xl md:text-4xl text-accent-300 mx-auto mb-2" />
                <div className="text-xl md:text-2xl lg:text-3xl font-bold">{stat.value}</div>
                <div className="text-xs md:text-sm lg:text-base text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* School Logo Badge */}
      <div className="absolute top-24 right-4 md:right-10 hidden md:block z-20">
        <div className="bg-white p-3 rounded-xl shadow-2xl animate-fade-in">
          <img
            src="/logo.png"
            alt="School Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

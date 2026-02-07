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
      subtitle: 'Quality Education Since 2004 • Udairamsar, Bikaner',
      accent: 'text-yellow-400'
    },
    {
      image: '/images/gallery/photo_2026-02-05 18.29.05.jpeg',
      title: 'Legacy of Excellence',
      subtitle: 'Shaping values & discipline for 20+ years',
      accent: 'text-orange-400'
    },
    {
      image: '/images/gallery/photo_2026-02-05 18.29.26.jpeg',
      title: 'Remarkable Achievement',
      subtitle: '38 Gold Medals • 5 Black Belts • 25 Medals (In a Single Year)',
      accent: 'text-blue-400'
    },
    {
      image: '/images/gallery/photo_2026-02-05 18.29.30.jpeg',
      title: 'LKPS English Academy',
      subtitle: 'Starting the journey with love and care',
      accent: 'text-pink-400'
    },
    {
      image: '/images/school-building.png',
      title: 'Producing Professionals',
      subtitle: '7-8 Doctors & 3-5 Engineers Every Year',
      accent: 'text-green-400'
    },
  ];

  const stats = [
    { icon: FaTrophy, value: '20+', label: 'Years Legacy', color: 'text-yellow-400' },
    { icon: FaStar, value: '30000+', label: 'Success Stories', color: 'text-blue-400' },
    { icon: FaGraduationCap, value: '100%', label: 'Commitment', color: 'text-green-400' },
  ];

  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden">
      {/* Hero Slider Background */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          speed={1500}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover scale-105 animate-subtle-zoom"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
        <div className="max-w-4xl pt-20">
          <div className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white text-xs md:text-sm font-bold tracking-wider uppercase">
              Admissions Open 2026-27
            </span>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transforming <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500">
                Education
              </span>
              into Excellence
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              At Shree Krishna Public School, we nurture young minds starting from sitting under a tree to reaching for the stars. Join our 20+ year legacy of values, discipline, and success.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
              <a
                href="/admissions"
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all text-center"
              >
                Apply Now
              </a>
              <a
                href="/gallery"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center"
              >
                View Gallery
              </a>
            </div>
          </div>

          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="text-2xl md:text-3xl" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`absolute top-28 right-8 lg:right-16 hidden sm:block z-20 transition-all duration-1000 delay-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
        <div className="bg-white/20 backdrop-blur-md p-4 rounded-3xl border border-white/30 shadow-2xl">
          <img
            src="/logo.png"
            alt="School Logo"
            className="w-16 h-16 lg:w-24 lg:h-24 object-contain"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-black/80 to-transparent py-6">
        <div className="container mx-auto px-4 flex justify-between items-center overflow-x-auto no-scrollbar space-x-8">
          <span className="text-gray-400 text-xs md:text-sm whitespace-nowrap flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> RBSE Affiliated
          </span>
          <span className="text-gray-400 text-xs md:text-sm whitespace-nowrap flex items-center">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span> 2 Campuses
          </span>
          <span className="text-gray-400 text-xs md:text-sm whitespace-nowrap flex items-center">
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span> Top 1000 Schools
          </span>
          <span className="text-gray-400 text-xs md:text-sm whitespace-nowrap flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Outstanding Results
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

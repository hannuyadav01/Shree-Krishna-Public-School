import React from 'react';
import Achievements from '../components/Achievements';
import InfiniteSlider from '../components/InfiniteSlider';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AchievementsPage = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-20">
        <div 
          ref={headerRef}
          className="container mx-auto px-4 text-center"
        >
          <div className={`inline-block mb-4 transition-all duration-700 ${
            headerVisible ? 'opacity-100 scale-100 animate-bounce' : 'opacity-0 scale-90'
          }`}>
            <span className="text-8xl">🏆</span>
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our Achievements
          </h1>
          <div className={`w-24 h-1 bg-white mx-auto mb-6 transition-all duration-700 ${
            headerVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-xl text-gray-100 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Recognized In Top 1000 Schools by Indian Talent Olympiad
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
              <span className="font-bold">🥇 38 Gold Medals</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
              <span className="font-bold">🥋 5 Black Belts</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
              <span className="font-bold">🎖️ 25 Sports Medals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Slider */}
      <InfiniteSlider />

      <Achievements />
    </div>
  );
};

export default AchievementsPage;

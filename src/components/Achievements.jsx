import React, { useState } from 'react';
import { FaTrophy, FaMedal, FaStar, FaAward, FaGraduationCap, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [awardRef, awardVisible] = useScrollAnimation({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [resultsRef, resultsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [galleryRef, galleryVisible] = useScrollAnimation({ threshold: 0.1 });

  // Gallery images array
  const galleryImages = [
    {
      src: '/images/achievements/WhatsApp_Image_2025-12-02_at_18.32.52-e978874f-94e5-4cda-a7c9-56bd65e6cdd6.png',
      title: 'Best Principal Award Certificate',
      description: 'In Top 1000 Schools Recognition'
    },
    {
      src: '/images/achievements/WhatsApp_Image_2025-12-02_at_18.34.51-981c573a-a11f-49e3-ab1d-0ebd22b68ff5.png',
      title: 'School Achievements',
      description: 'Complete Overview'
    },
    {
      src: '/images/achievements/WhatsApp_Image_2025-12-02_at_18.35.01-4f840596-1c32-47a8-ac4c-a590a5b9ba60.png',
      title: 'Award Letter',
      description: 'Indian Talent Olympiad'
    },
    {
      src: '/images/achievements/WhatsApp_Image_2025-12-02_at_18.35.06-c4f1bd20-a074-413d-ad86-ae5adc0f4804.png',
      title: 'Achievement Certificate',
      description: 'Best Principal Award'
    },
    {
      src: '/images/achievements/WhatsApp_Image_2025-12-02_at_18.32.18-6d9c9dc2-12c2-4d2e-a733-c1da0a5b4ffb.png',
      title: 'Media Recognition',
      description: 'Dainik Bhaskar Coverage'
    }
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const majorAchievements = [
    {
      icon: FaTrophy,
      title: 'Best Principal Award',
      description: 'In Top 1000 Schools out of 15 Lakh Schools',
      subtitle: 'Indian Talent Olympiad Recognition',
      image: '/images/achievements/WhatsApp_Image_2025-12-02_at_18.32.52-e978874f-94e5-4cda-a7c9-56bd65e6cdd6.png',
      color: 'from-yellow-400 to-yellow-600',
      stats: 'Principal: Suresh Yadav',
    },
    {
      icon: FaMedal,
      title: 'SOF International Olympiad',
      description: 'Gold Medal Champions',
      subtitle: '38 Gold Medals Won',
      color: 'from-blue-400 to-blue-600',
      stats: 'English: 12 | Science: 09 | Math: 17',
    },
    {
      icon: FaStar,
      title: 'Martial Arts Excellence',
      description: '5 Black Belts Achieved',
      subtitle: 'Okinawa Shorin-Ryu Karate',
      color: 'from-red-400 to-red-600',
      stats: 'Exceptional Discipline & Skill',
    },
    {
      icon: FaAward,
      title: 'District Sports Champion',
      description: '25 Medals Won',
      subtitle: '68th District Level Games',
      color: 'from-green-400 to-green-600',
      stats: '3 Consecutive Years Karate Champion',
    },
  ];

  const boardResults = [
    {
      title: 'Class 10 Results',
      percentage: '90%+',
      students: 29,
      description: 'Above 90% marks',
      color: 'bg-gradient-to-br from-purple-500 to-purple-700',
    },
    {
      title: 'Class 12 Results',
      percentage: '80%+',
      students: 23,
      description: 'Above 80% marks',
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    },
    {
      title: 'NEET UG',
      percentage: 'Qualified',
      students: 13,
      description: 'Students cleared NEET',
      color: 'bg-gradient-to-br from-green-500 to-green-700',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block mb-4">
            <FaTrophy className="text-6xl text-yellow-500 animate-bounce mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-4">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognized In Top 1000 Schools by Indian Talent Olympiad
          </p>
        </div>

        {/* Best Principal Award Highlight */}
        <div 
          ref={awardRef}
          className={`max-w-5xl mx-auto mb-16 transition-all duration-1000 ${
            awardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  {/* Principal Photo - Enhanced */}
                  <div className="flex flex-col items-center md:items-start mb-6">
                    <div className="relative mb-4">
                      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-yellow-400 shadow-2xl bg-white p-1">
                        <img 
                          src="/images/leadership/principal-suresh-yadav.png"
                          alt="Principal Suresh Yadav"
                          className="w-full h-full object-cover object-top rounded-full scale-110"
                          style={{ objectPosition: 'center 20%' }}
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                        <FaTrophy className="text-2xl" />
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                        Principal Suresh Yadav
                      </h3>
                      <p className="text-yellow-600 dark:text-yellow-400 font-bold text-lg">
                        🏆 Best Principal Award Winner
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <FaTrophy className="text-4xl text-yellow-500" />
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
                        🏆 Prestigious Honour
                      </h4>
                      <p className="text-yellow-600 dark:text-yellow-400 font-semibold">
                        Indian Talent Olympiad
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    <strong>Principal Suresh Yadav</strong> has been honored with the{' '}
                    <strong>Best Principal Award</strong>, selected from the{' '}
                    <strong className="text-primary-600 dark:text-accent-400">
                      In top 1000 schools out of 15 lakh schools
                    </strong>{' '}
                    across India - a lifetime achievement recognizing exceptional leadership and
                    contribution to education.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 px-4 py-2 rounded-full">
                      <span className="text-yellow-800 dark:text-yellow-300 font-semibold">
                        🎯 Top 1000/15 Lakh
                      </span>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                      <span className="text-blue-800 dark:text-blue-300 font-semibold">
                        🏅 Lifetime Achievement
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative cursor-pointer group" onClick={() => openLightbox(0)}>
                  <img
                    src="/images/achievements/WhatsApp_Image_2025-12-02_at_18.32.52-e978874f-94e5-4cda-a7c9-56bd65e6cdd6.png"
                    alt="Best Principal Award Certificate"
                    className="rounded-xl shadow-2xl border-4 border-yellow-400 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      🔍 Click to enlarge
                    </span>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-800 w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl shadow-xl animate-pulse">
                    #1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Major Achievements Grid */}
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {majorAchievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover transition-all duration-700 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>

              {/* Content */}
              <div className="relative p-6">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <achievement.icon className="text-3xl text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-primary-600 dark:text-accent-400 font-semibold mb-1">
                  {achievement.description}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {achievement.subtitle}
                </p>

                {/* Stats */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {achievement.stats}
                  </p>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-400 dark:group-hover:border-accent-400 rounded-2xl transition-all pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Board Results */}
        <div 
          ref={resultsRef}
          className="max-w-5xl mx-auto mb-16"
        >
          <h3 className={`text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 transition-all duration-700 ${
            resultsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            🎓 Glorious Board Results
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {boardResults.map((result, index) => (
              <div
                key={index}
                className={`${result.color} rounded-2xl p-8 text-white text-center shadow-xl card-hover transition-all duration-700 ${
                  resultsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ 
                  transitionDelay: resultsVisible ? `${200 + index * 150}ms` : '0ms'
                }}
              >
                <div className="text-6xl font-bold mb-2">{result.students}</div>
                <div className="text-2xl font-semibold mb-2">{result.title}</div>
                <div className="text-lg opacity-90 mb-2">{result.percentage}</div>
                <div className="text-sm opacity-80">{result.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Gallery */}
        <div 
          ref={galleryRef}
          className="max-w-6xl mx-auto"
        >
          <h3 className={`text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 transition-all duration-700 ${
            galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            📸 Award Gallery
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className={`relative group overflow-hidden rounded-xl shadow-lg card-hover cursor-pointer transition-all duration-700 ${
                  galleryVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ 
                  transitionDelay: galleryVisible ? `${200 + index * 100}ms` : '0ms'
                }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-bold text-lg">{image.title}</p>
                    <p className="text-sm">{image.description}</p>
                    <p className="text-xs mt-2 opacity-75">🔍 Click to view full size</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-8 flex flex-col items-center justify-center text-white shadow-lg card-hover">
              <FaStar className="text-6xl mb-4" />
              <p className="text-2xl font-bold text-center mb-2">Many More</p>
              <p className="text-center opacity-90">Awards & Achievements</p>
              <p className="text-4xl font-bold mt-4">🏆</p>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl md:text-4xl hover:text-yellow-400 transition bg-black/50 rounded-full p-3 md:p-4 z-10"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-2 md:left-8 text-white text-3xl md:text-5xl hover:text-yellow-400 transition bg-black/50 rounded-full p-3 md:p-4 z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>

            {/* Next Button */}
            <button
              className="absolute right-2 md:right-8 text-white text-3xl md:text-5xl hover:text-yellow-400 transition bg-black/50 rounded-full p-3 md:p-4 z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>

            {/* Image Container */}
            <div 
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              {/* Image Info */}
              <div className="text-white text-center mt-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-xl md:text-2xl font-bold mb-1">{selectedImage.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{selectedImage.description}</p>
                <p className="text-xs md:text-sm text-gray-400 mt-2">
                  Image {currentImageIndex + 1} of {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-primary rounded-2xl p-12 text-white animate-scale-in">
          <h3 className="text-3xl font-bold mb-4">
            Join Our Award-Winning School!
          </h3>
          <p className="text-xl mb-6 text-gray-100">
            Be part of a school recognized among India's best
          </p>
          <a
            href="/admissions"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Apply for Admission 2026-27
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaTimes } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 });
  const [filter, setFilter] = useState('All');

  // Real school images
  const galleryImages = [
    { url: '/images/gallery/photo_2026-02-05 18.15.56.jpeg', title: 'School Campus', category: 'Campus' },
    { url: '/images/gallery/photo_2026-02-05 18.17.23.jpeg', title: 'Students Learning', category: 'Academics' },
    { url: '/images/gallery/photo_2026-02-05 18.28.27.jpeg', title: 'School Activities', category: 'Activities' },
    { url: '/images/gallery/photo_2026-02-05 18.28.39.jpeg', title: 'Sports Event', category: 'Sports' },
    { url: '/images/gallery/photo_2026-02-05 18.28.52.jpeg', title: 'Classroom', category: 'Academics' },
    { url: '/images/gallery/photo_2026-02-05 18.28.58.jpeg', title: 'School Event', category: 'Events' },
    { url: '/images/gallery/photo_2026-02-05 18.29.01.jpeg', title: 'Group Activity', category: 'Activities' },
    { url: '/images/gallery/photo_2026-02-05 18.29.05.jpeg', title: 'Annual Function', category: 'Events' },
    { url: '/images/gallery/photo_2026-02-05 18.29.06.jpeg', title: 'Cultural Program', category: 'Events' },
    { url: '/images/gallery/photo_2026-02-05 18.29.10.jpeg', title: 'School Facility', category: 'Facilities' },
    { url: '/images/gallery/photo_2026-02-05 18.29.13.jpeg', title: 'Students Together', category: 'Campus' },
    { url: '/images/gallery/photo_2026-02-05 18.29.14.jpeg', title: 'Learning Session', category: 'Academics' },
    { url: '/images/gallery/photo_2026-02-05 18.29.15.jpeg', title: 'School Grounds', category: 'Campus' },
    { url: '/images/gallery/photo_2026-02-05 18.29.17.jpeg', title: 'Activity Time', category: 'Activities' },
    { url: '/images/gallery/photo_2026-02-05 18.29.22.jpeg', title: 'Sports Day', category: 'Sports' },
    { url: '/images/gallery/photo_2026-02-05 18.29.25.jpeg', title: 'School Program', category: 'Events' },
    { url: '/images/gallery/photo_2026-02-05 18.29.26.jpeg', title: 'Campus Life', category: 'Campus' },
    { url: '/images/gallery/photo_2026-02-05 18.29.29.jpeg', title: 'School Building', category: 'Facilities' },
    { url: '/images/gallery/photo_2026-02-05 18.29.30.jpeg', title: 'Students & Teachers', category: 'Academics' },
    { url: '/images/gallery/photo_2026-02-05 18.29.31.jpeg', title: 'School Event Day', category: 'Events' },
    { url: '/images/gallery/photo_2026-02-05 18.29.33.jpeg', title: 'School Infrastructure', category: 'Facilities' },
    { url: '/images/gallery/photo_2026-02-05 18.29.34.jpeg', title: 'Campus View', category: 'Campus' },
    { url: '/images/gallery/photo_2026-02-05 18.29.40.jpeg', title: 'Group Photo', category: 'Events' },
    { url: '/images/gallery/photo_2026-02-05 18.29.43.jpeg', title: 'School Assembly', category: 'Activities' },
    { url: '/images/gallery/photo_2026-02-05 18.29.44.jpeg', title: 'Educational Activity', category: 'Academics' },
    { url: '/images/gallery/photo_2026-02-05 18.29.45.jpeg', title: 'School Gathering', category: 'Events' },
    { url: '/images/gallery/photo_2026-02-05 18.29.46.jpeg', title: 'Campus Building', category: 'Facilities' },
    { url: '/images/gallery/photo_2026-02-05 18.29.48.jpeg', title: 'School Celebration', category: 'Events' },
    { url: '/images/gallery/photo_2026-02-05 18.29.50.jpeg', title: 'Learning Environment', category: 'Academics' },
    { url: '/images/gallery/photo_2026-02-05 18.29.52.jpeg', title: 'Sports Activity', category: 'Sports' },
    { url: '/images/gallery/photo_2026-02-05 18.29.54.jpeg', title: 'School Program', category: 'Events' },
    { url: '/images/gallery/photo_2026-02-05 18.29.57.jpeg', title: 'Campus Area', category: 'Campus' },
    { url: '/images/gallery/photo_2026-02-05 18.30.02.jpeg', title: 'Educational Event', category: 'Academics' },
    { url: '/images/gallery/photo_2026-02-05 18.30.06.jpeg', title: 'School Activity', category: 'Activities' },
 
  ];

  const categories = ['All', 'Campus', 'Academics', 'Sports', 'Events', 'Activities', 'Facilities'];
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 mb-4">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-accent mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Glimpses of life at Shree Krishna Public School
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-all ${
                filter === cat
                  ? 'bg-gradient-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Slider - Mobile Optimized */}
        <div className="mb-8 md:mb-16 animate-fade-in">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            loop={true}
            className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl h-64 md:h-96 lg:h-[500px]"
          >
            {filteredImages.slice(0, 8).map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 text-white">
                    <span className="bg-accent-500 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold mb-2 inline-block">
                      {image.category}
                    </span>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Gallery Grid - Mobile Optimized */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4"
        >
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-lg md:rounded-xl shadow-lg card-hover transition-all duration-700 ${
                gridVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ 
                transitionDelay: gridVisible ? `${index * 50}ms` : '0ms'
              }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 text-white">
                  <span className="bg-accent-500 px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-semibold mb-1 inline-block">
                    {image.category}
                  </span>
                  <p className="text-xs md:text-sm font-bold line-clamp-1">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal - Mobile Optimized */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 md:p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-2 md:top-4 right-2 md:right-4 text-white text-2xl md:text-3xl hover:text-accent-300 transition bg-black/50 rounded-full p-2 md:p-3"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <div className="max-w-5xl w-full">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl max-h-[80vh] object-contain"
              />
              <div className="text-white text-center mt-2 md:mt-4 px-4">
                <span className="bg-accent-500 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold">
                  {selectedImage.category}
                </span>
                <h3 className="text-lg md:text-2xl font-bold mt-2">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Showing <strong>{filteredImages.length}</strong> {filter !== 'All' ? `${filter} ` : ''}
            {filteredImages.length === 1 ? 'photo' : 'photos'}
          </p>
          <a
            href="https://www.instagram.com/shree_krishna_publicudairamsar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            <span>📸</span>
            <span>View More on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

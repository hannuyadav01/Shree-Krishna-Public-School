import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaGraduationCap } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Campuses = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [campusesRef, campusesVisible] = useScrollAnimation({ threshold: 0.1 });
  const campuses = [
    {
      name: 'Shree Krishna Public School',
      tagline: 'Main Campus',
      description: 'Our flagship campus offering comprehensive education from primary to senior secondary levels with state-of-the-art facilities and experienced faculty.',
      address: 'Udairamsar, Bikaner, Rajasthan 334402, India',
      phone: '+919896941400',
      pincode: '334402',
      googleId: 'W7QW+9G6',
      image: '/images/school-building.png',
      gradient: 'from-blue-600 to-blue-800',
      features: ['Classes 1-12', 'RBSE Affiliated', 'Science & Computer Labs', 'Sports Complex'],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.3!2d73.39!3d27.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUzJzI0LjAiTiA3M8KwMjMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
      directionsUrl: 'https://www.google.com/maps/place/W7QW%2B9G6+Udairamsar,+Rajasthan+334402',
    },
    {
      name: 'LKPS English Academy',
      tagline: 'A Branch of SKPS Udairamsar',
      description: 'Specially designed for younger children, providing a nurturing environment with play-based learning and individual attention for holistic early childhood development.',
      address: 'C-115 Vyapaar Nagar Gangashahar, Bikaner, Rajasthan, India',
      phone: '+919896941400',
      pincode: '334003',
      googleId: 'C-115 Vyapaar Nagar Gangashahar Bikaner',
      image: '/images/gallery/photo_2026-02-05 18.30.04.jpeg',
      gradient: 'from-orange-500 to-amber-600',
      features: ['Pre-Nursery to Class 5', 'Play-Based Learning', 'Activity Rooms', 'Safe Environment'],
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.3!2d73.39!3d27.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUzJzI0LjAiTiA3M8KwMjMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
      directionsUrl: 'https://www.google.com/maps/search/C-115+Vyapaar+Nagar+Gangashahar+Bikaner',
    },
  ];

  return (
    <section id="campuses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Our <span className="gradient-text">Campuses</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two world-class campuses designed to provide the best learning environment for every age group
          </p>
        </div>

        {/* Campuses */}
        <div 
          ref={campusesRef}
          className="space-y-16"
        >
          {campuses.map((campus, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image Section */}
              <div
                className={`relative animate-slide-in-${index % 2 === 0 ? 'left' : 'right'} ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={campus.image}
                    alt={campus.name}
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${campus.gradient} opacity-40 group-hover:opacity-30 transition-opacity`}></div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
                    <FaGraduationCap className="text-primary-600" />
                    <span className="font-semibold text-gray-800">{campus.tagline}</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-${index % 2 === 0 ? 'primary' : 'accent'} rounded-full blur-3xl opacity-20`}></div>
              </div>

              {/* Content Section */}
              <div
                className={`animate-slide-in-${index % 2 === 0 ? 'right' : 'left'} ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  {/* Campus Logo & Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    {index === 1 && (
                      <img 
                        src="/images/lkps-english-academy-logo.png" 
                        alt="LKPS Logo"
                        className="w-24 h-24 object-contain"
                      />
                    )}
                    {index === 0 && (
                      <img 
                        src="/logo.png" 
                        alt="SKPS Logo"
                        className="w-20 h-20 object-contain"
                      />
                    )}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{campus.name}</h3>
                      <p className="text-sm text-gray-500 font-medium">{campus.tagline}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{campus.description}</p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {campus.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <FaMapMarkerAlt className="text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-gray-700">{campus.address}</span>
                        <p className="text-sm text-gray-500 mt-1">PIN: {campus.pincode} • Google ID: {campus.googleId}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaPhone className="text-primary-600 flex-shrink-0" />
                      <a href={`tel:${campus.phone}`} className="text-gray-700 hover:text-primary-600">
                        {campus.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaClock className="text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">Mon - Sat: 8:00 AM - 2:00 PM</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/contact"
                      className="bg-gradient-primary text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transform hover:scale-105 transition-all"
                    >
                      Schedule Visit
                    </a>
                    <a
                      href={campus.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-all text-center"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Follow Us on Instagram</h3>
            <p className="text-gray-600 mb-6">Stay updated with daily activities, events, and announcements from both campuses</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/shree_krishna_publicudairamsar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                <span>📸</span>
                <span>SKPS Instagram</span>
              </a>
              <a
                href="https://www.instagram.com/little_krishna_public_school_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                <span>📸</span>
                <span>LKPS Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campuses;

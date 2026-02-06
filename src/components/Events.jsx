import React from 'react';
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Events = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 });
  const events = [
    {
      title: 'Annual Sports Day',
      date: 'March 15, 2026',
      time: '9:00 AM - 4:00 PM',
      location: 'Main Campus Ground',
      description: 'A day filled with athletic competitions, team spirit, and celebration of sportsmanship.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop',
      category: 'Sports',
      color: 'from-red-500 to-red-700',
    },
    {
      title: 'Science Exhibition',
      date: 'April 10, 2026',
      time: '10:00 AM - 2:00 PM',
      location: 'School Auditorium',
      description: 'Students showcase innovative projects and scientific experiments from various fields.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
      category: 'Academic',
      color: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Cultural Festival',
      date: 'May 5, 2026',
      time: '5:00 PM - 8:00 PM',
      location: 'School Auditorium',
      description: 'An evening of music, dance, drama, and cultural performances by our talented students.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
      category: 'Cultural',
      color: 'from-pink-500 to-pink-700',
    },
    {
      title: 'Parent-Teacher Meeting',
      date: 'March 20, 2026',
      time: '9:00 AM - 1:00 PM',
      location: 'Both Campuses',
      description: 'Interactive session to discuss student progress and strengthen school-parent partnership.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
      category: 'Meeting',
      color: 'from-blue-500 to-blue-700',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings at our school
          </p>
        </div>

        {/* Events Grid */}
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {events.map((event, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-xl card-hover transition-all duration-700 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: cardsVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              {/* Event Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-50`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full shadow-lg">
                  <span className="font-semibold text-gray-800 text-sm">{event.category}</span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{event.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>

                {/* Event Info */}
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <FaCalendar className="text-primary-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaClock className="text-primary-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="text-primary-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>

                {/* RSVP Button */}
                <button className="mt-6 w-full bg-gradient-primary text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                  Get Reminder
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-gray-600 mb-4">Want to stay informed about all our events?</p>
          <a
            href="#contact"
            className="inline-block bg-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-600 transform hover:scale-105 transition-all shadow-lg"
          >
            Subscribe to Newsletter
          </a>
        </div>

        {/* Animated GIF */}
        <div className="mt-12 flex justify-center">
          <img
            src="https://media.giphy.com/media/3o7abGQa0aRJUurpII/giphy.gif"
            alt="Events animation"
            className="w-48 h-48 rounded-full shadow-xl opacity-90"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;

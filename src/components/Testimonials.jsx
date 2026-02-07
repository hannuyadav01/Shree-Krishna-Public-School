import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation({ threshold: 0.2 });
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.2 });
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'Parent of Class 8 Student',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      text: 'Shree Krishna Public School has been instrumental in shaping my child\'s future. The teachers are dedicated, and the facilities are excellent. I highly recommend this school to all parents.',
      rating: 5,
    },
    {
      name: 'Priya Mehta',
      role: 'Parent of Class 5 Student',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      text: 'The holistic approach to education at SKPS is remarkable. My daughter has not only excelled academically but also developed confidence through various co-curricular activities.',
      rating: 5,
    },
    {
      name: 'Amit Kumar',
      role: 'Parent - LKPS English Academy',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      text: 'LKPS English Academy provides a nurturing environment for young children. The play-based learning approach has helped my son develop essential skills while having fun.',
      rating: 5,
    },
    {
      name: 'Sunita Patel',
      role: 'Parent of Class 10 Student',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
      text: 'The faculty at SKPS is highly qualified and caring. They go the extra mile to ensure every student reaches their full potential. Thank you for the wonderful education!',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      role: 'Parent of Class 3 Student',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
      text: 'Safety and security are top priorities here, which gives us peace of mind. The transport facility is reliable, and the school keeps parents well-informed about everything.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            What <span className="gradient-text">Parents Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied parents about their experience with us
          </p>
        </div>

        {/* Testimonials Slider */}
        <div
          ref={testimonialsRef}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${testimonialsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl p-8 shadow-xl h-full card-hover">
                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-4xl text-primary-200 mb-4" />

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-accent-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4 border-4 border-primary-100"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Trust Badges */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className={`text-center transition-all duration-700 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`} style={{ transitionDelay: statsVisible ? '100ms' : '0ms' }}>
            <div className="text-4xl font-bold text-primary-600 mb-2">30000+</div>
            <div className="text-gray-600">Happy Students</div>
          </div>
          <div className={`text-center transition-all duration-700 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`} style={{ transitionDelay: statsVisible ? '250ms' : '0ms' }}>
            <div className="text-4xl font-bold text-primary-600 mb-2">3000+</div>
            <div className="text-gray-600">Satisfied Parents</div>
          </div>
          <div className={`text-center transition-all duration-700 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`} style={{ transitionDelay: statsVisible ? '400ms' : '0ms' }}>
            <div className="text-4xl font-bold text-primary-600 mb-2">95%+</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className={`text-center transition-all duration-700 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`} style={{ transitionDelay: statsVisible ? '550ms' : '0ms' }}>
            <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

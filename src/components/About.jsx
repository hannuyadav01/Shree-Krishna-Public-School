import React from 'react';
import { FaCheckCircle, FaHeart, FaBrain, FaTrophy, FaUsers } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });
  const [valuesRef, valuesVisible] = useScrollAnimation({ threshold: 0.1 });
  const [photosRef, photosVisible] = useScrollAnimation({ threshold: 0.1 });

  const values = [
    {
      icon: FaBrain,
      title: 'Academic Excellence',
      description: 'Comprehensive curriculum designed to challenge and inspire',
    },
    {
      icon: FaTrophy,
      title: 'Sports & Athletics',
      description: 'State-of-the-art facilities for physical development',
    },
    {
      icon: FaHeart,
      title: 'Values & Ethics',
      description: 'Building character and moral foundation',
    },
    {
      icon: FaUsers,
      title: 'Holistic Development',
      description: 'Nurturing mind, body, and spirit',
    },
  ];

  const highlights = [
    'RBSE Affiliated Institution',
    'Experienced & Qualified Faculty',
    'Modern Infrastructure',
    'Technology-Enabled Classrooms',
    'Safe & Secure Environment',
    'Co-curricular Activities',
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-primary-800 mb-4 transition-all duration-700 delay-100 ${
            headerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            About <span className="gradient-text">Shree Krishna Public School</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-accent mx-auto mb-6 transition-all duration-700 delay-300 ${
            headerVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-500 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            A premier educational institution committed to providing quality education and nurturing future leaders
          </p>
        </div>

        {/* Main Content */}
        <div 
          ref={contentRef}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Image with decorative elements */}
          <div className={`relative transition-all duration-1000 ${
            contentVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-20'
          }`}>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/leadership/director.png"
                alt="School Director"
                className="w-full h-96 object-cover"
                style={{ 
                  objectPosition: 'center top',
                  transform: 'scale(1.0)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl animate-float">
              <div className="text-4xl font-bold text-primary-600">20+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-200 ${
            contentVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-20'
          }`}>
            <h3 className={`text-3xl font-bold text-gray-800 mb-6 transition-all duration-700 ${
              contentVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              Shaping Tomorrow's Leaders Today
            </h3>
            <p className={`text-gray-600 leading-relaxed mb-6 transition-all duration-700 delay-200 ${
              contentVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              Shree Krishna Public School has been a beacon of educational excellence in Bikaner for over 15 years. 
              We believe in holistic development, combining academic rigor with character building, sports, arts, 
              and life skills.
            </p>
            <p className={`text-gray-600 leading-relaxed mb-6 transition-all duration-700 delay-300 ${
              contentVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              Our two campuses - <strong>Shree Krishna Public School</strong> and <strong>LKPS English Academy</strong> - 
              cater to different age groups, providing age-appropriate learning environments where every child can thrive.
            </p>

            {/* Highlights Grid */}
            <div className={`grid grid-cols-2 gap-3 mb-6 transition-all duration-700 delay-400 ${
              contentVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <FaCheckCircle className="text-accent-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            <a
              href="#admissions"
              className={`inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all shadow-lg ${
                contentVisible ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-5'
              }`}
            >
              Join Our Family
            </a>
          </div>
        </div>

        {/* Values Cards - Enhanced UI */}
        <div 
          ref={valuesRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const gradients = [
              'from-blue-500 via-blue-600 to-indigo-700',
              'from-orange-500 via-red-500 to-pink-600',
              'from-purple-500 via-pink-500 to-rose-600',
              'from-green-500 via-emerald-600 to-teal-700'
            ];
            const bgPatterns = [
              'bg-gradient-to-br from-blue-50 to-indigo-50',
              'bg-gradient-to-br from-orange-50 to-pink-50',
              'bg-gradient-to-br from-purple-50 to-rose-50',
              'bg-gradient-to-br from-green-50 to-teal-50'
            ];
            
            return (
              <div
                key={index}
                className={`group relative ${bgPatterns[index]} p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-700 overflow-hidden ${
                  valuesVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: valuesVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, currentColor 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}></div>
                </div>
                
                {/* Glowing Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <value.icon className="text-4xl text-white" />
                  </div>
                  {/* Decorative Ring */}
                  <div className={`absolute inset-0 w-20 h-20 mx-auto border-2 border-dashed rounded-2xl opacity-0 group-hover:opacity-30 group-hover:scale-125 transition-all duration-300`} style={{ 
                    borderColor: 'currentColor' 
                  }}></div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-700 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradients[index]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                
                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <value.icon className="w-full h-full text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* School Photos Grid */}
        <div 
          ref={photosRef}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-700 ${
            photosVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <img
              src="/images/gallery/photo_2026-02-05 18.29.05.jpeg"
              alt="School Event"
              className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-700 delay-200 ${
            photosVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <img
              src="/images/gallery/photo_2026-02-05 18.29.15.jpeg"
              alt="Campus View"
              className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-700 delay-400 ${
            photosVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <img
              src="/images/gallery/photo_2026-02-05 18.28.52.jpeg"
              alt="School Activity"
              className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

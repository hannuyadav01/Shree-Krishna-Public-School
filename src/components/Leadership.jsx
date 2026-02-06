import React from 'react';
import { FaTrophy, FaAward, FaStar, FaGraduationCap } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Leadership = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 });
  const leaders = [
    {
      name: 'Suresh Yadav',
      role: 'Principal',
      image: '/images/leadership/principal-suresh-yadav.png',
      award: 'Best Principal Award Winner',
      organization: 'Indian Talent Olympiad',
      achievement: 'In Top 1000 out of 15 Lakh Schools',
      icon: FaTrophy,
      gradient: 'from-yellow-400 via-yellow-500 to-orange-500',
      message: '"Education is not preparation for life; education is life itself. At Shree Krishna Public School, we strive to make every moment a learning opportunity."'
    },
    {
      name: 'School Director',
      role: 'Director',
      image: '/images/leadership/director.png',
      award: 'Visionary Leader',
      organization: 'Shree Krishna Public School',
      achievement: 'Building Excellence in Education',
      icon: FaAward,
      gradient: 'from-blue-400 via-blue-500 to-indigo-500',
      message: '"Our mission is to provide world-class education that nurtures young minds and prepares them for a bright future."'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-4">
            Our <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the visionary leaders driving excellence and innovation at Shree Krishna Public School
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mt-4"></div>
        </div>

        {/* Leadership Grid */}
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {leaders.map((leader, index) => {
            const IconComponent = leader.icon;
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-1000 ${
                  cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: cardsVisible ? `${index * 300}ms` : '0ms'
                }}
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${leader.gradient} p-6 text-white relative`}>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-2">
                    <IconComponent className="text-white" />
                    <span className="font-bold text-sm">{leader.award.split(' ')[0]}</span>
                  </div>
                  
                  {/* Photo */}
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
                        <img 
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                          style={{ 
                            objectPosition: index === 0 ? 'center 20%' : 'center top',
                            transform: index === 0 ? 'scale(1.25)' : 'scale(1.0)'
                          }}
                          onError={(e) => {
                            // If image fails to load, show placeholder SVG
                            e.target.src = '/images/leadership/director-placeholder.svg';
                            e.target.onerror = null; // Prevent infinite loop
                          }}
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="text-xl" />
                      </div>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-white/90 font-semibold">{leader.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Award Info */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <IconComponent className="text-yellow-500 text-xl" />
                      <span className="font-bold text-gray-800 dark:text-white">
                        {leader.award}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      {leader.organization}
                    </p>
                    <p className="text-sm text-primary-600 dark:text-accent-400 text-center font-semibold mt-1">
                      {leader.achievement}
                    </p>
                  </div>

                  {/* Message */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-700 dark:text-gray-300 italic text-center leading-relaxed">
                      {leader.message}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <FaTrophy className="text-2xl text-yellow-500 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-800 dark:text-white">30000+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Students</div>
                    </div>
                    <div className="text-center">
                      <FaStar className="text-2xl text-blue-500 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-800 dark:text-white">3000+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Parents</div>
                    </div>
                    <div className="text-center">
                      <FaGraduationCap className="text-2xl text-green-500 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-800 dark:text-white">95%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Under their guidance, Shree Krishna Public School continues to achieve new heights of excellence
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/about"
              className="px-8 py-3 bg-gradient-primary text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              Learn More About Us
            </a>
            <a
              href="/achievements"
              className="px-8 py-3 bg-gradient-accent text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              View Our Achievements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;

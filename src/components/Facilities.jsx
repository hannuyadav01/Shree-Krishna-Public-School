import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { 
  FaBook, 
  FaFlask, 
  FaFutbol, 
  FaPalette, 
  FaBus, 
  FaLaptop,
  FaTheaterMasks,
  FaHeartbeat,
  FaMusic
} from 'react-icons/fa';

const Facilities = () => {
  const facilities = [
    {
      icon: FaBook,
      title: 'Modern Library',
      description: 'Extensive collection of books, journals, and digital resources',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: FaFlask,
      title: 'Science Labs',
      description: 'Well-equipped Physics, Chemistry, and Biology laboratories',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: FaLaptop,
      title: 'Computer Lab',
      description: 'Latest technology with high-speed internet connectivity',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: FaFutbol,
      title: 'Sports Complex',
      description: 'Multi-sport facilities including cricket, football, basketball',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop',
      color: 'from-red-500 to-red-700',
    },
    {
      icon: FaPalette,
      title: 'Art Studio',
      description: 'Creative space for painting, crafts, and artistic expression',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop',
      color: 'from-pink-500 to-pink-700',
    },
    {
      icon: FaMusic,
      title: 'Music Room',
      description: 'Learn various instruments and develop musical talents',
      image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop',
      color: 'from-indigo-500 to-indigo-700',
    },
    {
      icon: FaTheaterMasks,
      title: 'Auditorium',
      description: 'State-of-the-art venue for events, performances, and assemblies',
      image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=2032&auto=format&fit=crop',
      color: 'from-teal-500 to-teal-700',
    },
    {
      icon: FaHeartbeat,
      title: 'Medical Room',
      description: 'Well-equipped medical facility with trained staff',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: FaBus,
      title: 'Transport',
      description: 'Safe and reliable bus service covering major routes',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop',
      color: 'from-yellow-500 to-yellow-700',
    },
  ];

  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            World-Class <span className="gradient-text">Facilities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art infrastructure designed to provide the best learning experience
          </p>
        </div>

        {/* Facilities Grid */}
        <div 
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg card-hover transition-all duration-700 ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${facility.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <facility.icon className="text-2xl text-primary-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {facility.title}
                </h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-400 rounded-2xl transition-all pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white shadow-2xl animate-scale-in">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-gray-100">Classrooms</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-gray-100">Laboratories</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5 Acres</div>
              <div className="text-gray-100">Campus Area</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-gray-100">Security</div>
            </div>
          </div>
        </div>

        {/* Real School Facilities Photos */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/gallery/photo_2026-02-05 18.29.10.jpeg"
              alt="School Facility"
              className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/gallery/photo_2026-02-05 18.29.14.jpeg"
              alt="Learning Environment"
              className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/gallery/photo_2026-02-05 18.29.22.jpeg"
              alt="Sports Facility"
              className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/school-building.png"
              alt="School Building"
              className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;

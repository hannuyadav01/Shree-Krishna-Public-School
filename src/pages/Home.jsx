import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Campuses from '../components/Campuses';
import CampusLogos from '../components/CampusLogos';
import Testimonials from '../components/Testimonials';
import Achievements from '../components/Achievements';
import PrincipalMessage from '../components/PrincipalMessage';
import InfiniteSlider from '../components/InfiniteSlider';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUsers, FaTrophy, FaBuilding } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Home = () => {
  const [quickLinksRef, quickLinksVisible] = useScrollAnimation({ threshold: 0.1 });
  const [whyChooseRef, whyChooseVisible] = useScrollAnimation({ threshold: 0.2 });
  const quickLinks = [
    {
      icon: FaGraduationCap,
      title: 'Admissions',
      description: 'Apply for admission to our campuses',
      link: '/admissions',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: FaBuilding,
      title: 'Our Campuses',
      description: 'Explore our two modern campuses',
      link: '/campuses',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: FaUsers,
      title: 'Faculty',
      description: 'Meet our experienced teachers',
      link: '/faculty',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: FaTrophy,
      title: 'Events',
      description: 'Upcoming school activities',
      link: '/events',
      color: 'from-orange-500 to-orange-700',
    },
  ];

  return (
    <div>
      <Hero />

      {/* Infinite Slider */}
      <InfiniteSlider />

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div
            ref={quickLinksRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {quickLinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover transition-all duration-700 ${quickLinksVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                  }`}
                style={{
                  transitionDelay: quickLinksVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 group-hover:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                    <item.icon className="text-3xl text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-2 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-100 transition-colors">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <About />
      <CampusLogos />
      <PrincipalMessage />
      <Achievements />
      <Campuses />

      <Testimonials />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Home;

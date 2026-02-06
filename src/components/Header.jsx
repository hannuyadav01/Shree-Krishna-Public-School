import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Campuses', href: '/campuses' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Events', href: '/events' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Navigation - Improved Design */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-xl py-3' 
            : 'bg-white/98 backdrop-blur-md py-4'
        }`}
      >
        <nav className="container mx-auto px-3 md:px-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl md:rounded-3xl shadow-md px-3 md:px-6 py-2.5 md:py-3">
            {/* Mobile Layout - Simple 2-column */}
            <div className="flex lg:hidden items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 group">
                <img 
                  src="/logo.png" 
                  alt="Shree Krishna Public School Logo"
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                />
                <div>
                  <h1 className="text-xs font-bold text-primary-800 leading-tight">
                    SKPS
                  </h1>
                  <p className="text-[8px] text-gray-700">Since 2004</p>
                </div>
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary-600 hover:text-primary-800 focus:outline-none bg-white rounded-xl p-2.5 shadow-sm"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>

            {/* Desktop Layout - Grid */}
            <div className="hidden lg:grid grid-cols-3 items-center gap-2">
              {/* Left: Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2 group">
                  <img 
                    src="/logo.png" 
                    alt="Shree Krishna Public School Logo"
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform flex-shrink-0"
                  />
                  <div>
                    <h1 className="text-base font-bold text-primary-800 leading-tight whitespace-nowrap">
                      Shree Krishna Public School
                    </h1>
                    <p className="text-[9px] text-gray-700 font-medium">Since 2004</p>
                  </div>
                </Link>
              </div>

              {/* Center: Desktop Navigation */}
              <div className="flex items-center justify-center">
                <div className="flex items-center space-x-1">
                  {navItems.slice(0, 5).map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-sm text-gray-800 hover:text-primary-600 font-medium transition-colors px-2.5 py-2 rounded-xl whitespace-nowrap ${
                        location.pathname === item.href ? 'bg-white text-primary-600 shadow-sm' : 'hover:bg-white/50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right: CTA */}
              <div className="flex items-center justify-end">
                <Link
                  to="/admissions"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all whitespace-nowrap"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Secondary Navigation Row (Desktop Only) */}
            <div className="hidden lg:flex items-center justify-center mt-2 pt-2 border-t border-gray-200/50">
              <div className="flex items-center space-x-1">
                {navItems.slice(5).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-xs text-gray-700 hover:text-primary-600 font-medium transition-colors px-2.5 py-1.5 rounded-lg ${
                      location.pathname === item.href ? 'bg-white text-primary-600 shadow-sm' : 'hover:bg-white/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-3 text-xs ml-4 pl-4 border-l border-gray-300">
                  <a href="tel:+919896941400" className="flex items-center text-gray-700 hover:text-primary-600 transition whitespace-nowrap">
                    <FaPhone className="mr-1.5" /> +919896941400
                  </a>
                  <a href="mailto:19shagunyadavnnl@gmail.com" className="flex items-center text-gray-700 hover:text-primary-600 transition">
                    <FaEnvelope className="mr-1.5" /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation - Fixed Scrolling */}
          {isOpen && (
            <div className="lg:hidden fixed inset-0 top-[72px] z-40 bg-black/20 backdrop-blur-sm animate-fade-in">
              <div 
                className="absolute inset-0"
                onClick={() => setIsOpen(false)}
              ></div>
              
              <div className="relative bg-white rounded-t-2xl shadow-2xl border-t-2 border-primary-100 mx-3 mt-3 max-h-[calc(100vh-90px)] overflow-y-auto">
                {/* Menu Items */}
                <div className="p-4 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={handleNavClick}
                      className={`flex items-center text-gray-800 font-medium py-3 px-4 rounded-xl transition ${
                        location.pathname === item.href 
                          ? 'bg-primary-600 text-white shadow-md' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                {/* Apply Button */}
                <div className="px-4 pb-4">
                  <Link
                    to="/admissions"
                    onClick={handleNavClick}
                    className="block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3.5 rounded-xl font-bold text-center hover:shadow-lg transition"
                  >
                    📝 Apply for Admission 2026-27
                  </Link>
                </div>
                
                {/* Contact Info */}
                <div className="px-4 pb-4 pt-2 border-t border-gray-100 space-y-2">
                  <a 
                    href="tel:+919896941400" 
                    className="flex items-center text-gray-700 text-sm py-2 px-3 rounded-lg hover:bg-gray-50"
                  >
                    <FaPhone className="mr-3 text-primary-600" /> +919896941400
                  </a>
                  <a 
                    href="mailto:19shagunyadavnnl@gmail.com" 
                    className="flex items-center text-gray-700 text-sm py-2 px-3 rounded-lg hover:bg-gray-50"
                  >
                    <FaEnvelope className="mr-3 text-primary-600" /> 19shagunyadavnnl@gmail.com
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;

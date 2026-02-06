import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTrophy, FaBaby, FaUsers, FaBus, FaBook } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import InfiniteSlider from '../components/InfiniteSlider';
import FAQ from '../components/FAQ';

const LittleKrishnaBikanerPage = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.1 });
  const [mapRef, mapVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div>
      {/* SEO Optimized Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-red-800 to-pink-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div
            ref={headerRef}
            className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              LKPS English Academy Bikaner | Little Krishna Public School
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8">
              Best Early Years Education in Gangashahar, Bikaner | Nurturing Young Minds Since 2012
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
                <span className="font-bold">👶 Early Years Specialists</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
                <span className="font-bold">🎨 Play-Based Learning</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
                <span className="font-bold">🏆 Part of Top 1000 Schools</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                Enroll Your Child Now
              </a>
              <a
                href="tel:+919896941400"
                className="bg-white/20 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-all"
              >
                Call Now: +91-9896941400
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Slider */}
      <InfiniteSlider />

      {/* Main Content - SEO Optimized */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div
            ref={contentRef}
            className={`max-w-5xl mx-auto transition-all duration-1000 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                About LKPS English Academy, Gangashahar, Bikaner
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>LKPS English Academy</strong> (formerly known as Little Krishna Public School) is located in <strong>C-115 Vyapaar Nagar, Gangashahar, Bikaner, Rajasthan</strong>. Established in <strong>2012</strong>, LKPS is the sister campus of the renowned Shree Krishna Public School and specializes in providing quality early years education.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                As part of the Shree Krishna Education family, LKPS English Academy shares the same commitment to excellence and has been <strong>recognized among the Top 1000 Schools in India</strong>. We focus on nurturing young children from <strong>Nursery to Primary levels</strong> with a child-centric, play-based learning approach.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At LKPS English Academy Bikaner, we understand that the early years are crucial for a child's development. Our experienced teachers, modern facilities, and innovative curriculum make us the <strong>best choice for early childhood education in Bikaner</strong>.
              </p>
            </div>

            {/* Why Choose Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                Why Choose LKPS English Academy for Your Child?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <FaBaby className="text-4xl text-pink-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Early Years Specialists</h3>
                      <p className="text-gray-700">Dedicated faculty trained in early childhood education with child psychology expertise for ages 2-8 years.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <FaTrophy className="text-4xl text-yellow-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Top 1000 Schools Recognition</h3>
                      <p className="text-gray-700">Part of Shree Krishna Education, recognized among India's Top 1000 Schools.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <FaBook className="text-4xl text-purple-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Play-Based Learning</h3>
                      <p className="text-gray-700">Activity-based curriculum focusing on learning through play, exploration, and creative expression.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <FaUsers className="text-4xl text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Small Class Sizes</h3>
                      <p className="text-gray-700">Limited students per class ensuring individual attention and personalized care for every child.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <FaBus className="text-4xl text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Safe Transport</h3>
                      <p className="text-gray-700">GPS-enabled buses with trained staff and special safety measures for young children.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <FaBaby className="text-4xl text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Holistic Development</h3>
                      <p className="text-gray-700">Focus on cognitive, physical, social, and emotional development through integrated activities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Programs Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                Programs Offered at LKPS English Academy
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border-l-4 border-pink-500">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Nursery Program (Age 2-3 years)</h3>
                  <p className="text-gray-700">Introduction to school environment through play, music, art, and sensory activities.</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">KG Program (Age 3-5 years)</h3>
                  <p className="text-gray-700">Structured learning with focus on pre-literacy, numeracy, and social skills development.</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Primary Classes (Age 5-8 years)</h3>
                  <p className="text-gray-700">Comprehensive curriculum preparing children for higher education with strong foundation in English, Math, and Science.</p>
                </div>
              </div>
            </div>

            {/* Facilities Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                Child-Friendly Facilities at LKPS Bikaner
              </h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-2xl">✓</span>
                  <span><strong>Colorful Classrooms</strong> designed specifically for young learners with age-appropriate furniture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-2xl">✓</span>
                  <span><strong>Play Area</strong> with safe equipment and soft play zones for physical development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-2xl">✓</span>
                  <span><strong>Activity Rooms</strong> for art, craft, music, and dance activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-2xl">✓</span>
                  <span><strong>Child Library</strong> with picture books and story books to develop reading habits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-2xl">✓</span>
                  <span><strong>Safe and Secure Campus</strong> with CCTV surveillance and trained security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-2xl">✓</span>
                  <span><strong>Hygienic Environment</strong> with clean washrooms and regular sanitization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-2xl">✓</span>
                  <span><strong>Medical Room</strong> with first aid facilities and trained staff</span>
                </li>
              </ul>
            </div>

            {/* Admissions Section */}
            <div className="mb-12 bg-gradient-to-r from-orange-50 to-pink-50 p-8 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                Admissions Open 2026-27 at LKPS English Academy
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Enroll your child in the <strong>best early years program in Bikaner</strong>! Admissions are now open for <strong>Nursery, KG, and Primary classes</strong> for the 2026-27 academic session.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/admissions"
                  className="bg-gradient-primary text-white px-8 py-4 rounded-full font-bold text-center hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Apply Online Now
                </a>
                <a
                  href="tel:+919896941400"
                  className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-full font-bold text-center hover:bg-primary-50 transition-all"
                >
                  Call for Admission: +91-9896941400
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                Contact LKPS English Academy, Bikaner
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <FaMapMarkerAlt className="text-4xl text-primary-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600">
                    C-115 Vyapaar Nagar,<br />
                    Gangashahar, Bikaner,<br />
                    Rajasthan, India
                  </p>
                  <a
                    href="https://www.google.com/maps/search/C-115+Vyapaar+Nagar+Gangashahar+Bikaner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-semibold mt-3 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <FaPhone className="text-4xl text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                  <a href="tel:+919896941400" className="text-gray-600 hover:text-primary-600">
                    +91-9896941400
                  </a>
                  <p className="text-sm text-gray-500 mt-2">
                    Monday - Saturday<br />
                    8:00 AM - 4:00 PM
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <FaEnvelope className="text-4xl text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                  <a href="mailto:19shagunyadavnnl@gmail.com" className="text-gray-600 hover:text-primary-600">
                    19shagunyadavnnl@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2">
                    For Admissions & Inquiries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            ref={mapRef}
            className={`max-w-5xl mx-auto transition-all duration-1000 ${
              mapVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6 text-center">
              Find LKPS English Academy on Google Maps
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Conveniently located in Gangashahar, Bikaner. Visit us today!
            </p>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.3!2d73.39!3d27.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUzJzI0LjAiTiA3M8KwMjMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LKPS English Academy Bikaner Location"
              ></iframe>
            </div>
            <div className="text-center mt-6">
              <a
                href="https://www.google.com/maps/search/C-115+Vyapaar+Nagar+Gangashahar+Bikaner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <FaMapMarkerAlt className="mr-2" />
                Get Directions to LKPS Campus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default LittleKrishnaBikanerPage;

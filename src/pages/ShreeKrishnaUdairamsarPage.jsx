import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTrophy, FaGraduationCap, FaUsers, FaBus, FaBook } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import InfiniteSlider from '../components/InfiniteSlider';
import FAQ from '../components/FAQ';

const ShreeKrishnaUdairamsarPage = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.1 });
  const [mapRef, mapVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div>
      {/* SEO Optimized Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div
            ref={headerRef}
            className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Shree Krishna Public School Udairamsar | Best RBSE School in Bikaner
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Premier Educational Institution in Udairamsar, Bikaner | Recognized in Top 1000 Schools of India
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
                <span className="font-bold">🏆 In Top 1000 Schools</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
                <span className="font-bold">📚 RBSE Affiliated</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
                <span className="font-bold">👨‍🎓 30000+ Students</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                Apply for Admission 2026-27
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
                About Shree Krishna Public School, Udairamsar, Bikaner
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Shree Krishna Public School</strong>, located in <strong>Udairamsar, Bikaner, Rajasthan</strong>, is one of the most trusted and premier educational institutions in the region. Established in <strong>2004</strong>, our school has been committed to providing quality education and holistic development to students for over <strong>15 years</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We are proud to be affiliated with <strong>RBSE (Rajasthan Board of Secondary Education)</strong> and have been <strong>recognized among the Top 1000 Schools in India</strong> by Indian Talent Olympiad. Our Principal, <strong>Suresh Yadav</strong>, received the prestigious <strong>Best Principal Award 2024</strong>, a testament to our dedication to educational excellence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Shree Krishna Public School Udairamsar, we believe in nurturing young minds through a perfect blend of academic excellence, sports, extracurricular activities, and moral values. Our state-of-the-art infrastructure, experienced faculty, and student-centric approach make us the <strong>best school in Bikaner</strong> for your child's bright future.
              </p>
            </div>

            {/* Why Choose Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                Why Choose Shree Krishna Public School, Udairamsar?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <FaTrophy className="text-4xl text-yellow-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Top 1000 Schools Recognition</h3>
                      <p className="text-gray-700">Recognized among India's Top 1000 Schools out of 15 Lakh schools by Indian Talent Olympiad.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <FaGraduationCap className="text-4xl text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">RBSE Affiliated</h3>
                      <p className="text-gray-700">Fully affiliated with Rajasthan Board of Secondary Education, ensuring quality curriculum and recognized certification.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <FaUsers className="text-4xl text-purple-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">30000+ Happy Students</h3>
                      <p className="text-gray-700">Trusted by thousands of families in Bikaner with a proven track record of student success and satisfaction.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <FaBook className="text-4xl text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">95% Success Rate</h3>
                      <p className="text-gray-700">Consistently high board exam results with 95% success rate, preparing students for higher education excellence.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <FaBus className="text-4xl text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Safe Transport</h3>
                      <p className="text-gray-700">GPS-enabled buses covering all major routes in Bikaner, ensuring safe and reliable transportation for students.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <FaGraduationCap className="text-4xl text-indigo-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">15+ Years Experience</h3>
                      <p className="text-gray-700">Over 15 years of excellence in education with experienced and dedicated faculty members.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Facilities Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                World-Class Facilities at Our Udairamsar Campus
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Shree Krishna Public School Udairamsar is equipped with modern infrastructure and facilities designed to provide the best learning environment:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-2xl">✓</span>
                  <span><strong>Smart Classrooms</strong> with digital learning tools and interactive boards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-2xl">✓</span>
                  <span><strong>Well-Equipped Laboratories</strong> for Science, Computer, and Mathematics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-2xl">✓</span>
                  <span><strong>Comprehensive Library</strong> with over 5000 books and digital resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-2xl">✓</span>
                  <span><strong>Sports Facilities</strong> including cricket, football, basketball, and indoor games</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-2xl">✓</span>
                  <span><strong>Music and Art Rooms</strong> for creative expression and talent development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-2xl">✓</span>
                  <span><strong>Spacious Playground</strong> for physical activities and games</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 text-2xl">✓</span>
                  <span><strong>Safe and Secure Campus</strong> with CCTV surveillance and trained security staff</span>
                </li>
              </ul>
            </div>

            {/* Admissions Section */}
            <div className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                Admissions Open 2026-27 at Shree Krishna Public School Udairamsar
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We are now accepting applications for the <strong>2026-27 academic session</strong> for classes Nursery to XII. Don't miss this opportunity to give your child the best education in Bikaner!
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
                Contact Shree Krishna Public School, Udairamsar
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <FaMapMarkerAlt className="text-4xl text-primary-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600">
                    Udairamsar, Bikaner,<br />
                    Rajasthan 334402, India
                  </p>
                  <a
                    href="https://www.google.com/maps/search/Udairamsar+Bikaner+Rajasthan+334402"
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
              Find Shree Krishna Public School on Google Maps
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Conveniently located in Udairamsar, Bikaner. Visit us today!
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
                title="Shree Krishna Public School Udairamsar Location"
              ></iframe>
            </div>
            <div className="text-center mt-6">
              <a
                href="https://www.google.com/maps/search/Udairamsar+Bikaner+Rajasthan+334402"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <FaMapMarkerAlt className="mr-2" />
                Get Directions to Our Campus
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

export default ShreeKrishnaUdairamsarPage;

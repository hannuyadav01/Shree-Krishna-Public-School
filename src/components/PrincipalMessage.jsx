import React from 'react';
import { FaTrophy, FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const PrincipalMessage = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [cardRef, cardVisible] = useScrollAnimation({ threshold: 0.2 });
  const [badgesRef, badgesVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-12 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-4">
              Principal's <span className="gradient-text">Message</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Principal Card */}
          <div
            ref={cardRef}
            className={`bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ${cardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
          >
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left - Principal Photo */}
              <div className="md:col-span-2 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 p-8 flex items-center justify-center relative">
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-2">
                  <FaTrophy className="text-white" />
                  <span className="text-white font-bold text-sm">Best Principal</span>
                </div>

                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
                      <img
                        src="/images/leadership/principal-suresh-yadav.png"
                        alt="Principal Suresh Yadav"
                        className="w-full h-full object-cover object-top scale-110"
                        style={{ objectPosition: 'center 20%' }}
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
                      <div className="flex items-center space-x-1">
                        <FaStar className="text-yellow-500 text-sm" />
                        <FaStar className="text-yellow-500 text-sm" />
                        <FaStar className="text-yellow-500 text-sm" />
                        <FaStar className="text-yellow-500 text-sm" />
                        <FaStar className="text-yellow-500 text-sm" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">Mrs. Suresh Devi Yadav</h3>
                  <p className="text-white/90 font-semibold mb-2">Principal</p>
                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full inline-block">
                    <p className="text-white text-sm font-semibold">
                      🏆 Founder & Pillar of Excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Message */}
              <div className="md:col-span-3 p-8 md:p-12">
                <div className="relative">
                  <FaQuoteLeft className="text-4xl text-primary-200 dark:text-primary-700 mb-4" />

                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p className="text-lg leading-relaxed">
                      Dear Students and Parents,
                    </p>

                    <p className="text-lg leading-relaxed">
                      At <strong className="text-primary-600 dark:text-accent-400">Shree Krishna Public School</strong>, we believe that education is about values, discipline, and the future of every child. We focus not on profits, but on the principles that shape young lives.
                    </p>

                    <p className="text-lg leading-relaxed">
                      Our journey since 2004 has been driven by one vision: to provide quality education to every student, irrespective of background. We have created an atmosphere where <strong>learning comes before everything</strong>.
                    </p>

                    <p className="text-lg leading-relaxed italic font-semibold text-primary-700 dark:text-accent-400">
                      "Values and discipline are the true foundation of success."
                    </p>
                  </div>

                  <FaQuoteRight className="text-4xl text-primary-200 dark:text-primary-700 mt-4 ml-auto block" />

                  {/* Signature */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xl font-bold text-gray-800 dark:text-white">Mrs. Suresh Devi Yadav</p>
                    <p className="text-gray-600 dark:text-gray-400">Principal & Co-Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Badges */}
          <div
            ref={badgesRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-4 text-center text-white shadow-lg overflow-hidden">
              <div className="text-2xl sm:text-3xl font-bold mb-1 break-words">In Top 1000</div>
              <div className="text-sm opacity-90">Schools in India</div>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-4 text-center text-white shadow-lg">
              <div className="text-3xl font-bold mb-1">30000+</div>
              <div className="text-sm opacity-90">Happy Students</div>
            </div>
            <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-xl p-4 text-center text-white shadow-lg">
              <div className="text-3xl font-bold mb-1">3000+</div>
              <div className="text-sm opacity-90">Satisfied Parents</div>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-4 text-center text-white shadow-lg">
              <div className="text-3xl font-bold mb-1">95%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;

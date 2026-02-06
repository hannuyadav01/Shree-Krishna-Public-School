import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [faqRef, faqVisible] = useScrollAnimation({ threshold: 0.1 });

  const faqs = [
    {
      question: "Where is Shree Krishna Public School located?",
      answer: "Shree Krishna Public School is located in Udairamsar, Bikaner, Rajasthan 334402. We have two campuses: the main campus (SKPS) in Udairamsar and LKPS English Academy in Vyapaar Nagar Gangashahar, Bikaner."
    },
    {
      question: "How do I apply for admission at Shree Krishna Public School?",
      answer: "You can apply for admission by downloading our admission form from the website, filling it out, and submitting it online or visiting our campus. You can also call us at +91-9896941400 or email at 19shagunyadavnnl@gmail.com for admission inquiries. Admissions are open for the 2026-27 academic session."
    },
    {
      question: "What curriculum does Shree Krishna Public School follow?",
      answer: "Shree Krishna Public School is affiliated with RBSE (Rajasthan Board of Secondary Education) and follows the RBSE curriculum. We provide comprehensive education from nursery to senior secondary levels with a focus on holistic development."
    },
    {
      question: "Is Shree Krishna Public School recognized as one of the top schools?",
      answer: "Yes! Shree Krishna Public School has been recognized in the Top 1000 Schools of India by Indian Talent Olympiad. Our Principal, Suresh Yadav, received the Best Principal Award in 2024."
    },
    {
      question: "What are the school timings at Shree Krishna Public School?",
      answer: "School timings are from 8:00 AM to 4:00 PM, Monday to Saturday. We are closed on Sundays and public holidays."
    },
    {
      question: "Does Shree Krishna Public School provide transport facilities?",
      answer: "Yes, we provide safe and reliable transport facilities covering major routes in Bikaner and surrounding areas. Our buses are equipped with GPS tracking and trained staff for student safety."
    },
    {
      question: "What is the student strength at Shree Krishna Public School?",
      answer: "We proudly serve 30000+ happy students across our two campuses with a dedicated team of experienced educators. Our student-teacher ratio ensures personalized attention to each child."
    },
    {
      question: "What facilities are available at Shree Krishna Public School?",
      answer: "We offer state-of-the-art facilities including modern classrooms, well-equipped science and computer labs, a comprehensive library, sports facilities, music and art rooms, and a spacious playground for physical activities."
    },
    {
      question: "What is the fee structure at Shree Krishna Public School?",
      answer: "Our fee structure is designed to be affordable while maintaining quality education. Please contact our admission office at +91-9896941400 or visit our campus for detailed fee information and available payment plans."
    },
    {
      question: "Does Shree Krishna Public School offer scholarships?",
      answer: "Yes, we offer merit-based scholarships to deserving students. Students with exceptional academic performance and achievements in sports or extracurricular activities may be eligible for scholarships."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Add FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <FaQuestionCircle className="text-5xl text-primary-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-800">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Shree Krishna Public School, admissions, facilities, and more
          </p>
        </div>

        {/* FAQ Items */}
        <div
          ref={faqRef}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ${
                faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: faqVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FaChevronUp className="text-primary-600 text-xl" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-xl" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Contact Us
            </a>
            <a
              href="tel:+919896941400"
              className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all"
            >
              Call +91-9896941400
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

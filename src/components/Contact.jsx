import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaSpinner } from 'react-icons/fa';
import { sendContactMessage, sendWhatsAppNotification } from '../services/emailService';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [infoCardsRef, infoCardsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [formRef, formVisible] = useScrollAnimation({ threshold: 0.1 });
  const [mapsRef, mapsVisible] = useScrollAnimation({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendMethod, setSendMethod] = useState('email');

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+919896941400', 'Available: Mon-Sat, 8 AM - 2 PM'],
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      link: 'tel:+919896941400',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['19shagunyadavnnl@gmail.com'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      link: 'mailto:19shagunyadavnnl@gmail.com',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Main Campus',
      details: ['Udairamsar, Bikaner', 'Rajasthan 334402, India'],
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      link: 'https://www.google.com/maps/place/W7QW%2B9G6+Udairamsar,+Rajasthan+334402',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'LKPS English Academy Campus',
      details: ['C-115 Vyapaar Nagar Gangashahar', 'Bikaner, Rajasthan, India'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      link: 'https://www.google.com/maps/search/C-115+Vyapaar+Nagar+Gangashahar+Bikaner',
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, url: '#', color: 'hover:bg-blue-600', label: 'Facebook' },
    { icon: FaTwitter, url: '#', color: 'hover:bg-sky-500', label: 'Twitter' },
    { icon: FaInstagram, url: '#', color: 'hover:bg-pink-600', label: 'Instagram' },
    { icon: FaYoutube, url: '#', color: 'hover:bg-red-600', label: 'YouTube' },
    { icon: FaWhatsapp, url: '#', color: 'hover:bg-green-600', label: 'WhatsApp' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (sendMethod === 'whatsapp') {
        sendWhatsAppNotification(formData, 'contact');
        setSubmitted(true);
      } else {
        await sendContactMessage(formData);
        setSubmitted(true);
      }
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }, 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Failed to send message. Please try WhatsApp option or call us directly at +919896941400');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Cards */}
        <div 
          ref={infoCardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`bg-white p-6 rounded-xl shadow-lg text-center card-hover block transition-all duration-700 ${
                infoCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: infoCardsVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              <div className={`w-16 h-16 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <info.icon className={`text-3xl ${info.color}`} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">
                  {detail}
                </p>
              ))}
            </a>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`transition-all duration-1000 ${
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              {submitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h4>
                  <p className="text-gray-600">We've received your message and will get back to you soon.</p>
                </div>
              ) : loading ? (
                <div className="text-center py-12">
                  <FaSpinner className="text-primary-600 text-6xl mx-auto mb-4 animate-spin" />
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Sending...</h4>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition text-gray-800 bg-white"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition text-gray-800 bg-white"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition text-gray-800 bg-white"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject *"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition text-gray-800 bg-white"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message *"
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition text-gray-800 bg-white"
                    ></textarea>
                  </div>

                  {/* Send Method Selection */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-2 border-blue-200">
                    <p className="text-sm font-semibold text-gray-800 mb-3">Choose how to send:</p>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setSendMethod('email')}
                        className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all ${
                          sendMethod === 'email'
                            ? 'bg-primary-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary-400'
                        }`}
                      >
                        <FaEnvelope />
                        <span>Email</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSendMethod('whatsapp')}
                        className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all ${
                          sendMethod === 'whatsapp'
                            ? 'bg-green-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-400'
                        }`}
                      >
                        <FaWhatsapp />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                    <p className="text-xs text-gray-700 mt-2 text-center font-medium">
                      {sendMethod === 'email' 
                        ? '📧 We\'ll send you a confirmation email' 
                        : '💬 Opens WhatsApp with your details pre-filled'}
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full ${
                      sendMethod === 'whatsapp' 
                        ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' 
                        : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800'
                    } text-white py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center space-x-2">
                        <FaSpinner className="animate-spin" />
                        <span className="text-white font-bold">Sending...</span>
                      </span>
                    ) : (
                      <span className="text-white font-bold">
                        {`Send via ${sendMethod === 'email' ? 'Email' : 'WhatsApp'}`}
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Social Media */}
            <div className="mt-8 text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Connect with Us</h4>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className={`w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 ${social.color} hover:text-white transition-all transform hover:scale-110`}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div 
            ref={mapsRef}
            className={`transition-all duration-1000 delay-300 ${
              mapsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="bg-white p-4 rounded-2xl shadow-xl h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 px-4">Find Us Here</h3>
              
              {/* Main Campus Map */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-700 mb-2 px-4">Shree Krishna Public School</h4>
                <p className="text-sm text-gray-600 mb-2 px-4">Udairamsar, Bikaner, Rajasthan 334402 (W7QW+9G6)</p>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.3!2d73.39!3d27.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUzJzI0LjAiTiA3M8KwMjMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shri Krishna Public School Location"
                  ></iframe>
                </div>
                <div className="mt-2 px-4">
                  <a
                    href="https://www.google.com/maps/place/W7QW%2B9G6+Udairamsar,+Rajasthan+334402"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* LKPS English Academy Campus Map */}
              <div>
                <h4 className="font-bold text-gray-700 mb-2 px-4">LKPS English Academy</h4>
                <p className="text-sm text-gray-600 mb-2 px-4">C-115 Vyapaar Nagar Gangashahar, Bikaner</p>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.3!2d73.39!3d27.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUzJzI0LjAiTiA3M8KwMjMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="LKPS English Academy Location"
                  ></iframe>
                </div>
                <div className="mt-2 px-4">
                  <a
                    href="https://www.google.com/maps/search/C-115+Vyapaar+Nagar+Gangashahar+Bikaner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Visit Our Campus</h3>
          <p className="mb-6 text-blue-100">We welcome parents and students to visit us and experience our learning environment</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+919896941400" className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
              <FaPhone />
              <span>Call: +919896941400</span>
            </a>
            <a
              href="https://wa.me/919896941400?text=Hello!%20I%20want%20to%20visit%20Shree%20Krishna%20Public%20School"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <FaWhatsapp />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

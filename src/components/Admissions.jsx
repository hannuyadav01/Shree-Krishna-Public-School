import React, { useState } from 'react';
import { FaCheckCircle, FaFileDownload, FaUser, FaChild, FaPhone, FaEnvelope, FaWhatsapp, FaSpinner } from 'react-icons/fa';
import { sendAdmissionEnquiry, sendWhatsAppNotification } from '../services/emailService';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Admissions = () => {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [processRef, processVisible] = useScrollAnimation({ threshold: 0.1 });
  const [formRef, formVisible] = useScrollAnimation({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    campus: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendMethod, setSendMethod] = useState('email'); // 'email' or 'whatsapp'

  const admissionSteps = [
    {
      number: '01',
      title: 'Enquiry',
      description: 'Fill the online form or visit our campus',
    },
    {
      number: '02',
      title: 'Campus Tour',
      description: 'Schedule a guided tour of our facilities',
    },
    {
      number: '03',
      title: 'Application',
      description: 'Submit the completed application form',
    },
    {
      number: '04',
      title: 'Assessment',
      description: 'Age-appropriate interaction/assessment',
    },
    {
      number: '05',
      title: 'Admission',
      description: 'Complete formalities and join us',
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent name is required';
    if (!formData.childName.trim()) newErrors.childName = 'Child name is required';
    if (!formData.childAge) newErrors.childAge = 'Child age is required';
    if (!formData.campus) newErrors.campus = 'Please select a campus';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      
      try {
        if (sendMethod === 'whatsapp') {
          // Send via WhatsApp
          sendWhatsAppNotification(formData, 'admission');
          setSubmitted(true);
        } else {
          // Send via Email (EmailJS)
          await sendAdmissionEnquiry(formData);
          setSubmitted(true);
        }
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            parentName: '',
            childName: '',
            childAge: '',
            campus: '',
            phone: '',
            email: '',
            message: '',
          });
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to send enquiry. Please try WhatsApp option or call us directly at +919896941400');
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="admissions" className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">
            <span className="gradient-text">Admissions</span> Open 2026-27
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our family and give your child the gift of quality education
          </p>
        </div>

        {/* Admission Process Steps */}
        <div 
          ref={processRef}
          className="mb-16"
        >
          <h3 className={`text-3xl font-bold text-center text-gray-800 mb-12 transition-all duration-700 ${
            processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Admission Process</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: processVisible ? `${200 + index * 150}ms` : '0ms'
                }}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
                  <div className="text-6xl font-bold text-primary-100 mb-2">{step.number}</div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {/* Arrow for desktop */}
                {index < admissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary-300 text-2xl z-10">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Download Documents */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-8 mb-16 text-white text-center shadow-2xl animate-scale-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Download Admission Documents</h3>
          <p className="mb-6 text-white">Get all the necessary forms and information</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center space-x-2">
              <FaFileDownload />
              <span>Application Form</span>
            </button>
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center space-x-2">
              <FaFileDownload />
              <span>Prospectus</span>
            </button>
          </div>
        </div>

        {/* Admission Enquiry Form */}
        <div 
          ref={formRef}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            formVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-primary p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-2">Admission Enquiry Form</h3>
              <p className="text-gray-100">Fill out the form and our team will contact you shortly</p>
            </div>

            <div className="p-8">
              {submitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4 animate-bounce" />
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h4>
                  <p className="text-gray-600 mb-4">
                    Your admission enquiry has been submitted successfully!
                  </p>
                  <p className="text-sm text-gray-500">
                    We'll contact you within 24 hours at {formData.phone}
                  </p>
                </div>
              ) : loading ? (
                <div className="text-center py-12">
                  <FaSpinner className="text-primary-600 text-6xl mx-auto mb-4 animate-spin" />
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Sending...</h4>
                  <p className="text-gray-600">
                    Please wait while we process your enquiry
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Parent Name */}
                    <div>
                      <label htmlFor="parentName" className="block text-gray-700 font-semibold mb-2">
                        <FaUser className="inline mr-2" />
                        Parent/Guardian Name *
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary-500 transition text-gray-800 bg-white ${
                          errors.parentName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your name"
                      />
                      {errors.parentName && (
                        <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>
                      )}
                    </div>

                    {/* Child Name */}
                    <div>
                      <label htmlFor="childName" className="block text-gray-700 font-semibold mb-2">
                        <FaChild className="inline mr-2" />
                        Child's Name *
                      </label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary-500 transition text-gray-800 bg-white ${
                          errors.childName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter child's name"
                      />
                      {errors.childName && (
                        <p className="text-red-500 text-sm mt-1">{errors.childName}</p>
                      )}
                    </div>

                    {/* Child Age */}
                    <div>
                      <label htmlFor="childAge" className="block text-gray-700 font-semibold mb-2">
                        Child's Age *
                      </label>
                      <select
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary-500 transition text-gray-800 bg-white ${
                          errors.childAge ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select age</option>
                        <option value="2-3">2-3 years</option>
                        <option value="3-4">3-4 years</option>
                        <option value="4-5">4-5 years</option>
                        <option value="5-6">5-6 years</option>
                        <option value="6-7">6-7 years</option>
                        <option value="7-12">7-12 years</option>
                        <option value="12+">12+ years</option>
                      </select>
                      {errors.childAge && (
                        <p className="text-red-500 text-sm mt-1">{errors.childAge}</p>
                      )}
                    </div>

                    {/* Campus Selection */}
                    <div>
                      <label htmlFor="campus" className="block text-gray-700 font-semibold mb-2">
                        Preferred Campus *
                      </label>
                      <select
                        id="campus"
                        name="campus"
                        value={formData.campus}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary-500 transition text-gray-800 bg-white ${
                          errors.campus ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select campus</option>
                        <option value="skps">Shree Krishna Public School</option>
                        <option value="lkps">LKPS English Academy</option>
                      </select>
                      {errors.campus && (
                        <p className="text-red-500 text-sm mt-1">{errors.campus}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                        <FaPhone className="inline mr-2" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary-500 transition text-gray-800 bg-white ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        <FaEnvelope className="inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-primary-500 transition text-gray-800 bg-white ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition text-gray-800 bg-white"
                      placeholder="Any specific questions or requirements..."
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

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`${
                        sendMethod === 'whatsapp' 
                          ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' 
                          : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800'
                      } text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all ${
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
                    <p className="text-xs text-gray-600 mt-3">
                      By submitting, you agree to be contacted by our team
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* School Images */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/gallery/photo_2026-02-05 18.29.30.jpeg"
              alt="School Activities"
              className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/gallery/photo_2026-02-05 18.29.26.jpeg"
              alt="Campus Life"
              className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/gallery/photo_2026-02-05 18.29.13.jpeg"
              alt="Students Together"
              className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/school-building.png"
              alt="School Building"
              className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;

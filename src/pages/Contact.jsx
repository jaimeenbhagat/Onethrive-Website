import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    participants: '',
    activityType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="min-h-screen font-interphase font-bold bg-black text-white mt-6 px-6 md:px-20 py-16 flex flex-col md:flex-row justify-between items-start gap-10">
      {/* Left - Contact Info */}
      <div className="w-full md:w-1/3">
        <h2 className="text-4xl md:text-5xl text-center font-bold mb-4">
          Get in touch with us
        </h2>
        <p className="text-white font-bold mb-8 text-center">
          We'd love to hear from you! Whether you have questions or need support, feel free to reach out.
        </p>

        <div className="bg-[#0d0d0d] p-4 rounded-xl w-full border border-neutral-800 relative">
          <div className="space-y-6 text-xl">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-400 text-3xl" />
              <div>
                <p className="font-semibold text-2xl">Phone Number</p>
                <p className="text-gray-300 pt-1">+91 88502 10248</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-400 text-3xl" />
              <div>
                <p className="font-semibold text-2xl">Email Address</p>
                <p className="text-gray-300 pt-1">info@onethrive.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Contact Form */}
      <div className="w-full md:w-2/3 bg-[#0d0d0d] border border-neutral-800 p-8 rounded-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-gray-300 font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-500"
            />
          </div>
          <div>
            <label htmlFor="workEmail" className="block text-gray-300 font-medium mb-2">Work Email</label>
            <input
              type="email"
              id="workEmail"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleInputChange}
              placeholder="john@company.com"
              className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-500"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-300 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="+1 (555) 000-0000"
              className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-500"
            />
          </div>
          <div>
            <label htmlFor="companyName" className="block text-gray-300 font-medium mb-2">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Company Ltd."
              className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="participants" className="block text-gray-300 font-medium mb-2">Number of Participants</label>
            <input
              type="number"
              id="participants"
              name="participants"
              value={formData.participants}
              onChange={handleInputChange}
              placeholder="10"
              className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-500"
            />
          </div>
          <div>
            <label htmlFor="activityType" className="block text-gray-300 font-medium mb-2">Activity Type</label>
            <div className="relative">
              <select
                id="activityType"
                name="activityType"
                value={formData.activityType}
                onChange={handleInputChange}
                className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white appearance-none cursor-pointer"
              >
                <option value="" className="bg-black text-white">Exploring Options</option>
                <option value="team-building" className="bg-black text-white">Team Building</option>
                <option value="wellness-programs" className="bg-black text-white">Wellness Programs</option>
                <option value="creative-workshops" className="bg-black text-white">Creative Workshops</option>
                <option value="sports-tournaments" className="bg-black text-white">Sports Tournaments</option>
                <option value="centertainment-events" className="bg-black text-white">Entertainment Events</option>
                <option value="offsite-retreats" className="bg-black text-white">Offsite Retreats</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Tell us about your vision</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Share your team building goals and requirements..."
            className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-500 h-32 resize-none"
          ></textarea>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-green-500 to-green-400 text-black font-bold py-4 px-6 rounded-lg hover:from-green-600 hover:to-green-500 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
        >
          Send Message
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Contact;
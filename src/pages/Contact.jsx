import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '+91 ',
    companyName: '',
    participants: '',
    activityType: [],
    message: ''
  });

  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (value) => {
    setFormData(prev => ({
      ...prev,
      activityType: prev.activityType.includes(value)
        ? prev.activityType.filter(item => item !== value)
        : [...prev.activityType, value]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="min-h-screen font-bold bg-black text-white mt-6 px-6 md:px-20 py-16 flex flex-col md:flex-row justify-between items-center gap-10">
      {/* Left - Contact Info */}
      <div className="w-full md:w-1/3 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl text-center font-bold mb-4">
          Let's Connect
        </h2>
        <p className="text-white font-bold mb-8 text-center">
          We'd love to hear from you! Whether you have questions or need support, feel free to reach out.
        </p>

        <div className="bg-[#0d0d0d] p-4 rounded-xl w-full border border-neutral-800 relative">
          <div className="space-y-6 text-xl">
            <div className="flex items-center gap-4">
              <Phone className="text-green-400 text-3xl" />
              <div>
                <p className="font-semibold text-2xl">Phone Number</p>
                <p className="text-gray-300 pt-1">+91 88502 10248</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-green-400 text-3xl" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div>
            <label htmlFor="fullName" className="block text-white font-bold mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="w-full bg-black border font-bold border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-500"
            />
          </div>
          <div>
            <label htmlFor="workEmail" className="block text-white font-bold mb-2">Email</label>
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
            <label htmlFor="phoneNumber" className="block text-white font-bold mb-2">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="+91 "
              className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-500"
            />
          </div>
          <div>
            <label htmlFor="companyName" className="block text-white font-bold mb-2">Company Name</label>
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
            <label htmlFor="participants" className="block text-white font-bold mb-2">Number of Participants</label>
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
            <label className="block text-white font-bold mb-2">Activity Type</label>
            <div className="relative">
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white cursor-pointer flex justify-between items-center"
              >
                <span className={formData.activityType.length > 0 ? "text-white" : "text-gray-500"}>
                  {formData.activityType.length > 0 
                    ? `${formData.activityType.length} selected`
                    : "Select activities"
                  }
                </span>
                <svg className={`w-4 h-4 text-gray-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {showDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-black border border-neutral-700 rounded-lg shadow-lg">
                  {[
                    { value: 'team-building', label: 'Team Building' },
                    { value: 'wellness-programs', label: 'Wellness Programs' },
                    { value: 'creative-workshops', label: 'Creative Workshops' },
                    { value: 'sports-tournaments', label: 'Sports Tournaments' },
                    { value: 'entertainment-events', label: 'Entertainment Events' },
                    { value: 'offsite-retreats', label: 'Offsite Retreats' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-3 px-4 py-2 hover:bg-neutral-800 cursor-pointer">
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={formData.activityType.includes(option.value)}
                        onChange={() => handleCheckboxChange(option.value)}
                        className="w-4 h-4 text-green-400 bg-black border-neutral-700 rounded focus:ring-green-400 focus:ring-2"
                      />
                      <span className="text-white">{option.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-white font-bold mb-2">Tell us about your query</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Share your goals and requirements..."
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
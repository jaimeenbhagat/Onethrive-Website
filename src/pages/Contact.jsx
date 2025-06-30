import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, CheckCircle, AlertCircle, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phoneNumber: "+91 ",
    companyName: "",
    participants: "",
    activityType: [],
    message: "",
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  // Activity options mapping
  const activityOptions = [
    { value: "team-building", label: "Team Building" },
    { value: "wellness-programs", label: "Wellness Programs" },
    { value: "creative-workshops", label: "Creative Workshops" },
    { value: "sports-tournaments", label: "Sports Tournaments" },
    { value: "entertainment-events", label: "Entertainment Events" },
    { value: "offsite-retreats", label: "Offsite Retreats" },
  ];

  // Structured data for local business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact OneThrive - Employee Engagement Company Mumbai",
    "description": "Get in touch with Mumbai's leading employee engagement company. Free consultation available for team building, corporate wellness, and workplace culture transformation.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "OneThrive",
      "description": "Employee engagement and team building company in Mumbai",
      "telephone": "+91-88502-10248",
      "email": "info@onethrive.in",
      "url": "https://onethrive.in",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.0760",
        "longitude": "72.8777"
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "serviceArea": {
        "@type": "City",
        "name": "Mumbai"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-88502-10248",
        "contactType": "customer service",
        "email": "info@onethrive.in",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      }
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest('.dropdown-container')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  // Clear status messages after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 3001);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      activityType: prev.activityType.includes(value)
        ? prev.activityType.filter((item) => item !== value)
        : [...prev.activityType, value],
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!formData.workEmail.trim()) {
      errors.workEmail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errors.workEmail = "Please enter a valid email address";
    }

    if (formData.phoneNumber && formData.phoneNumber !== "+91 " && !/^\+91\s\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Please enter a valid Indian phone number";
    }

    if (formData.participants && (isNaN(formData.participants) || parseInt(formData.participants) < 1)) {
      errors.participants = "Please enter a valid number of participants";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const getApiUrl = () => {
    if (process.env.NODE_ENV === 'production') {
      return process.env.REACT_APP_API_URL || 'https://onethrive-backend.onrender.com';
    } else {
      return process.env.REACT_APP_API_URL || 'http://localhost:3001';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const API_URL = getApiUrl();
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          workEmail: "",
          phoneNumber: "+91 ",
          companyName: "",
          participants: "",
          activityType: [],
          message: "",
        });
        setShowDropdown(false);
        setValidationErrors({});
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName) => `
    w-full bg-black border font-bold border-neutral-700 rounded-lg px-4 py-3 
    focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 
    text-white placeholder-gray-500 transition-colors duration-200
    ${validationErrors[fieldName] ? 'border-red-500 focus:border-red-500 focus:ring-red-400' : ''}
  `;

  const getSelectedActivitiesDisplay = () => {
    if (formData.activityType.length === 0) {
      return "Select activities";
    }
    
    const selectedLabels = formData.activityType.map(value => {
      const option = activityOptions.find(opt => opt.value === value);
      return option ? option.label : value;
    });
    
    if (selectedLabels.length === 1) {
      return selectedLabels[0];
    } else if (selectedLabels.length === 2) {
      return selectedLabels.join(', ');
    } else {
      return `${selectedLabels[0]}, ${selectedLabels[1]} +${selectedLabels.length - 2} more`;
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact OneThrive - Employee Engagement Company Mumbai | Free Consultation</title>
        <meta 
          name="description" 
          content="Contact Mumbai's leading employee engagement company OneThrive. Get free consultation for team building, corporate wellness & workplace transformation. Call +91 88502 10248 today." 
        />
        <meta 
          name="keywords" 
          content="contact OneThrive Mumbai, employee engagement consultation, team building enquiry Mumbai, corporate wellness contact, free discovery call Mumbai, employee engagement company contact" 
        />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Contact OneThrive - Employee Engagement Company Mumbai" />
        <meta property="og:description" content="Get in touch with Mumbai's premier employee engagement company. Free consultation available for workplace transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onethrive.in/contact" />
        <meta property="og:image" content="https://onethrive.in/contact-og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact OneThrive - Employee Engagement Company Mumbai" />
        <meta name="twitter:description" content="Contact Mumbai's leading employee engagement company for free consultation." />
        
        {/* Local Business Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.0760;72.8777" />
        
        {/* SEO Enhancement */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://onethrive.in/contact" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="min-h-screen font-bold bg-black text-white mt-6 px-6 md:px-20 py-16 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* SEO-optimized hidden content */}
        <div className="sr-only">
          <h1>Contact OneThrive - Mumbai's Leading Employee Engagement Company</h1>
          <p>
            Ready to transform your workplace culture? Contact OneThrive, Mumbai's 
            premier employee engagement and team building company. We offer free 
            discovery calls to understand your organizational needs and design 
            customized engagement solutions that deliver measurable results.
          </p>
          <p>
            Serving companies across Mumbai including BKC, Andheri, Powai, Thane, 
            and all major business districts. Our team building experts are ready 
            to help you reduce attrition, boost employee morale, and create a 
            thriving workplace culture with our proven "We Before Me" approach.
          </p>
        </div>

        {/* Left - Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl text-center font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-white font-bold mb-8 text-center">
            Ready to transform your workplace? Get your free consultation with Mumbai's 
            leading employee engagement experts. We're here to help build your thriving culture.
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
              <div className="flex items-center gap-4">
                <MapPin className="text-green-400 text-3xl" />
                <div>
                  <p className="font-semibold text-2xl">Service Area</p>
                  <p className="text-gray-300 pt-1">Mumbai & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="w-full md:w-2/3 bg-[#0d0d0d] border border-neutral-800 p-8 rounded-2xl space-y-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-green-400 mb-2">Get Your Free Discovery Call</h3>
            <p className="text-gray-300">
              Tell us about your team building and employee engagement needs. 
              Our Mumbai-based experts will design a customized solution for your organization.
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="bg-green-900/20 border border-green-400 rounded-lg p-4 flex items-center gap-3 animate-fade-in">
              <CheckCircle className="text-green-400 w-5 h-5" />
              <span className="text-green-400">
                Message sent successfully! Our Mumbai team will get back to you within 24 hours.
              </span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-900/20 border border-red-400 rounded-lg p-4 flex items-center gap-3 animate-fade-in">
              <AlertCircle className="text-red-400 w-5 h-5" />
              <span className="text-red-400">
                Failed to send message. Please call us directly at +91 88502 10248 or try again.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-white font-bold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className={inputClasses('fullName')}
                />
                {validationErrors.fullName && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.fullName}</p>
                )}
              </div>
              <div>
                <label htmlFor="workEmail" className="block text-white font-bold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                  required
                  className={inputClasses('workEmail')}
                />
                {validationErrors.workEmail && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.workEmail}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phoneNumber" className="block text-white font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+91 "
                  className={inputClasses('phoneNumber')}
                />
                {validationErrors.phoneNumber && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.phoneNumber}</p>
                )}
              </div>
              <div>
                <label htmlFor="companyName" className="block text-white font-bold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Company Ltd."
                  className={inputClasses('companyName')}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="participants" className="block text-white font-bold mb-2">
                  Number of Participants
                </label>
                <input
                  type="number"
                  id="participants"
                  name="participants"
                  value={formData.participants}
                  onChange={handleInputChange}
                  placeholder="10"
                  min="1"
                  className={inputClasses('participants')}
                />
                {validationErrors.participants && (
                  <p className="text-red-400 text-sm mt-1">{validationErrors.participants}</p>
                )}
              </div>
              <div>
              <label className="block text-white font-bold mb-2">
                Activity Type
              </label>
              <div className="relative dropdown-container">
                <div
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white cursor-pointer flex justify-between items-center transition-colors duration-200"
                >
                  <span
                    className={
                      formData.activityType.length > 0
                        ? "text-white"
                        : "text-gray-500"
                    }
                  >
                    {getSelectedActivitiesDisplay()}
                  </span>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {showDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-black border border-neutral-700 rounded-lg shadow-lg animate-fade-in">
                    {activityOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-neutral-800 cursor-pointer transition-colors duration-200"
                      >
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

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-white font-bold mb-2"
            >
              Tell us about your query
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Share your goals and requirements..."
              className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white placeholder-gray-500 h-32 resize-none transition-colors duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-500 to-green-400 text-black font-bold py-4 px-6 rounded-lg hover:from-green-600 hover:to-green-500 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            )}
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out; 
        }
      `}</style>
    </section>
    </> 
  );
};

export default Contact;
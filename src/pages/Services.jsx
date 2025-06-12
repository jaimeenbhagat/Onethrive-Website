import { useState } from "react";
import { X } from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Team Building Games",
      subtitle: "Build stronger connections",
      experiences: "45 experiences",
      gradient: "bg-gradient-to-br from-[#00FFAB] via-green-400 to-green-500",
      bubbleColor: "bg-gray-800",
      icon: "🎯",
      textColor: "text-black", // Dark text for green background
      subtitleColor: "text-gray-800", // Darker subtitle
      experienceColor: "text-gray-700", // Darker experience text
      description:
        "A comprehensive team building experience designed to strengthen bonds and improve collaboration within your organization.",
      duration: "2-4 hours",
      participants: "10-50 people",
      pricing: "Group Pricing",
      topics: [
        "Communication Exercises",
        "Problem Solving Activities",
        "Trust Building Games",
        "Leadership Challenges",
      ],
      howItWorks:
        "Our team building activities are designed to break down barriers and foster genuine connections. Through carefully crafted exercises and challenges, teams learn to communicate more effectively, trust one another, and work together towards common goals.",
      includes: [
        "Professional Facilitator",
        "All Materials & Equipment",
        "Digital Activity Guide",
        "Team Assessment Tools",
        "Follow-up Resources",
      ],
      requirements: [
        "Indoor/Outdoor Venue",
        "Minimum 2 Hours",
        "Team List Required",
        "Basic Audio Equipment",
      ],
    },
    {
      id: 2,
      title: "Wellness Programs",
      subtitle: "Health & wellbeing focus",
      experiences: "28 experiences",
      gradient: "bg-gradient-to-br from-gray-700 via-gray-800 to-black",
      bubbleColor: "bg-[#00FFAB]",
      icon: "🧘",
      textColor: "text-white", // White text for dark background
      subtitleColor: "text-gray-200", // Light subtitle
      experienceColor: "text-gray-300", // Light experience text
      description:
        "Comprehensive wellness programs focusing on mental health, physical fitness, and overall employee wellbeing.",
      duration: "1-8 hours",
      participants: "5-100 people",
      pricing: "Group Pricing",
      topics: [
        "Mindfulness & Meditation",
        "Stress Management",
        "Physical Fitness",
        "Nutrition Workshops",
      ],
      howItWorks:
        "Our wellness programs take a holistic approach to employee health, combining physical activities, mental health support, and educational components to create a comprehensive wellness experience.",
      includes: [
        "Certified Wellness Instructors",
        "Fitness Equipment",
        "Wellness Assessment Tools",
        "Personalized Plans",
        "Ongoing Support Resources",
      ],
      requirements: [
        "Appropriate Venue Space",
        "Comfortable Clothing",
        "Yoga Mats Available",
        "Sound System",
      ],
    },
    {
      id: 3,
      title: "Creative Workshops",
      subtitle: "Unleash your creativity",
      experiences: "32 experiences",
      gradient: "bg-gradient-to-br from-[#00FFAB] via-green-400 to-green-500",
      bubbleColor: "bg-gray-800",
      icon: "🎨",
      textColor: "text-black", // Dark text for green background
      subtitleColor: "text-gray-800", // Darker subtitle
      experienceColor: "text-gray-700", // Darker experience text
      description:
        "Interactive creative workshops that boost innovation, artistic expression, and out-of-the-box thinking among team members.",
      duration: "1-3 hours",
      participants: "5-30 people",
      pricing: "Per Person",
      topics: [
        "Art & Design Thinking",
        "Innovation Workshops",
        "Creative Problem Solving",
        "Design Sprints",
      ],
      howItWorks:
        "Our creative workshops combine artistic expression with business innovation. Participants engage in hands-on activities that stimulate creative thinking and provide practical tools for innovation in their daily work.",
      includes: [
        "Art Supplies & Materials",
        "Expert Creative Facilitator",
        "Digital Workshop Guide",
        "Take-home Creations",
        "Innovation Toolkit",
      ],
      requirements: [
        "Creative Space Setup",
        "Tables & Chairs",
        "Good Lighting",
        "Presentation Screen",
      ],
    },
    {
      id: 4,
      title: "Sports Tournaments",
      subtitle: "Competitive team activities",
      experiences: "25 experiences",
      gradient: "bg-gradient-to-br from-gray-700 via-gray-800 to-black",
      bubbleColor: "bg-[#00FFAB]",
      icon: "⚽",
      textColor: "text-white", // White text for dark background
      subtitleColor: "text-gray-200", // Light subtitle
      experienceColor: "text-gray-300", // Light experience text
      description:
        "Engaging sports tournaments that promote healthy competition and team bonding through organized athletic activities.",
      duration: "2-5 hours",
      participants: "15-80 people",
      pricing: "Group Pricing",
      topics: [
        "Team Sports Tournaments",
        "Individual Competitions",
        "Mixed Team Events",
        "Award Ceremonies",
      ],
      howItWorks:
        "Our sports tournaments create exciting, competitive environments where teams can bond through shared athletic experiences and friendly competition while promoting physical fitness and teamwork.",
      includes: [
        "Sports Equipment",
        "Professional Referees",
        "Tournament Brackets",
        "Prizes & Trophies",
        "Event Photography",
      ],
      requirements: [
        "Sports Venue",
        "Athletic Attire",
        "Safety Equipment",
        "First Aid Kit",
      ],
    },
    {
      id: 5,
      title: "Entertainment Events",
      subtitle: "Fun & engaging experiences",
      experiences: "18 experiences",
      gradient: "bg-gradient-to-br from-[#00FFAB] via-green-400 to-green-500",
      bubbleColor: "bg-gray-800",
      icon: "🎭",
      textColor: "text-black", // Dark text for green background
      subtitleColor: "text-gray-800", // Darker subtitle
      experienceColor: "text-gray-700", // Darker experience text
      description:
        "Professional entertainment events designed to engage, inspire, and create memorable experiences for your team.",
      duration: "1-4 hours",
      participants: "20-200 people",
      pricing: "Event Pricing",
      topics: [
        "Live Performances",
        "Interactive Shows",
        "Comedy Events",
        "Music & Dance",
      ],
      howItWorks:
        "Our entertainment events bring professional performers and interactive experiences directly to your team, creating shared moments of joy and connection that strengthen workplace relationships.",
      includes: [
        "Professional Entertainers",
        "Sound & Lighting Setup",
        "Interactive Elements",
        "Event Coordination",
        "Technical Support",
      ],
      requirements: [
        "Event Venue",
        "Audio/Visual Setup",
        "Staging Area",
        "Audience Seating",
      ],
    },
    {
      id: 6,
      title: "Offsite Retreats",
      subtitle: "Unplug, Reconnect & Recharge",
      experiences: "12 experiences",
      gradient: "bg-gradient-to-br from-gray-700 via-gray-800 to-black",
      bubbleColor: "bg-[#00FFAB]",
      icon: "🌄",
      textColor: "text-white",
      subtitleColor: "text-gray-200",
      experienceColor: "text-gray-300",
      description:
        "Scenic retreats designed to foster deep team bonding, strategic alignment, and a refreshed mindset away from the office.",
      duration: "1-3 Days",
      participants: "10-100 people",
      pricing: "Custom Packages",
      topics: [
        "Leadership Offsites",
        "Nature-based Activities",
        "Wellness & Yoga",
        "Vision Alignment",
      ],
      howItWorks:
        "Our offsite retreats offer a powerful break from routine. Teams step out of their daily roles and immerse in nature, reflection, and strategy to return aligned, refreshed, and recharged.",
      includes: [
        "Venue Coordination",
        "Activity Planning",
        "Transport & Logistics",
        "Meals & Accommodations",
        "Retreat Facilitator",
      ],
      requirements: [
        "3-Week Advance Planning",
        "Team Preferences Survey",
        "Travel Documents (if needed)",
        "Emergency Contacts List",
      ],
    },
  ];

  const openServiceModal = (service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div
      className="bg-black text-white min-h-screen mt-24 p-4 md:p-6 lg:p-8"
      style={{
        fontFamily:
          '"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-4 h-4 bg-[#00FFAB] rounded transform rotate-45"></div>
            <span className="text-gray-300 text-base font-medium">
              Our Services
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
            Transform Your <span className="text-[#00FFAB]">Team</span>
            <br />
            With Our{" "}
            <span className="underline decoration-2 underline-offset-4">
              Experiences
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of employee engagement solutions
            designed to boost morale, enhance collaboration, and create lasting
            positive impact in your organization.
          </p>
        </div>

        {/* Services Grid - Grape Branch Layout */}
        <div className="flex flex-col items-center gap-8">
          {/* First Row - 3 Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className={`${service.gradient} rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
                onClick={() => openServiceModal(service)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3
                  className={`text-xl font-semibold mb-2 ${service.textColor} group-hover:opacity-90`}
                >
                  {service.title}
                </h3>
                <p className={`text-sm mb-4 ${service.subtitleColor}`}>
                  {service.subtitle}
                </p>
                <div className="flex justify-between items-center">
                  <span className={`text-xs ${service.experienceColor}`}>
                    {service.experiences}
                  </span>
                  <div
                    className={`w-6 h-6 ${service.bubbleColor} rounded-full flex items-center justify-center shadow-sm group-hover:opacity-80`}
                  >
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 3 Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {services.slice(3, 6).map((service) => (
              <div
                key={service.id}
                className={`${service.gradient} rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
                onClick={() => openServiceModal(service)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3
                  className={`text-xl font-semibold mb-2 ${service.textColor} group-hover:opacity-90`}
                >
                  {service.title}
                </h3>
                <p className={`text-sm mb-4 ${service.subtitleColor}`}>
                  {service.subtitle}
                </p>
                <div className="flex justify-between items-center">
                  <span className={`text-xs ${service.experienceColor}`}>
                    {service.experiences}
                  </span>
                  <div
                    className={`w-6 h-6 ${service.bubbleColor} rounded-full flex items-center justify-center shadow-sm group-hover:opacity-80`}
                  >
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Modal - Left Side Only */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white text-black rounded-2xl max-w-4xl w-full my-8 relative">
            <button
              onClick={closeServiceModal}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors z-10"
            >
              <X size={16} />
            </button>

            {/* Content */}
            <div className="p-8 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className={`${selectedService.gradient} p-3 rounded-xl`}>
                  <span className="text-2xl">{selectedService.icon}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {selectedService.title}
                  </h2>
                  <p className="text-gray-600">{selectedService.description}</p>
                </div>
              </div>

              {/* Service Details */}
              <div className="flex gap-6 mb-8 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">👥</span>
                  </div>
                  <span className="text-sm">
                    {selectedService.participants}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#00FFAB] bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">⏱️</span>
                  </div>
                  <span className="text-sm">{selectedService.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">💰</span>
                  </div>
                  <span className="text-sm">{selectedService.pricing}</span>
                </div>
              </div>

              {/* How it Works */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {selectedService.howItWorks}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Topics Include:
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {selectedService.topics.map((topic, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-gray-400">–</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Includes & Requirements Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#00FFAB]">
                    What's Included
                  </h3>
                  <div className="space-y-3">
                    {selectedService.includes.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-[#00FFAB] bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-[#00FFAB] text-xs">✓</span>
                        </div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">
                    Requirements
                  </h3>
                  <div className="space-y-3">
                    {selectedService.requirements.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-600 text-xs">!</span>
                        </div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <button
                  className="bg-gradient-to-r from-[#00FFAB] to-green-400 text-black font-semibold px-8 py-3 rounded-lg hover:from-green-400 hover:to-[#00FFAB] transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Book This Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;

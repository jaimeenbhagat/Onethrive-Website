import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Title, Meta, Link as HeadLink } from "react-head";
import ServiceGrid from "../components/Services/ServiceGrid";
import ServicePage from "../components/Services/ServicePage";
import { servicesData } from "../components/Services/serviceData";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "all",
    duration: "all",
    difficulty: "all"
  });

  // Handle URL parameters for filtering
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({
        ...prev,
        category: category
      }));
    }
  }, [searchParams]);

  const openServiceModal = (service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = {
      ...filters,
      [filterType]: value
    };
    setFilters(newFilters);
    
    // Update URL parameters
    if (value === "all") {
      searchParams.delete(filterType);
    } else {
      searchParams.set(filterType, value);
    }
    setSearchParams(searchParams);
  };

  const filteredServices = servicesData.services.filter(service => {
    if (filters.category !== "all" && service.category !== filters.category) {
      return false;
    }

    if (filters.duration !== "all") {
      const duration = parseInt(service.duration.split(' ')[0]);
      switch (filters.duration) {
        case "quick":
          if (duration > 15) return false;
          break;
        case "short":
          if (duration < 16 || duration > 45) return false;
          break;
        case "medium":
          if (duration < 46 || duration > 90) return false;
          break;
        case "long":
          if (duration < 91 || duration > 180) return false;
          break;
        case "extended":
          if (duration < 181) return false;
          break;
      }
    }

    if (filters.difficulty !== "all" && service.difficulty.toLowerCase() !== filters.difficulty) {
      return false;
    }

    return true;
  });

  return (
    <div
      className="bg-black text-white min-h-screen mt-24 p-4 md:p-6 lg:p-8"
      style={{
        fontFamily: '"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif',
      }}
    >
      {/* SEO Meta Tags */}
      <Title>Our Services | OneThrive Employee Engagement Solutions</Title>
      <Meta name="description" content="Explore OneThrive's comprehensive range of employee engagement services designed to boost morale, enhance collaboration, and create lasting positive impact in your organization." />
      <Meta name="robots" content="index, follow" />
      <Meta name="keywords" content="Employee Engagement, Team Building, Corporate Activities, Employee Wellness, Corporate Training, Organizational Culture" />
      <Meta property="og:title" content="Our Services | OneThrive Employee Engagement Solutions" />
      <Meta property="og:description" content="Discover employee engagement activities by OneThrive designed to improve workplace morale, collaboration, and culture." />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://onethrive.in/services" />
      <Meta property="og:image" content="https://onethrive.in/og-image.jpg" />
      <HeadLink rel="canonical" href="https://onethrive.in/services" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-2">
            Our Services
          </h1>
          <div
            className="w-36 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-2 "
          />
          <p className="text-white font-medium text-lg md:text-xl max-w-5xl mx-auto leading-relaxed">
            Discover our comprehensive range of employee engagement solutions
            designed to boost morale, enhance collaboration, and create lasting
            positive impact in your organization.
          </p>
        </div>

        {/* Enhanced Filter Section */}
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FFAB]/5 via-transparent to-[#00FFAB]/5 rounded-3xl blur-xl"></div>

          <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl border border-gray-800/50 shadow-2xl overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent"></div>

            <div className="p-8 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#00FFAB] rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-[#00FFAB] tracking-wide">
                    Filter Activities
                  </h3>
                </div>
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                  <span>🎯</span>
                  <span>Find your perfect activity</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Category Filter */}
                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-gray-300 group-hover:text-[#00FFAB] transition-colors duration-200">
                    <span className="text-[#00FFAB]">📋</span>
                    Category
                  </label>
                  <div className="relative">
                    <select
                      value={filters.category}
                      onChange={(e) => handleFilterChange("category", e.target.value)}
                      className="w-full p-4 bg-black/70 border border-gray-700/50 rounded-xl text-white 
                               focus:border-[#00FFAB] focus:outline-none focus:ring-2 focus:ring-[#00FFAB]/20 
                               transition-all duration-200 hover:border-gray-600 cursor-pointer
                               appearance-none backdrop-blur-sm"
                    >
                      <option value="all">All Categories</option>
                      {servicesData.serviceCategories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-[#00FFAB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Duration Filter */}
                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-gray-300 group-hover:text-[#00FFAB] transition-colors duration-200">
                    <span className="text-[#00FFAB]">⏱️</span>
                    Duration
                  </label>
                  <div className="relative">
                    <select
                      value={filters.duration}
                      onChange={(e) => handleFilterChange("duration", e.target.value)}
                      className="w-full p-4 bg-black/70 border border-gray-700/50 rounded-xl text-white 
                               focus:border-[#00FFAB] focus:outline-none focus:ring-2 focus:ring-[#00FFAB]/20 
                               transition-all duration-200 hover:border-gray-600 cursor-pointer
                               appearance-none backdrop-blur-sm"
                    >
                      <option value="all">All Durations</option>
                      <option value="quick">Quick (≤15 min)</option>
                      <option value="short">Short (16-45 min)</option>
                      <option value="medium">Medium (46-90 min)</option>
                      <option value="long">Long (91-180 min)</option>
                      <option value="extended">Extended (3+ hours)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-[#00FFAB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Difficulty Filter */}
                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-gray-300 group-hover:text-[#00FFAB] transition-colors duration-200">
                    <span className="text-[#00FFAB]">🎯</span>
                    Difficulty
                  </label>
                  <div className="relative">
                    <select
                      value={filters.difficulty}
                      onChange={(e) => handleFilterChange("difficulty", e.target.value)}
                      className="w-full p-4 bg-black/70 border border-gray-700/50 rounded-xl text-white 
                               focus:border-[#00FFAB] focus:outline-none focus:ring-2 focus:ring-[#00FFAB]/20 
                               transition-all duration-200 hover:border-gray-600 cursor-pointer
                               appearance-none backdrop-blur-sm"
                    >
                      <option value="all">All Levels</option>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-[#00FFAB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Results Section */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00FFAB] rounded-full animate-pulse"></div>
                  <span className="text-[#00FFAB] font-bold text-lg">
                    {filteredServices.length} activities found
                  </span>
                </div>
                
                {/* Clear filters button */}
                <button
                  onClick={() => {
                    setFilters({
                      category: "all",
                      duration: "all",
                      difficulty: "all"
                    });
                    setSearchParams({});
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-[#00FFAB] 
                           transition-colors duration-200 border border-gray-700/50 rounded-lg
                           hover:border-[#00FFAB]/50 backdrop-blur-sm"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Grid */}
        <ServiceGrid
          services={filteredServices}
          serviceCategories={servicesData.serviceCategories}
          onServiceClick={openServiceModal}
        />

        {/* Service Modal */}
        {selectedService && (
          <ServicePage
            service={selectedService}
            onClose={closeServiceModal}
          />
        )}
      </div>
    </div>
  );
};

export default Services;
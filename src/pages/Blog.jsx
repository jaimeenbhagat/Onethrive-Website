import { useState, useEffect } from "react";

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="bg-black text-white min-h-screen flex items-center justify-center p-4 mt-12"
      
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Container */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#00FFAB] via-green-400 to-green-500 rounded-full flex items-center justify-center text-4xl animate-pulse">
              🚀
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Our Blogs Are
            <br />
            <span className="text-[#00FFAB] bg-gradient-to-r from-[#00FFAB] to-green-400 bg-clip-text">
              Coming Soon
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            We're crafting amazing team building blogs, wellness programs blogs, 
            creative workshops blogs, and more. Something incredible is on the way.
          </p>


          {/* CTA Section */}
          <div className="space-y-6">
            <p className="text-white/60 text-sm">
              Want to be notified when we launch?
            </p>
            
            <button
              className="bg-gradient-to-r from-[#00FFAB] to-green-400 text-black font-semibold px-8 py-3 rounded-lg hover:from-green-400 hover:to-[#00FFAB] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => (window.location.href = "/contact")}
            >
              Get Notified
            </button>
          </div>
        </div>

        {/* Subtle Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00FFAB]/20 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#00FFAB]/15 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
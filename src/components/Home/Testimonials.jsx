import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import client1 from "../../assets/ClientLogo/EDS.png";
import client2 from "../../assets/ClientLogo/DJSCE.png";

const testimonials = [
  {
    name: "Swarali Teli",
    position: "HR",
    company: "EDS International Pvt. Ltd.",
    message: "The session was really good! The Laughter Yoga segment left us feeling fresh and energized. I especially enjoyed the tower-building challenge. It was a lot of fun. Participating in more such games would make the experience even better.",
    rating: 5,
    logo: client1
  },
  {
    name: "Dr. Hari Vasudevan",
    position: "Principal",
    company: "SVKM'sDJSCE",
    message: "The event was truly refreshing. It helped me improve my concentration, especially through the breathing exercises. The combination of movement and mindfulness had a strong impact. I'd describe the experience as energizing.",
    rating: 4,
    logo: client2
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-gradient-to-br from-[#111] to-[#222] border border-[#00FFAB]/20 rounded-2xl p-6 md:p-8 overflow-hidden w-full max-w-4xl mx-auto relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00FFAB]/5 via-[#00FFAB]/10 to-transparent rounded-2xl" />
      
      <div className="relative z-10 h-full flex flex-col items-left text-left">

        {/* Star Rating */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 mx-0.5 ${i < testimonial.rating ? 'text-[#00FFAB]' : 'text-gray-500'} fill-current`}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Testimonial Message */}
        <p className="text-lg md:text-xl text-white leading-relaxed italic font-bold mb-6 max-w-2xl text-left">
          "{testimonial.message}"
        </p>
        
        {/* Author Info */}
        <div className="flex flex-col items-end">
          <h4 className="text-xl font-bold text-[#00FFAB] mb-1">
            {testimonial.name}
          </h4>
          <p className="text-white/80 font-bold text-base mb-1">
            {testimonial.position}
          </p>
          <p className="text-white text-base font-bold">
            {testimonial.company}
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-[#00FFAB]/10 rounded-full blur-xl" />
      <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#00FFAB]/5 rounded-full blur-lg" />
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div
            className="w-36 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-2 "
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <p className="text-xl text-white max-w-3xl mx-auto font-medium">
            Don't just take our word for it hear from the companies we've helped transform
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#00FFAB]/20 hover:bg-[#00FFAB]/40 border border-[#00FFAB]/50 rounded-full flex items-center justify-center transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-[#00FFAB] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#00FFAB]/20 hover:bg-[#00FFAB]/40 border border-[#00FFAB]/50 rounded-full flex items-center justify-center transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-[#00FFAB] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Display */}
          <div className="px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-[#00FFAB]' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import local images
import moment1 from '../../assets/moments/image1.png';
import moment2 from '../../assets/moments/image2.png';
import moment3 from '../../assets/moments/image3.png';
import moment4 from '../../assets/moments/image4.png';
import moment5 from '../../assets/moments/image5.png';
import moment6 from '../../assets/moments/image6.jpg';

const MomentsThatMatter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moments = [
    {
      id: 1,
      image: moment1
    },
    {
      id: 2,
      image: moment2
    },
    {
      id: 3,
      image: moment3
    },
    {
      id: 4,
      image: moment4
    },
    {
      id: 5,
      image: moment5
    },
    {
      id: 6,
      image: moment6
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % moments.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + moments.length) % moments.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality - changes photo every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % moments.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [moments.length]);

  return (
    <section className="w-full bg-black py-16 px-4 overflow-hidden font-interphase">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 relative">
            Moments That Matter
          </h2>
          <div
            className="w-36 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-2 "
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <p className="text-xl text-white font-medium max-w-5xl mx-auto relative">
            Capturing the essence of excellence through unforgettable experiences and transformative events
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-[#00FFAB]/90 text-white hover:text-black p-4 rounded-full transition-all duration-300 backdrop-blur-md border border-[#00FFAB]/30 hover:border-[#00FFAB] shadow-xl hover:shadow-[#00FFAB]/30 opacity-90 hover:opacity-100 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-[#00FFAB]/90 text-white hover:text-black p-4 rounded-full transition-all duration-300 backdrop-blur-md border border-[#00FFAB]/30 hover:border-[#00FFAB] shadow-xl hover:shadow-[#00FFAB]/30 opacity-90 hover:opacity-100 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>

          {/* Slide Container */}
          <div className="relative h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FFAB]/5 via-transparent to-black/20 z-10"></div>
            
            {/* Slides */}
            <div 
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {moments.map((moment) => (
                <div key={moment.id} className="w-full h-full flex-shrink-0 relative">
                  <img 
                    src={moment.image} 
                    alt={`Moment ${moment.id}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-4 mt-6">
            {moments.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 h-3 bg-[#00FFAB] rounded-full shadow-lg shadow-[#00FFAB]/50'
                    : 'w-3 h-3 bg-gray-500 hover:bg-gray-300 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentsThatMatter;
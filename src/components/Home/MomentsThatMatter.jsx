import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MomentsThatMatter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const moments = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&h=600&fit=crop"
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

  return (
    <section className="w-full bg-black py-16 px-4 overflow-hidden font-interphase">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 relative">
            Moments That Matter
          </h2>
          <p className="text-md text-white font-bold max-w-4xl mx-auto relative">
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
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${moment.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20"></div>
                  </div>
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

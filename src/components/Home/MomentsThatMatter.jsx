import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import local images
import moment11 from '../../assets/moments/IMG_3939.JPG';
import moment12 from '../../assets/moments/IMG_3940.PNG';    
import moment13 from '../../assets/moments/IMG_3941.PNG';
import moment14 from '../../assets/moments/IMG_3933.png';
import moment15 from '../../assets/moments/IMG_3934.png';
import moment16 from '../../assets/moments/IMG_3935.png';
import moment17 from '../../assets/moments/IMG_5350.png';
import { useCmsContent } from '../../admin/useCmsContent';


const MomentsThatMatter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cmsCarousels = useCmsContent('carousels');
  const defaultMoments = [
    { id: 1, image: moment11 }, { id: 2, image: moment12 }, { id: 3, image: moment13 },
    { id: 4, image: moment14 }, { id: 5, image: moment15 }, { id: 6, image: moment16 }, { id: 7, image: moment17 },
  ];
  const carousel = cmsCarousels.find(({ slug }) => slug === 'home.moments')?.data || {};
  const moments = carousel.slides?.length ? carousel.slides : defaultMoments;

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
          <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white mb-2 relative">
            {carousel.title || 'Moments That Matter'}
          </h2>
          <div
            className="w-36 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-2 "
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <p className="text-md md:text-xl text-white font-medium max-w-5xl mx-auto relative">
            {carousel.description || 'Capturing excellence through unforgettable experiences and transformative events'}
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
          <div className="relative h-[60vh] md:h-[75vh] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FFAB]/5 via-transparent to-black/20 z-10"></div>
            
            {/* Slides */}
            <div 
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {moments.map((moment) => (
                <div key={moment.id} className="w-full h-full flex-shrink-0 relative">
                  <img loading="lazy"  
                    src={moment.image} onError={(e) => { if (moment.fallbackImage && e.target.src !== moment.fallbackImage) e.target.src = moment.fallbackImage; }} 
                    alt={moment.alt || `Moment ${moment.id}`}
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
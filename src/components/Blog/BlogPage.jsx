import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const BlogPage = ({ blog, onBack }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 z-[9999] min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] overflow-y-auto">
      {/* Back Button */}
      <motion.div 
        className="fixed top-6 left-6 z-[10001]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Back button clicked!'); // Debug log
            console.log('onBack function:', onBack); // Check if function exists
            console.log('typeof onBack:', typeof onBack); // Check function type
            if (onBack && typeof onBack === 'function') {
              console.log('Calling onBack function...');
              onBack();
            } else {
              console.error('onBack is not a function or is undefined');
            }
          }}
          className="bg-gradient-to-r from-[#00FFAB]/30 to-[#00CC88]/30 hover:from-[#00FFAB]/50 hover:to-[#00CC88]/50 text-white hover:text-[#00FFAB] p-3 rounded-full transition-all duration-300 backdrop-blur-sm border-2 border-[#00FFAB]/50 hover:border-[#00FFAB] flex items-center space-x-2 shadow-lg shadow-[#00FFAB]/30 cursor-pointer active:scale-95 hover:scale-105 transform"
          style={{ pointerEvents: 'auto' }}
        >
          <ArrowLeft size={20} className="stroke-2" />
          <span className="font-bold text-sm">Back</span>
        </button>
      </motion.div>

      {/* Page Content Container */}
      <div className="relative z-[9998] w-full">
        {/* Hero Image Section */}
        <motion.div 
          className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden mt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          
          {/* Animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FFAB]/10 via-transparent to-[#00CC88]/10"></div>
          
          {/* Title Overlay */}
          <motion.div 
            className="absolute bottom-8 left-8 right-20 md:left-12 md:right-24"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
              {blog.title}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-[#00FFAB] rounded-full animate-pulse"></div>
              <p className="text-[#00FFAB] text-lg md:text-xl lg:text-2xl font-bold drop-shadow-lg">
                By {blog.author}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Container */}
        <div className="relative z-[9997] bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] min-h-screen">
          <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 py-12">
            {/* Decorative separator */}
            <motion.div 
              className="flex items-center space-x-6 mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="h-[2px] bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent flex-1"></div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-[#00FFAB] rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-[#00CC88] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-[#00FFAB] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <div className="h-[2px] bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent flex-1"></div>
            </motion.div>

            {/* Blog Content */}
            <motion.div 
              className="prose prose-invert prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {blog.description.split('\n\n').map((paragraph, index) => (
                <motion.div
                  key={index}
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + (index * 0.1) }}
                >
                  <p className="text-white/95 leading-relaxed text-lg md:text-xl text-justify font-light mb-6 tracking-wide">
                    {paragraph}
                  </p>
                  {index < blog.description.split('\n\n').length - 1 && (
                    <div className="my-8 flex justify-center">
                      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#00FFAB]/60 to-transparent"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom spacing */}
            <div className="h-20"></div>
          </div>
        </div>
      </div>

      {/* Floating gradient orbs for ambiance */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[9996]">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#00FFAB]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#00CC88]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .prose p {
          margin-bottom: 1.5rem !important;
        }
        
        /* Custom scrollbar for the entire page */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0, 255, 171, 0.1);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00FFAB, #00CC88);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #00CC88, #00FFAB);
        }
        
        /* Ensure smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Prevent body scroll when blog page is open */
        body {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
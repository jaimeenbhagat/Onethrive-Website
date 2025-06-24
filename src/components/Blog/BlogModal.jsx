import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const BlogModal = ({ blog, isOpen, onClose }) => {
  if (!blog) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-[#111] via-[#0a0a0a] to-[#111] border border-[#00FFAB]/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl shadow-[#00FFAB]/20 relative"
              initial={{ scale: 0.7, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.7, y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00FFAB] via-[#00CC88] to-[#00FFAB] p-[2px] -z-10">
                <div className="w-full h-full bg-gradient-to-br from-[#111] via-[#0a0a0a] to-[#111] rounded-2xl"></div>
              </div>

              {/* Close Button */}
              <div className="absolute top-6 right-6 z-10">
                <motion.button
                  onClick={onClose}
                  className="bg-gradient-to-r from-[#00FFAB]/20 to-[#00CC88]/20 hover:from-[#00FFAB]/30 hover:to-[#00CC88]/30 text-[#00FFAB] p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-[#00FFAB]/30"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
                {/* Image Header */}
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Floating title overlay */}
                  <motion.div 
                    className="absolute bottom-6 left-6 right-16"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                      {blog.title}
                    </h2>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#00FFAB] rounded-full animate-pulse"></div>
                      <p className="text-[#00FFAB] text-lg font-bold">
                        By {blog.author}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <motion.div 
                  className="p-8 space-y-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {/* Decorative separator */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent flex-1"></div>
                    <div className="w-3 h-3 bg-[#00FFAB] rounded-full animate-pulse"></div>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent flex-1"></div>
                  </div>

                  {/* Description */}
                  <div className="prose prose-invert max-w-none">
                    {blog.description.split('\n\n').map((paragraph, index) => (
                      <motion.p
                        key={index}
                        className="text-white font-bold leading-relaxed text-lg mb-6 text-justify"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>

                  {/* Bottom gradient fade */}
                  <div className="h-8 bg-gradient-to-t from-[#111] to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 255, 171, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00FFAB, #00CC88);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #00CC88, #00FFAB);
        }
      `}</style>
    </AnimatePresence>
  );
};

export default BlogModal;
import { motion } from 'framer-motion';

const BlogPagination = ({ currentPage, totalPages, onPageChange }) => {
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Add first page and ellipsis if needed
    if (startPage > 1) {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => goToPage(1)}
          className="px-4 py-2 rounded-full border text-[#00FFAB] border-[#00FFAB] hover:bg-[#00FFAB] hover:text-black transition"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pageNumbers.push(
          <span key="ellipsis1" className="text-gray-400 px-2">...</span>
        );
      }
    }

    // Add page numbers
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <motion.button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-4 py-2 rounded-full border ${
            currentPage === i
              ? 'bg-[#00FFAB] text-black border-[#00FFAB]'
              : 'text-[#00FFAB] border-[#00FFAB] hover:bg-[#00FFAB] hover:text-black'
          } transition`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {i}
        </motion.button>
      );
    }

    // Add last page and ellipsis if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span key="ellipsis2" className="text-gray-400 px-2">...</span>
        );
      }
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => goToPage(totalPages)}
          className="px-4 py-2 rounded-full border text-[#00FFAB] border-[#00FFAB] hover:bg-[#00FFAB] hover:text-black transition"
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <motion.div 
      className="flex justify-center items-center gap-3 mt-12 flex-wrap"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <motion.button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-full text-[#00FFAB] border-[#00FFAB] hover:bg-[#00FFAB] hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
        whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
      >
        ← Prev
      </motion.button>

      {renderPageNumbers()}

      <motion.button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-full text-[#00FFAB] border-[#00FFAB] hover:bg-[#00FFAB] hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
        whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
      >
        Next →
      </motion.button>
    </motion.div>
  );
};

export default BlogPagination;
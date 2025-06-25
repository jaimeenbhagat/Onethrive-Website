import { useState } from 'react';
import { motion } from 'framer-motion';
import { blogs } from '../components/Blog/blogData';
import BlogGrid from '../components/Blog/BlogGrid';
import BlogPagination from '../components/Blog/BlogPagination';
import BlogModal from '../components/Blog/BlogModal';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const blogsPerPage = 6;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const startIdx = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIdx, startIdx + blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Smooth scroll to top of blogs section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedBlog(null), 300); // Wait for animation to complete
  };

  return (
    <section className="min-h-screen px-6 md:px-20 py-20 pt-32 bg-black text-white">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4  bg-clip-text text-white">
          Our Latest Blogs
        </h2>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Discover insights, trends, and expert perspectives on employee engagement, 
          workplace culture, and organizational growth.
        </p>
      </motion.div>

      {/* Blog Grid */}
      <BlogGrid blogs={currentBlogs} onBlogClick={handleBlogClick} />

      {/* Pagination */}
      <BlogPagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Blog Modal */}
      <BlogModal 
        blog={selectedBlog}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Blog;
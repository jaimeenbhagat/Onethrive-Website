import { useState } from 'react';
import { motion } from 'framer-motion';
import { blogs } from '../components/Blog/blogData';
import BlogGrid from '../components/Blog/BlogGrid';
import BlogPagination from '../components/Blog/BlogPagination';
import BlogPage from '../components/Blog/BlogPage'; // Changed from BlogModal to BlogPage

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showBlogPage, setShowBlogPage] = useState(false); // Changed from isModalOpen to showBlogPage
  
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
    console.log('Blog clicked:', blog); // Debug log
    setSelectedBlog(blog);
    setShowBlogPage(true); // Changed from setIsModalOpen(true)
  };

  const handleBackToBlogList = () => {
    console.log('Going back to blog list...'); // Debug log
    setShowBlogPage(false); // Changed from setIsModalOpen(false)
    setTimeout(() => setSelectedBlog(null), 300); // Wait for animation to complete
  };

  // If blog page is open, show only the blog page
  if (showBlogPage && selectedBlog) {
    return (
      <BlogPage 
        blog={selectedBlog}
        onBack={handleBackToBlogList}
      />
    );
  }

  // Otherwise, show the blog list
  return (
    <section className="min-h-screen px-6 md:px-20 py-20 pt-32 bg-black text-white">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-white">
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
    </section>
  );
};

export default Blog;
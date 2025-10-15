import React, { useState, useEffect } from "react";
import { blogs } from "./blogData.js";
import { Link } from "react-router-dom";
import blogimage1 from "../../../src/assets/Blogs/Blog1.webp";

const categories = [
  "All Posts",
  "Wellness",
  "Team Building",
  "Creative Workshops",
  "Leadership",
  "Expert-Insights",
];
const blogsPerPage = 9;

const featuredBlog = blogs[0];
const otherBlogs = blogs.slice(1);
const trendingBlogs = blogs.slice(2, 5);

const BlogCard = ({ blog }) => (
  <Link to={blog.path}>
    <div
      className="group flex flex-col rounded-xl overflow-hidden shadow-lg p-4 sm:p-6 cursor-pointer
      bg-[#0E0E0E] border border-gray-800 transition-all duration-300 transform-gpu
      hover:shadow-[0_0_25px_-5px_#00FFA9] hover:scale-[1.01]"
    >
      {/* Blog Card Image and Category Chip */}
      <div className="relative overflow-hidden rounded-xl mb-4 sm:mb-6">
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-40 sm:h-48 object-cover rounded-xl transition-transform duration-300
          hover:scale-105"
        />
        <div
          className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-gray-900/50 backdrop-blur-sm text-gray-300
        text-xs font-semibold px-2 sm:px-3 py-1 rounded-full border border-gray-700"
        >
          {blog.category}
        </div>
      </div>
      {/* Blog Card Content */}
      <div className="flex flex-col space-y-2 flex-grow">
        <h3
          className="text-lg sm:text-xl font-bold leading-tight line-clamp-2 transition-all duration-300
        group-hover:text-[#00FFA9] group-hover:drop-shadow-[0_0_1px_rgba(0,255,169,0.5)]"
        >
          {blog.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {blog.excerpt}
        </p>
        <div className="mt-auto pt-4 text-xs text-gray-500 flex justify-between items-baseline">
          <span className="text-gray-500">{blog.author}</span>
          <span>{blog.readTime}</span>
        </div>
      </div>
    </div>
  </Link>
);

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBlogs, setFilteredBlogs] = useState(otherBlogs);

  useEffect(() => {
    let newBlogs = otherBlogs;
    if (selectedCategory !== "All Posts") {
      newBlogs = newBlogs.filter((blog) => blog.category === selectedCategory);
    }
    setFilteredBlogs(newBlogs);
    setCurrentPage(1);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="font-sans bg-black min-h-screen text-white relative overflow-hidden">
      <style>{`
        @import
        url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="absolute inset-0 bg-radial-gradient"></div>

      <main className="container mx-auto px-4 py-8 sm:py-16 md:py-24 relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2 text-center">
          Our Blogs
        </h1>
        <div
          className="w-24 sm:w-36 h-1 bg-gradient-to-r from-transparent via-[#00FFAB] to-transparent mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        />

        {/* Featured Blog Section */}
        <section className="mb-16 sm:mb-24">
          <Link to={featuredBlog.path}>
            <div
              className="flex flex-col md:flex-row items-center rounded-2xl overflow-hidden
            shadow-2xl bg-black border border-gray-800 hover:shadow-[0_0_25px_-5px_#00FFA9] transition-all duration-300"
            >
              <div
                className="w-full md:w-3/5 p-6 sm:p-8 md:p-12 order-2 md:order-1 flex flex-col
              justify-center space-y-4 sm:space-y-6"
              >
                <div
                  className="text-gray-300 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 rounded-full w-fit
                border border-gray-700 bg-gray-900/50 backdrop-blur-sm"
                >
                  {featuredBlog.category}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  {featuredBlog.title}
                </h2>
                <p className="text-white text-base sm:text-lg leading-relaxed line-clamp-3">
                  {featuredBlog.excerpt}
                </p>
                <span
                  className="inline-block bg-[#00FFA9] text-black font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full w-fit
    transition-transform duration-300 hover:scale-105 shadow-md cursor-pointer text-sm sm:text-base"
                >
                  READ MORE <span className="ml-2">→</span>
                </span>
              </div>
              <div className="w-full md:w-2/5 order-1 md:order-2">
                <img
                  src={blogimage1}
                  alt={featuredBlog.title}
                  className="w-full h-64 sm:h-80 md:h-auto object-cover"
                />
              </div>
            </div>
          </Link>
        </section>

        {/* Filters and Blog Grid */}
        <section className="mb-16 sm:mb-20">
          {/* Desktop Filters - Single Line */}
          <div className="hidden lg:flex flex-wrap gap-2 justify-center mb-12 max-w-7xl mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  text-sm font-semibold px-4 py-2 rounded-full border
                  transition-all duration-200 whitespace-nowrap
                  ${
                    selectedCategory === category
                      ? "bg-[#00FFA9] text-black border-[#00FFA9] shadow-lg"
                      : "bg-transparent text-white border-gray-700 hover:bg-[#00FFA9]/20 hover:text-white hover:border-[#00FFA9]/50"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile/Tablet Filters - Horizontal Scroll */}
          <div className="lg:hidden mb-8 sm:mb-12">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 -mx-4 pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    text-sm font-semibold px-4 py-2 rounded-full border
                    transition-all duration-200 whitespace-nowrap flex-shrink-0
                    ${
                      selectedCategory === category
                        ? "bg-[#00FFA9] text-black border-[#00FFA9] shadow-lg"
                        : "bg-transparent text-gray-300 border-gray-700 hover:bg-[#00FFA9]/20 hover:text-white hover:border-[#00FFA9]/50"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {currentBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="flex justify-center items-center space-x-2 md:space-x-4 mb-16 sm:mb-24">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`
                p-2 rounded-full transition-colors duration-200 ${
                  currentPage === 1
                    ? "text-gray-600 cursor-not-allowed"
                    : "text-[#00FFA9] hover:bg-[#00FFA9]/20"
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`
                  w-8 h-8 md:w-10 md:h-10 rounded-full text-sm md:text-base font-semibold
                  transition-colors duration-200
                  ${
                    currentPage === i + 1
                      ? "bg-[#00FFA9] text-black"
                      : "bg-transparent text-gray-300 hover:bg-[#00FFA9]/20 hover:text-white"
                  }
                `}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`
                p-2 rounded-full transition-colors duration-200
                ${
                  currentPage === totalPages
                    ? "text-gray-600 cursor-not-allowed"
                    : "text-[#00FFA9] hover:bg-[#00FFA9]/20"
                }
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </nav>
        )}

        {/* Newsletter & Trending Reads */}
        <section className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Newsletter */}
          <div className="flex-1 bg-[#0E0E0E] p-6 sm:p-8 rounded-2xl border border-gray-800">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Join Our Community
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              Get our best content, insights, and exclusive offers straight to
              your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-gray-900 border border-gray-700
                text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FFA9]
                text-sm sm:text-base"
              />
              <button
                type="submit"
                className="bg-[#00FFA9] text-black font-bold px-6 py-3 rounded-xl
                transition-transform duration-300 hover:scale-105 shadow-md text-sm sm:text-base
                whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Trending Reads */}
          <div className="flex-1 bg-[#0E0E0E] p-6 sm:p-8 rounded-2xl border border-gray-800">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
              Trending Reads
            </h3>
            <ul className="space-y-6">
              {trendingBlogs.map((blog, index) => (
                <Link to={blog.path} key={blog.id}>
                  <li
                    className="flex items-start gap-4 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <span className="text-3xl sm:text-4xl font-bold text-[#00FFA9] flex-shrink-0">{`0${
                      index + 1
                    }`}</span>
                    <div className="min-w-0">
                      <h4
                        className="font-semibold text-base sm:text-lg leading-tight
                      line-clamp-2"
                      >
                        {blog.title}
                      </h4>
                      <p className="text-gray-400 text-sm pt-1">
                        {blog.readTime}
                      </p>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
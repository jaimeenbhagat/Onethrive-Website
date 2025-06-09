import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import herosectionImage from '../assets/herosectionimage.png';

const blogs = [
  {
    id: 1,
    title: "Revolutionizing Employee Engagement",
    author: "Team OneThrive",
    image: herosectionImage,
  },
  {
    id: 2,
    title: "5 Ways to Boost Workplace Productivity",
    author: "Jaimeen Bhagat",
    image: "https://source.unsplash.com/400x250/?productivity",
  },
  {
    id: 3,
    title: "Why Company Culture Matters More Than Ever",
    author: "Sneha Sharma",
    image: "https://source.unsplash.com/400x250/?culture",
  },
  {
    id: 4,
    title: "Building a Strong Remote Work Culture",
    author: "OneThrive HR",
    image: "https://source.unsplash.com/400x250/?remote,work",
  },
  {
    id: 5,
    title: "Gamifying the Workplace Experience",
    author: "Arjun Mehta",
    image: "https://source.unsplash.com/400x250/?gamification",
  },
  {
    id: 6,
    title: "How Feedback Fuels Growth",
    author: "Tanvi Joshi",
    image: "https://source.unsplash.com/400x250/?feedback",
  },
  {
    id: 7,
    title: "Employee Wellness Trends in 2025",
    author: "Team OneThrive",
    image: "https://source.unsplash.com/400x250/?wellness",
  },
  {
    id: 8,
    title: "Crafting Memorable Team Events",
    author: "Sneha Sharma",
    image: "https://source.unsplash.com/400x250/?event,team",
  },
  {
    id: 9,
    title: "The Psychology Behind Rewards",
    author: "Jaimeen Bhagat",
    image: "https://source.unsplash.com/400x250/?psychology,reward",
  },
  {
    id: 10,
    title: "Creating Emotional Connections at Work",
    author: "Arjun Mehta",
    image: "https://source.unsplash.com/400x250/?emotion,workplace",
  },
  {
    id: 11,
    title: "Virtual Reality in Employee Engagement",
    author: "OneThrive R&D",
    image: "https://source.unsplash.com/400x250/?virtualreality",
  },
  {
    id: 12,
    title: "Diversity and Inclusion: Beyond the Basics",
    author: "Tanvi Joshi",
    image: "https://source.unsplash.com/400x250/?diversity",
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [likedBlogs, setLikedBlogs] = useState([]);
  const blogsPerPage = 6;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const startIdx = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIdx, startIdx + blogsPerPage);

  const toggleLike = (id) => {
    setLikedBlogs((prev) =>
      prev.includes(id) ? prev.filter((blogId) => blogId !== id) : [...prev, id]
    );
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="min-h-screen px-6 md:px-20 py-20 pt-32 bg-black text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-[#00FFAB]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Latest Blogs
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="bg-[#111] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-[#00FFAB]/40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
              <p className="text-sm text-gray-400">By {blog.author}</p>
              <button
                onClick={() => toggleLike(blog.id)}
                className={`mt-3 w-10 h-10 flex items-center justify-center rounded-full border-2 transition-transform duration-300 ${
                  likedBlogs.includes(blog.id)
                    ? 'bg-[#00FFAB] text-black border-[#00FFAB]'
                    : 'bg-black border-[#00FFAB] text-[#00FFAB]'
                } hover:scale-110`}
              >
                <FaHeart />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-12 flex-wrap">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-full text-[#00FFAB] border-[#00FFAB] hover:bg-[#00FFAB] hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Prev
        </button>

        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToPage(idx + 1)}
            className={`px-4 py-2 rounded-full border ${
              currentPage === idx + 1
                ? 'bg-[#00FFAB] text-black'
                : 'text-[#00FFAB] border-[#00FFAB]'
            } hover:bg-[#00FFAB] hover:text-black transition`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-full text-[#00FFAB] border-[#00FFAB] hover:bg-[#00FFAB] hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </section>
  );
};

export default Blog;

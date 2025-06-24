import { motion } from 'framer-motion';

const BlogGrid = ({ blogs, onBlogClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {blogs.map((blog, index) => (
        <motion.div
          key={blog.id}
          className="bg-[#111] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-[#00FFAB]/40 cursor-pointer group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onBlogClick(blog)}
        >
          <div className="relative overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[#00FFAB] text-sm font-medium bg-black/50 px-2 py-1 rounded">
                Click to read more
              </span>
            </div>
          </div>
          <div className="p-5 space-y-2">
            <h3 className="text-xl font-semibold text-white group-hover:text-[#00FFAB] transition-colors duration-300">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-400">By {blog.author}</p>
            <p className="text-gray-500 text-sm line-clamp-2 mt-2">
              {blog.description.substring(0, 100)}...
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogGrid;
import { useState } from 'react';
import { blogs } from '../components/Blog/blogData';
import BlogGrid from '../components/Blog/BlogGrid';
import BlogPagination from '../components/Blog/BlogPagination';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogsPerPage = 6;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);
  const handleBlogClick = (blog) => setSelectedBlog(blog);
  const handleBack = () => setSelectedBlog(null);

  if (selectedBlog) {
    // Render the selected blog component
    const BlogComponent = selectedBlog.component;
    return (
      <div>
        <button onClick={handleBack}>Back</button>
        <BlogComponent />
      </div>
    );
  }
  // Paginated grid
  const startIdx = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIdx, startIdx + blogsPerPage);

  return (
    <div>
      <BlogGrid blogs={currentBlogs} onBlogClick={handleBlogClick} />
    </div>
  );
};

export default Blog;
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 relative flex items-center justify-between">

        {/* Logo on the left */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 z-20 cursor-pointer"
          onClick={() => handleNavClick('/')}
        >
          <img src={logo} alt="OneThrive Logo" className="h-12 md:h-14 w-auto" />
        </motion.div>

        {/* Centered Nav - Desktop Only */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 items-center z-10">
          {navItems.map(({ name, path }) => (
            <button
              key={name}
              onClick={() => handleNavClick(path)}
              className="text-gray-500 font-semibold hover:text-emerald-400 tracking-wide uppercase text-sm transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer bg-transparent"
            >
              {name}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle on the right */}
        <div className="md:hidden z-20">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-black/90 px-6 pb-6 pt-2 space-y-4 flex flex-col"
        >
          {navItems.map(({ name, path }) => (
            <button
              key={name}
              onClick={() => handleNavClick(path)}
              className="text-white text-left hover:text-emerald-400 font-medium tracking-wide uppercase text-sm transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer bg-transparent"
            >
              {name}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;

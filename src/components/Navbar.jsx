import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
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
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 md:px-10 py-4 flex items-center justify-between relative">

        {/* Logo - Left */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer z-30"
          onClick={() => handleNavClick('/')}
        >
          <img src={logo} alt="OneThrive Logo" className="h-10 md:h-14 w-auto" />
        </motion.div>

        {/* Center Nav for Desktop */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 items-center">
          {navItems.map(({ name, path }) => (
            <button
              key={name}
              onClick={() => handleNavClick(path)}
              className="text-white font-semibold hover:text-emerald-400 tracking-wide uppercase text-sm transition duration-300 ease-in-out transform hover:scale-105"
            >
              {name}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden z-30">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-xs px-6 pt-4 pb-8 space-y-4 flex flex-col"
          >
            {navItems.map(({ name, path }) => (
              <button
                key={name}
                onClick={() => handleNavClick(path)}
                className="text-white text-left text-base font-semibold hover:text-[#00FFAB] tracking-wide uppercase transition"
              >
                {name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;

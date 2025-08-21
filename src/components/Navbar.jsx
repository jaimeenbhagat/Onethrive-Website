import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  {
    name: "Resources",
    path: "/resources",
    dropdown: [
      { name: "Blogs", path: "/blogs" },
      { name: "ROI Calculator", path: "/roi-calculator" },
      { name: "Culture Quiz", path: "/culture-quiz" }
    ]
  },
  { name: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setIsOpen(false);
    setDropdownOpen(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  const handleDropdownToggle = (itemName) => {
    setDropdownOpen(dropdownOpen === itemName ? null : itemName);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xs ">
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
          {navItems.map(({ name, path, dropdown }) => (
            <div
              key={name}
              className="relative"
              // Add hover handlers to the main container
              onMouseEnter={dropdown ? () => setDropdownOpen(name) : undefined}
              onMouseLeave={dropdown ? () => setDropdownOpen(null) : undefined}
            >
              {dropdown ? (
                <div className="relative">
                  <button
                    // Retain onClick for toggling/pinning the menu
                    onClick={() => handleDropdownToggle(name)}
                    className="text-white font-semibold hover:text-emerald-400 tracking-wide uppercase text-sm transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-1"
                  >
                    {name}
                    <HiChevronDown className={`transform transition-transform duration-200 ${dropdownOpen === name ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen === name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 text-center backdrop-blur-xl bg-black/60 z-50 rounded-lg shadow-lg border border-white/10 py-2"
                      >
                        {dropdown.map((item) => (
                          <button
                            key={item.name}
                            // Correctly use onClick for navigation
                            onClick={() => handleNavClick(item.path)}
                            className="w-full px-4 py-2 text-center text-white font-semibold tracking-wide uppercase ease-in-out transform hover:scale-105 hover:text-emerald-400 transition duration-200 text-sm"
                          >
                            {item.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick(path)}
                  className="text-white font-semibold hover:text-emerald-400 tracking-wide uppercase text-sm transition duration-300 ease-in-out transform hover:scale-105"
                >
                  {name}
                </button>
              )}
            </div>
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

      {/* Mobile Nav Menu (No changes needed here) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-xl bg-black/50 px-6 pt-4 pb-8 space-y-4 flex flex-col"
          >
            {navItems.map(({ name, path, dropdown }) => (
              <div key={name}>
                {dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(name)}
                      className="text-white text-center text-base font-semibold hover:text-[#00FFAB] tracking-wide uppercase transition flex items-center justify-center gap-2 w-full py-2"
                    >
                      {name}
                      <HiChevronDown className={`transform transition-transform duration-200 ${dropdownOpen === name ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen === name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 space-y-3 overflow-hidden"
                        >
                          {dropdown.map((item) => (
                            <button
                              key={item.name}
                              onClick={() => handleNavClick(item.path)}
                              className="text-white/80 text-center text-sm font-medium hover:text-[#00FFAB] transition block w-full"
                            >
                              {item.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(path)}
                    className="text-white text-center text-base font-semibold hover:text-[#00FFAB] tracking-wide uppercase transition w-full py-2"
                  >
                    {name}
                  </button>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
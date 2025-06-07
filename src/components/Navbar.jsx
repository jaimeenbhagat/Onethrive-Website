import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact", path: "/contact" },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="OneThrive Logo" className="h-12 md:h-14 w-auto" />
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="text-white hover:text-emerald-400 font-medium tracking-wide uppercase text-sm transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
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
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="text-white hover:text-emerald-400 font-medium tracking-wide uppercase text-sm transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              {name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  )
}

export default Navbar

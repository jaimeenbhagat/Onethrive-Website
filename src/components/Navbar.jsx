import { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/Logo.png'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navItems = ["Home", "About Us", "Services", "Process", "FAQs", "Contact"]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="OneThrive Logo" className="h-12 md:h-14 w-auto" />
          <span className="text-white font-bold text-xl md:text-2xl tracking-widest">
            OneThrive
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-white hover:text-[#00FFAB] font-semibold tracking-wide uppercase text-sm transition duration-300 ease-in-out transform hover:scale-105 bg-transparent border-none focus:outline-none"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
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
          {navItems.map((item) => (
            <button
              key={item}
              className="text-white hover:text-[#00FFAB] font-semibold tracking-wide uppercase text-sm transition duration-300 ease-in-out transform hover:scale-105 bg-transparent border-none focus:outline-none text-left"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  )
}

export default Navbar

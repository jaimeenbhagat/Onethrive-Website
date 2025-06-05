import { motion } from 'framer-motion'
import heroImage from '../assets/herosectionimage.png'

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-0 overflow-hidden">

      {/* Left: Text Content */}
      <motion.div
        className="z-10 max-w-2xl text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          <span className="text-white">Empowering Workforces,</span><br />
          <span className="text-[#00FFAB]">Elevating Engagement</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6 leading-relaxed">
          Because Work Should Be <span className="text-white font-semibold">More Than Just Work!</span>
        </h2>

        <p className="text-base md:text-lg text-gray-400 mb-8">
          We curate immersive experiences that turn colleagues into communities 
          and challenges into opportunities. Partner with us to foster collaboration, 
          well-being, and a vibrant company culture through our innovative 
          engagement solutions.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-[#00FFAB] text-[#00FFAB] font-semibold rounded-full text-lg transition-shadow shadow-lg hover:shadow-[#00FFAB]/50"
        >
          Elevate Your Team Today
        </motion.button>
      </motion.div>

      {/* Right: Hero Image */}
      <motion.div
        className="mt-10 md:mt-0 md:ml-16 max-w-xl w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={heroImage}
          alt="OneThrive Hero"
          className="w-full h-auto rounded-xl shadow-xl border border-[#00FFAB]/30"
        />
      </motion.div>

      {/* Optional: Glowing Background Effect */}
      <div className="absolute top-0 left-100 w-[600px] h-[600px] bg-[#00FFAB] opacity-10 rounded-full filter blur-3xl animate-pulse z-0" />
    </section>
  )
}

export default HeroSection

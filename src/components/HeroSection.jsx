import { motion } from "framer-motion";
import heroImage from "../assets/herosectionimage.png"; // Make sure this path is correct

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-0 overflow-hidden">
      {/* Left Content */}
      <motion.div
        className="z-10 max-w-2xl text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Empowering Workforces,
          <br />
          <span className="text-[#00FFAB]">Elevating Engagement</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6 leading-relaxed">
          Because Work Should Be{" "}
          <span className="text-white font-semibold">More Than Just Work!</span>
        </h2>

        <p className="text-base md:text-lg text-gray-400 mb-8">
          We curate immersive experiences that turn colleagues into communities
          and challenges into opportunities. Partner with us to foster
          collaboration, well-being, and a vibrant company culture through our
          innovative engagement solutions.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ backgroundColor: "#00FFAB", color: "black" }}
          className="px-8 py-3 font-semibold rounded-full text-lg transition-all duration-300 shadow-md hover:opacity-90"
        >
          Elevate Your Team Today
        </motion.button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="mt-10 md:mt-0 md:ml-16 max-w-xl w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={heroImage}
          alt="Team Collaboration"
          className="w-full h-auto rounded-xl shadow-xl object-cover"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

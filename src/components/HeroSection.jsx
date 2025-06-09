import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 md:px-20 py-24 overflow-hidden">
      {/* Centered Content */}
      <motion.div
        className="z-10 max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Empowering Workforces,
          <br />
          <span className="text-[#00FFAB]">Elevating Engagement</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6 leading-relaxed">
          Because Work Should Be{" "}
          <span className="text-black font-semibold">More Than Just Work!</span>
        </h2>

        <p className="text-base md:text-lg text-gray-600 mb-8">
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
    </section>
  );
};

export default HeroSection;

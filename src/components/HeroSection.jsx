import { motion } from "framer-motion";
import heroImage from "../assets/herosectionimage.png"; // Update path as needed

const HeroSection = () => {
  return (
    <section className=" relative w-full min-h-screen bg-white text-black flex flex-col md:flex-row items-center justify-between px-6 pl-24 md:px-20 pt-32 pb-24 overflow-hidden">
      {/* GRID BACKGROUND WITH GRAY FILLED BOXES */}
      <div className="absolute inset-0 z-0 pointer-events-none grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] grid-rows-[repeat(auto-fill,40px)] opacity-20">
        {Array.from({ length: 600 }).map((_, i) => (
          <div
            key={i}
            className={`w-full h-full ${
              Math.random() > 0.88 ? "bg-gray-300" : ""
            }`}
          />
        ))}
      </div>

      {/* LEFT TEXT CONTENT */}
      <motion.div
        className="z-10 w-full md:w-1/2 text-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm font-semibold text-black tracking-wide mb-4 font-satoshi">
          ✦ Empowering Workforces, Elevating Engagement
        </p>
        <h1 className="font-satoshi text-4xl md:text-6xl leading-tight tracking-tight mb-6">
          Because Work <br />
          Should Be More <br />
          Than Just Work!
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-10 max-w-md">
          We curate immersive experiences that turn colleagues into communities
          and challenges into opportunities. Partner with us to foster
          collaboration, well-being, and a vibrant company culture through our
          innovative engagement solutions.
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 bg-[#00FFAB] text-black font-semibold border border-black shadow-[4px_4px_0px_rgba(0,0,0,0.8)] transition duration-300"
        >
          Elevate Your Team Today →
        </motion.a>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-16 md:mt-0 z-10"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={heroImage}
          alt="OneThrive Hero Illustration"
          className="w-[350px] md:w-[450px]"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

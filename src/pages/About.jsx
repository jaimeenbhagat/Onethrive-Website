import { motion } from "framer-motion";
import team1 from "../assets/team/sujal.png"; // Update with actual path
import team2 from "../assets/team/smeet.png"; // Update with actual path

const timeline = [
  {
    title: "The Realization",
    description:
      "It started with a simple realization—workplace culture isn’t just about deadlines, meetings, and paychecks. It’s about people. The energy they bring, the connections they form, and the experiences that shape their professional journey.",
  },
  {
    title: "Identifying the Gap",
    description:
      "At OneThrive, we saw a gap in corporate engagement. Employees were burning out, teams were disconnected, and companies were struggling to create a workplace that people truly wanted to be part of.",
  },
  {
    title: "Building the Solution",
    description:
      "That’s why we built a company dedicated to transforming work into an experience. From team-building challenges to wellness initiatives, we create moments that leave lasting impacts.",
  },
  {
    title: "Our Mission",
    description:
      "To help organizations build a culture where employees feel valued, connected, and excited to come to work. Because a thriving team isn’t just good for business—it’s the foundation of success.",
  },
];

const AboutUs = () => {
  return (
    <section className="w-full text-white py-40 px-6 md:px-20 overflow-hidden">
      {/* Mission & Vision */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-[#00FFAB] mb-4">Mission & Vision</h2>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          scelerisque lacus. Donec posuere, lorem ut interdum pharetra, sapien
          arcu tempus nisi, vitae pharetra nulla ipsum ut sapien. Suspendisse
          nec risus at lacus vehicula ullamcorper.
        </p>
      </motion.div>

      {/* Our Team */}
      <motion.div
        className="max-w-6xl mx-auto mb-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-[#00FFAB]">
          Our Team
        </h2>
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-10">
          Driven by passion, guided by purpose — meet the people who make OneThrive thrive.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Sujal */}
          <div className="text-center">
            <img
              src={team1}
              alt="Sujal Jain"
              className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#00FFAB]">Sujal Jain</h3>
            <p className="text-sm text-gray-400 mb-2">Founder</p>
            <p className="text-sm text-gray-300 max-w-sm mx-auto">
              With a deep passion for organizational culture, he envisioned a company that blends fun, creativity, and purpose to engage employees like never before.
            </p>
          </div>

          {/* Smeet */}
          <div className="text-center">
            <img
              src={team2}
              alt="Smeet Shah"
              className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#00FFAB]">Smeet Shah</h3>
            <p className="text-sm text-gray-400 mb-2">Founder</p>
            <p className="text-sm text-gray-300 max-w-sm mx-auto">
              He is the logistical genius who makes OneThrive’s magic happen. With his skills in sports management, he ensures every event runs like clockwork.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Company Journey Timeline */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-[#00FFAB]">
          Company Journey
        </h2>
        <div className="relative border-l-4 border-[#00FFAB] pl-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute -left-4 top-1 w-3 h-3 bg-[#00FFAB] rounded-full"></div>
              <h3 className="text-xl font-semibold mb-2 text-[#00FFAB]">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;

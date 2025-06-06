import { motion } from "framer-motion";
import aboutImage from "../assets/about.png";
import service1 from "../assets/services/services1.png";
import service2 from "../assets/services/services2.png";
import service3 from "../assets/services/services3.png";
import service4 from "../assets/services/services4.png";
import service5 from "../assets/services/services5.png";
import service6 from "../assets/services/services6.png";
import service7 from "../assets/services/services7.png";

const services = [
  {
    title: "Team Building Games",
    description:
      "Our team-building games are crafted to energize your team, boost morale, and encourage open communication. Whether it’s strategic puzzles, timed missions, or fun group challenges, these activities ignite collaboration, improve trust, and foster a workplace that thrives on mutual support and shared victories.",
    image: service1,
  },
  {
    title: "Wellness Programs",
    description:
      "We design wellness programs that balance mental and physical well-being. From guided meditation sessions and ergonomic consultations to fitness challenges and healthy habit workshops, our offerings inspire sustainable lifestyle changes and create a culture that prioritizes employee health and happiness.",
    image: service2,
  },
  {
    title: "Creative Workshops",
    description:
      "Let your team explore their innovative side with our hands-on creative workshops. These sessions are tailored to stimulate imagination, promote unconventional thinking, and encourage problem-solving through activities like storytelling, design thinking, and creative brainstorming.",
    image: service3,
  },
  {
    title: "Sports Tournaments",
    description:
      "Fuel excitement and camaraderie with sports tournaments that promote friendly competition and active lifestyles. Whether it’s indoor games or full-day outdoor events, these programs encourage fitness, teamwork, and a spirited company culture that your team will look forward to every season.",
    image: service4,
  },
  {
    title: "Entertainment Events",
    description:
      "From comedy nights and live bands to talent shows and movie screenings, our entertainment events inject energy and joy into the workplace. These gatherings create lasting memories, strengthen interdepartmental bonds, and remind teams that celebration is a vital part of success.",
    image: service5,
  },
  {
    title: "CSR Activities",
    description:
      "We help your team connect with meaningful causes through hands-on Corporate Social Responsibility initiatives. From environmental drives and community support programs to educational outreach, these experiences inspire purpose, unity, and a sense of fulfillment beyond the workplace.",
    image: service6,
  },
  {
    title: "Offsite Retreats",
    description:
      "Break free from the usual routine with immersive offsite retreats that combine relaxation, strategy, and fun. These getaways are designed to strengthen relationships, reignite creativity, and align teams with company goals—all in a refreshing and inspiring environment.",
    image: service7,
  },
];

const AboutSection = () => {
  return (
    <section className="w-full text-white pt-2 pb-24 px-6 md:px-20 overflow-hidden">
      {/* Title */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Building Better Workplaces,
            <br /> One Team at a Time
          </h2>
          <p className="text-gray-400 mb-6">
            OneThrive is more than just an employee engagement company—we are
            workplace culture architects. We know that a motivated workforce
            drives business success. That’s why OneThrive is dedicated to
            delivering high-energy engagement solutions that make workplaces
            more dynamic, fulfilling, and fun.
          </p>
          <p className="text-gray-400">
            As a new player in this space, we bring a fresh perspective,
            commitment to excellence, and a client-first mindset to every
            project, helping you build a workplace that’s as dynamic as your
            thriving team.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImage}
            alt="About OneThrive"
            className="w-full rounded-2xl shadow-lg shadow-[#00FFAB]/30"
          />
        </motion.div>
      </div>

      {/* Statistics */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {[
          {
            number: "10+",
            label: "Teams Engaged\nIn Our Pilot\nPhase Programs",
          },
          { number: "80%", label: "Positive Response\nIn Pre-Launch\nSurveys" },
          { number: "90%", label: "Employee Participation\nIn Pilot Events" },
          {
            number: "100+",
            label: "Activity Programs\nDesigned For\nMaximum Impact",
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#111] p-6 rounded-xl shadow-md hover:shadow-[#00FFAB]/40 transition-all"
          >
            <h3 className="text-3xl font-bold text-[#00FFAB] mb-2">
              {stat.number}
            </h3>
            <p className="text-gray-400 whitespace-pre-line text-sm leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12">Our Engagement Offerings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => {
            const isLastCard = idx === services.length - 1;
            const shouldCenterLast = services.length % 3 === 1 && isLastCard;

            return (
              <div
                key={idx}
                className={`${
                  shouldCenterLast ? "col-span-full flex justify-center" : ""
                }`}
              >
                <div
                  className="[perspective:1200px] group cursor-pointer w-full max-w-[20rem]"
                  onClick={() => (window.location.href = "/services")}
                >
                  <div className="relative h-80 w-full [transform-style:preserve-3d] duration-700 group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side */}
                    <div className="absolute border-2 border-[#00FFAB] inset-0 bg-black rounded-xl shadow-xl overflow-hidden backface-hidden flex flex-col">
                      <div className="h-1/2 flex items-center justify-center px-4">
                        <h3 className="text-white font-semibold text-lg text-center">
                          {service.title}
                        </h3>
                      </div>
                      <div className="flex items-center justify-center">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-300 h-64 object-contain pt-10"
                        />
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute border-2 border-[#00FFAB] inset-0 bg-black text-white rounded-xl rotate-y-180 backface-hidden">
                      <div className="h-10 flex items-center justify-center py-8">
                        <h3 className="text-white font-semibold text-lg text-center">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm py-10 font-medium text-center leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Client Logos */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          Trusted by Amazing Teams
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((logo, idx) => (
            <div
              key={idx}
              className="h-24 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-500 text-lg font-semibold shadow-md"
            >
              <span className="hidden sm:block">Logo {logo}</span>
              <span className="sm:hidden">Client</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Workplace?
        </h3>
        <a
          href="#contact"
          className="bg-[#00FFAB] hover:bg-[#00e69a] text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition shadow-lg shadow-[#00FFAB]/30"
        >
          Get Started
        </a>
      </motion.div>
    </section>
  );
};

export default AboutSection;

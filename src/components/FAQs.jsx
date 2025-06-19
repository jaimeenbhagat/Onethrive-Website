import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What types of employee engagement activities do you offer?",
      answer:
        "We offer Team Building games, Creative Workshops, Wellness Programs, CSR initiatives, Offsites, Sports & Entertainment events, and custom engagement solutions tailored to your organization's needs.",
    },
    {
      question: "How do you customize your programs to suit our company culture?",
      answer:
        "Our process begins with a consultation to understand your unique challenges and objectives. We then design a tailored program that aligns perfectly with your company culture.",
    },
    {
      question: "What is the typical duration of an engagement activity?",
      answer:
        "Activities can range from a few hours to full-day events, depending on your needs and the program selected.",
    },
    {
      question: "How do you measure the success of your programs?",
      answer:
        "We utilize feedback surveys, performance metrics, and post-event evaluations to measure impact and ensure continuous improvement.",
    },
    {
      question: "What is the process for booking an event?",
      answer:
        "Simply contact us via the Request a Quote page or give us a call. We'll schedule a consultation to discuss your needs and craft a personalized proposal.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="bg-black font-interphase text-white">
      {/* FAQ Accordion */}
      <div
        className="py-2 px-6 sm:px-10 md:px-20 max-w-7xl mx-auto"
        style={{
          fontFamily:
            '"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif',
        }}
      >
        <div className="mb-8 lg:mb-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium leading-tight">
            Got Questions?<br />
            We've Got <span className="text-[#00FFAB]">Answers</span>!
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-600 overflow-hidden shadow-[4px_4px_0px_rgba(255,255,255,1)] bg-gray-900/20 rounded-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 md:px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="text-base md:text-lg font-medium pr-3 leading-relaxed">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-[#00FFAB]"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              {openFAQ === index && (
                <div className="px-5 md:px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Book a Call - Full Screen Frame */}
      <motion.div
        className="w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-20 bg-gradient-to-br from-[#0a0a0a] via-[#101010] to-[#00FFAB] text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Floating Icon */}
        <motion.div
          className="w-16 h-16 mx-auto mb-6 border-2 border-[#00FFAB] text-[#00FFAB] text-3xl rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          ?
        </motion.div>

        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Need Personalized Help?
        </h3>
        <p className="text-gray-200 mb-6 text-base md:text-lg max-w-2xl mx-auto">
          Let’s talk and create a custom employee engagement strategy
          tailored to your team’s goals.
        </p>

        <button
          onClick={() => (window.location.href = "/contact")}
          className="bg-[#00FFAB] text-black font-semibold px-8 py-4 rounded-full hover:bg-white transition shadow-md hover:shadow-[#00FFAB]/40"
        >
          Book a Call →
        </button>

        {/* Accent Glow */}
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-[#00FFAB] blur-3xl opacity-20 rounded-full z-0"></div>
      </motion.div>
    </div>
  );
};

export default FAQs;

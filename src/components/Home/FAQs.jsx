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
      {/* Custom CSS for gradient animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes gradientRotate {
          0% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }
        
        @keyframes colorPulse {
          0%, 100% { 
            background: linear-gradient(45deg, #00FFAB, #0a0a0a, #00FFAB, #1a1a1a, #00FFAB);
          }
          50% { 
            background: linear-gradient(45deg, #0a0a0a, #00FFAB, #1a1a1a, #00FFAB, #0a0a0a);
          }
        }
        
        .gradient-animated {
          background: linear-gradient(45deg, #00FFAB, #0a0a0a, #00FFAB, #1a1a1a, #00FFAB, #0a0a0a);
          background-size: 600% 600%;
          animation: gradientShift 8s ease infinite;
        }
        
        .gradient-rotating {
          background: conic-gradient(from 0deg, #00FFAB, #0a0a0a, #00FFAB, #1a1a1a, #00FFAB);
          animation: gradientRotate 12s linear infinite;
        }
        
        .gradient-overlay {
          background: radial-gradient(circle at 50% 50%, rgba(0, 255, 171, 0.3) 0%, transparent 50%),
                      linear-gradient(45deg, rgba(0, 255, 171, 0.1), rgba(10, 10, 10, 0.8), rgba(0, 255, 171, 0.1));
          background-size: 300% 300%, 400% 400%;
          animation: gradientShift 6s ease infinite;
        }
      `}</style>

      {/* FAQ Accordion */}
      <div className="py-2 px-6 sm:px-10 md:px-20 max-w-7xl mx-auto font-interphase">
        <div className="mb-8 lg:mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
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
                <span className="text-base md:text-lg font-white font-bold pr-3 leading-relaxed">
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

      {/* Smooth Transition from Black to Gradient */}
      <div className="h-32 bg-gradient-to-b from-black to-transparent relative z-10"></div>

      {/* Book a Call - Full Screen Section with Enhanced Animated Gradient */}
      <motion.div
        className="min-h-screen flex items-center justify-center text-white px-6 sm:px-10 md:px-20 text-center relative overflow-hidden -mt-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Base Black Background */}
        <div className="absolute inset-0 bg-black z-0" />
        
        {/* Subtle Gradient that Builds Up */}
        <motion.div 
          className="absolute inset-0 z-[1]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 255, 171, 0.1) 0%, rgba(0, 0, 0, 0.8) 70%)'
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Primary Animated Gradient Background - More Subtle */}
        <div className="absolute inset-0 z-[2] opacity-20">
          <div className="gradient-animated w-full h-full" />
        </div>
        
        {/* Secondary Rotating Gradient Layer - Even More Subtle */}
        <div className="absolute inset-0 z-[3] opacity-10">
          <div className="gradient-rotating w-full h-full" />
        </div>

        {/* Floating Gradient Orbs - More Subtle */}
        <motion.div 
          className="absolute top-20 left-20 w-40 h-40 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #00FFAB 0%, transparent 70%)'
          }}
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-20 w-32 h-32 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #00FFAB 0%, transparent 70%)'
          }}
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/10 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl">
          <motion.div
            className="w-16 h-16 mx-auto mb-6 border-2 border-[#00FFAB] text-[#00FFAB] text-3xl rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm bg-black/30"
            animate={{ 
              y: [0, -8, 0],
              boxShadow: [
                '0 0 20px rgba(0, 255, 171, 0.3)',
                '0 0 40px rgba(0, 255, 171, 0.6)',
                '0 0 20px rgba(0, 255, 171, 0.3)'
              ]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
          >
            ?
          </motion.div>

          <motion.h3 
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Need Personalized Help?
          </motion.h3>
          
          <motion.p 
            className="text-white mb-8 text-base md:text-xl max-w-4xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's talk and create a custom employee engagement strategy
            tailored to your team's goals.
          </motion.p>

          <motion.button
            onClick={() => (window.location.href = "/contact")}
            className="bg-[#00FFAB] text-black font-semibold px-8 py-4 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,255,171,0.5)] transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ 
              boxShadow: '0 0 40px rgba(0, 255, 171, 0.8)',
              scale: 1.05 
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Call →
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQs;
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ open by default

  const faqs = [
    {
      question: "What types of employee engagement activities do you offer?",
      answer: "We offer Team Building games, Creative Workshops, Wellness Programs, CSR initiatives, Offsites, Sports & Entertainment events, and custom engagement solutions tailored to your organization's needs."
    },
    {
      question: "How do you customize your programs to suit our company culture?",
      answer: "Our process begins with a consultation to understand your unique challenges and objectives. We then design a tailored program that aligns perfectly with your company culture."
    },
    {
      question: "What is the typical duration of an engagement activity?",
      answer: "Activities can range from a few hours to full-day events, depending on your needs and the program selected."
    },
    {
      question: "How do you measure the success of your programs?",
      answer: "We utilize feedback surveys, performance metrics, and post-event evaluations to measure impact and ensure continuous improvement."
    },
    {
      question: "What is the process for booking an event?",
      answer: "Simply contact us via the Request a Quote page or give us a call. We'll schedule a consultation to discuss your needs and craft a personalized proposal."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div 
      className="bg-black text-white min-h-screen mt-24 p-4 md:p-6 lg:p-8"
      style={{ fontFamily: '"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Left Side */}
        <div className="lg:w-1/3">
          <div className="bg-neutral-900 rounded-xl p-6 md:p-8 text-center ">
            <div className="w-16 h-16 mx-auto mb-6 border-2 border-[#00FFAB] text-[#00FFAB] text-3xl rounded-lg flex items-center justify-center">
              !
            </div>
            <h3 className="text-2xl md:text-3xl font-medium mb-6 leading-tight">
              Looking for something<br />
              <span className="text-white">specific?</span>
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-base md:text-lg">
              We're here to help! Let's discuss how<br />
              OneThrive can help your team.
            </p>
            <button className="border-2 border-white px-6 py-3 text-base font-medium inline-flex items-center gap-2 shadow-[4px_4px_0px_rgba(255,255,255,0.8)]">
              Book A Call
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-2/3">
          <div className="mb-8 lg:mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 bg-[#00FFAB] rounded transform rotate-45"></div>
              <span className="text-gray-300 text-base font-medium">FAQs</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
              Got <span className="underline decoration-2 underline-offset-4">Questions</span>?<br />
              We've Got <span className="text-[#00FFAB]">Answers</span>!
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-600 overflow-hidden shadow-[4px_4px_0px_rgba(255,255,255,255)] bg-gray-900/20"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 md:px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="text-base md:text-lg font-medium pr-3 leading-relaxed">{faq.question}</span>
                  <div className="flex gap-1 flex-shrink-0">
                    <div className="w-7 h-7 bg-[#00FFAB] rounded-full flex items-center justify-center">
                      <span className="text-black text-base font-bold">+</span>
                    </div>
                    {openFAQ === index && (
                      <div className="w-7 h-7 bg-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-base font-bold">−</span>
                      </div>
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-5 md:px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
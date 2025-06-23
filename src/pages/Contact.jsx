import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="min-h-screen font-interphase bg-black text-white mt-24 px-6 md:px-20 py-16 flex flex-col md:flex-row justify-between items-start gap-10">
      {/* Left - Contact Info */}
      <div className="w-auto">
      <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Get in <span className="text-green-400">touch</span> with us
        </h2>
        <p className="text-gray-300 mb-8">
          We’d love to hear from you! Whether you have questions or need support, feel free to reach out.
        </p>

      <div className="bg-[#0d0d0d] p-4 rounded-xl w-full  border border-neutral-800 relative">
        <div className="space-y-6 text-xl">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-green-400 text-3xl" />
            <div>
              <p className="font-semibold text-2xl">Phone Number</p>
              <p className="text-gray-300 pt-1">+91 9137849313</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-green-400 text-3xl" />
            <div>
              <p className="font-semibold text-2xl">Phone Number</p>
              <p className="text-gray-300 pt-1">+91 7718840072</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-green-400 text-3xl" />
            <div>
              <p className="font-semibold text-2xl">Email Address</p>
              <p className="text-gray-300 pt-1">info@onethrive.in</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Right - Contact Form */}
      <form className="w-full md:w-1/2 border border-white p-6 space-y-6 shadow-[4px_4px_0px_rgba(255,255,255,255)]">
        <div>
          <label htmlFor="name" className="block text-sm mb-1">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Jane Smith"
            className="w-full bg-black border border-white px-4 py-2 focus:outline-none text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm mb-1">Email</label>
          <input
            type="email"
            id="email"
            placeholder="jane@domain.com"
            className="w-full bg-black border border-white px-4 py-2 focus:outline-none text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm mb-1">Message</label>
          <textarea
            id="message"
            placeholder="Write a Message"
            className="w-full bg-black border border-white px-4 py-2 focus:outline-none text-white h-32"
          ></textarea>
        </div>
        <button
          type="submit"
          className="border border-white px-6 py-2 hover:bg-white hover:text-black transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;

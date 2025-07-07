import { motion } from "framer-motion";

const CancellationRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 md:px-20 max-w-7xl mx-auto mt-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-[#00FFAB] mb-8 leading-tight text-center">
          Cancellation & Refund Policy
        </h1>
        
        <div className="text-lg text-white font-bold leading-relaxed space-y-8">
          <div className="text-center mb-12">
            <p className="text-[#00FFAB] text-xl font-bold">Last Updated: 26th June 2025</p>
            <p className="mt-6">
              Thank you for choosing OneThrive as your employee engagement and event services partner.
              We are committed to delivering professional, high-quality experiences to all our clients.
            </p>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">1. Cancellation by the Client</h2>
            
            <div className="space-y-4">
              <p>
                Once a service is confirmed in writing (via email, WhatsApp, letter, or any other medium), it is
                considered a final agreement.
              </p>
              
              <div className="bg-black p-6 rounded-lg border border-red-500/30">
                <p className="mb-4">If the client initiates any of the following after confirmation:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Cancels the service in full or in part</li>
                  <li>• Shortens the session duration</li>
                  <li>• Reduces the number or scope of services</li>
                  <li>• Alters the service date, location, or agreed objectives</li>
                </ul>
                <p className="mt-4 text-red-300 font-bold">
                  ...then a <span className="text-red-400">100% cancellation fee</span> will apply, equivalent to the confirmed billing amount, 
                  even if the payment terms are credit-based.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">2. Refunds</h2>
            
            <div className="space-y-4">
              <div className="bg-black p-6 rounded-lg border border-gray-700">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>No refunds will be provided for advance payments made against services cancelled, modified, or postponed by the client for any reason.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFAB] mr-2">•</span>
                    <span>A full refund will be issued if the service is cancelled by OneThrive from our end for any reason.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">3. Confirmation & Booking</h2>
            
            <div className="space-y-4">
              <ul className="space-y-3 ml-4">
                <li>• Written communication of confirmation (email, WhatsApp, etc.) will be treated as a commitment to purchase services.</li>
                <li>• We reserve the right to request an advance payment before officially booking or allocating resources for the services.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">4. Legal Enforcement</h2>
            
            <div className="bg-black p-6 rounded-lg border border-blue-500/30">
              <p>
                This policy is enforceable under Indian law. It supersedes any verbal agreements or informal
                commitments made prior to written confirmation.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">5. GST & Financial Compliance</h2>
            
            <div className="space-y-4">
              <p>
                If a cancellation occurs after invoice generation, any GST-related liabilities will still apply as
                per applicable Indian taxation law. A credit note will be issued where relevant, subject to
                government regulations.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">6. Contact Us</h2>
            <p className="mb-4">If you have any questions or concerns, please reach out to us:</p>
            
            <div className="bg-black p-6 rounded-lg border border-[#00FFAB]/20">
              <div className="space-y-2">
                <p><strong className="text-[#00FFAB]">📧 Email:</strong> info@onethrive.in</p>
                <p><strong className="text-[#00FFAB]">🌐 Website:</strong> www.onethrive.in</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="bg-black p-8 rounded-lg border border-[#00FFAB]/30">
              <h3 className="text-2xl font-bold text-[#00FFAB] mb-4">Important Notice</h3>
              <p className="text-lg">
                We strongly recommend reviewing this policy carefully before confirming any services. 
                Our team is always available to clarify any questions you may have regarding our 
                cancellation and refund terms.
              </p>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default CancellationRefundPolicy;
import { motion } from "framer-motion";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 md:px-20 max-w-7xl mx-auto mt-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-[#00FFAB] mb-8 leading-tight text-center">
          Terms and Conditions
        </h1>
        
        <div className="text-lg text-white font-bold leading-relaxed space-y-8">
          <div className="text-center mb-12">
            <p className="text-[#00FFAB] text-xl font-bold">Last Updated: 28th June 2025</p>
            <p className="mt-6">
              Welcome to OneThrive! These Terms and Conditions ("Terms") govern your use of our website
              (www.onethrive.in), platform, and any related services ("Service") provided by OneThrive
              ("Company", "we", "us", or "our"). By accessing or using our Service, you agree to be bound by
              these Terms. If you do not agree, please do not access or use our Service.
            </p>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">1. Scope of Services</h2>
            
            <div className="space-y-4">
              <p>OneThrive offers a comprehensive suite of employee engagement services including but not limited to:</p>
              <ul className="space-y-2 ml-4">
                <li>• Team-building workshops and offsite activities</li>
                <li>• Wellness and mindfulness programs</li>
                <li>• Digital engagement platforms and gamified campaigns</li>
                <li>• Creative workshops and learning-based experiences</li>
                <li>• Corporate gifting and customized celebration kits</li>
              </ul>
              <p className="mt-4">
                Each project is defined in a specific Statement of Work (SOW) or Proposal, which upon
                mutual acceptance, becomes an extension of this agreement.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">2. User Responsibilities</h2>
            
            <div className="space-y-4">
              <p>As a user or client of OneThrive, you agree to:</p>
              <ul className="space-y-2 ml-4">
                <li>• Use the Service in compliance with applicable laws and ethical standards.</li>
                <li>• Provide complete and accurate information as required for service delivery.</li>
                <li>• Ensure timely internal coordination and approvals during project execution.</li>
                <li>• Avoid any misuse, unauthorized access, or disruption of our platforms.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">3. Intellectual Property Rights</h2>
            
            <div className="bg-black p-6 rounded-lg border border-[#00FFAB]/30">
              <ul className="space-y-3">
                <li>• All original content on our platform, including visuals, tools, text, brand assets, and digital materials, is the exclusive property of OneThrive.</li>
                <li>• Clients may not copy, share, or reproduce any content without written permission.</li>
                <li>• Any customized deliverables developed specifically for a client post-payment shall belong to the client. General frameworks and tools remain OneThrive's IP.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">4. Data Privacy and Protection</h2>
            
            <div className="space-y-4">
              <ul className="space-y-3 ml-4">
                <li>• We fully comply with the Digital Personal Data Protection Act, 2023 and related Indian regulations.</li>
                <li>• All personal data shared via our website or during project execution is handled securely and used only for legitimate business purposes.</li>
                <li>• Clients must ensure they obtain valid employee consent before sharing their data with us.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">5. Fees, Invoicing and Payments</h2>
            
            <div className="space-y-4">
              <ul className="space-y-3 ml-4">
                <li>• Payment details including fee structure, tax components, and billing milestones will be clearly outlined in the invoice or SOW.</li>
                <li>• Payments are due as per the agreed timeline. Delays may result in interest charges or suspension of service.</li>
                <li>• GST and other applicable taxes are charged additionally unless explicitly stated.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">6. Cancellation and Refund Policy</h2>
            
            <div className="bg-black p-6 rounded-lg border border-red-500/30">
              <ul className="space-y-3">
                <li>• Once services are confirmed, any client-initiated cancellations, changes in scope, rescheduling, or reductions will attract a <span className="text-red-400 font-bold">100% cancellation fee</span>.</li>
                <li>• No refunds are applicable on advance payments or confirmed bookings.</li>
                <li>• Refunds will only be processed in case OneThrive cancels the engagement.</li>
                <li>• Confirmations sent via email, WhatsApp, or written approval are considered binding.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">7. Termination of Service</h2>
            
            <div className="space-y-4">
              <ul className="space-y-3 ml-4">
                <li>• OneThrive may terminate or suspend service if the client violates these Terms, defaults on payments, or misuses the platform.</li>
                <li>• Either party may terminate the agreement with 30 days' written notice, with all dues settled for services rendered till date.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">8. Limitation of Liability</h2>
            
            <div className="space-y-4">
              <ul className="space-y-3 ml-4">
                <li>• OneThrive is not liable for any indirect, incidental, or consequential damages arising from the use of its services.</li>
                <li>• In all cases, our maximum liability will be limited to the total fees received for the service in the past 12 months.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">9. Indemnification</h2>
            
            <div className="space-y-4">
              <p>Clients agree to defend and indemnify OneThrive, its employees, and partners against any claims, liabilities, or losses resulting from:</p>
              <ul className="space-y-2 ml-4">
                <li>• Breach of these Terms</li>
                <li>• Violation of laws or third-party rights</li>
                <li>• Sharing unlawful or misleading data or content</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">10. Confidentiality</h2>
            
            <div className="space-y-4">
              <ul className="space-y-3 ml-4">
                <li>• Both parties commit to maintaining the confidentiality of all proprietary, sensitive, and strategic information shared during the engagement.</li>
                <li>• This obligation continues for three years post project termination unless disclosure is mandated by law.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">11. Force Majeure</h2>
            
            <div className="space-y-4">
              <p>OneThrive is not responsible for delays or non-performance caused by circumstances beyond our control including natural disasters, pandemics, cyberattacks, regulatory changes, or internet disruptions.</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">12. External Links and Third-party Content</h2>
            
            <div className="space-y-4">
              <ul className="space-y-3 ml-4">
                <li>• Our website may contain links to third-party websites or tools. These are provided for convenience only.</li>
                <li>• OneThrive is not responsible for the content, privacy, or functionality of external websites.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">13. Governing Law and Jurisdiction</h2>
            
            <div className="bg-black p-6 rounded-lg border border-blue-500/30">
              <ul className="space-y-3">
                <li>• These Terms shall be governed in accordance with the laws of India.</li>
                <li>• Any disputes shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">14. Revisions and Updates to Terms</h2>
            
            <div className="space-y-4">
              <ul className="space-y-3 ml-4">
                <li>• OneThrive reserves the right to update these Terms at any time without prior notice.</li>
                <li>• All updates will be published on this page. Continued use of the website implies acceptance of the latest version.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">15. "AS IS" Disclaimer</h2>
            
            <div className="space-y-4">
              <ul className="space-y-3 ml-4">
                <li>• The services, website content, and tools are provided on an "AS IS" basis without warranties of any kind.</li>
                <li>• OneThrive does not guarantee uninterrupted access or flawless performance of its digital services.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">16. Contact Information</h2>
            <p className="mb-4">For any questions regarding these Terms or to request clarifications:</p>
            
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
              <h3 className="text-2xl font-bold text-[#00FFAB] mb-4">Agreement Acknowledgment</h3>
              <p className="text-lg">
                By using OneThrive's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. 
                Please contact us if you have any questions before proceeding with our services.
              </p>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsConditions;
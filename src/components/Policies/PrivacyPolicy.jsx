import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 md:px-20 max-w-7xl mx-auto mt-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-[#00FFAB] mb-8 leading-tight text-center">
          Privacy Policy
        </h1>
        
        <div className="text-lg text-white font-bold leading-relaxed space-y-8">
          <div className="text-center mb-12">
            <p className="text-[#00FFAB] text-xl font-bold">Last Updated: 26th June 2025</p>
            <p className="mt-4">
              This Privacy Policy describes our policies and procedures on the collection, use, and disclosure
              of your information when you use our Services and informs you about your privacy rights and
              how Indian law protects you.
            </p>
            <p className="mt-4">
              By using the Service, you agree to the collection and use of information in accordance with this
              Privacy Policy.
            </p>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">1. Interpretation and Definitions</h2>
            
            <div>
              <h3 className="text-2xl font-bold text-[#00FFAB] mb-3">Interpretation</h3>
              <p>Capitalized terms have specific meanings as defined below, and apply whether in singular or plural form.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00FFAB] mb-3">Definitions</h3>
              <ul className="space-y-3 ml-4">
                <li><strong className="text-[#00FFAB]">Account:</strong> A unique account created for you to access our Service.</li>
                <li><strong className="text-[#00FFAB]">Affiliate:</strong> Any entity that controls, is controlled by, or under common control with the Company.</li>
                <li><strong className="text-[#00FFAB]">Company:</strong> Refers to OneThrive, Mumbai, India, operating under the brand OneThrive, also referred to as "the Company," "We," "Us," or "Our."</li>
                <li><strong className="text-[#00FFAB]">Cookies:</strong> Small files placed on your device that track usage data.</li>
                <li><strong className="text-[#00FFAB]">Country:</strong> Refers to India.</li>
                <li><strong className="text-[#00FFAB]">Device:</strong> Any internet-connected device used to access the Service.</li>
                <li><strong className="text-[#00FFAB]">Personal Data:</strong> Any information that relates to an identified or identifiable individual.</li>
                <li><strong className="text-[#00FFAB]">Service:</strong> Refers to our offerings via the OneThrive website and associated platforms.</li>
                <li><strong className="text-[#00FFAB]">Service Provider:</strong> Third parties who process data on behalf of the Company.</li>
                <li><strong className="text-[#00FFAB]">Usage Data:</strong> Data collected automatically during the use of the Service.</li>
                <li><strong className="text-[#00FFAB]">Website:</strong> Refers to OneThrive, accessible at www.onethrive.in.</li>
                <li><strong className="text-[#00FFAB]">You:</strong> The individual or entity using the Service.</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">2. Collecting and Using Your Personal Data</h2>
            
            <div>
              <h3 className="text-2xl font-bold text-[#00FFAB] mb-3">Types of Data Collected</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-[#00FFAB] mb-2">Personal Data</h4>
                  <p className="mb-2">We may collect personal information including:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Full name</li>
                    <li>• Email address</li>
                    <li>• Phone number</li>
                    <li>• Other information you provide through forms, bookings, or communications.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#00FFAB] mb-2">Usage Data</h4>
                  <p className="mb-2">Collected automatically and includes:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• IP address, browser type/version, time and date of visit, pages visited, time spent on pages</li>
                    <li>• Device type and OS</li>
                    <li>• Diagnostic and analytics data</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#00FFAB] mb-2">Tracking Technologies and Cookies</h4>
                  <p className="mb-2">We use session and persistent cookies to:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Maintain session state</li>
                    <li>• Recognize return visits</li>
                    <li>• Save your preferences</li>
                    <li>• Track analytics</li>
                  </ul>
                  <p className="mt-2">You may manage cookies via your browser settings. Refusing cookies may limit some features of the Service.</p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">3. Use of Your Personal Data</h2>
            <p className="mb-2">We use your data to:</p>
            <ul className="space-y-1 ml-4">
              <li>• Provide, operate, and maintain our Services</li>
              <li>• Manage your account</li>
              <li>• Respond to queries or requests</li>
              <li>• Process transactions and contracts</li>
              <li>• Contact you with updates and marketing (if not opted out)</li>
              <li>• Improve our Service and user experience</li>
              <li>• Conduct internal analysis, marketing effectiveness reviews, and diagnostics</li>
              <li>• Facilitate mergers, acquisitions, or business transfers (if applicable)</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">4. Legal Basis for Processing (India)</h2>
            <p className="mb-2">In accordance with the Information Technology Act, 2000 and SPDI Rules, 2011, OneThrive processes your personal data based on:</p>
            <ul className="space-y-1 ml-4">
              <li>• Your consent</li>
              <li>• Legal obligations</li>
              <li>• Legitimate business interest</li>
              <li>• Contractual necessity</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">5. Sharing Your Personal Data</h2>
            <p className="mb-2">Your data may be shared:</p>
            <ul className="space-y-1 ml-4">
              <li>• With trusted Service Providers</li>
              <li>• With Affiliates or business partners (under confidentiality agreements)</li>
              <li>• During business transfers or acquisitions</li>
              <li>• With other users (if data is shared in public spaces)</li>
              <li>• With your consent</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">6. Retention of Your Data</h2>
            <p className="mb-2">We retain Personal and Usage Data:</p>
            <ul className="space-y-1 ml-4">
              <li>• As long as needed to fulfill the purposes in this policy</li>
              <li>• As required by law (e.g., taxation, disputes)</li>
              <li>• To enhance security and operational integrity</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">7. Transfer of Data</h2>
            <p>Your data may be stored or processed outside your state or country. We ensure adequate security and compliance safeguards for any cross-border transfers in accordance with Indian data protection standards.</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">8. Delete or Modify Your Personal Data</h2>
            <p className="mb-2">You can:</p>
            <ul className="space-y-1 ml-4">
              <li>• Access, correct, or delete your personal data by logging into your account or contacting us.</li>
              <li>• We may retain certain data where legally required or to enforce our agreements.</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">9. Disclosure of Data</h2>
            
            <div>
              <h3 className="text-2xl font-bold text-[#00FFAB] mb-3">Business Transactions</h3>
              <p>If we are involved in a merger or sale, your data may be part of the assets transferred. You will be informed before any change of policy.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#00FFAB] mb-3">Legal Compliance</h3>
              <p className="mb-2">We may disclose your data to:</p>
              <ul className="space-y-1 ml-4">
                <li>• Comply with legal obligations</li>
                <li>• Respond to law enforcement or court orders</li>
                <li>• Protect our legal rights and safety</li>
                <li>• Investigate fraud or misuse</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">10. Data Security</h2>
            <p>We use reasonable physical, electronic, and administrative measures to protect your data. However, no transmission or storage method is 100% secure.</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">11. Links to External Sites</h2>
            <p>We are not responsible for third-party websites linked through our Service. Please review their privacy policies separately.</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">12. Changes to This Privacy Policy</h2>
            <p className="mb-4">We may update this policy periodically. You will be notified of material changes through email or website notice.</p>
            <p>Effective date of changes will be reflected at the top of this policy. Continued use of the Service indicates acceptance of the revised terms.</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">13. Grievance Redressal (As per IT Rules, 2021)</h2>
            <p className="mb-4">To comply with Rule 5(9) of the SPDI Rules and Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021:</p>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-[#00FFAB]/20">
              <h3 className="text-2xl font-bold text-[#00FFAB] mb-3">Grievance Officer Contact:</h3>
              <div className="space-y-2">
                <p><strong className="text-[#00FFAB]">Name:</strong> Smeet Shah</p>
                <p><strong className="text-[#00FFAB]">Email:</strong> smeet.s@onethrive.in</p>
                <p><strong className="text-[#00FFAB]">Phone:</strong> 7718840072</p>
              </div>
            </div>
            
            <p className="mt-4">All grievances will be acknowledged within 24 hours and resolved within 15 days.</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#00FFAB] mb-4">14. Contact Us</h2>
            <p className="mb-4">For questions or concerns about this Privacy Policy:</p>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-[#00FFAB]/20">
              <div className="space-y-2">
                <p><strong className="text-[#00FFAB]">📧 Email:</strong> info@onethrive.in</p>
                <p><strong className="text-[#00FFAB]">🌐 Website:</strong> www.onethrive.in</p>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
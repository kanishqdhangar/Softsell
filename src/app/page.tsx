"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


type FormData = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  licenseType?: string;
};

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
  name: "",
  email: "",
  company: "",
  licenseType: "",
  message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [submitted, setSubmitted] = useState(false);

  const licenseOptions = [
    "Single User License",
    "Multi User License",
    "Enterprise License",
    "Subscription License",
  ];

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.licenseType)
      newErrors.licenseType = "Please select a license type";
    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      alert("Thank you for contacting us!");
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
    }
  }

  // Animation variants for sections
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 text-white px-6 md:px-20">
      
      {/* Hero Section */}
      <motion.section
        className="max-w-5xl text-center space-y-8 py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl font-extrabold leading-tight drop-shadow-lg"
          variants={itemVariants}
        >
          SoftSell
        </motion.h1>
        
        <motion.p
          className="text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed"
          variants={itemVariants}
        >
          Unlock the Value of Your Unused Software Licenses
        </motion.p>
        <motion.button
          className="mt-8 bg-white text-indigo-700 font-semibold px-12 py-4 rounded-full shadow-2xl hover:bg-gray-100 transition duration-300 ease-in-out drop-shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Quote
        </motion.button>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="bg-white text-gray-900 py-24 w-full rounded-t-3xl shadow-xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2
            className="text-5xl font-extrabold text-center mb-16 tracking-tight"
            variants={itemVariants}
          >
            How It Works
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Step 1 */}
            <motion.div
              className="text-center px-6"
              variants={itemVariants}
            >
              <div className="text-6xl mb-6 text-indigo-600">📤</div>
              <h3 className="text-2xl font-semibold mb-4">Upload License</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Submit your unused software license in just a few clicks.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="text-center px-6"
              variants={itemVariants}
            >
              <div className="text-6xl mb-6 text-blue-600">📊</div>
              <h3 className="text-2xl font-semibold mb-4">Get Valuation</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We instantly evaluate your license&apos;s resale value.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="text-center px-6"
              variants={itemVariants}
            >
              <div className="text-6xl mb-6 text-cyan-600">💸</div>
              <h3 className="text-2xl font-semibold mb-4">Get Paid</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Receive payment directly to your preferred method.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="bg-gradient-to-r from-cyan-50 to-indigo-50 py-24 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2
            className="text-5xl font-extrabold text-center mb-16 text-gray-900 tracking-tight"
            variants={itemVariants}
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Tile 1 */}
            <motion.div
              className="bg-white shadow-lg rounded-3xl p-10 text-center hover:scale-105 transform transition-transform duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl mb-6 text-indigo-600">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Instant Valuation
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Get real-time estimates for your software license&apos;s resale
                value.
              </p>
            </motion.div>

            {/* Tile 2 */}
            <motion.div
              className="bg-white shadow-lg rounded-3xl p-10 text-center hover:scale-105 transform transition-transform duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl mb-6 text-green-600">🔒</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Secure Process
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                All transactions are encrypted and privacy-protected.
              </p>
            </motion.div>

            {/* Tile 3 */}
            <motion.div
              className="bg-white shadow-lg rounded-3xl p-10 text-center hover:scale-105 transform transition-transform duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl mb-6 text-yellow-500">💰</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Fast Payouts
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                We ensure quick payments once your license is validated.
              </p>
            </motion.div>

            {/* Tile 4 */}
            <motion.div
              className="bg-white shadow-lg rounded-3xl p-10 text-center hover:scale-105 transform transition-transform duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl mb-6 text-pink-500">🌍</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Global Marketplace
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Reach buyers across the globe for the best possible price.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Customer Testimonials Section */}
      <motion.section
        className="bg-white py-24 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-5xl mx-auto px-8">
          <motion.h2
            className="text-5xl font-extrabold text-center mb-16 text-gray-900 tracking-tight"
            variants={itemVariants}
          >
            What Our Customers Say
          </motion.h2>
          <motion.div className="flex flex-col md:flex-row gap-12" variants={staggerContainer}>
            {/* Testimonial 1 */}
            <motion.div
              className="flex-1 bg-gray-50 p-10 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                “SoftSell helped me turn my unused software licenses into instant
                cash! The process was quick and secure.”
              </p>
              <div className="font-semibold text-gray-900 text-xl">
                Alice Johnson
              </div>
              <div className="text-sm text-gray-600">
                Freelance Developer, TechWorld
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="flex-1 bg-gray-50 p-10 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                “I was surprised at how easy it was to get a valuation and receive
                payment. Highly recommend SoftSell for software sellers.”
              </p>
              <div className="font-semibold text-gray-900 text-xl">
                Michael Lee
              </div>
              <div className="text-sm text-gray-600">IT Manager, SoftSolutions Inc.</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="bg-gradient-to-r from-indigo-50 to-cyan-50 py-24 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        id="contact"
      >
        <div className="max-w-3xl mx-auto px-8">
          <motion.h2
            className="text-5xl font-extrabold text-center mb-16 text-gray-900 tracking-tight"
            variants={itemVariants}
          >
            Contact Us
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white p-10 rounded-3xl shadow-xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block font-semibold mb-3 text-gray-900"
                >
                  Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 text-black border rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block font-semibold mb-3 text-gray-900"
                >
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 text-black border rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="company"
                  className="block font-semibold mb-3 text-gray-900"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border text-black border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="licenseType"
                  className="block font-semibold mb-3 text-gray-900"
                >
                  License Type<span className="text-red-600">*</span>
                </label>
                <select
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 border text-black rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 ${
                    errors.licenseType
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">Select license type</option>
                  {licenseOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.licenseType && (
                  <p className="text-red-600 text-sm mt-1">{errors.licenseType}</p>
                )}
              </motion.div>
            </div>

            <motion.div className="mt-8" variants={itemVariants}>
              <label
                htmlFor="message"
                className="block font-semibold mb-3 text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-3 border text-black border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="mt-10 w-full bg-indigo-600 text-white font-semibold py-4 rounded-xl hover:bg-indigo-700 transition duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </div>
      </motion.section>

      {submitted && (
        <motion.p
          className="mt-10 text-green-100 py-4 font-semibold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Thank you for contacting us! We will get back to you shortly.
        </motion.p>
       )}


      {/* Footer */}
      <motion.footer
        className="bg-indigo-900 text-indigo-200 py-8 w-full mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
          {/* Left: Company Name */}
          <div className="mb-4 md:mb-0 font-bold text-xl tracking-wide">SoftSell</div>

          {/* Center: Links */}
          <nav className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition">
              About
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
          </nav>

          {/* Right: Social Icons */}
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/kanishq-dhangar/"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/kanishqdhangar/softsell"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

        <div className="text-center mt-6 text-indigo-400 text-sm">
          &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
        </div>
      </motion.footer>

    </main>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";
import GlassCard from "./UI/GlassCard";

export default function Contact() {
  const { email, phone, location, socials } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message content is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");

    // Simulate API request or EmailJS integration
    // Note for developer: To use EmailJS, import emailjs from "@emailjs/browser"
    // and run: emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    try {
      await new Promise((resolve) => setTimeout(resolve, 1800)); // Simulate networking
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset back to idle after a few seconds
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden px-6">
      {/* Background Ambient Glow */}
      <div className="absolute right-1/4 bottom-1/4 w-[350px] h-[350px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-accent-purple"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-slate-800 dark:text-white mt-2"
          >
            Contact Me
          </motion.h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info cards (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-heading font-extrabold text-slate-800 dark:text-white mb-2">
              Let's connect
            </h3>
            <p className="text-slate-500 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Whether you want to discuss a senior full stack developer opening, ask about my project work, or seek collaboration opportunities, feel free to reach out.
            </p>

            {/* Direct coordinate cards */}
            <div className="space-y-4">
              {/* Email */}
              <GlassCard hoverEffect={true} className="flex items-center gap-4 p-5 border border-slate-200 dark:border-white/5">
                <div className="w-11 h-11 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-gray-500 block">
                    Email Address
                  </span>
                  <a href={`mailto:${email}`} className="text-sm md:text-base font-semibold text-slate-700 dark:text-gray-200 hover:text-accent-purple transition-colors">
                    {email}
                  </a>
                </div>
              </GlassCard>

              {/* Phone */}
              <GlassCard hoverEffect={true} className="flex items-center gap-4 p-5 border border-slate-200 dark:border-white/5">
                <div className="w-11 h-11 rounded-lg bg-accent-purple/10 text-accent-purple flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-gray-500 block">
                    Phone Contact
                  </span>
                  <a href={`tel:${phone}`} className="text-sm md:text-base font-semibold text-slate-700 dark:text-gray-200 hover:text-accent-purple transition-colors">
                    {phone}
                  </a>
                </div>
              </GlassCard>

              {/* Location */}
              <GlassCard hoverEffect={true} className="flex items-center gap-4 p-5 border border-slate-200 dark:border-white/5">
                <div className="w-11 h-11 rounded-lg bg-accent-cyan/10 text-accent-cyan flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-gray-500 block">
                    Current Location
                  </span>
                  <span className="text-sm md:text-base font-semibold text-slate-700 dark:text-gray-200">
                    {location}
                  </span>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Form container (Right) */}
          <div className="lg:col-span-7">
            <GlassCard hoverEffect={false} className="border border-slate-200 dark:border-white/5 p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-600 dark:text-gray-400 uppercase tracking-wider block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-white rounded-xl py-3 px-4.5 text-sm transition-all focus:bg-white dark:focus:bg-black/40"
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 flex items-center gap-1"><FiAlertCircle /> {errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-600 dark:text-gray-400 uppercase tracking-wider block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. johndoe@gmail.com"
                      className="w-full bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-white rounded-xl py-3 px-4.5 text-sm transition-all focus:bg-white dark:focus:bg-black/40"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 flex items-center gap-1"><FiAlertCircle /> {errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-600 dark:text-gray-400 uppercase tracking-wider block">
                    Message Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Consultation"
                    className="w-full bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-white rounded-xl py-3 px-4.5 text-sm transition-all focus:bg-white dark:focus:bg-black/40"
                  />
                  {errors.subject && (
                    <span className="text-xs text-red-500 flex items-center gap-1"><FiAlertCircle /> {errors.subject}</span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-600 dark:text-gray-400 uppercase tracking-wider block">
                    Message Content
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-white rounded-xl py-3 px-4.5 text-sm transition-all focus:bg-white dark:focus:bg-black/40 resize-none"
                  ></textarea>
                  {errors.message && (
                    <span className="text-xs text-red-500 flex items-center gap-1"><FiAlertCircle /> {errors.message}</span>
                  )}
                </div>

                {/* Submit button / Feedback panel */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan text-white font-semibold shadow-lg hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Feedback Messages */}
                  <AnimatePresence>
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="text-emerald-500 font-semibold text-sm flex items-center gap-2"
                      >
                        <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
                        Thank you! Your message was submitted successfully.
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="text-red-500 font-semibold text-sm flex items-center gap-2"
                      >
                        <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                        Failed to send message. Please try again.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

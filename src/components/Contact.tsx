'use client'
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, User, MessageCircle, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setIsVisible(false);
          setHasAnimated(false);
        }
      },
      { threshold: 0.3 }
    );

    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [hasAnimated]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "Tanmaynikumbh@byxbytemedia.com",
      href: "mailto:Tanmaynikumbh@byxbytemedia.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9359136696",
      href: "tel:9359136696"
    },
  ];

  return (
    <section
      id="contact"
      className="w-full flex flex-col relative bg-grid-white/[0.05] py-16 md:py-20 min-h-screen"
    >
      {/* Background overlay */}
      <div className="absolute pointer-events-none inset-0 top-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div
        className="h-[40vh] md:h-[50vh] absolute w-full top-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(22,26,66,0) 0%, rgba(0,0,0,1) 85%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12 md:mb-16 px-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 mt-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Got a video to edit? A YouTube channel to grow? A campaign to launch?
              <br />
              <span className="text-white font-medium">Let&apos;s bring your story to life</span> and help it reach the right audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-blue-400" />
                Start Your Project
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 sm:py-12"
                >
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-300">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="relative">
                    <MessageCircle className="absolute left-4 top-4 sm:top-6 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 sm:py-4 rounded-xl md:rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="flex items-center p-4 rounded-xl md:rounded-2xl bg-gray-800/30 hover:bg-gray-700/30 border border-gray-600/30 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        {info.icon}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm text-gray-400">{info.label}</div>
                        <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 sm:p-8 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">Ready to Start?</div>
                <div className="text-gray-300 mb-3 sm:mb-4">Join 500+ satisfied clients</div>
                <div className="text-sm sm:text-base text-blue-400">
                  ⚡ Fast turnaround • 🎯 Results-driven • 💎 Premium quality
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

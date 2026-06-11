import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    // Handle form submission
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'amra.camid@gmail.com',
      href: 'mailto:amra.camid@gmail.com',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Amrahata Paalisbo',
      href: 'https://linkedin.com',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: '@amra2026',
      href: 'https://github.com/amra2026',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help scale your organic growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block text-sm font-semibold text-white">
                  Name
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name.message}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block text-sm font-semibold text-white">
                  Email
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@]+$/,
                      message: 'Please enter a valid email',
                    },
                  })}
                  type="email"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email.message}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block text-sm font-semibold text-white">
                  Project Type
                </label>
                <select
                  {...register('projectType', { required: 'Please select a project type' })}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-amber-400 focus:outline-none transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="seo-strategy">SEO Strategy Consultation</option>
                  <option value="content-operations">Content Operations Setup</option>
                  <option value="audit">SEO Audit</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && (
                  <p className="text-red-400 text-sm">{errors.projectType.message}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <label className="block text-sm font-semibold text-white">
                  Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm">{errors.message.message}</p>
                )}
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(251, 191, 36, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-bold rounded-lg hover:shadow-lg"
              >
                Send Message
                <FiArrowRight />
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                >
                  ✓ Message sent! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Whether you're looking to audit your SEO strategy, build content operations, or explore partnership opportunities, I'd love to hear from you.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') && !method.href.startsWith('mailto') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="glass-sm p-4 rounded-lg hover:border-amber-400/50 transition-all duration-300 flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-lg group-hover:from-amber-400/30 group-hover:to-amber-600/30 transition-colors">
                      <IconComponent className="text-amber-400" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{method.label}</p>
                      <p className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-sm p-6 rounded-xl border border-amber-400/30"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-amber-400 font-semibold">Response Time</p>
              </div>
              <p className="text-slate-300">I typically respond to inquiries within 24 hours.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 pt-12 border-t border-slate-800 text-center"
      >
        <p className="text-slate-400 mb-4">
          © 2024 Amrahata Paalisbo. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          {contactMethods.map((method, idx) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={idx}
                href={method.href}
                target={method.href.startsWith('http') && !method.href.startsWith('mailto') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                <IconComponent size={20} />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

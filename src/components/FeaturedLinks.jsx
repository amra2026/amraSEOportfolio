import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiChevronRight } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaPinterest } from 'react-icons/fa';

const FeaturedLinks = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const featuredLinks = [
    {
      id: 'google-ai',
      title: 'Google AI Search Example',
      description: 'View how content optimized for Google\'s AI search results',
      url: 'https://share.google/aimode/24NhGKjXv3A3MK5dw',
      icon: '🤖',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 'indoor-air',
      title: 'IndoorAirHub Author Profile',
      description: 'Expert contributor on indoor air quality and HVAC',
      url: 'https://indoorairhub.com/about-the-author-amrahata-paalisbo/',
      icon: '🌬️',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      id: 'hvac-loop',
      title: 'HVACLoop Author Profile',
      description: 'Industry insights and HVAC expertise publication',
      url: 'https://hvacloop.com/about-the-author-amrahata-paalisbo/',
      icon: '⚙️',
      color: 'from-orange-400 to-red-500',
    },
    {
      id: 'pinterest',
      title: 'Filterbuy Pinterest Strategy',
      description: 'Visual content strategy and board management',
      url: 'https://www.pinterest.com/FilterbuyUS/',
      icon: '📌',
      color: 'from-red-400 to-pink-600',
    },
  ];

  const articleLinks = [
    {
      id: 'article-1',
      title: 'How to Check if Your 12x26.5x4 Air Filters Need Replacement',
      url: 'https://www.merv-13-filters.com/how-to-check-if-your-12x26-5x4-air-filters-need-replacement',
      domain: 'merv-13-filters.com',
      category: 'Filter Maintenance',
    },
    {
      id: 'article-2',
      title: 'Do Furnace Systems Require 12x26.5x4 Air Filters?',
      url: 'https://www.16x25x4furnacefilter.com/do-furnace-systems-require-12x26-5x4-air-filters-',
      domain: '16x25x4furnacefilter.com',
      category: 'Furnace Compatibility',
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
    <section id="links" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Links & Presence</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Exploring my work across platforms and publications
          </p>
        </motion.div>

        {/* Featured Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          {featuredLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
              className="group glass-sm p-8 rounded-xl hover:border-amber-400/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`text-4xl p-4 bg-gradient-to-br ${link.color} rounded-lg bg-opacity-20`}>
                  {link.icon}
                </div>
                <motion.div
                  animate={{ x: hoveredLink === link.id ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiExternalLink className="text-amber-400" size={24} />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {link.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{link.description}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Sample Articles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Sample Published Articles</h3>
          <div className="space-y-4">
            {articleLinks.map((article) => (
              <motion.a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="group glass-sm p-6 rounded-lg hover:border-amber-400/50 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex-1">
                  <div className="inline-block mb-2">
                    <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-slate-400">{article.domain}</p>
                </div>
                <motion.div
                  animate={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="ml-4"
                >
                  <FiChevronRight className="text-amber-400 flex-shrink-0" size={24} />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-sm p-8 rounded-xl text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg hover:border-blue-400/50 border border-blue-400/20 transition-colors"
            >
              <FaLinkedin className="text-blue-400" size={28} />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-gradient-to-br from-slate-400/20 to-slate-600/20 rounded-lg hover:border-slate-400/50 border border-slate-400/20 transition-colors"
            >
              <FaGithub className="text-slate-400" size={28} />
            </motion.a>
            <motion.a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-gradient-to-br from-red-400/20 to-pink-600/20 rounded-lg hover:border-red-400/50 border border-red-400/20 transition-colors"
            >
              <FaPinterest className="text-red-400" size={28} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedLinks;

import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiBook, FiLink, FiPieChart } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      icon: FiTarget,
      title: 'Keyword Research',
      description: 'In-depth competitor analysis and keyword strategy for targeted traffic',
    },
    {
      icon: FiBook,
      title: 'Content Optimization',
      description: 'Data-driven content creation and on-page SEO implementation',
    },
    {
      icon: FiLink,
      title: 'Internal Linking',
      description: 'Strategic internal linking architecture for improved crawlability',
    },
    {
      icon: FiTrendingUp,
      title: 'Technical SEO',
      description: 'Site audits, speed optimization, and structured data implementation',
    },
    {
      icon: FiPieChart,
      title: 'GEO Targeting',
      description: 'Location-based SEO strategies and local search optimization',
    },
    {
      icon: FiTarget,
      title: 'AI Search Optimization',
      description: 'Optimizing content for AI-powered search results and featured snippets',
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
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">SEO Skills & Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for scaling organic search visibility
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group glass-sm p-8 rounded-xl hover:border-amber-400/50 transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4 inline-block p-3 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg group-hover:from-amber-400/30 group-hover:to-amber-600/30 transition-colors">
                  <IconComponent className="text-amber-400 group-hover:scale-110 transition-transform" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 glass-sm p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Specialized Areas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-slate-300">Content Operations Framework Design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-slate-300">Multi-Property SEO Strategy</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-slate-300">SEO Audit & Competitor Analysis</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-slate-300">Content Workflow Automation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-slate-300">Performance Metrics & Reporting</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-slate-300">Team Training & Documentation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

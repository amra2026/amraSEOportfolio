import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  const skills = [
    'Keyword Research',
    'On-Page SEO',
    'Content Optimization',
    'Technical SEO',
    'Internal Linking',
    'Metadata Optimization',
    'Local SEO',
    'GBP Management',
    'AI Search Optimization',
    'Content Operations',
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
    <section id="about" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Transforming organic search strategy into measurable growth for ambitious brands
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="relative w-full aspect-square rounded-2xl overflow-hidden glass-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-amber-400/20 to-slate-900/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">📊</div>
                  <p className="text-slate-400">Strategic Insights</p>
                </div>
              </div>
            </motion.div>
            {/* Accent */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-20 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed"
            >
              With over 5 years of experience in SEO and content operations, I've helped national brands scale their organic visibility through strategic keyword research, optimized content ecosystems, and data-driven GEO targeting.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed"
            >
              My expertise spans from technical SEO audits to building content workflows that drive consistent rankings and qualified traffic. I specialize in creating content operations frameworks that scale efficiently across multiple properties.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              {skills.slice(0, 6).map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 glass-sm p-3 rounded-lg hover:border-amber-400/50 transition-colors"
                >
                  <FiCheckCircle className="text-amber-400 flex-shrink-0" size={20} />
                  <span className="text-slate-300 text-sm">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { label: 'Years Experience', value: '5+' },
            { label: 'Clients Served', value: '15+' },
            { label: 'Content Pieces', value: '500+' },
            { label: 'Avg Traffic Growth', value: '350%' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-sm p-6 rounded-xl text-center hover:border-amber-400/50 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

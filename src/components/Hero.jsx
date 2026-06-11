import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <motion.div
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side - Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.div
            variants={itemVariants}
            className="inline-block glass px-4 py-2 rounded-full text-sm text-amber-400"
          >
            ✨ SEO Specialist & Content Strategist
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="text-white">Amrahata</span>
            <br />
            <span className="gradient-text">Paalisbo</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-400 leading-relaxed"
          >
            SEO Specialist | Content Operations | GEO Strategist
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 max-w-xl"
          >
            I help national brands scale their organic reach through data-driven content operations and SEO strategy.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(251, 191, 36, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-bold rounded-lg hover:shadow-xl"
            >
              View Case Study
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-8 py-4 glass font-bold rounded-lg hover:border-amber-400 transition-colors"
            >
              <FiMail />
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          variants={itemVariants}
          className="relative flex justify-center items-center"
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden glass-sm"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            {/* Placeholder for professional portrait */}
            <div className="w-full h-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👩‍💼</div>
                <p className="text-slate-400">Professional Portrait</p>
                <p className="text-sm text-slate-500 mt-2">Image Placeholder</p>
              </div>
            </div>
            {/* Decorative gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-slate-900/10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 glass rounded-lg flex items-center justify-center text-2xl"
            animate={{ float: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            📊
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-10 w-20 h-20 glass rounded-lg flex items-center justify-center text-2xl"
            animate={{ float: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          >
            ✍️
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <p className="text-sm">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-slate-500 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

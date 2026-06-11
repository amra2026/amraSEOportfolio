import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronDown } from 'react-icons/fi';

const CaseStudy = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);

  const slides = [
    {
      id: 'overview',
      title: 'Overview',
      content: {
        heading: 'Scaling SEO Content Operations for a National HVAC Brand',
        subheading: 'Client: Filterbuy Inc.',
        description: 'Developed and implemented a comprehensive SEO content operations framework that scaled content production from 0 to 500+ pieces across multiple domain authorities.',
        metrics: [
          { label: 'Content Pieces', value: '500+' },
          { label: 'Domains Managed', value: '5' },
          { label: 'Traffic Growth', value: '350%' },
          { label: 'Avg Ranking Position', value: '#4' },
        ],
      },
    },
    {
      id: 'challenge',
      title: 'Challenge',
      content: {
        heading: 'The Problem',
        description: 'Filterbuy Inc. needed to scale their organic visibility across multiple HVAC-related properties but lacked a structured content operations process. They were:
• Unable to scale content production efficiently
• Missing keyword opportunities across properties
• Lacking internal linking strategy
• Without clear content distribution workflow',
      },
    },
    {
      id: 'responsibilities',
      title: 'My Responsibilities',
      content: {
        heading: 'Key Roles & Deliverables',
        description: 'Led content strategy and operations across:
• Keyword research and content planning
• Internal linking architecture design
• Content workflow process documentation
• Team training and onboarding
• Performance monitoring and optimization
• GEO-specific content strategies',
      },
    },
    {
      id: 'ecosystem',
      title: 'SEO Ecosystem',
      content: {
        heading: 'Multi-Domain Strategy',
        description: 'Designed an interconnected SEO ecosystem:

📍 merv-13-filters.com - Filter comparison & specs
📍 16x25x4furnacefilter.com - Furnace filter specific
📍 indoorairhub.com - Indoor air quality hub
📍 hvacloop.com - HVAC industry news
📍 Filterbuy.com - Primary brand site

Each domain positioned as an authority within specific niches while supporting overall brand visibility.',
      },
    },
    {
      id: 'workflow',
      title: 'Content Workflow',
      content: {
        heading: 'Streamlined Content Operations',
        description: 'Implemented systematic workflow:

1. Keyword Research Phase
   - Monthly keyword analysis across 5 domains
   - Competitor gap analysis
   - Search intent mapping

2. Content Planning
   - Editorial calendar management
   - Priority matrix based on competition & traffic potential
   - GEO-specific targeting

3. Content Creation
   - Standardized templates
   - SEO optimization guidelines
   - Quality review checkpoints

4. Publishing & Promotion
   - Scheduled deployment
   - Internal linking implementation
   - Social amplification',
      },
    },
    {
      id: 'linking',
      title: 'Internal Linking Strategy',
      content: {
        heading: 'Strategic Link Architecture',
        description: 'Created comprehensive internal linking framework:

🔗 Hub-and-Spoke Model
- Authority hub pages for major keywords
- Supporting content linking to hubs
- Cross-domain linking where appropriate

🔗 Content Clustering
- Topic clusters with pillar pages
- Supporting articles linking to pillars
- Deep-linking within cluster

🔗 Navigation Optimization
- Improved site architecture
- Contextual linking in content
- Footer and sidebar optimization

Result: 45% increase in internal link equity distribution',
      },
    },
    {
      id: 'assets',
      title: 'Supporting Assets',
      content: {
        heading: 'Content & Visual Resources',
        description: 'Created supporting materials:

📄 Content templates & guidelines
📊 Visual comparison charts
🎨 Infographics on HVAC topics
📹 Video content strategy
📋 Checklists & how-to guides

These assets were repurposed across multiple domains and formats.',
      },
    },
    {
      id: 'performance',
      title: 'Performance Snapshot',
      content: {
        heading: 'Key Results',
        metrics: [
          { label: 'Organic Traffic Growth', value: '350%', desc: '6-month period' },
          { label: 'Keyword Rankings (#1-10)', value: '+280', desc: 'New top 10 keywords' },
          { label: 'Avg. Ranking Position', value: '#4', desc: 'For target keywords' },
          { label: 'Content Pieces Published', value: '500+', desc: 'Across 5 domains' },
          { label: 'Pages Getting Traffic', value: '+450', desc: 'Previously zero-traffic' },
          { label: 'Click-Through Rate Lift', value: '+65%', desc: 'From title/meta optimization' },
        ],
      },
    },
    {
      id: 'articles',
      title: 'Published Examples',
      content: {
        heading: 'Featured Content',
        links: [
          {
            title: 'How to Check if Your 12x26.5x4 Air Filters Need Replacement',
            url: 'https://www.merv-13-filters.com/how-to-check-if-your-12x26-5x4-air-filters-need-replacement',
            domain: 'merv-13-filters.com',
          },
          {
            title: 'Do Furnace Systems Require 12x26.5x4 Air Filters?',
            url: 'https://www.16x25x4furnacefilter.com/do-furnace-systems-require-12x26-5x4-air-filters-',
            domain: '16x25x4furnacefilter.com',
          },
        ],
      },
    },
    {
      id: 'takeaways',
      title: 'Key Takeaways',
      content: {
        heading: 'Lessons & Insights',
        description: 'This project demonstrated:

✅ Scalability: A well-designed operations framework can handle rapid content growth

✅ Multi-domain Strategy: Separate domains can work together without cannibalizing rankings

✅ Internal Linking: Strategic linking is as important as content creation

✅ Process Documentation: Clear workflows enable team scalability

✅ Data-Driven Decisions: Keyword research + metrics drive better content choices

✅ GEO Targeting: Location-based content strategies unlock untapped traffic',
      },
    },
  ];

  const currentSlide = slides[activeSlide];

  return (
    <section id="case-study" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Case Study</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            How we scaled SEO content operations for a national HVAC brand
          </p>
        </motion.div>

        {/* Slide Content */}
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="glass-sm p-8 md:p-12 rounded-2xl mb-8"
        >
          <h3 className="text-3xl font-bold gradient-text mb-2">{currentSlide.content.heading}</h3>
          {currentSlide.content.subheading && (
            <p className="text-amber-400 font-semibold mb-4">{currentSlide.content.subheading}</p>
          )}

          {currentSlide.content.description && (
            <p className="text-slate-300 leading-relaxed whitespace-pre-line mb-6">
              {currentSlide.content.description}
            </p>
          )}

          {currentSlide.content.metrics && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {currentSlide.content.metrics.map((metric, idx) => (
                <div key={idx} className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold gradient-text mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-400">{metric.label}</div>
                  {metric.desc && <div className="text-xs text-slate-500 mt-1">{metric.desc}</div>}
                </div>
              ))}
            </div>
          )}

          {currentSlide.content.links && (
            <div className="space-y-3">
              {currentSlide.content.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors group"
                >
                  <p className="font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
                    {link.title}
                  </p>
                  <p className="text-sm text-slate-400 mt-1">{link.domain}</p>
                </a>
              ))}
            </div>
          )}
        </motion.div>

        {/* Slide Navigation */}
        <div className="flex flex-wrap gap-3 justify-center">
          {slides.map((slide, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeSlide === idx
                  ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 shadow-lg shadow-amber-500/50'
                  : 'glass hover:border-amber-400/50'
              }`}
            >
              {slide.title}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;

'use client';

import { motion } from 'framer-motion';

export default function SEOOptimization() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center text-gray-900"
        variants={itemVariants}
      >
        What is SEO and Why It Matters
      </motion.h1>

      <motion.p className="mb-4 text-gray-700 text-lg leading-relaxed" variants={itemVariants}>
        <strong>Search Engine Optimization (SEO)</strong> is the practice of improving your website and its content so that it ranks higher on search engines like Google, Bing, and Yahoo. When your website is optimized for SEO, it becomes more visible to people who are searching for topics related to your business or content.
      </motion.p>

      <motion.p className="mb-4 text-gray-700 text-lg leading-relaxed" variants={itemVariants}>
        SEO helps increase organic (non-paid) traffic to your website, which means more visitors, better engagement, and higher chances of converting those visitors into customers or followers. Good SEO makes your site easier for search engines to understand and recommend to users.
      </motion.p>

      <motion.h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900" variants={itemVariants}>
        Important Factors of SEO
      </motion.h2>

      <motion.p className="mb-3 text-gray-700 text-lg leading-relaxed" variants={itemVariants}>
        1. <strong>Relevant Keywords:</strong> Using the right keywords that your audience is searching for in your titles, descriptions, and content helps search engines match your site with user queries.
      </motion.p>

      <motion.p className="mb-3 text-gray-700 text-lg leading-relaxed" variants={itemVariants}>
        2. <strong>Quality Content:</strong> Creating valuable, informative, and original content keeps visitors engaged and encourages other sites to link to you, which improves your site's authority.
      </motion.p>

      <motion.p className="mb-3 text-gray-700 text-lg leading-relaxed" variants={itemVariants}>
        3. <strong>Website Performance:</strong> Fast loading speed, mobile responsiveness, and good user experience help your website rank better.
      </motion.p>

      <motion.p className="mb-3 text-gray-700 text-lg leading-relaxed" variants={itemVariants}>
        4. <strong>On-Page SEO:</strong> Proper use of meta tags, headings, alt text for images, and clean URLs make your site easier for search engines to crawl.
      </motion.p>

      <motion.p className="mb-3 text-gray-700 text-lg leading-relaxed" variants={itemVariants}>
        5. <strong>Backlinks:</strong> Links from other reputable websites show search engines that your content is trustworthy and relevant.
      </motion.p>

      <motion.p className="mb-3 text-gray-700 text-lg leading-relaxed" variants={itemVariants}>
        6. <strong>Technical SEO:</strong> Ensuring your site’s structure, sitemap, and robots.txt are correctly configured helps search engines index your pages properly.
      </motion.p>

      <motion.p className="mb-3 text-gray-700 text-lg leading-relaxed" variants={itemVariants}>
        By focusing on these SEO factors, you can improve your website’s visibility, attract more visitors, and grow your online presence effectively.
      </motion.p>
    </motion.div>
  );
}
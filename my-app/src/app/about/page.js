"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function page() {
  return (
    <motion.div
      className="min-h-screen px-6 py-20 max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-8"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
      >
        About HTML Guide
      </motion.h1>

      <motion.p
        className="text-gray-700 mb-6 leading-relaxed"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        Welcome to <span className="font-semibold">HTML Guide</span> — your friendly companion for mastering the building blocks of the web. Whether you’re just starting out or looking to deepen your knowledge, our website is designed to provide clear, concise, and up-to-date tutorials to help you learn HTML, CSS, JavaScript, and more.
      </motion.p>

      <motion.p
        className="text-gray-700 mb-6 leading-relaxed"
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
      >
        At <span className="font-semibold">HTML Guide</span>, we believe that learning web development should be accessible and enjoyable. That’s why we break down complex concepts into easy-to-understand lessons, complete with practical examples and interactive code snippets. Our goal is to empower you to build beautiful, responsive, and modern websites confidently.
      </motion.p>

      <motion.p
        className="text-gray-700 mb-6 leading-relaxed"
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
      >
        We understand that the web is constantly evolving, so we work hard to keep our content current with the latest standards and best practices. Whether you want to create personal projects, enhance your professional skills, or prepare for a career in web development, <span className="font-semibold">HTML Guide</span> is here to support your journey.
      </motion.p>

      <motion.h2
        className="text-2xl font-semibold text-gray-800 mt-12 mb-6"
        variants={fadeInUp}
        transition={{ delay: 0.5 }}
      >
        Our Mission
      </motion.h2>

      <motion.p
        className="text-gray-700 mb-6 leading-relaxed"
        variants={fadeInUp}
        transition={{ delay: 0.6 }}
      >
        Our mission is to make web development education simple, accessible, and practical. We aim to provide resources that help learners worldwide build solid foundations and create impressive web experiences.
      </motion.p>

      <motion.h2
        className="text-2xl font-semibold text-gray-800 mt-12 mb-6"
        variants={fadeInUp}
        transition={{ delay: 0.7 }}
      >
        Why Choose HTML Guide?
      </motion.h2>

      <motion.ul
        className="list-disc list-inside text-gray-700 space-y-3"
        variants={fadeInUp}
        transition={{ delay: 0.8 }}
      >
        <li>Comprehensive tutorials that cover everything from basics to advanced topics.</li>
        <li>Interactive examples to practice and solidify your understanding.</li>
        <li>Regular updates to keep up with new web standards and technologies.</li>
        <li>User-friendly design focused on easy navigation and learning.</li>
        <li>A supportive community of learners and developers.</li>
      </motion.ul>
    </motion.div>
  );
}

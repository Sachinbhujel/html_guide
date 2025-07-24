'use client';
import { motion } from 'framer-motion';

export default function page() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-6 py-10 text-center">
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        1-on-1 Coaching <span className="text-blue-600">Currently Unavailable</span>
      </motion.h2>

      <motion.p
        className="max-w-xl text-lg text-gray-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We are working hard to offer personalized coaching sessions to help you
        master web development faster and more effectively.
      </motion.p>

      <motion.p
        className="max-w-xl text-lg text-gray-600 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        For now, feel free to explore our free tutorials and resources.  
        Stay tuned — exciting updates are coming soon!
      </motion.p>

      <motion.button
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        onClick={() => alert('Thanks for your interest! Stay tuned.')}
      >
        Notify Me
      </motion.button>
    </div>
  );
}
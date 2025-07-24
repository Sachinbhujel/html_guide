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
        <span className="text-rose-600">HR</span> Consulting
      </motion.h2>

      <motion.p
        className="max-w-xl text-base sm:text-lg md:text-xl text-gray-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Our HR Consulting services have helped individuals and businesses build stronger teams,
        streamline recruitment, and improve workplace culture. Here is what our clients say about it.
      </motion.p>

      <motion.div
        className="max-w-3xl space-y-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {/* Review 1 */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <p className="text-gray-700 text-base sm:text-lg md:text-lg mb-4">
            Their HR sessions helped our startup build a healthy hiring process. We learned how to recruit smarter and retain talent better!
          </p>
          <p className="text-gray-900 font-semibold">— Manish Thapa</p>
        </div>

        {/* Review 2 */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <p className="text-gray-700 text-base sm:text-lg md:text-lg mb-4">
            I never realized how valuable HR consulting could be until I applied their advice. It made our remote team feel more connected and valued.
          </p>
          <p className="text-gray-900 font-semibold">— Sneha Koirala</p>
        </div>
      </motion.div>
    </div>
  );
}
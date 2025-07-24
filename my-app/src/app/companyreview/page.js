'use client';
import { motion } from 'framer-motion';

export default function page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-20 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our <span className="text-blue-600">Clients Say</span>
      </motion.h2>

      <motion.p
        className="max-w-xl text-base sm:text-lg md:text-xl text-gray-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We value the feedback from our clients and strive to provide the best services.
        Here are some testimonials from people who have worked with us.
      </motion.p>

      <motion.div
        className="max-w-3xl space-y-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {/* Example Review 1 */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4">
            "HTml Guide helped me understand web development concepts clearly. The 1-on-1 coaching
            might be unavailable now, but their free tutorials are fantastic!"
          </p>
          <p className="text-gray-900 font-semibold">— Sarah Johnson</p>
        </div>

        {/* Example Review 2 */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4">
            "Great platform for learning at your own pace. The interactive examples are especially helpful."
          </p>
          <p className="text-gray-900 font-semibold">— Michael Lee</p>
        </div>
      </motion.div>
    </div>
  );
}
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
        <span className="text-blue-600">Accounts</span> Review
      </motion.h2>

      <motion.p
        className="max-w-xl text-base sm:text-lg md:text-xl text-gray-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We’ve supported many individuals in understanding and managing their financial records.
        Here’s what some of them have to say about our accounts assistance services.
      </motion.p>

      <motion.div
        className="max-w-3xl space-y-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {/* Example Review 1 */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <p className="text-gray-700 text-base sm:text-lg md:text-lg mb-4">
            Their accounting tutorials made it easier for me to manage my freelance finances. Highly recommend it to students and self-learners!
          </p>
          <p className="text-gray-900 font-semibold">— Priya Sharma</p>
        </div>

        {/* Example Review 2 */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          <p className="text-gray-700 text-base sm:text-lg md:text-lg mb-4">
            I struggled with bookkeeping until I followed their step-by-step resources. Easy to follow and practical!
          </p>
          <p className="text-gray-900 font-semibold">— Raj Verma</p>
        </div>
      </motion.div>
    </div>
  );
}
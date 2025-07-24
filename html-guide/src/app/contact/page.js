"use client";

import { motion } from "framer-motion";

export default function page() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-20">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact <span className="text-blue-600">Us</span>
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 mb-10 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Have questions, feedback, or want to collaborate? Fill out the form below, and we'll get back to you soon.
      </motion.p>

      <motion.form
        className="max-w-2xl mx-auto bg-gray-50 shadow-md p-6 rounded-lg space-y-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div>
          <label htmlFor="name" className="block text-base font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-2 py-2"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-base font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-2 py-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-base font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-2 py-2"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}
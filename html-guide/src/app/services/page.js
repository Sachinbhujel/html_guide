"use client";

import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
    {
        title: "HTML Tutorials",
        description:
            "Comprehensive and beginner-friendly tutorials to help you master HTML and build strong foundations for web development.",
    },
    {
        title: "CSS Styling",
        description:
            "Learn how to style beautiful, responsive websites using CSS, including Flexbox, Grid, animations, and modern best practices.",
    },
    {
        title: "JavaScript Programming",
        description:
            "Interactive JavaScript tutorials covering basics to advanced topics like ES6+, DOM manipulation, and asynchronous programming.",
    },
    {
        title: "Responsive Design",
        description:
            "Guides and tips to make your websites work flawlessly on all screen sizes and devices using responsive techniques.",
    },
    {
        title: "Project-Based Learning",
        description:
            "Hands-on projects that help you apply what you learn and build real-world web applications step by step.",
    },
];

export default function page() {
    return (
        <motion.div
            className="px-6 py-10 max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
        >
            <motion.h2
                className="text-4xl font-bold text-center text-gray-800 mb-5"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Our <span className="text-blue-600">Services</span>
            </motion.h2>

            <div className="grid gap-10 md:grid-cols-2">
                {services.map(({ title, description }, index) => (
                    <motion.div
                        key={title}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-default"
                        variants={fadeInUp}
                        transition={{ delay: 0.1 * index }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            {title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            {description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
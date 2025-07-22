// app/techbar/page.jsx
import Link from "next/link";
import React from "react";

const TechBar = () => {
  return (
    <div className="fixed top-16 left-0 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-30">
      <div className="flex items-center justify-center gap-6 py-3 text-sm font-medium text-gray-700 dark:text-white">
        <a href="/Html" className="hover:text-teal-600 transition">HTML</a>
        <a href="/css" className="hover:text-teal-600 transition">CSS</a>
        <a href="/javascript" className="hover:text-teal-600 transition">JavaScript</a>
      </div>
    </div>
  );
};

export default TechBar;
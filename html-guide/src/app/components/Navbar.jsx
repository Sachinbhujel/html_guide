"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-blue-600">
  Html Guide
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <Link href="/" className="block py-2 border-b text-gray-700">Home</Link>
          <Link href="/about" className="block py-2 border-b text-gray-700">About</Link>
          <Link href="/services" className="block py-2 border-b text-gray-700">Services</Link>
          <Link href="/contact" className="block py-2 text-gray-700">Contact</Link>
        </div>
      )}
    </nav>
  );
}
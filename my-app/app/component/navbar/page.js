import React from "react";
import TechBar from "../techbar/page";

function Navbar() {
    return (
        <header className="bg-white dark:bg-gray-900 shadow fixed top-0 left-0 w-full h-16 z-50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span class="material-symbols-outlined">
                            code_blocks
                        </span>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            Html Guide
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <a
                            href="#"
                            className="text-gray-700 hover:text-teal-600 dark:text-gray-200 transition"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-teal-600 dark:text-gray-200 transition"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-teal-600 dark:text-gray-200 transition"
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-teal-600 dark:text-gray-200 transition"
                        >
                            Contact
                        </a>
                        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
                            Sign Up
                        </button>
                    </nav>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button className="text-gray-700 dark:text-white focus:outline-none">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Optional Mobile Menu (hidden by default) */}
                <div className="hidden md:hidden mt-2 space-y-2 text-sm font-medium">
                    <a
                        href="#"
                        className="block text-gray-700 hover:text-teal-600 dark:text-gray-200 transition"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="block text-gray-700 hover:text-teal-600 dark:text-gray-200 transition"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="block text-gray-700 hover:text-teal-600 dark:text-gray-200 transition"
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="block text-gray-700 hover:text-teal-600 dark:text-gray-200 transition"
                    >
                        Contact
                    </a>
                    <button className="w-full text-left bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
                        Sign Up
                    </button>
                </div>
            </div>
            <TechBar />
        </header>
    );
}

export default Navbar;

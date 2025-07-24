"use client";
import { useRef } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../globals.css";

export default function ScrollNav() {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
    };

    return (
        <div className="relative bg-gradient-to-r from-gray-700 to-gray-900 py-4 pl-6 pr-6 shadow-md overflow-hidden h-14 sticky top-[52px]">
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth px-6"
            >
                {[
                    { href: "/html", label: "HTML", color: "text-orange-400" },
                    { href: "/css", label: "CSS", color: "text-green-400" },
                    {
                        href: "/js",
                        label: "JavaScript",
                        color: "text-yellow-400",
                    },
                    { href: "/react", label: "React", color: "text-blue-400" },
                    { href: "/node", label: "Node", color: "text-lime-400" },
                    {
                        href: "/next",
                        label: "Next.js",
                        color: "text-violet-400",
                    },
                    {
                        href: "/tailwind",
                        label: "Tailwind",
                        color: "text-cyan-400",
                    },
                ].map(({ href, label, color }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`font-semibold hover:underline hover:text-white transition-all duration-200 ${color}`}
                    >
                        {label}
                    </Link>
                ))}
            </div>

            {/* Left Button */}
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-0 text-white p-1 h-14.5"
            >
                <FaChevronLeft />
            </button>

            {/* Right Button */}
            <button
                onClick={scrollRight}
                className="absolute right-0 top-0 text-white p-1 h-14.5"
            >
                <FaChevronRight />
            </button>
        </div>
    );
}

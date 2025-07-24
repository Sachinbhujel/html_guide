"use client";
import Link from "next/link";

export default function Techbar() {
  return (
      <div className="bg-black flex justify-center gap-6 px-6 py-3">
        <Link href="/html" className="text-orange-500 font-semibold hover:underline">
          HTML
        </Link>
        <Link href="/css" className="text-green-600 font-semibold hover:underline">
          CSS
        </Link>
        <Link href="/js" className="text-yellow-500 font-semibold hover:underline">
          JavaScript
        </Link>
      </div>
  );
}
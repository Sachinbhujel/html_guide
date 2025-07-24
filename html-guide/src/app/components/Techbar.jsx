'use client'
import { useRef } from 'react'
import Link from 'next/link'

export default function ScrollNav() {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' })
  }

  return (
    <div className="bg-gray-500 flex items-center gap-2 px-4 py-3">
      <button onClick={scrollLeft} className="text-white font-bold">&lt;</button>
      
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        <Link href="/html" className="text-orange-500 font-semibold hover:underline">HTML</Link>
        <Link href="/css" className="text-green-600 font-semibold hover:underline">CSS</Link>
        <Link href="/js" className="text-yellow-500 font-semibold hover:underline">JavaScript</Link>
        <Link href="/react" className="text-blue-500 font-semibold hover:underline">React</Link>
        <Link href="/node" className="text-lime-500 font-semibold hover:underline">Node</Link>
        <Link href="/next" className="text-violet-500 font-semibold hover:underline">Next.js</Link>
        <Link href="/tailwind" className="text-cyan-400 font-semibold hover:underline">Tailwind</Link>
        {/* Add more if you want */}
      </div>

      <button onClick={scrollRight} className="text-white font-bold">&gt;</button>
    </div>
  )
}

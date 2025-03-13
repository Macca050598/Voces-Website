import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="fixed w-full bg-white z-50 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Voces Logo" width={120} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/how-we-work" className="text-gray-700 hover:text-indigo-600 font-medium">
            How we work
          </Link>
          <Link href="/guides" className="text-gray-700 hover:text-indigo-600 font-medium">
            Guides
          </Link>
          <Link href="/use-cases" className="text-gray-700 hover:text-indigo-600 font-medium">
            Use Cases
          </Link>
          <Link href="/testimonials" className="text-gray-700 hover:text-indigo-600 font-medium">
            Testimonials
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 font-medium">
            Pricing
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-gray-700 hover:text-indigo-600 font-medium">
            Login
          </Link>
          <Link 
            href="/demo" 
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </nav>
  )
} 
'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-pink-600">
              Cancer Awareness
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#quotes"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Quotes
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md font-medium"
            >
              Home
            </a>
            <a
              href="#quotes"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md font-medium"
            >
              Quotes
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

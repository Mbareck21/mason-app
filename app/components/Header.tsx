"use client";

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", text: "Services" },
    { href: "#gallery", text: "Gallery" },
    { href: "#testimonials", text: "Testimonials" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4 text-stone-800">
        <Link href="/">
          <span className="text-3xl font-bold text-stone-900 hover:text-orange-700 transition-colors cursor-pointer">Masonry</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <span className="font-semibold hover:text-orange-700 transition-colors cursor-pointer">{link.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full shadow-lg">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-slate-200 last:border-b-0">
                <Link href={link.href}>
                  <span 
                    onClick={() => setIsMenuOpen(false)} 
                    className="block w-full py-4 px-6 text-center font-semibold text-slate-700 hover:bg-orange-100 hover:text-orange-700 transition-colors cursor-pointer"
                  >
                    {link.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, TreePine } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Delivery", href: "#delivery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 group">
          <TreePine className="h-7 w-7 text-amber-500 group-hover:text-amber-400 transition-colors" />
          <div className="leading-tight">
            <span className="block text-white font-bold text-base md:text-lg tracking-tight">
              Dove Valley
            </span>
            <span className="block text-amber-500 text-xs font-medium tracking-widest uppercase">
              Timber &amp; Fencing
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-stone-300 hover:text-amber-400 text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Call CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+441234567890"
            className="flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white font-semibold text-sm px-4 py-2 rounded-md transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        {/* Mobile: Call + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:+441234567890"
            className="flex items-center gap-1.5 bg-amber-700 hover:bg-amber-600 text-white font-semibold text-xs px-3 py-2 rounded-md transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-stone-300 hover:text-white transition-colors p-1"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-stone-800 border-t border-stone-700">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-stone-300 hover:text-amber-400 text-base font-medium py-2 border-b border-stone-700 last:border-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

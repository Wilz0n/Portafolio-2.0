"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaArrowLeft,
  FaBars,
  FaTimes,
  FaHome,
  FaBriefcase,
  FaBook,
} from "react-icons/fa";

export function PageNavigation({
  showOnPages = ["home", "services", "education"],
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // ruta actual

  const navItems = [
    { name: "home", label: "Home", icon: FaHome, href: "/" },
    {
      name: "services",
      label: "Services",
      icon: FaBriefcase,
      href: "/projects-in-services",
    },
    { name: "education", label: "Education", icon: FaBook, href: "/education" },
  ];

  const filteredNavItems = navItems.filter((item) =>
    showOnPages.includes(item.name),
  );

  return (
    <>
      {/* Back button for desktop (>720px) */}
      <div className="hidden md:block fixed top-6 right-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-[#252525] border border-[#3a3a3a] rounded-lg text-[#e8e6e3] hover:border-[#d4a574] transition-colors text-sm"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>
      </div>

      {/* Hamburger menu for mobile (<=720px) */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 bg-[#252525] border border-[#3a3a3a] rounded-lg text-[#e8e6e3] hover:border-[#d4a574] transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <FaBars className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-20 right-6 z-40 bg-[#252525] border border-[#3a3a3a] rounded-lg overflow-hidden transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col">
          {filteredNavItems.map((item) => {
            const IconComponent = item.icon;

            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                  isActive
                    ? "bg-[#d4a574]/10 text-[#d4a574] border-l-2 border-[#d4a574]"
                    : "text-[#e8e6e3] hover:bg-[#3a3a3a]"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

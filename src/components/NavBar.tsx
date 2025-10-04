"use client";

import React, { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function NavBar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const desktopLinksRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<HTMLAnchorElement[]>([]);

  const [imgError, setImgError] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="absolute w-full z-25 flex items-start justify-between px-6 md:px-12 lg:px-20 py-6 bg-transparent">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className="hover:text-white transition-colors duration-300 flex items-center"
          >
            {!imgError ? (
              <Image
                src="/miraco-logo.png"
                alt="Miraco"
                width={80}
                height={80}
                className="object-contain"
                onError={() => setImgError(true)} // Show text if image fails
              />
            ) : (
              <p className="newfont text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold leading-tight text-cinzel">
                Miraco
              </p>
            )}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div
          ref={desktopLinksRef}
          className="hidden md:flex items-center space-x-8 text-white/90 border border-white rounded-full py-3 px-5"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-300 text-m"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          name="menu-button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden z-30 relative text-white hover:text-gray-300 transition-colors duration-300"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-100 max-w-[100vw] bg-black/95 backdrop-blur-md z-25 md:hidden
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-end p-6 border-b border-white/10">
            <button
              aria-label={"Close menu"}
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col justify-center px-6">
            <div className="space-y-8">
              {navLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={toggleMobileMenu}
                  ref={(el) => {
                    if (el) mobileLinksRef.current[i] = el;
                  }}
                  className="block text-white text-xl font-light hover:text-gray-300 transition-colors duration-300 border-b border-white/10 pb-4"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/10">
            <p className="text-white/60 text-sm text-center">Miraco</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
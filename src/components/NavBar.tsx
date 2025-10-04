"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function NavBar() {
  const navLinks = [
    { label: "Page 1", href: "#" },
    { label: "Page 2", href: "#" },
    { label: "Page 3", href: "#" },
    { label: "Page 4", href: "#" },
    { label: "Page 5", href: "#" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [imgError, setImgError] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="absolute w-full box-border px-4 md:px-12 lg:px-20 py-4 ">
      <nav
        className="w-full z-25 flex items-center justify-between text-black 
      md:bg-white/20 md:backdrop-blur-md md:border md:border-white/30 
        md:rounded-full px-6 py-3 md:shadow-md"
      >
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center">
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
              <p className="text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold leading-tight text-cinzel">
                Logo
              </p>
            )}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 py-3 px-5">
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
          className="md:hidden relative cursor-pointer"
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
        className={`fixed top-0 right-0 h-full w-100 max-w-[100vw] text-black bg-white/60 backdrop-blur-md z-25 md:hidden
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-end p-6">
            <button aria-label={"Close menu"} onClick={toggleMobileMenu}>
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
                  className="block text-xl font-light border-b border-black/10 pb-4"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6">
            <p className="text-sm text-center">Logo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

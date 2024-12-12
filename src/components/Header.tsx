"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Clock, Users, BookOpen, ChevronRight } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      href: "#",
      label: "About",
      icon: BookOpen,
      subLinks: [
        { href: "obrf", label: "About OBRF" },
        { href: "organizing-committee", label: "About Organizing Committee" },
      ],
    },
    {
      href: "#speakers",
      label: "Speakers",
      icon: Users,
    },
    {
      href: "#schedule",
      label: "Schedule",
      icon: Clock,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#9C6FDE] to-[#FF6B9E] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                className="w-6 h-6"
              >
                <path d="M12 11V16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12.0498 8V8.1L11.9502 8.1V8H12.0498Z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-800">
              AI Biomedical Research Summit
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 relative">
          {navLinks.map((link) => (
            <div className="group" key={link.href}>
              <Link
                href={link.href}
                className="flex items-center text-gray-600 hover:text-[#9C6FDE] transition-colors duration-300"
              >
                <link.icon className="mr-2 w-5 h-5 text-gray-400 group-hover:text-[#FF6B9E] transition-colors" />
                {link.label}
              </Link>
              {/* Sub Navigation for About on hover */}
              {link.subLinks && (
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className="block px-4 py-2 text-gray-600 hover:text-[#9C6FDE] transition-colors"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="#register"
            className="flex items-center bg-gradient-to-r from-[#FF6B9E] to-[#9C6FDE] text-white px-5 py-2 rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Register Now
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/95 z-40 md:hidden">
          <div className="container mx-auto px-4 py-8 space-y-6">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 border-b border-gray-200 text-xl flex items-center text-gray-700 hover:text-[#9C6FDE] transition-colors"
                >
                  <link.icon className="mr-4 w-6 h-6 text-gray-400" />
                  {link.label}
                </Link>
                {/* Sub Navigation for About */}
                {link.subLinks && (
                  <div className="pl-6">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        onClick={() => setIsOpen(false)}
                        className="py-2 block text-gray-600 hover:text-[#9C6FDE] transition-colors"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="#register"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-[#FF6B9E] to-[#9C6FDE] text-white px-6 py-3 rounded-full text-xl hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

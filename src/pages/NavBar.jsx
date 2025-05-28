"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaBowlFood } from "react-icons/fa6"
import { FaShoppingCart } from "react-icons/fa"

function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    // Set active link based on current path
    setActiveLink(window.location.pathname)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Navigation links data
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/product", label: "Product" },
    { path: "/gallery", label: "Gallery" },
    { path: "/preorder", label: "Pre - Order" },
    { path: "/contact", label: "Contact Us" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 pr-15 pl-15 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm shadow-amber-200 py-4"
          : "bg-white/10 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setActiveLink("/")}>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-all duration-300">
                <FaBowlFood className="text-white text-xl" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 to-red-500 rounded-xl blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                SumSkuy!
              </span>
              <span className="text-xs text-gray-500 -mt-1">Authentic Dimsum</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <ul className="flex space-x-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative group px-4 py-2 font-semibold transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-amber-400 after:to-red-500 after:transition-all after:duration-300 ${
                    activeLink === link.path ? "text-amber-600 after:opacity-100" : "text-gray-700 after:opacity-0 group-hover:text-amber-600 group-hover:after:opacity-50"
                  }`}
                  onClick={() => setActiveLink(link.path)}
                >
                  {link.label}
                </Link>
              </li>
              
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            

            {/* Order Button */}
            <button className="hidden md:flex bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Order Now
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-amber-100 to-red-100 text-amber-700"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 translate-y-2" : "w-6"}`}
                ></span>
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "w-4"}`}
                ></span>
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 -translate-y-2" : "w-5"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100 p-4 mt-2">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
                      activeLink === link.path
                        ? "bg-gradient-to-r from-amber-50 to-red-50 text-amber-700 font-bold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setActiveLink(link.path)
                      setMobileMenuOpen(false)
                    }}
                  >
                    {activeLink === link.path && (
                      <span className="w-1 h-6 bg-gradient-to-b from-amber-400 to-red-500 rounded-full mr-3"></span>
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            
          </div>
        </div>
      </div>

      {/* Animated Highlight Effect */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500 opacity-30"></div>
    </nav>
  )
}

export default NavBar

"use client"

import { useState, useEffect, useMemo } from "react"
import { Link } from "react-router-dom"
import NavBar from "./NavBar"

function NotFoundPage() {
  return (
    <>
      <NavBar />
      <NotFoundHero />
    </>
  )
}

function NotFoundHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const floatingElements = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${4 + Math.random() * 3}s`,
      size: `${15 + Math.random() * 25}px`,
      emoji: ["🥟", "🍜", "🥢", "🍱", "🥠", "🍲"][Math.floor(Math.random() * 6)],
    }))
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    setIsSearching(true)
    // Simulate search
    setTimeout(() => {
      setIsSearching(false)
      // Redirect to search results or show suggestions
    }, 2000)
  }

  const popularPages = [
    { name: "Home", path: "/", icon: "🏠", description: "Kembali ke halaman utama" },
    { name: "Menu", path: "/product", icon: "🥟", description: "Lihat menu dimsum kami" },
    { name: "Gallery", path: "/gallery", icon: "📸", description: "Koleksi foto dan video" },
    { name: "About Us", path: "/about", icon: "ℹ️", description: "Tentang SumSkuy" },
    { name: "Contact", path: "/contact", icon: "📞", description: "Hubungi kami" },
    { name: "Pre-Order", path: "/preorder", icon: "🛒", description: "Pesan dimsum favorit" },
  ]

  const funFacts = [
    "🥟 Kami telah menyajikan lebih dari 50,000 dimsum!",
    "👨‍🍳 Chef kami memiliki pengalaman 15+ tahun",
    "⭐ Rating 4.9/5 dari 1000+ pelanggan",
    "🏪 Sudah memiliki 5 cabang di Indonesia",
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-red-200/40 to-orange-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/40 to-amber-300/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-yellow-300/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating Food Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute opacity-30"
            style={{
              left: element.left,
              top: element.top,
              animation: `float ${element.duration} ease-in-out infinite`,
              animationDelay: element.delay,
              fontSize: element.size,
            }}
          >
            {element.emoji}
          </div>
        ))}
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-8 h-8 bg-gradient-to-br from-red-400 to-orange-500 rounded-full pointer-events-none z-30 opacity-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: "scale(0.8)",
        }}
      ></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-12 h-full flex items-center relative z-10">
        <div className="text-center w-full">
          {/* 404 Number with Animation */}
          <div className="relative mb-8">
            <h1 className="text-[200px] md:text-[300px] font-black leading-none opacity-10 text-gray-400 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl md:text-9xl animate-bounce">🥟</div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Oops!</span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Halaman Tidak Ditemukan
              </span>
            </h2>

            <div className="w-32 h-2 bg-gradient-to-r from-red-400 via-orange-500 to-amber-500 mx-auto mb-6 rounded-full"></div>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Sepertinya halaman yang Anda cari sudah <span className="font-semibold text-red-600">"habis"</span>{" "}
              seperti dimsum favorit kami! 😅
              <br />
              Tapi jangan khawatir, masih banyak kelezatan lain yang bisa Anda jelajahi.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 overflow-hidden">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari halaman, menu, atau informasi..."
                  className="w-full px-6 py-4 text-lg bg-transparent focus:outline-none text-gray-800 placeholder-gray-500"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white p-3 rounded-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSearching ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/"
              className="group bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Kembali ke Home
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              to="/product"
              className="group border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Lihat Menu
            </Link>
          </div>

          {/* Popular Pages Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Halaman Populer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="group bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {page.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                    {page.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Fun Facts Section */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-lg max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              💡 Tahukah Anda? <span className="text-orange-600">Fun Facts SumSkuy</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200"
                >
                  <p className="text-gray-700 font-medium">{fact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Butuh Bantuan? 🤝</h3>
            <p className="text-lg mb-6 opacity-90">
              Tim customer service kami siap membantu Anda menemukan apa yang dicari atau menjawab pertanyaan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Hubungi Kami
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(10deg);
          }
          66% {
            transform: translateY(-10px) rotate(-5deg);
          }
        }
      `}</style>
    </section>
  )
}

export default NotFoundPage

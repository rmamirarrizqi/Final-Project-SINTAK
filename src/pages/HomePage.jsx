"use client";

import { useState, useEffect, useMemo } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <OperatingHours />
      <ReviewsAndRatings />
      <Footer />
    </>
  );
}

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [title, setTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const images = ["/hero image slider one.jpg", "/hero image slider two.jpg"];
  const texts = ["Dimsum", "SumSkuy"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setTitle(
        isDeleting
          ? fullText.substring(0, title.length - 1)
          : fullText.substring(0, title.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && title === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && title === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [title, isDeleting, loopNum, typingSpeed, texts]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingElements = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${6 + Math.random() * 4}s`,
      size: `${20 + Math.random() * 30}px`,
    }));
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-amber-200/40 to-orange-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-red-200/40 to-pink-300/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-yellow-200/30 to-amber-300/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating Dimsum Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute opacity-20"
            style={{
              left: element.left,
              top: element.top,
              animation: `float ${element.duration} ease-in-out infinite`,
              animationDelay: element.delay,
            }}
          >
            <div
              className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-lg transform rotate-45"
              style={{ width: element.size, height: element.size }}
            >
              <div className="w-3/4 h-1/4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-br from-amber-400 to-red-500 rounded-full pointer-events-none z-30 opacity-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "scale(0.8)",
        }}
      ></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-12 h-full flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glassmorphism Container */}
              <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
                <div className="relative w-full aspect-square">
                  {/* Rotating Border */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-amber-400 via-red-500 to-amber-400 rounded-full animate-spin"
                    style={{ animationDuration: "8s" }}
                  ></div>
                  <div className="absolute inset-2 bg-white rounded-full"></div>

                  {/* Image Container */}
                  <div className="absolute inset-4 rounded-full overflow-hidden">
                    <img
                      src={images[currentImage] || "/placeholder.svg"}
                      alt="Delicious Dimsum"
                      className="w-full h-full object-cover transition-all duration-1000 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Floating Badges */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transform rotate-12 animate-bounce">
                    <svg
                      className="w-5 h-5 inline mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Hot!
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transform -rotate-12 animate-pulse">
                    <svg
                      className="w-5 h-5 inline mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Fresh
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center bg-white/30 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <div className="text-2xl font-bold text-amber-600">
                      500+
                    </div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center bg-white/30 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <div className="text-2xl font-bold text-red-600">4.9</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                  <div className="text-center bg-white/30 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                    <div className="text-2xl font-bold text-green-600">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-200">
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                Authentic Indonesian Dimsum
              </div>

              {/* Animated Title */}
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none">
                  {title.startsWith("Sum") && title.length > 3 ? (
                    <>
                      <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                        {title.substring(0, 3)}
                      </span>
                      <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                        {title.substring(3)}
                      </span>
                    </>
                  ) : (
                    <span className="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                      {title}
                    </span>
                  )}
                  <span className="border-r-4 border-amber-600 ml-2 animate-pulse">
                    &nbsp;
                  </span>
                </h1>

                <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
                  Kelezatan{" "}
                  <span className="font-semibold text-amber-600">autentik</span>{" "}
                  dalam setiap gigitan.
                  <br />
                  Dibuat dengan{" "}
                  <span className="font-semibold text-red-600">cinta</span> dan
                  resep turun temurun.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group relative bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Pesan Sekarang
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>

                <button className="group border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                    Lihat Menu
                  </span>
                </button>
              </div>

              {/* Special Offer */}
              <div className="relative bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 p-1 rounded-2xl shadow-xl">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-red-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-xl text-gray-900">
                        Special Offer!
                      </p>
                      <p className="text-lg text-gray-600">
                        Diskon 20% untuk pembelian pertama Anda
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(5deg);
          }
          66% {
            transform: translateY(-10px) rotate(-3deg);
          }
        }
      `}</style>
    </section>
  );
}

function OperatingHours() {
  const operatingHours = [
    { day: "Senin", hours: "09:00 - 21:00", icon: "☀️" },
    { day: "Selasa", hours: "09:00 - 21:00", icon: "🌤️" },
    { day: "Rabu", hours: "09:00 - 21:00", icon: "⛅" },
    { day: "Kamis", hours: "09:00 - 21:00", icon: "🌥️" },
    { day: "Jumat", hours: "09:00 - 22:00", icon: "🌆" },
    { day: "Sabtu", hours: "08:00 - 22:00", icon: "🎉" },
    { day: "Minggu", hours: "08:00 - 22:00", icon: "🎊" },
  ];

  const [isOpen, setIsOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Jam Operasional
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Selalu{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Siap
            </span>
            <br />
            Melayani{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Anda
            </span>
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami berkomitmen memberikan pelayanan terbaik dengan jam operasional
            yang fleksibel untuk kenyamanan Anda
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Current Status Card */}
            <div className="lg:col-span-1">
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl h-full">
                <div className="text-center">
                  <div
                    className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
                      isOpen
                        ? "bg-gradient-to-br from-green-400 to-emerald-500"
                        : "bg-gradient-to-br from-red-400 to-pink-500"
                    } shadow-lg`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full ${
                        isOpen ? "bg-white" : "bg-white"
                      } animate-pulse`}
                    ></div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    {isOpen ? (
                      <span className="text-green-700">🟢 Buka Sekarang</span>
                    ) : (
                      <span className="text-red-700">🔴 Tutup Sekarang</span>
                    )}
                  </h3>

                  <div className="bg-gray-100 rounded-2xl p-4 mb-6">
                    <p className="text-sm text-gray-500 mb-1">Waktu Sekarang</p>
                    <p className="text-2xl font-mono font-bold text-gray-800">
                      {formatTime(currentTime)}
                    </p>
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      isOpen
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg"
                        : "bg-gradient-to-r from-gray-400 to-gray-500 text-white cursor-not-allowed"
                    }`}
                  >
                    {isOpen ? "📞 Hubungi Sekarang" : "⏰ Buka Besok"}
                  </button>
                </div>
              </div>
            </div>

            {/* Operating Hours List */}
            <div className="lg:col-span-2">
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Jadwal Lengkap
                  </h3>
                </div>

                <div className="divide-y divide-gray-100">
                  {operatingHours.map((item, index) => {
                    const today = new Date();
                    const isToday =
                      (today.getDay() === 0 && index === 6) ||
                      today.getDay() - 1 === index;

                    return (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 ${
                          isToday
                            ? "bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-3xl">{item.icon}</div>
                          <div>
                            <span
                              className={`text-lg font-semibold ${
                                isToday ? "text-amber-800" : "text-gray-700"
                              }`}
                            >
                              {item.day}
                            </span>
                            {isToday && (
                              <div className="flex items-center gap-2 mt-1">
                                <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full">
                                  Hari Ini
                                </span>
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="text-right">
                          <span
                            className={`text-xl font-bold ${
                              isToday ? "text-amber-600" : "text-gray-600"
                            }`}
                          >
                            {item.hours}
                          </span>
                          {index >= 4 && (
                            <div className="text-sm text-green-600 font-medium">
                              Extended Hours
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 text-center border-t">
                  <p className="text-sm text-gray-600 mb-2">
                    💡 <strong>Catatan:</strong> Jam operasional dapat berubah
                    pada hari libur nasional
                  </p>
                  <p className="text-xs text-gray-500">
                    Untuk informasi terkini, silakan hubungi kami langsung
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsAndRatings() {
  const reviews = [
    {
      id: 1,
      name: "Budi Santoso",
      rating: 5,
      comment:
        "Dimsumnya enak banget! Teksturnya lembut dan rasanya autentik. Sudah pesan berkali-kali dan selalu konsisten kualitasnya.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "2 hari yang lalu",
      location: "Jakarta",
      verified: true,
      helpful: 24,
    },
    {
      id: 2,
      name: "Anita Wijaya",
      rating: 4,
      comment:
        "Pelayanan cepat dan packing rapi. Rasanya enak, hanya saja sedikit terlalu asin untuk selera saya. Tapi overall sangat memuaskan!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "1 minggu yang lalu",
      location: "Bandung",
      verified: true,
      helpful: 18,
    },
    {
      id: 3,
      name: "Rudi Hartono",
      rating: 5,
      comment:
        "Paling suka siomay ikannya! Gurih dan fresh. Anak-anak saya sampai berebut kalau saya bawa pulang dimsum dari sini.",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      date: "3 minggu yang lalu",
      location: "Surabaya",
      verified: false,
      helpful: 31,
    },
    {
      id: 4,
      name: "Dewi Lestari",
      rating: 5,
      comment:
        "Saya pesan untuk acara arisan dan tamu-tamu semua memuji. Presentasinya juga bagus, harga sangat reasonable untuk kualitas premium.",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      date: "1 bulan yang lalu",
      location: "Bali",
      verified: true,
      helpful: 42,
    },
  ];

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = 1247;

  const ratingDistribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: Math.floor(Math.random() * 200) + 50,
    percentage: Math.floor(Math.random() * 60) + 20,
  }));

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-rose-200/40 to-orange-300/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating Hearts */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300/30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
            Testimonial Pelanggan
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Apa Kata{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mereka
            </span>
            <br />
            Tentang{" "}
            <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
              SumSkuy
            </span>
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kepuasan pelanggan adalah prioritas utama kami. Simak cerita mereka
            yang telah merasakan kelezatan dimsum SumSkuy
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Rating Summary - Enhanced */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl h-full">
              {/* Main Rating Display */}
              <div className="text-center mb-8">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 flex items-center justify-center shadow-inner border-4 border-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 animate-pulse"></div>
                    <div className="relative text-5xl font-black bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {averageRating.toFixed(1)}
                    </div>
                  </div>

                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    {totalReviews.toLocaleString()} ulasan
                  </div>
                </div>

                {/* Star Display */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-8 h-8 ${
                        i < Math.floor(averageRating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 font-medium">Excellent Rating</p>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-3 mb-8">
                {ratingDistribution.map(({ star, count, percentage }) => (
                  <div key={star} className="flex items-center group">
                    <span className="w-8 text-gray-700 font-semibold text-sm">
                      {star}
                    </span>
                    <svg
                      className="w-4 h-4 text-yellow-400 mx-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <div className="flex-1 h-3 bg-gray-200 rounded-full mx-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>

                    <span className="w-12 text-right text-gray-600 text-sm font-medium">
                      {count}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Beri Ulasan Anda
                </button>

                <button className="w-full border-2 border-purple-300 text-purple-600 hover:bg-purple-50 font-semibold py-3 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                  Lihat Semua Ulasan
                </button>
              </div>
            </div>
          </div>

          {/* Reviews List - Enhanced */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Ulasan Terbaru
                </h3>
              </div>

              {/* Reviews Container */}
              <div className="h-[600px] overflow-y-auto custom-scrollbar">
                <div className="p-6 space-y-6">
                  {reviews.map((review, index) => (
                    <div
                      key={review.id}
                      className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-purple-200"
                      style={{
                        background: `linear-gradient(135deg, white 0%, ${
                          index % 2 === 0 ? "#fdf2f8" : "#f3e8ff"
                        } 100%)`,
                      }}
                    >
                      {/* Review Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="relative">
                          <img
                            src={review.avatar || "/placeholder.svg"}
                            alt={review.name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md group-hover:border-purple-200 transition-all duration-300"
                          />
                          {review.verified && (
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                              {review.name}
                            </h4>
                            {review.verified && (
                              <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                                Verified
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {review.location}
                            </div>
                            <span>•</span>
                            <span>{review.date}</span>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${
                                i < review.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>

                      {/* Review Content */}
                      <div className="mb-4">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          "{review.comment}"
                        </p>
                      </div>

                      {/* Review Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-medium">
                            Helpful ({review.helpful})
                          </span>
                        </button>

                        <button className="text-gray-400 hover:text-purple-600 transition-colors">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(243, 232, 255, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a855f7, #ec4899);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #9333ea, #db2777);
        }
      `}</style>
    </section>
  );
}

export default HomePage;

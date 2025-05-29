"use client";

import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { FaHome } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa6";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { BsFillTrophyFill } from "react-icons/bs";
import { LiaLightbulbSolid } from "react-icons/lia";

function AboutPage() {
  return (
    <>
      <NavBar />
      <AboutHero />
      <OurStory />
      <OurValues />
      <TeamSection />
      <AwardsSection />
      <LocationsSection />
      <Footer />
    </>
  );
}

function AboutHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "15+", label: "Tahun Pengalaman", icon: "⏰" },
    { number: "50K+", label: "Pelanggan Puas", icon: "😊" },
    { number: "5", label: "Cabang Aktif", icon: "🏪" },
    { number: "25+", label: "Varian Menu", icon: "🥟" },
  ];

  const floatingElements = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${6 + Math.random() * 4}s`,
      emoji: ["🥟", "👨‍🍳", "🍜", "🥢", "⭐", "❤️"][
        Math.floor(Math.random() * 6)
      ],
    }));
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-amber-200/40 to-orange-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/40 to-red-300/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-red-200/30 to-pink-300/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
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
      <div className="container mx-auto px-6 pt-32 pb-12 pr-30 pl-30 h-full flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-200">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Tentang Kami
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Cerita
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  SumSkuy
                </span>
              </h1>

              <div className="w-32 h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mb-8 rounded-full"></div>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light mb-8">
                Perjalanan kami dimulai dari{" "}
                <span className="font-semibold text-amber-600">
                  kecintaan mendalam
                </span>{" "}
                terhadap kuliner tradisional Asia, khususnya dimsum. Dengan{" "}
                <span className="font-semibold text-red-600">
                  dedikasi tinggi
                </span>{" "}
                dan resep turun temurun, kami menghadirkan cita rasa autentik
                yang tak terlupakan.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/product"
                  className="group bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Lihat Menu Kami
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
                </Link>

                <Link
                  to="/contact"
                  className="group border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Stats Display */}
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4 animate-bounce">
                    {stats[currentStat].icon}
                  </div>
                  <div className="text-5xl font-black bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent mb-2">
                    {stats[currentStat].number}
                  </div>
                  <div className="text-lg font-semibold text-gray-700">
                    {stats[currentStat].label}
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`text-center p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                        currentStat === index
                          ? "bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-300"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                      onClick={() => setCurrentStat(index)}
                    >
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-xl font-bold text-gray-800">
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {stats.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentStat === index ? "bg-amber-500" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
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
            transform: translateY(-15px) rotate(5deg);
          }
          66% {
            transform: translateY(-8px) rotate(-3deg);
          }
        }
      `}</style>
    </section>
  );
}

function OurStory() {
  const [activeYear, setActiveYear] = useState(0);

  const timeline = [
    {
      year: "2008",
      title: "Awal Mula",
      description:
        "Dimulai dari dapur kecil dengan resep keluarga turun temurun",
      icon: <FaHome />,
      icon: "🏠",
      color: "from-amber-400 to-orange-500",
    },
    {
      year: "2012",
      title: "Toko Pertama",
      description: "Membuka toko pertama di Jakarta dengan 5 varian dimsum",
      icon: <Ri24HoursLine />,
      color: "from-orange-400 to-red-500",
    },
    {
      year: "2016",
      title: "Ekspansi",
      description: "Berkembang ke 3 cabang dengan menu yang lebih beragam",
      icon: <FaChartLine />,
      color: "from-red-400 to-pink-500",
    },
    {
      year: "2020",
      title: "Digital Era",
      description:
        "Meluncurkan layanan online dan delivery untuk kemudahan pelanggan",
      icon: <HiOutlineDevicePhoneMobile />,
      color: "from-pink-400 to-purple-500",
    },
    {
      year: "2024",
      title: "Masa Kini",
      description:
        "5 cabang aktif dengan 50,000+ pelanggan setia di seluruh Indonesia",
      icon: <FaStar />,
      color: "from-purple-400 to-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            Perjalanan Kami
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Cerita{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Perjalanan
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              SumSkuy
            </span>
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dari dapur kecil hingga menjadi brand dimsum terpercaya, setiap
            langkah kami adalah bukti dedikasi terhadap kualitas dan kepuasan
            pelanggan
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-purple-300 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${
                        item.color
                      } flex items-center justify-center text-2xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 ${
                        activeYear === index ? "scale-125 shadow-2xl" : ""
                      }`}
                      onClick={() => setActiveYear(index)}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"
                    } transition-all duration-500 ${
                      activeYear === index ? "transform scale-105" : ""
                    }`}
                  >
                    <div
                      className={`bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30 ${
                        activeYear === index
                          ? "shadow-2xl border-indigo-200"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`text-3xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        >
                          {item.year}
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurValues() {
  const values = [
    {
      icon: <FaHeart />,
      title: "Kualitas Terbaik",
      description:
        "Menggunakan bahan-bahan segar dan berkualitas tinggi untuk setiap hidangan",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: <FaHandshake/>,
      title: "Pelayanan Prima",
      description:
        "Memberikan pengalaman kuliner yang tak terlupakan dengan pelayanan ramah",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: <RiPlantFill/>,
      title: "Inovasi Berkelanjutan",
      description:
        "Terus berinovasi dalam cita rasa sambil mempertahankan keaslian tradisional",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <BsFillTrophyFill />,
      title: "Keunggulan",
      description:
        "Berkomitmen menjadi yang terdepan dalam industri kuliner dimsum Indonesia",
      color: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Nilai-Nilai Kami
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Yang Kami
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Junjung
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Tinggi
            </span>
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nilai-nilai fundamental yang menjadi fondasi setiap langkah kami
            dalam menghadirkan pengalaman kuliner terbaik
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 text-center"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <div
                  className={`absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${value.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}
                ></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>

              {/* Decorative Element */}
              <div
                className={`w-16 h-1 bg-gradient-to-r ${value.color} mx-auto mt-6 rounded-full group-hover:w-24 transition-all duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const team = [
    {
      name: "Chef William Tanoto",
      position: "Head Chef & Founder",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&h=300&fit=crop&crop=face",
      description:
        "15+ tahun pengalaman di kuliner Asia dengan spesialisasi dimsum tradisional",
      social: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Sarah Lim",
      position: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description:
        "Memastikan kualitas dan konsistensi di setiap cabang SumSkuy",
      social: { instagram: "#", linkedin: "#" },
    },
    {
      name: "David Chen",
      position: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description:
        "Mengembangkan brand SumSkuy dan membangun hubungan dengan pelanggan",
      social: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Lisa Wong",
      position: "Quality Control",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description:
        "Menjaga standar kualitas tinggi dalam setiap proses produksi",
      social: { instagram: "#", linkedin: "#" },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
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
            Tim Kami
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Orang-Orang
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Hebat
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Di Balik SumSkuy
            </span>
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tim profesional yang berdedikasi menghadirkan pengalaman kuliner
            terbaik dengan passion dan keahlian tinggi
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Social Links */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.social.instagram}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardsSection() {
  const awards = [
    {
      year: "2023",
      title: "Best Dimsum Restaurant",
      organization: "Indonesian Culinary Awards",
      icon: <BsFillTrophyFill />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      year: "2022",
      title: "Customer Choice Award",
      organization: "Food & Beverage Excellence",
      icon: <FaStar/>,
      color: "from-blue-400 to-indigo-500",
    },
    {
      year: "2021",
      title: "Innovation in Traditional Food",
      organization: "Asia Food Innovation Summit",
      icon: <LiaLightbulbSolid />,
      color: "from-green-400 to-emerald-500",
    },
    {
      year: "2020",
      title: "Digital Transformation Excellence",
      organization: "Restaurant Technology Awards",
      icon: <HiOutlineDevicePhoneMobile />,
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Penghargaan
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Prestasi{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              & Pengakuan
            </span>
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Berbagai penghargaan yang kami terima sebagai bukti komitmen
            terhadap kualitas dan inovasi dalam dunia kuliner
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 text-center"
            >
              {/* Year Badge */}
              <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                {award.year}
              </div>

              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${award.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {award.icon}
                </div>
                <div
                  className={`absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${award.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}
                ></div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {award.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {award.organization}
              </p>

              {/* Decorative Element */}
              <div
                className={`w-16 h-1 bg-gradient-to-r ${award.color} mx-auto mt-6 rounded-full group-hover:w-24 transition-all duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationsSection() {
  const locations = [
    {
      name: "SumSkuy Central Park",
      address: "Mall Central Park Lt. 3, Jakarta Barat",
      phone: "+62 21 2929 3939",
      hours: "10:00 - 22:00",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      status: "open",
    },
    {
      name: "SumSkuy Kelapa Gading",
      address: "Mall Kelapa Gading 3 Lt. 2, Jakarta Utara",
      phone: "+62 21 4585 6789",
      hours: "10:00 - 22:00",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      status: "open",
    },
    {
      name: "SumSkuy Bandung",
      address: "Jl. Dago No. 123, Bandung",
      phone: "+62 22 2034 5678",
      hours: "09:00 - 21:00",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      status: "open",
    },
    {
      name: "SumSkuy Surabaya",
      address: "Jl. Pemuda No. 45, Surabaya",
      phone: "+62 31 3456 7890",
      hours: "09:00 - 21:00",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
      status: "open",
    },
    {
      name: "SumSkuy Bali",
      address: "Jl. Sunset Road No. 88, Denpasar",
      phone: "+62 361 234 5678",
      hours: "10:00 - 23:00",
      image:
        "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=300&fit=crop",
      status: "coming-soon",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Lokasi Kami
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Temukan{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              SumSkuy
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Terdekat
            </span>
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kunjungi cabang SumSkuy terdekat dan nikmati pengalaman kuliner
            dimsum autentik di berbagai kota
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {location.status === "open" ? (
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                      🟢 Buka
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      🚧 Coming Soon
                    </span>
                  )}
                </div>

                {/* Location Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {location.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2 text-gray-600">
                    <svg
                      className="w-4 h-4 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{location.address}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-sm">{location.phone}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
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
                    <span className="text-sm">{location.hours}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 text-sm">
                    Directions
                  </button>
                  <button className="flex-1 border border-emerald-300 text-emerald-600 hover:bg-emerald-50 font-semibold py-2 px-4 rounded-xl transition-all duration-300 text-sm">
                    Call
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;

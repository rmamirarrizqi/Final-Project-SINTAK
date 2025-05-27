import React, { useState, useEffect, useMemo } from "react";
import NavBar from "./NavBar";

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
}

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "public/hero image slider one.jpg",
    "public/hero image slider two.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const floatingDimsumStyles = useMemo(() => {
    return [...Array(12)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`
    }));
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-r from-red-50 to-amber-50">
      {/* Background dimsum animasi */}
      <div className="absolute inset-0 z-0 opacity-30">
        {floatingDimsumStyles.map((style, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: style.left,
              top: style.top,
              animation: 'float 6s ease-in-out infinite',
              animationDelay: style.delay,
            }}
          >
            <div className="w-16 h-16 bg-amber-300 rounded-full shadow-lg transform rotate-45"></div>
            <div className="w-12 h-4 bg-amber-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        ))}
      </div>

      {/* Konten utama */}
      <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center relative z-10">
        <div className="text-center">
          <h1
            className="text-5xl md:text-7xl font-bold text-amber-800 mb-4"
            style={{ animation: 'fadeInDown 1s ease-out' }}
          >
            Sum<span className="text-red-600">Skuy</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl"
            style={{ animation: 'fadeInDown 1s ease-out 0.2s' }}
          >
            Kelezatan autentik dalam setiap gigitan. Dibuat dengan cinta dan resep turun temurun.
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center gap-4"
            style={{ animation: 'fadeInUp 1s ease-out 0.4s' }}
          >
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg">
              Pesan Sekarang
            </button>
            <button className="border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg">
              Lihat Menu
            </button>
          </div>
        </div>

        {/* Gambar dimsum dengan animasi */}
        <div className="mt-16 relative">
          <div
            className="w-64 h-64 bg-white rounded-full shadow-xl flex items-center justify-center"
            style={{
              animation: 'bounce 3s infinite, spin 6s linear infinite'
            }}
          >
            <img
              src={images[currentImage]}
              alt="Dimsum Special"
              className="w-56 h-56 object-cover rounded-full border-4 border-amber-300 absolute transition-opacity duration-1000"
              style={{ opacity: currentImage === 0 ? 1 : 0 }}
            />
            <img
              src={images[(currentImage + 1) % images.length]}
              alt="Dimsum Special"
              className="w-56 h-56 object-cover rounded-full border-4 border-amber-300 absolute transition-opacity duration-1000"
              style={{ opacity: currentImage === 1 ? 1 : 0 }}
            />
          </div>
          <div
            className="absolute -bottom-6 -left-6"
            style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
          >
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
              Hot!
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </section>
  );
}



export default HomePage;

import React, { useState, useEffect, useMemo } from "react";
import NavBar from "./NavBar";

function HomePage() {
  return (
    <>
      <NavBar />

      <Hero />
      <ReviewsAndRatings />
    </>
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
    },
  ];

  // Rating calculations
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    percentage:
      (reviews.filter((r) => r.rating === star).length / reviews.length) * 100,
  }));

  return (
    <section className="relative py-20 bg-gradient-to-b from-amber-50 to-white overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-amber-100/50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-red-100/50 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-amber-200/30 blur-3xl"></div>

        {/* Dimsum decorative icons */}
        <svg
          className="absolute top-20 right-20 w-16 h-16 text-amber-300/30"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
        </svg>
        <svg
          className="absolute bottom-20 left-20 w-20 h-20 text-red-300/20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-amber-800 bg-amber-100 rounded-full mb-4 shadow-sm">
            Testimonial Pelanggan
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Apa Kata Mereka Tentang{" "}
            <span className="text-amber-600">SumSkuy</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-red-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ulasan jujur dari pelanggan yang telah merasakan kelezatan dimsum
            kami
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Rating Summary - Enhanced Card */}
          <div className="lg:w-1/3 w-full">
            <div className="h-full bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center mb-8">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center shadow-inner border-2 border-amber-200">
                    <div className="text-5xl font-bold text-amber-700">
                      {averageRating.toFixed(1)}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {reviews.length} ulasan
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-8 h-8 ${
                        i < Math.floor(averageRating)
                          ? "text-amber-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-500 text-center">
                  Rata-rata rating dari pelanggan kami
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {ratingDistribution.map(({ star, count, percentage }) => (
                  <div key={star} className="flex items-center group">
                    <span className="w-12 text-gray-700 font-medium transition-all group-hover:text-amber-600">
                      {star} ★
                    </span>
                    <div className="flex-1 h-3 bg-gray-200 rounded-full mx-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-500 ease-out group-hover:from-amber-500 group-hover:to-amber-600"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-8 text-right text-gray-600 text-sm font-medium transition-all group-hover:text-amber-700">
                      {count}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 flex items-center justify-center gap-2">
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Beri Ulasan Anda
              </button>
            </div>
          </div>

          {/* Enhanced Vertical Scrollable Reviews */}
          <div className="lg:w-2/3 w-full">
            <div className="h-full bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-[500px] overflow-y-auto p-6 custom-scrollbar">
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="p-6 rounded-2xl transition-all duration-300 hover:shadow-md group"
                      style={{
                        background:
                          "linear-gradient(to bottom right, white, #fef3c7)",
                        border: "1px solid rgba(253, 230, 138, 0.5)",
                      }}
                    >
                      <div className="flex flex-col sm:flex-row items-start mb-4">
                        <div className="relative mr-0 sm:mr-6 mb-4 sm:mb-0">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md group-hover:border-amber-200 transition-all duration-300"
                            loading="lazy"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                            ★ {review.rating}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                            {review.name}
                          </h4>
                          <div className="flex items-center mb-1">
                            <svg
                              className="w-4 h-4 text-gray-500 mr-1 group-hover:text-amber-500 transition-colors duration-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-500 text-sm group-hover:text-amber-600 transition-colors duration-300">
                              {review.location}
                            </span>
                          </div>
                          <span className="text-gray-400 text-sm group-hover:text-gray-500 transition-colors duration-300">
                            {review.date}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-amber-400 before:to-amber-600 before:rounded-full group-hover:before:from-amber-500 group-hover:before:to-amber-700 transition-all duration-300">
                        "{review.comment}"
                      </p>
                      <div className="mt-4 flex justify-end">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${
                                i < review.rating
                                  ? "text-amber-400 group-hover:text-amber-500"
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles (add to your global CSS) */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(254, 243, 199, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f59e0b, #ef4444);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #d97706, #dc2626);
        }
      `}</style>
    </section>
  );
}

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const [title, setTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const images = ["/hero image slider one.jpg", "/hero image slider two.jpg"];

  const texts = ["Dimsum", "SumSkuy"];

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
  }, [title, isDeleting, loopNum]);

  const floatingDimsumStyles = useMemo(() => {
    return [...Array(12)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);

  return (
    <section className="p-50 relative h-screen overflow-hidden bg-gradient-to-r from-red-50 to-amber-50 ">
      {/* Background dimsum animasi */}
      <div className="absolute inset-0 z-0 opacity-20">
        {floatingDimsumStyles.map((style, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: style.left,
              top: style.top,
              animation: "float 6s ease-in-out infinite",
              animationDelay: style.delay,
            }}
          >
            <div className="w-16 h-16 bg-amber-300 rounded-full shadow-lg transform rotate-45"></div>
            <div className="w-12 h-4 bg-amber-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        ))}
      </div>

      {/* Konten utama dengan layout baru */}
      <div className="container mx-auto px-6 h-full flex items-center relative z-10">
        {/* Gambar dimsum di sebelah kiri */}
        <div className="w-1/2 relative">
          <div className="relative w-full max-w-xl">
            <div
              className="w-full aspect-square bg-white rounded-full shadow-2xl flex items-center justify-center relative"
              style={{
                animation: "spin 15s linear infinite",
              }}
            >
              <img
                src={images[currentImage]}
                alt="Dimsum Special"
                className={`w-[90%] h-[90%] object-cover rounded-full border-8 border-amber-300 absolute transition-opacity duration-500 ${
                  fade ? "opacity-100" : "opacity-70"
                }`}
              />
            </div>
            <div
              className="absolute -bottom-8 -left-8"
              style={{
                animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            >
              <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                Hot!
              </div>
            </div>
            <div className="absolute -top-8 -right-8 bg-amber-400 text-white font-bold py-3 px-6 rounded-full shadow-lg transform rotate-12">
              Fresh Daily
            </div>
          </div>
        </div>

        {/* Teks dan tombol di sebelah kanan */}
        <div className="w-1/2 pl-16">
          <div className="max-w-lg">
            <div className="mb-6 min-h-[120px]">
              <h1
                className="text-6xl md:text-8xl font-bold text-amber-800 flex"
                style={{ animation: "fadeInDown 1s ease-out" }}
              >
                {title.startsWith("Sum") && title.length > 3 ? (
                  <>
                    <span>{title.substring(0, 3)}</span>
                    <span className="text-red-600">{title.substring(3)}</span>
                  </>
                ) : (
                  <span>{title}</span>
                )}
                <span className="border-r-4 border-amber-800 ml-1 animate-blink">
                  &nbsp;
                </span>
              </h1>
            </div>
            <p
              className="text-2xl md:text-3xl text-gray-700 mb-10 leading-relaxed"
              style={{ animation: "fadeInDown 1s ease-out 0.2s" }}
            >
              Kelezatan autentik dalam setiap gigitan. Dibuat dengan cinta dan
              resep turun temurun.
            </p>
            <div
              className="flex gap-6"
              style={{ animation: "fadeInUp 1s ease-out 0.4s" }}
            >
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg text-xl">
                Pesan Sekarang
              </button>
              <button className="border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white font-bold py-4 px-10 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg text-xl">
                Lihat Menu
              </button>
            </div>

            {/* Special offer badge */}
            <div className="mt-12 bg-gradient-to-r from-amber-400 to-amber-600 text-white p-4 rounded-lg shadow-lg max-w-md transform ">
              <p className="font-bold text-xl">Special Offer!</p>
              <p className="text-lg">Diskon 20% untuk pembelian pertama Anda</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </section>
  );
}

export default HomePage;

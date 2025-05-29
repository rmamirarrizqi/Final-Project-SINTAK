"use client";

import { useState, useEffect, useMemo } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { GrGallery } from "react-icons/gr";
import { MdInsertPhoto } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function GalleryPage() {
  return (
    <>
      <NavBar />
      <GalleryHero />
      <PhotoGallery />
      <VideoSection />
      <InstagramFeed />
      <Footer />
    </>
  );
}

function GalleryHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingElements = useMemo(() => {
    return [...Array(10)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${4 + Math.random() * 2}s`,
    }));
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-indigo-200/40 to-purple-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-300/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-200/30 to-rose-300/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full pointer-events-none z-30 opacity-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "scale(0.8)",
        }}
      ></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-12 h-full flex items-center relative z-10">
        <div className="text-center w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-indigo-200">
            <svg
              className="mt-2 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <GrGallery />
            </svg>
            Visual Gallery
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Gallery
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SumSkuy
            </span>
          </h1>

          <div className="w-32 h-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>

          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto mb-12">
            Jelajahi koleksi foto dan video yang menampilkan{" "}
            <span className="font-semibold text-indigo-600">kelezatan</span> dan{" "}
            <span className="font-semibold text-purple-600">keindahan</span>{" "}
            dimsum SumSkuy
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Photos</div>
            </div>
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Videos</div>
            </div>
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Menu Items</div>
            </div>
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-rose-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Happy Moments</div>
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
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
}

function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(4); // State untuk mengontrol jumlah gambar yang ditampilkan

  const categories = [
    { id: "all", label: "Semua", icon: "🖼️" },
    { id: "dimsum", label: "Dimsum", icon: "🥟" },
    { id: "process", label: "Proses", icon: "👨‍🍳" },
    { id: "restaurant", label: "Restaurant", icon: "🏪" },
    { id: "events", label: "Events", icon: "🎉" },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=400&fit=crop",
      category: "dimsum",
      title: "Siomay Ikan Special",
      description: "Siomay ikan segar dengan tekstur lembut dan rasa autentik",
    },
    {
      id: 2,
      src: "/Gallery/Hakao Udang.png",
      category: "dimsum",
      title: "Hakao Udang Premium",
      description: "Hakao dengan isian udang segar dan kulit transparan",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=600&fit=crop",
      category: "process",
      title: "Proses Pembuatan",
      description:
        "Chef berpengalaman membuat dimsum dengan teknik tradisional",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=400&fit=crop",
      category: "dimsum",
      title: "Shumai Ayam",
      description: "Shumai ayam dengan topping telur puyuh",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=500&fit=crop",
      category: "restaurant",
      title: "Interior Restaurant",
      description: "Suasana nyaman dan modern di restaurant SumSkuy",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=400&fit=crop",
      category: "events",
      title: "Grand Opening",
      description: "Momen grand opening cabang baru SumSkuy",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=400&fit=crop",
      category: "dimsum",
      title: "Lumpia Shanghai",
      description: "Lumpia shanghai crispy dengan isian daging sapi",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop",
      category: "process",
      title: "Steam Process",
      description: "Proses pengukusan dimsum dengan steam tradisional",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
      category: "restaurant",
      title: "Dining Area",
      description: "Area dining yang luas dan nyaman untuk keluarga",
    },
    {
      id: 10,
      src: "/Gallery/Dimsum Platter.png",
      category: "dimsum",
      title: "Dim Sum Platter",
      description: "Koleksi berbagai jenis dimsum dalam satu sajian",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=500&fit=crop",
      category: "process",
      title: "Chef at Work",
      description: "Chef profesional sedang menyiapkan dimsum fresh",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=400&fit=crop",
      category: "restaurant",
      title: "Cozy Atmosphere",
      description: "Suasana hangat dan nyaman untuk bersantai",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  // Gambar yang akan ditampilkan berdasarkan visibleImages
  const displayedImages = filteredImages.slice(0, visibleImages);

  // Function untuk load more images
  const loadMoreImages = () => {
    setVisibleImages((prev) => Math.min(prev + 4, filteredImages.length));
  };

  // Reset visible images ketika kategori berubah
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setVisibleImages(4); // Reset ke 4 gambar pertama
  };

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setLightboxImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? filteredImages.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setLightboxImage(filteredImages[prevIndex]);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MdInsertPhoto className="w-5 h-5" />
            Photo Gallery
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Koleksi{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Foto
            </span>
            <br />
            Terbaik{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Kami
            </span>
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Setiap foto menceritakan kisah kelezatan dan dedikasi kami dalam
            menyajikan dimsum terbaik
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-gray-200"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(image, index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay Icons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold rounded-full">
                    {categories.find((cat) => cat.id === image.category)?.label}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button - hanya tampil jika masih ada gambar yang belum ditampilkan */}
        {visibleImages < filteredImages.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreImages}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Load More Photos
            </button>
          </div>
        )}

        {/* Info jumlah gambar yang ditampilkan */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Menampilkan {displayedImages.length} dari {filteredImages.length}{" "}
            foto
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image */}
            <img
              src={lightboxImage.src || "/placeholder.svg"}
              alt={lightboxImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2">{lightboxImage.title}</h3>
              <p className="text-gray-200">{lightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=300&fit=crop",
      title: "Proses Pembuatan Dimsum",
      description:
        "Lihat bagaimana chef kami membuat dimsum dengan teknik tradisional",
      duration: "3:45",
      category: "Behind the Scenes",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example video URL
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
      title: "Menu Favorit Pelanggan",
      description: "Review menu-menu favorit dari pelanggan setia SumSkuy",
      duration: "2:30",
      category: "Menu Review",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
      title: "Grand Opening Ceremony",
      description: "Momen bersejarah pembukaan cabang baru SumSkuy",
      duration: "5:20",
      category: "Events",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 4,
      thumbnail:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      title: "Customer Testimonials",
      description: "Testimoni langsung dari pelanggan yang puas",
      duration: "4:15",
      category: "Testimonials",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg
              className="mt-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <FaVideo />
            </svg>
            Video Gallery
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Video{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Stories
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              SumSkuy
            </span>
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Saksikan perjalanan kuliner kami melalui video-video menarik yang
            menampilkan proses, cerita, dan momen berharga
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-1 bg-black/70 text-white text-xs font-bold rounded">
                    {video.duration}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-bold rounded-full">
                    {video.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Player */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-300">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function InstagramFeed() {
  const instagramPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=300&fit=crop",
      likes: 245,
      comments: 18,
      caption: "Fresh dimsum pagi ini! 🥟✨ #SumSkuy #FreshDimsum",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&h=300&fit=crop",
      likes: 189,
      comments: 12,
      caption: "Behind the scenes: Chef sedang membuat hakao special 👨‍🍳",
    },
    {
      id: 3,
      image: "/Gallery/DimsumEstetik.jpeg",
      likes: 312,
      comments: 25,
      caption: "Siomay ikan favorit pelanggan! Sudah coba belum? 🐟",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=300&fit=crop",
      likes: 156,
      comments: 8,
      caption: "Suasana cozy di restaurant kami 🏪💕",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&h=300&fit=crop",
      likes: 278,
      comments: 21,
      caption: "Lumpia shanghai crispy yang selalu sold out! 🔥",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=300&fit=crop",
      likes: 203,
      comments: 15,
      caption: "Happy customers = happy us! 😊 Thank you for the love",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-rose-100 to-orange-100 text-rose-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg
              className="mt-3 w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <FaInstagram />
            </svg>
            Instagram Feed
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Follow{" "}
            <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
              Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-rose-400 via-orange-500 to-amber-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Ikuti perjalanan kuliner kami di Instagram dan jangan lewatkan
            update terbaru dari SumSkuy
          </p>

          <a
            href="https://instagram.com/sumskuy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg
              className="mt-3 w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <FaInstagram />
            </svg>
            Follow @sumskuy
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt="Instagram post"
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="flex items-center justify-center gap-4 mb-2">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm font-semibold">
                          {post.likes}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
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
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <span className="text-sm font-semibold">
                          {post.comments}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs px-2 line-clamp-2">{post.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;

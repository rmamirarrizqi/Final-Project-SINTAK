"use client";

import { useState, useEffect, useMemo } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";

function ContactPage() {
  return (
    <>
      <NavBar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <FAQ />
      <Footer />
    </>
  );
}

function ContactHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingElements = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${6 + Math.random() * 4}s`,
      emoji: ["📞", "📧", "📍", "💬", "🤝", "❤️"][
        Math.floor(Math.random() * 6)
      ],
    }));
  }, []);

  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200/40 to-purple-300/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-pink-300/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating Contact Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute opacity-20 text-2xl"
            style={{
              left: element.left,
              top: element.top,
              animation: `float ${element.duration} ease-in-out infinite`,
              animationDelay: element.delay,
            }}
          >
            {element.emoji}
          </div>
        ))}
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full pointer-events-none z-30 opacity-50 transition-all duration-300 ease-out"
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
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
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Hubungi Kami
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Mari
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Terhubung
            </span>
          </h1>

          <div className="w-32 h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"></div>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-3xl mx-auto mb-8">
            Kami siap membantu Anda dengan{" "}
            <span className="font-semibold text-blue-600">
              pelayanan terbaik
            </span>{" "}
            dan{" "}
            <span className="font-semibold text-purple-600">respon cepat</span>
          </p>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              WhatsApp Kami
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
            </a>

            <a
              href="tel:+622129293939"
              className="group border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Telepon Langsung
            </a>
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

function ContactInfo() {
  const contactMethods = [
    {
      icon: <IoMdCall />,
      title: "Telepon",
      info: "+62 21 2929 3939",
      description: "Senin - Minggu, 09:00 - 22:00",
      action: "tel:+622129293939",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: <MdAttachEmail />,
      title: "Email",
      info: "hello@sumskuy.com",
      description: "Respon dalam 24 jam",
      action: "mailto:hello@sumskuy.com",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      info: "+62 812 3456 7890",
      description: "Chat langsung dengan tim kami",
      action: "https://wa.me/6281234567890",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <ImLocation2 />,
      title: "Alamat Utama",
      info: "Mall Central Park Lt. 3",
      description: "Jakarta Barat, Indonesia",
      action: "#",
      color: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            Informasi Kontak
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Cara{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Menghubungi
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Kami
            </span>
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pilih cara yang paling nyaman untuk Anda berkomunikasi dengan tim
            SumSkuy
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              target={method.action.startsWith("http") ? "_blank" : "_self"}
              rel={
                method.action.startsWith("http") ? "noopener noreferrer" : ""
              }
              className="group bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 text-center"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {method.icon}
                </div>
                <div
                  className={`absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${method.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}
                ></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                {method.title}
              </h3>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                {method.info}
              </p>
              <p className="text-gray-600 text-sm">{method.description}</p>

              {/* Decorative Element */}
              <div
                className={`w-16 h-1 bg-gradient-to-r ${method.color} mx-auto mt-6 rounded-full group-hover:w-24 transition-all duration-300`}
              ></div>
            </a>
          ))}
        </div>

        {/* Operating Hours */}
        <div className="mt-16 bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <svg
                className="w-6 h-6 text-blue-600"
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
              Jam Operasional Customer Service
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
              <div className="text-2xl mb-2">📞</div>
              <h4 className="font-bold text-gray-900 mb-2">Telepon</h4>
              <p className="text-gray-600">Senin - Minggu</p>
              <p className="text-blue-600 font-semibold">09:00 - 22:00</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
              <div className="text-2xl mb-2">💬</div>
              <h4 className="font-bold text-gray-900 mb-2">WhatsApp</h4>
              <p className="text-gray-600">Senin - Minggu</p>
              <p className="text-green-600 font-semibold">24 Jam</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
              <div className="text-2xl mb-2">📧</div>
              <h4 className="font-bold text-gray-900 mb-2">Email</h4>
              <p className="text-gray-600">Respon dalam</p>
              <p className="text-purple-600 font-semibold">24 Jam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    category: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const categories = [
    { value: "general", label: "Pertanyaan Umum" },
    { value: "order", label: "Pemesanan" },
    { value: "complaint", label: "Keluhan" },
    { value: "suggestion", label: "Saran" },
    { value: "partnership", label: "Kerjasama" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        category: "general",
      });

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Kirim Pesan
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Sampaikan{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Pesan
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Anda
            </span>
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Isi form di bawah ini dan tim kami akan merespon pesan Anda dengan
            cepat
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl">
            {submitStatus === "success" && (
              <div className="mb-8 p-4 bg-green-100 border border-green-300 rounded-xl">
                <div className="flex items-center gap-2 text-green-800">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">
                    Pesan berhasil dikirim! Kami akan segera merespon Anda.
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              {/* Phone and Category Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Kategori Pesan *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Subjek *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Ringkasan singkat pesan Anda"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
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
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      Kirim Pesan
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "Bagaimana cara memesan dimsum SumSkuy?",
      answer:
        "Anda bisa memesan melalui beberapa cara: (1) Datang langsung ke cabang terdekat, (2) Telepon ke nomor cabang, (3) WhatsApp ke +62 812 3456 7890, atau (4) Melalui aplikasi delivery partner kami.",
    },
    {
      question: "Apakah SumSkuy melayani delivery?",
      answer:
        "Ya, kami melayani delivery melalui berbagai platform seperti GoFood, GrabFood, dan ShopeeFood. Kami juga menerima pesanan langsung melalui WhatsApp untuk area tertentu.",
    },
    {
      question: "Berapa lama waktu tunggu untuk pesanan?",
      answer:
        "Untuk dine-in, waktu tunggu sekitar 10-15 menit. Untuk delivery, tergantung jarak dan kondisi lalu lintas, biasanya 30-60 menit. Kami akan memberikan estimasi waktu yang akurat saat pemesanan.",
    },
    {
      question: "Apakah ada menu vegetarian?",
      answer:
        "Ya, kami memiliki beberapa pilihan menu vegetarian seperti Dimsum Jamur, Dimsum Wortel, dan beberapa varian lainnya. Silakan tanyakan kepada staff kami untuk rekomendasi menu vegetarian.",
    },
    {
      question: "Bagaimana cara menjadi mitra franchise SumSkuy?",
      answer:
        "Untuk informasi kemitraan franchise, silakan hubungi tim kami melalui email hello@sumskuy.com atau WhatsApp +62 812 3456 7890. Tim business development kami akan menjelaskan syarat dan ketentuan kemitraan.",
    },
    {
      question: "Apakah SumSkuy menerima pesanan untuk acara besar?",
      answer:
        "Ya, kami melayani catering untuk acara besar seperti ulang tahun, meeting, atau acara perusahaan. Silakan hubungi kami minimal 2 hari sebelum acara untuk pemesanan dalam jumlah besar.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            FAQ
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Pertanyaan{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Yang Sering
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Diajukan
            </span>
          </h2>

          <div className="w-32 h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Temukan jawaban untuk pertanyaan yang paling sering ditanyakan
            tentang SumSkuy
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/30 shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-amber-500 to-red-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Masih Ada Pertanyaan?</h3>
              <p className="text-lg mb-6 opacity-90">
                Tim customer service kami siap membantu Anda 24/7 melalui
                WhatsApp
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;

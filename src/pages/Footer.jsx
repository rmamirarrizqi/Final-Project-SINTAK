"use client";

import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-500 via-orange-500 to-amber-500 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Siap Merasakan
            <br />
            <span className="text-yellow-200">Kelezatan SumSkuy?</span>
          </h2>

          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dengan ribuan pelanggan yang telah merasakan pengalaman
            kuliner tak terlupakan bersama kami
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
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
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Hubungi Kami
            </Link>
          </div>

          <div className="mt-12">
            <p className="text-lg mb-6 opacity-90">Follow us on social media</p>
            <div className="flex justify-center gap-4">
              {[
                { name: "Instagram", icon: <FaInstagram />, url: "#" },
                { name: "Facebook", icon: <FaTiktok />, url: "#" },
                { name: "TikTok", icon: <FaFacebook />, url: "#" },
                { name: "YouTube", icon: <FaYoutube />, url: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl hover:bg-white/30 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

"use client";

import { useState, useEffect, useMemo } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function ProductPage() {
  return (
    <>
      <NavBar />
      <ProductHero />
      <ProductCatalog />
      <Footer />
    </>
  );
}

function ProductHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      emoji: ["🥟", "🥠", "🍜", "🥢", "🍱", "🥮"][
        Math.floor(Math.random() * 6)
      ],
    }));
  }, []);

  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
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
        <div className="text-center w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm11 14V6H4v10h12z"
                clipRule="evenodd"
              />
            </svg>
            Menu Kami
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Kelezatan
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Dimsum SumSkuy
            </span>
          </h1>

          <div className="w-32 h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mx-auto mb-8 rounded-full"></div>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-3xl mx-auto mb-8">
            Nikmati berbagai pilihan dimsum autentik dengan{" "}
            <span className="font-semibold text-amber-600">
              kualitas premium
            </span>{" "}
            dan{" "}
            <span className="font-semibold text-red-600">harga terjangkau</span>
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30 shadow-md">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🥟</span>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Varian Menu</p>
                  <p className="text-xl font-bold text-amber-600">25+</p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30 shadow-md">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="text-xl font-bold text-amber-600">4.9/5</p>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30 shadow-md">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Best Seller</p>
                  <p className="text-xl font-bold text-amber-600">Combo 4</p>
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

function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartAnimation, setCartAnimation] = useState(false);

  const categories = [
    { id: "semua", name: "Semua", icon: "🍽️" },
    { id: "paket", name: "Paket", icon: "📦" },
    { id: "satuan", name: "Satuan", icon: "🥟" },
    { id: "frozen", name: "Frozen", icon: "❄️" },
  ];

  const products = {
    paket: [
      {
        id: "combo-4",
        name: "Combo 4",
        description:
          "4 dimsum small, 2 dimsum xl, 2 K-food medium, free chili oil",
        price: 20000,
        image:
          "https://utfs.io/f/1ea6778f-047a-42f5-8487-b2f3cfcbbac6-fpngv6.webp",
        popular: true,
        category: "paket",
      },
      {
        id: "combo-3",
        name: "Combo 3",
        description: "8 dimsum small, 2 K-food, free chili oil",
        price: 15000,
        image:
          "https://utfs.io/f/15b88a93-a4c4-4c91-9757-55b5b4cf1cc2-fpngv5.webp",
        popular: false,
        category: "paket",
      },
      {
        id: "combo-2",
        name: "Combo 2",
        description: "4 dimsum small, 2 dimsum xl, free chili oil",
        price: 11000,
        image:
          "https://utfs.io/f/f01a0246-0c27-4f4f-a959-f2b30fff76d4-fpngv4.webp",
        popular: false,
        category: "paket",
      },
      {
        id: "combo-1",
        name: "Combo 1",
        description: "8 dimsum small",
        price: 10000,
        image:
          "https://utfs.io/f/4dd1526e-a668-4256-9177-4458dea669c9-fpngv3.webp",
        popular: false,
        category: "paket",
      },
    ],
    satuan: [
      {
        id: "bolado",
        name: "Bolado",
        description: "Dimsum dengan tekstur lembut dan rasa yang khas",
        price: 3500,
        image:
          "https://utfs.io/f/a77c1abb-d124-4cab-afad-47503adfdc36-mvowhf.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "ekado",
        name: "Ekado",
        description: "Dimsum dengan isian udang dan sayuran",
        price: 3500,
        image:
          "https://utfs.io/f/a77c1abb-d124-4cab-afad-47503adfdc36-mvowhf.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "dimsum-rambutan-ayam-xl",
        name: "Dimsum Rambutan Ayam (XL)",
        description: "Dimsum ayam berbentuk rambutan dengan ukuran besar",
        price: 3000,
        image:
          "https://utfs.io/f/95833657-ee62-405b-92c1-7a8763d570bc-v4gcae.webp",
        popular: true,
        category: "satuan",
      },
      {
        id: "dimsum-flower-tweaster-xl",
        name: "Dimsum Flower Tweaster (XL)",
        description: "Dimsum berbentuk bunga dengan ukuran besar",
        price: 3000,
        image:
          "https://utfs.io/f/cc83295d-c4f9-45ac-bd07-db07a27c1666-ltptwo.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "dimsum-smoked-beef-xl",
        name: "Dimsum Smoked Beef (XL)",
        description: "Dimsum dengan isian daging sapi asap ukuran besar",
        price: 3000,
        image:
          "https://utfs.io/f/4403df02-70de-4e9c-8c3c-9b19cf3247df-spobt1.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "dimsum-crab-stick-xl",
        name: "Dimsum Crab Stick (XL)",
        description: "Dimsum dengan isian crab stick ukuran besar",
        price: 3000,
        image:
          "https://utfs.io/f/6e60918b-28da-4637-8cca-cf998ab02f1b-5d2o7k.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "dimsum-sosis-ayam-xl",
        name: "Dimsum Sosis Ayam (XL)",
        description: "Dimsum dengan isian sosis ayam ukuran besar",
        price: 3000,
        image:
          "https://utfs.io/f/e9436dab-2edf-4c19-a784-467127cf7402-d624gd.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "dimsum-jamur-xl",
        name: "Dimsum Jamur (XL)",
        description: "Dimsum dengan isian jamur ukuran besar",
        price: 3000,
        image:
          "https://utfs.io/f/54e2871b-fb1a-4940-83b8-6d4750000e8e-al4edz.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "dimsum-wortel-xl",
        name: "Dimsum Wortel (XL)",
        description: "Dimsum dengan topping wortel ukuran besar",
        price: 3000,
        image:
          "https://utfs.io/f/f5e353ac-7a7e-41f0-b5a1-9e9a126e9b3c-aqepch.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "dimsum-ori-xl",
        name: "Dimsum Ori (XL)",
        description: "Dimsum original tanpa topping ukuran besar",
        price: 3000,
        image:
          "https://utfs.io/f/302d9a9b-6f02-4651-be12-ff798ba76ea3-or4918.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "crab-stick",
        name: "Crab Stick",
        description: "Crab stick dengan tekstur kenyal dan rasa gurih",
        price: 2500,
        image:
          "https://utfs.io/f/174ff327-afb9-44df-90f5-bdb5fa067b2c-ojssao.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "scallop",
        name: "Scallop",
        description: "Scallop dengan cita rasa laut yang khas",
        price: 2500,
        image:
          "https://utfs.io/f/20e6d7bd-7d67-4f2f-9a4d-5eaa85611cfe-vlp88i.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "baso-salmon",
        name: "Baso Salmon",
        description: "Bakso dengan isian salmon premium",
        price: 2500,
        image:
          "https://utfs.io/f/b3d69e84-a018-4c15-beda-9e83fb0025f1-rxs1pp.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "fish-roll",
        name: "Fish Roll",
        description:
          "Gulungan ikan dengan tekstur renyah di luar dan lembut di dalam",
        price: 2500,
        image:
          "https://utfs.io/f/86ad2634-0981-4fb9-91b2-4e53d917d541-aeg4lh.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "lobster-ball",
        name: "Lobster Ball",
        description: "Bola lobster dengan cita rasa seafood premium",
        price: 2500,
        image:
          "https://utfs.io/f/5e7317f4-950f-4682-a782-8ba4efb6358e-pzwv2m.webp",
        popular: true,
        category: "satuan",
      },
      {
        id: "dumpling-chicken",
        name: "Dumpling Chicken",
        description: "Dumpling dengan isian ayam yang juicy",
        price: 2500,
        image:
          "https://utfs.io/f/87cf9ebb-7bf9-405e-9c58-f4453659fb2a-ekr8n5.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "dumpling-cheese",
        name: "Dumpling Cheese",
        description: "Dumpling dengan isian keju yang meleleh",
        price: 2500,
        image:
          "https://utfs.io/f/2b438d91-6225-48b6-98fe-db52d8e2058d-43z74d.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "kornet-ayam",
        name: "Kornet Ayam",
        description: "Kornet ayam dengan tekstur lembut dan rasa gurih",
        price: 1500,
        image:
          "https://utfs.io/f/1e4bfbc5-e0c0-446c-b218-1bdd66ce4bfe-x4h579.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "kembang-cumi",
        name: "Kembang Cumi",
        description:
          "Kembang cumi dengan tekstur kenyal dan rasa seafood yang khas",
        price: 1500,
        image:
          "https://utfs.io/f/a54a19d5-f8ed-4b14-9df4-692c1fc86a17-yflabh.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "otak-otak-ikan",
        name: "Otak-otak Ikan",
        description: "Otak-otak ikan dengan bumbu rempah khas Indonesia",
        price: 1500,
        image:
          "https://utfs.io/f/52ede732-14a8-4588-95a3-f77035fbec32-t9ei6c.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "bola-udang",
        name: "Bola Udang",
        description:
          "Bola udang dengan tekstur kenyal dan rasa udang yang khas",
        price: 1500,
        image:
          "https://utfs.io/f/f45ecab8-97af-4cd1-a07e-b5dabf36ade5-6b9d83.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "fish-ball",
        name: "Fish Ball",
        description: "Bola ikan dengan tekstur kenyal dan rasa gurih",
        price: 1500,
        image:
          "https://utfs.io/f/86237404-0cc8-4b3d-b1b8-c74bce7704a1-ae5mfb.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "chikuwa",
        name: "Chikuwa",
        description: "Chikuwa dengan tekstur kenyal dan rasa ikan yang khas",
        price: 1250,
        image:
          "https://utfs.io/f/4aca9804-477f-4f1b-a87c-7949fdd1978b-ccav6g.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "dimsum-wortel-small",
        name: "Dimsum Wortel (small)",
        description: "Dimsum dengan topping wortel ukuran kecil",
        price: 1250,
        image:
          "https://utfs.io/f/ff3bc0e6-c180-475a-8bf2-66d6e5500162-f3fvbc.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "dimsum-ori-small",
        name: "Dimsum Ori (small)",
        description: "Dimsum original tanpa topping ukuran kecil",
        price: 1250,
        image:
          "https://utfs.io/f/7052e1db-f27a-4954-adb5-aa5fe767709b-fkzjtf.webp",
        popular: false,
        category: "satuan",
      },
      {
        id: "bakpao-mini",
        name: "Bakpao Mini",
        description:
          "Bakpao mini dengan varian cokelat, ayam, beef, atau strawberry",
        price: 1000,
        image:
          "https://utfs.io/f/9d414073-bf83-4fec-a5ad-4bb9685cd022-gcafkr.webp",
        popular: true,
        category: "satuan",
      },
    ],
    frozen: [
      {
        id: "dimsum-ayam-premium-200pcs",
        name: "Dimsum Ayam Premium 200pcs",
        description:
          "Dimsum ayam premium berkualitas tinggi, praktis untuk dimasak di rumah. Isi 200pcs.",
        price: 390000,
        image:
          "https://utfs.io/f/7fc8ff75-5a5e-4f83-b0db-c8bf64cf1013-tq2uy0.webp",
        popular: true,
        category: "frozen",
      },
      {
        id: "dimsum-ayam-premium-100pcs",
        name: "Dimsum Ayam Premium 100pcs",
        description:
          "Dimsum ayam premium berkualitas tinggi, praktis untuk dimasak di rumah. Isi 100pcs.",
        price: 200000,
        image:
          "https://utfs.io/f/7fc8ff75-5a5e-4f83-b0db-c8bf64cf1013-tq2uy0.webp",
        popular: false,
        category: "frozen",
      },
      {
        id: "dimsum-ayam-s-200pcs",
        name: "Dimsum Ayam (S) 200pcs",
        description:
          "Dimsum ayam ori dan dimsum ayam wortel ukuran kecil. Isi 200pcs.",
        price: 190000,
        image:
          "https://utfs.io/f/c363ebb2-7528-48ac-8aef-0f41e4e270e6-r09t1b.webp",
        popular: false,
        category: "frozen",
      },
      {
        id: "dimsum-ayam-s-100pcs",
        name: "Dimsum Ayam (S) 100pcs",
        description:
          "Dimsum ayam ori dan dimsum ayam wortel ukuran kecil. Isi 100pcs.",
        price: 100000,
        image:
          "https://utfs.io/f/c363ebb2-7528-48ac-8aef-0f41e4e270e6-r09t1b.webp",
        popular: false,
        category: "frozen",
      },
      {
        id: "chili-oil",
        name: "Chili Oil",
        description:
          "Chili oil khas SumSkuy dengan rasa pedas yang nikmat. Berat 250 gram.",
        price: 35000,
        image:
          "https://utfs.io/f/c17ff4e6-0af0-44e0-b66c-5754b9879e3d-1itygd.webp",
        popular: true,
        category: "frozen",
      },
    ],
  };

  const filteredProducts = useMemo(() => {
    if (!searchQuery) {
      if (activeCategory === "semua") {
        // Combine all products when "Semua" is selected
        return [...products.paket, ...products.satuan, ...products.frozen];
      }
      return products[activeCategory];
    }

    // If there's a search query, filter across all categories when "Semua" is selected
    if (activeCategory === "semua") {
      return [...products.paket, ...products.satuan, ...products.frozen].filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return products[activeCategory].filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeCategory, searchQuery]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    // Trigger animation
    setCartAnimation(true);
    setTimeout(() => setCartAnimation(false), 1000);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-amber-50 relative overflow-hidden">
      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
          }
        }
        .animate-bounce {
          animation: bounce 0.5s ease-in-out;
        }
      `}</style>
      <div className="container mx-auto px-6 relative z-10">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setSearchQuery("");
              }}
              className={`px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-lg"
                  : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-gray-200"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-2xl font-bold text-gray-800">
            {activeCategory === "semua"
              ? "Semua Menu"
              : activeCategory === "paket"
              ? "Paket Hemat"
              : activeCategory === "satuan"
              ? "Menu Satuan"
              : "Frozen Pack"}
          </div>

          <div className="relative w-full md:w-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari menu..."
              className="w-full md:w-64 px-4 py-3 pl-10 bg-white/70 backdrop-blur-sm rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            />
            <svg
              className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
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

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 "
              >
                {/* Image */}
                <div className="relative overflow-hidden h-68 ">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Popular Badge */}
                  {product.popular && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-red-500 text-white text-xs font-bold rounded-full">
                        🔥 Popular
                      </span>
                    </div>
                  )}

                  {/* Quick View Button */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4 h-10">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-amber-600">
                      {formatPrice(product.price)}
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white p-2 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md"
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
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Tidak ada menu yang ditemukan
            </h3>
            <p className="text-gray-600">
              Coba kata kunci lain atau pilih kategori yang berbeda
            </p>
          </div>
        )}

        {/* Floating Cart Button */}
        <button
          onClick={() => setShowCart(!showCart)}
          className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-amber-500 to-red-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <div className="relative">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {totalItems > 0 && (
              <span
                className={`absolute -top-2 -right-2 bg-white text-red-500 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center ${
                  cartAnimation ? "animate-bounce" : ""
                }`}
              >
                {totalItems}
              </span>
            )}
          </div>
        </button>

        {/* Cart Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
            showCart ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col">
            {/* Cart Header */}
            <div className="bg-gradient-to-r from-amber-500 to-red-500 text-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold flex items-center gap-2">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Keranjang Belanja
                </h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-white hover:text-gray-200 transition-colors"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length > 0 ? (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 border-b border-gray-100 pb-4"
                    >
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <p className="text-amber-600 font-semibold">
                          {formatPrice(item.price)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <svg
                              className="w-4 h-4 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M20 12H4"
                              />
                            </svg>
                          </button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <svg
                              className="w-4 h-4 text-gray-600"
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
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Keranjang Kosong
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Tambahkan beberapa menu lezat ke keranjang Anda
                  </p>
                  <button
                    onClick={() => setShowCart(false)}
                    className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Lihat Menu
                  </button>
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-100 p-6 bg-gray-50">
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold text-gray-900">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="relative h-64">
                <img
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-6">
                  <h2 className="text-3xl font-bold text-white">
                    {selectedProduct.name}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 flex-1 overflow-y-auto">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full">
                      {selectedProduct.category === "paket"
                        ? "Paket"
                        : selectedProduct.category === "satuan"
                        ? "Satuan"
                        : "Frozen"}
                    </span>
                    {selectedProduct.popular && (
                      <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full">
                        🔥 Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">
                    {selectedProduct.description}
                  </p>
                  <div className="text-2xl font-bold text-amber-600 mb-6">
                    {formatPrice(selectedProduct.price)}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Overlay for Cart and Modal */}
        {(showCart || selectedProduct) && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => {
              setShowCart(false);
              setSelectedProduct(null);
            }}
          ></div>
        )}
      </div>
    </section>
  );
}

export default ProductPage;

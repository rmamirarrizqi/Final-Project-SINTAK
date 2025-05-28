import React from "react";
import NavBar from "./NavBar";

function AboutPage() {
  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
}

export default AboutPage;

function Hero() {
  return (
    <>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: "url(/About/AboutHero.jpg)",
        }}
      >
        <div className="hero-overlay bg-black opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <div className="flex mb-5 text-5xl font-bold items-center justify-center">
              <h1 className="text-amber-900">Sum</h1>
              <h1 className="text-red-700">Skuy!</h1>
            </div>
            <p className="mb-5">
              Kelezatan autentik dalam setiap gigitan. Dibuat dengan cinta dan
              resep turun temurun.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

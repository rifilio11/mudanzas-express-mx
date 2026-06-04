"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-black/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Mudanzas Express MX
        </div>

        <nav className="hidden md:flex gap-8 text-white">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a
          href="https://wa.me/525512345678"
          target="_blank"
          className="hidden md:block bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-semibold text-white transition"
        >
          Solicitar Cotización
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="flex flex-col gap-4 px-6 py-6 text-white">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>

            <a
              href="https://wa.me/525512345678"
              target="_blank"
              className="bg-orange-500 rounded-xl text-center py-3"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

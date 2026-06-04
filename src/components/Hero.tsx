"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/videos/hero-video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            Mudanzas Express MX
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="text-xl md:text-2xl mt-6 text-gray-200"
          >
            Movemos lo que más importa,
            con seguridad y puntualidad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/525512345678"
              target="_blank"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-white font-semibold transition"
            >
              Solicitar Cotización
            </a>

            <a
              href="#servicios"
              className="border border-white px-8 py-4 rounded-xl text-white"
            >
              Ver Servicios
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-3xl"
      >
        ↓
      </motion.div>
    </section>
  );
}

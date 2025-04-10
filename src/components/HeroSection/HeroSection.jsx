"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center justify-between px-16 py-16 2xl:py-32 min-h-screen relative
      bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400 dark:from-slate-900 dark:via-slate-700 dark:to-slate-900
      text-slate-800 dark:text-slate-200 transition-all duration-500"
      id="hero"
    >
      {/* Texto */}
      <div className="md:w-1/2 text-center md:text-left mt-10 ">
        <motion.h1
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Desarrollo Web{" "}
          <span className="text-blue-600 dark:text-blue-400">Moderno</span> y
          Funcional
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Diseño y desarrollo web profesional para potenciar tu presencia online
          y alcanzar nuevos clientes.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-4 text-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Link
            href="#projects"
            className="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-transparent hover:text-blue-600 border border-blue-600 hover:scale-105 hover:shadow-lg transition"
          >
            Ver Proyectos
          </Link>
          <Link
            href="#contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-lg transition"
          >
            Contacto
          </Link>
        </motion.div>
      </div>

      {/* Imágenes flotantes con entrada animada */}
      <div className="md:w-1/2 flex justify-center relative mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src="/image/note2.webp"
            alt="imagen Notebook"
            width={350}
            height={200}
            className="animate-float"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="absolute top-[-20px] right-[-15px]"
        >
          <Image
            src="/image/celu3.webp"
            alt="imagen Celular"
            width={160}
            height={270}
            className="animate-float-slow"
          />
        </motion.div>
      </div>

      {/* Separador Onda Drástica */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-slate-800 dark:bg-gray-400 clip-path-wave-drastic"></div>
    </section>
  );
};

export default HeroSection;

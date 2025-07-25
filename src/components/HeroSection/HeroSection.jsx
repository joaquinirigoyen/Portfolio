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

        {/* Contenedor de los 2 botones principales */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-4 text-md w-full md:w-auto max-w-sm mx-auto md:mx-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Link
            href="#projects"
            className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-transparent hover:text-blue-600 border border-blue-600 dark:hover:border-gray-200 dark:hover:text-gray-200 hover:scale-105 hover:shadow-lg transition text-center"
          >
            Ver Proyectos
          </Link>
          <Link
            href="#contact"
            className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-transparent hover:text-blue-600 border border-blue-600 dark:hover:border-gray-200 dark:hover:text-gray-200 hover:scale-105 hover:shadow-lg transition text-center"
          >
            Contacto
          </Link>
        </motion.div>

        {/* Botón de CV debajo, con mismo ancho total que los dos botones de arriba */}
        <motion.div
          className="mt-2 w-full md:w-auto max-w-sm mx-auto md:mx-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <a
            href="/CVJoaquinIrigoyen.pdf"
            download
            className="flex items-center justify-center  font-bold border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-105 hover:shadow-lg dark:text-gray-200 dark:border-gray-200 dark:hover:border-blue-600 transition text-center"
          >
            Descargar CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m0 0l-6-6m6 6l6-6"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Imágenes flotantes con entrada animada */}
      {/* Contenedor imágenes flotantes */}
      <div className="md:w-1/2 flex justify-center relative mt-20">
        {/* Notebook */}
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
            className="animate-float w-[240px] sm:w-[300px] md:w-[350px]"
          />
        </motion.div>

        {/* Celular flotante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="absolute top-[-10px] right-[-10px] sm:top-[-15px] sm:right-[-15px] md:top-[-20px] md:right-[-15px]"
        >
          <Image
            src="/image/celu3.webp"
            alt="imagen Celular"
            width={160}
            height={270}
            className="animate-float-slow w-[100px] sm:w-[130px] md:w-[160px]"
          />
        </motion.div>
      </div>

      {/* Separador Onda Drástica */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-slate-800 dark:bg-gray-400 clip-path-wave-drastic"></div>
    </section>
  );
};

export default HeroSection;

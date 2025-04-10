"use client";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative px-16 py-16 2xl:py-32 min-h-screen 
  bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400 dark:from-slate-900 dark:via-slate-700 dark:to-slate-900
  text-slate-800 dark:text-slate-200 transition-all duration-500 flex items-center scroll-mt-10"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-2">
        {/* Imagen */}
        <motion.div
          className="w-full md:w-2/5 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} // Se ejecuta solo una vez
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/image/proyect2.webp"
            alt="joaquin irigoyen"
            width={350}
            height={350}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Contenido */}
        <motion.div
          className="w-full md:w-3/5 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} // Se ejecuta solo una vez
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-2xl text-slate-900 dark:text-gray-200 font-bold mb-4">
            Sobre mí
          </h2>
          {/* Icono de Ubicación */}
          <div className="flex justify-center md:justify-start items-center gap-2 text-gray-700 dark:text-gray-400 mb-4">
            <MapPin size={22} className="text-slate-900 dark:text-gray-200" />
            <span className="text-lg">Neuquén, Argentina</span>
          </div>
          <p className="text-md mb-4">
            Hola! mi nombre es Joaquin Irigoyen y soy técnico en desarrollo web,
            graduado en la{" "}
            <a
              href="https://www.fi.uncoma.edu.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Universidad Nacional del Comahue{" "}
            </a>
            y técnico en programación, egresado de la{" "}
            <a
              href="https://epet20.edu.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              EPET N°20
            </a>
            . Apasionado por la creación de soluciones digitales que combinan
            diseño y funcionalidad.
          </p>
          <p className="text-md mb-4">
            A lo largo de mi trayectoria, he participado en diversos proyectos,
            colaborando con profesionales de diferentes áreas y utilizando
            múltiples tecnologías. Esto me ha permitido fortalecer no solo mis
            habilidades técnicas, sino también desarrollar{" "}
            <strong>trabajo en equipo, comunicación y adaptabilidad</strong>.
          </p>
          <p className="text-md mb-4">
            Mi objetivo es ayudar a <strong>empresas y emprendedores</strong> a
            llevar sus ideas al mundo digital con soluciones a medida,
            eficientes y atractivas.
          </p>
        </motion.div>
      </div>
      {/* Separador Onda Alta */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-slate-800 dark:bg-gray-400 clip-path-wave-high"></div>
    </section>
  );
};

export default AboutSection;

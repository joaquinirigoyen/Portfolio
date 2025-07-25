"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../Mocks/Projects";
import Carousel from "../Carousel/Carousel";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <motion.section
      className="px-16 py-16 2xl:py-32 min-h-screen relative
      bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400 dark:from-slate-900 dark:via-slate-700 dark:to-slate-900
      text-slate-800 dark:text-slate-200 transition-all duration-500 scroll-mt-10"
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div
        className={`max-w-screen-xl mx-auto transition-all duration-300 ${
          selectedProject ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Proyectos
        </motion.h2>
        <motion.p
          className="text-center mb-6 text-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Algunos proyectos en los que estuve trabajando.
        </motion.p>

        {/* Grid responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-slate-700 p-4 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Solo mostrar la primera imagen en las cards */}
              <div className="relative">
                <Image
                  src={(project.images && project.images[0]) || project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.shortDescription}
              </p>
              <div className="flex space-x-3 mt-3 text-2xl">
                {project.technologies}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-300 dark:bg-slate-700 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] relative flex flex-col"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header fijo */}
              <div className="flex-shrink-0 p-6 pb-4 border-b border-gray-400 dark:border-slate-600">
                <button
                  className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors z-10"
                  onClick={() => setSelectedProject(null)}
                >
                  ✖
                </button>
                <h3 className="text-2xl font-bold pr-8">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Contenido con scroll */}
              <div className="flex-1 overflow-y-auto p-6 pt-4">
                {/* Carrusel sin altura fija */}
                <div className="mb-6">
                  <Carousel
                    images={selectedProject.images || [selectedProject.image]}
                    title={selectedProject.title}
                  />
                </div>

                {/* Descripción */}
                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Tecnologías */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">
                    Tecnologías utilizadas:
                  </h4>
                  <div className="flex flex-wrap gap-3 text-2xl">
                    {selectedProject.technologies}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.github && (
                    <Link
                      href={selectedProject.github}
                      target="_blank"
                      className="inline-flex items-center justify-center px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors"
                    >
                      Ver en GitHub
                    </Link>
                  )}
                  {selectedProject.link && (
                    <Link
                      href={selectedProject.link}
                      target="_blank"
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Ir al Sitio
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Separador Onda Suave */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-slate-800 dark:bg-gray-400 clip-path-wave"></div>
    </motion.section>
  );
};

export default Projects;

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../Mocks/Projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      className="px-16 py-16 2xl:py-32 min-h-screen relative
      bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400 dark:from-slate-900 dark:via-slate-700 dark:to-slate-900
      text-slate-800 dark:text-slate-200 transition-all duration-500 scroll-mt-10"
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} // Se ejecuta solo una vez
    >
      <div
        className={`max-w-screen-xl mx-auto transition-all duration-300 ${
          selectedProject ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* <h2 className="text-4xl font-bold text-center mb-12">Proyectos</h2> */}

        <motion.h2
          className="text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Se ejecuta solo una vez
          transition={{ duration: 1 }}
        >
          Proyectos
        </motion.h2>
        <motion.p
          className="text-center mb-6 text-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Se ejecuta solo una vez
          transition={{ duration: 1 }}
        >
          Algunos proyectos en los que estuve trabajando.{" "}
        </motion.p>

        {/* Grid responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-slate-700 p-4 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg"
              />
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
              className="bg-gray-300 dark:bg-slate-700 p-6 rounded-lg shadow-xl max-w-lg w-full relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 dark:text-gray-300"
                onClick={() => setSelectedProject(null)}
              >
                ✖
              </button>
              <h3 className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h3>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={500}
                height={300}
                className="rounded-lg"
              />
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {selectedProject.longDescription}
              </p>

              {/* Links Condicionales */}
              <div className="flex flex-col sm:flex-row justify-between mt-4 space-y-2 sm:space-y-0">
                {selectedProject.github && !selectedProject.link && (
                  <Link
                    href={selectedProject.github}
                    target="_blank"
                    className="text-blue-500 text-lg"
                  >
                    Ver en GitHub
                  </Link>
                )}
                {selectedProject.link && (
                  <Link
                    href={selectedProject.link}
                    target="_blank"
                    className="text-blue-500 text-lg"
                  >
                    Ir al Sitio
                  </Link>
                )}
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

"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar el scroll para cambiar la transparencia del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra el menú en móviles al hacer clic en una sección
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Aplica un desplazamiento suave en toda la página
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 py-6 px-4 sm:px-6 lg:px-8 shadow-md transition-all duration-500 ${
          isScrolled
            ? "bg-gray-300/50 dark:bg-slate-800/50 backdrop-blur-md"
            : "bg-gray-300 dark:bg-slate-800"
        } text-slate-800 dark:text-slate-200`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="text-2xl font-bold">
            Web Developer
          </a>
          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-6 text-md">
            <a href="#about" className="hover:text-blue-500 transition">
              Sobre mí
            </a>
            <a href="#technologies" className="hover:text-blue-500 transition">
              Tecnologías
            </a>
            <a href="#projects" className="hover:text-blue-500 transition">
              Proyectos
            </a>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contacto
            </a>
            <ThemeToggle />
          </div>
          <div className="md:hidden 2xl:hidden text-2xl flex justify-between items-center space-x-4">
            {/* switch de menú móvil */}
            <div>{isOpen ? <ThemeToggle /> : <ThemeToggle />}</div>
            {/* Botón de menú móvil */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="z-60 relative"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil a pantalla completa */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } ${
          isScrolled
            ? "bg-gray-300/90 dark:bg-slate-800/90 backdrop-blur-md"
            : "bg-gray-300 dark:bg-slate-800"
        }`}
      >
        {/* Contenido del menú centrado */}
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          <a
            href="#about"
            className="hover:text-blue-500 transition-colors duration-200 text-slate-800 dark:text-slate-200"
            onClick={closeMenu}
          >
            Sobre mí
          </a>
          <a
            href="#technologies"
            className="hover:text-blue-500 transition-colors duration-200 text-slate-800 dark:text-slate-200"
            onClick={closeMenu}
          >
            Tecnologías
          </a>
          <a
            href="#projects"
            className="hover:text-blue-500 transition-colors duration-200 text-slate-800 dark:text-slate-200"
            onClick={closeMenu}
          >
            Proyectos
          </a>
          <a
            href="#contact"
            className="hover:text-blue-500 transition-colors duration-200 text-slate-800 dark:text-slate-200"
            onClick={closeMenu}
          >
            Contacto
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

"use client";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300 dark:bg-slate-800 text-slate-800 dark:text-slate-200 py-6 transition-all duration-500 bottom-0 shadow-md w-full">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/joaquin.iri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/joaquinirigoyen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/joaquin-conrado-irigoyen-896499228/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      {/* Derechos reservados */}
      <div className="text-center text-md mt-4 opacity-75">
        © 2025 Todos los derechos reservados | Desarrollado por{" "}
        <span className="font-bold">Joaquín Irigoyen :{")"}</span>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import { FaWhatsapp } from "react-icons/fa";

const WppButton = () => {
  return (
    <a
      href="https://wa.me/2995277455?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios.%20%C2%BFPodr%C3%ADas%20ayudarme%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-slate-800 text-gray-200  hover:bg-gray-200 hover:text-slate-800 dark:bg-gray-200 dark:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-gray-200 w-14 h-14 flex items-center justify-center rounded-full text-3xl shadow-lg transition-all z-50"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WppButton;

// "use client";
// import { useState, useEffect } from "react";
// import Switch from "react-switch";

// const ThemeToggle = () => {
//   const [checked, setChecked] = useState(false);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme") || "light";
//     setChecked(storedTheme === "dark");
//     document.documentElement.classList.toggle("dark", storedTheme === "dark");
//   }, []);

//   const handleChange = () => {
//     const newTheme = checked ? "light" : "dark";
//     setChecked(!checked);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   return (
//     <Switch
//       onChange={handleChange}
//       checked={checked}
//       offColor="#ccc"
//       onColor="#333"
//       uncheckedIcon={false}
//       checkedIcon={false}
//       handleDiameter={20}
//       height={24}
//       width={48}
//       className="ml-4"
//     />
//   );
// };

// export default ThemeToggle;

// "use client";
// import { useState, useEffect } from "react";
// import ThemeToggle from "../ThemeToggle/ThemeToggle";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Detectar el scroll para cambiar la transparencia del navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Cierra el menú en móviles al hacer clic en una sección
//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     // Aplica un desplazamiento suave en toda la página
//     document.documentElement.style.scrollBehavior = "smooth";
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-50 top-0 py-6 px-4 sm:px-6 lg:px-8 shadow-md transition-all duration-500 ${
//         isScrolled
//           ? "bg-gray-300/50 dark:bg-slate-800/50 backdrop-blur-md"
//           : "bg-gray-300 dark:bg-slate-800"
//       } text-slate-800 dark:text-slate-200`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <a href="#hero" className="text-2xl font-bold">
//           Web Developer
//         </a>

//         {/* Menú Desktop */}
//         <div className="hidden md:flex space-x-6">
//           <a href="#about" className="hover:text-blue-500 transition">
//             Sobre mí
//           </a>
//           <a href="#technologies" className="hover:text-blue-500 transition">
//             Tecnologías
//           </a>
//           <a href="#projects" className="hover:text-blue-500 transition">
//             Proyectos
//           </a>
//           <a href="#contact" className="hover:text-blue-500 transition">
//             Contacto
//           </a>
//           <ThemeToggle />
//         </div>

//         {/* Botón de menú móvil */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-2xl"
//         >
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Menú móvil con transparencia */}
//       <div
//         className={`absolute top-full left-0 w-full transition-all duration-300 ease-in-out z-50 ${
//           isOpen
//             ? "max-h-screen opacity-100"
//             : "max-h-0 opacity-0 overflow-hidden"
//         } ${
//           isScrolled
//             ? "bg-gray-300/90 dark:bg-slate-800/90   backdrop-blur-md"
//             : "bg-gray-300 dark:bg-slate-800"
//         }`}
//       >
//         <div className="flex flex-col items-center space-y-4 py-4">
//           <a
//             href="#about"
//             className="hover:text-blue-500 transition"
//             onClick={closeMenu}
//           >
//             Sobre mí
//           </a>
//           <a
//             href="#technologies"
//             className="hover:text-blue-500 transition"
//             onClick={closeMenu}
//           >
//             Tecnologías
//           </a>
//           <a
//             href="#projects"
//             className="hover:text-blue-500 transition"
//             onClick={closeMenu}
//           >
//             Proyectos
//           </a>
//           <a
//             href="#contact"
//             className="hover:text-blue-500 transition"
//             onClick={closeMenu}
//           >
//             Contacto
//           </a>
//           <ThemeToggle />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// SECCION CONTACTO SIN VALIDACION DE FORMULARIO

// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Formulario enviado", formData);
//   };

//   return (
//     <motion.section
//       className="h-screen flex items-center justify-center px-8 py-12
//       bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400 dark:from-slate-900 dark:via-slate-700 dark:to-slate-900
//       text-slate-800 dark:text-slate-200 transition-all duration-500 scroll-mt-10"
//       id="contact"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }} // Se ejecuta solo una vez
//       transition={{ duration: 1 }}
//     >
//       <div className="max-w-lg w-full">
//         <motion.h2
//           className="text-4xl font-bold text-center mb-2"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }} // Se ejecuta solo una vez
//           transition={{ duration: 1 }}
//         >
//           Contacto
//         </motion.h2>
//         <motion.p
//           className="text-center mb-6 text-lg"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }} // Se ejecuta solo una vez
//           transition={{ duration: 1 }}
//         >
//           Si tienes alguna consulta, ¡no dudes en contactarme!
//         </motion.p>

//         {/* Formulario */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-slate-800 dark:bg-gray-300 p-6 rounded-xl shadow-xl"
//         >
//           <div className="grid grid-cols-1 gap-4 mb-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Nombre"
//               value={formData.name}
//               onChange={handleChange}
//               className="px-4 py-2 border border-gray-300 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-200 dark:border-gray-700"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Correo electrónico"
//               value={formData.email}
//               onChange={handleChange}
//               className="px-4 py-2 border border-gray-300 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-200 dark:border-gray-700"
//             />
//             <input
//               type="text"
//               name="subject"
//               placeholder="Asunto"
//               value={formData.subject}
//               onChange={handleChange}
//               className="px-4 py-2 border border-gray-300 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-200 dark:border-gray-700"
//             />
//             <textarea
//               name="message"
//               placeholder="Mensaje"
//               value={formData.message}
//               onChange={handleChange}
//               rows="4"
//               className="px-4 py-2 border border-gray-300 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-200 dark:border-gray-700"
//             />
//           </div>

//           <motion.button
//             type="submit"
//             className="w-full px-6 py-3 bg-slate-800 text-gray-200 border-gray-300 border dark:border-slate-800 dark:text-slate-800 dark:bg-gray-300 rounded-lg transition-all duration-300
//                    hover:bg-gray-300 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-gray-200 hover:scale-105 hover:shadow-lg active:scale-95"
//           >
//             Enviar
//           </motion.button>
//         </form>
//       </div>
//     </motion.section>
//   );
// };

// export default ContactSection;

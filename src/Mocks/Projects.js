// mocks/projects.js
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiFlutter,
  SiExpo,
  SiJquery,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const projects = [
  {
    title: "QTH.SRL",
    shortDescription:
      "Desarrollé el sitio web para QTH.SRL, una empresa constructora de Neuquén, creando una plataforma funcional y moderna para mostrar sus servicios y proyectos.",
    longDescription:
      "Diseñé y desarrollé el sitio web de QTH.SRL, enfocándome en una interfaz clara y profesional. Utilicé HTML5, CSS, JavaScript, Figma y Tailwind CSS para crear un diseño responsivo que se adapta a cualquier dispositivo. La web incluye secciones clave como servicios, proyectos y contacto, optimizadas para una navegación intuitiva y eficiente.",
    image: "/image/proyectos/qth.png",
    link: "https://qthsrl.com",
    github: "https://github.com/tuusuario/ecommerce",
    technologies: [
      <FaHtml5 key="html" />,
      <FaCss3Alt key="css" />,
      <FaJs key="javascript" />,
      <SiFigma key="figma" />,
      <SiTailwindcss key="tailwind" />,
    ],
  },
  {
    title: "TechnoMate",
    shortDescription:
      "Tienda online desarrollada con arquitectura MVC, que incluye un menú dinámico, autenticación con captcha GD, y gestión de productos y usuarios.",
    longDescription:
      "Techno Mate es una tienda online enfocada en la venta de mates, yerbas y bombillas, diseñada con una arquitectura MVC en PHP y MySQL. Cuenta con una vista pública para explorar productos e información de la tienda, y una vista privada con autenticación de usuarios mediante captcha GD. Dependiendo del rol (cliente, depósito o administrador), los usuarios pueden realizar distintas acciones, como compras, gestión de stock y administración del sitio. Se implementaron Ajax-JQuery para mejorar la interacción y Bootstrap para un diseño responsivo y accesible.",
    image: "/image/proyectos/technomate.png",
    github: "https://github.com/joaquinirigoyen/TechnoMate",
    technologies: [
      <FaPhp key="php" />,
      <SiMysql key="mysql" />,
      <SiJquery key="jquery" />,
      <FaBootstrap key="boostrap" />,
    ],
  },
  {
    title: "Hockey´S",
    shortDescription:
      "Hockey’s es una tienda online de palos de hockey desarrollada con React, que permite filtrar productos, ver detalles y navegar dinámicamente con React Router.",
    longDescription:
      "Hockey’s es una tienda online de palos de hockey desarrollada con React, utilizando MOCKS para simular los productos. Cuenta con una interfaz dinámica, un filtro de búsqueda en tiempo real y navegación fluida mediante React Router. Al seleccionar un palo, se accede a una página con detalles como materiales, peso y recomendaciones.",
    image: "/image/proyectos/hockeys.png",
    github: "https://github.com/joaquinirigoyen/Hockey-s",
    technologies: [
      <FaReact key="react" />,
      <FaJs key="javascript" />,
      <SiTailwindcss key="tailwind" />,
    ],
  },
];

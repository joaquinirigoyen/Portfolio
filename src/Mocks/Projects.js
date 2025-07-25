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
  SiReact,
  SiLaravel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const projects = [
  {
    title: "QTH.SRL",
    shortDescription:
      "Sitio web para QTH.SRL, una empresa constructora de Neuquén, creando una plataforma funcional y moderna para mostrar sus servicios y proyectos.",
    longDescription:
      "Diseñé y desarrollé el sitio web de QTH.SRL, enfocándome en una interfaz clara y profesional. Utilicé HTML5, CSS, JavaScript, Figma y Tailwind CSS para crear un diseño responsivo que se adapta a cualquier dispositivo. La web incluye secciones clave como servicios, proyectos y contacto, optimizadas para una navegación intuitiva y eficiente.",
    images: [
      "/image/proyectos/qth/qth.png",
      "/image/proyectos/qth/proyectos.png",
      "/image/proyectos/qth/contacto.png",
    ],
    link: "https://qthsrl.com",
    technologies: [
      <FaHtml5 key="html" />,
      <FaCss3Alt key="css" />,
      <FaJs key="javascript" />,
      <SiFigma key="figma" />,
      <SiTailwindcss key="tailwind" />,
    ],
  },
  {
    title: 'CasinoPrint("$$$")',
    shortDescription:
      "Casino online multiplataforma con juegos propios, carga de saldo vía Mercado Pago y actualización en tiempo real con Socket.IO. Proyecto final de carrera.",
    longDescription:
      "Casino Print fue nuestro proyecto final de carrera, desarrollado en equipo. Consiste en un casino online y su versión móvil (React Native) con funcionalidades completas: registro de usuarios, inicio de sesión, y carga de dinero mediante la pasarela de pago Mercado Pago. Los juegos (tragamonedas, ruleta, blackjack, entre otros) fueron desarrollados íntegramente con Phaser.js, y los assets gráficos diseñados en Aseprite. Utilizamos React para la versión web, React Native para mobile, Node.js con Express para el backend y PostgreSQL como base de datos. Todo el diseño y flujo fue planificado en Figma.",

    longDescription:
      "Casino Print fue nuestro proyecto final de carrera, desarrollado en equipo 'grupo 404-Allin'. El trabajo se baso en crear un casino online multiplataforma con funcionalidades completas: registro e inicio de sesión de usuarios, carga de saldo a través de Mercado Pago, y una selección de juegos originales como ruleta, tragamonedas y blackjack. Todos los juegos fueron desarrollados desde cero con Phaser.js y los assets gráficos diseñados en Aseprite, sin utilizar librerías de estilos ni CSS, lo que representó un gran desafío técnico y visual. Implementamos una arquitectura sólida con React para el frontend web, React Native para la version mobile, Node.js con Express para el backend, PostgreSQL como base de datos y Socket.IO para la actualización en tiempo real del estado del usuario, como el saldo o los movimientos dentro del juego. Fue un proyecto largo que integró todo lo aprendido en la carrera, donde cada línea de código reflejó trabajo en equipo, esfuerzo y pasión por lo que hacemos.",

    images: [
      "/image/proyectos/casinoprint/ruleta.png",
      "/image/proyectos/casinoprint/tragamonedas.png",
      "/image/proyectos/casinoprint/blackjak.png",
      "/image/proyectos/casinoprint/monedas.png",
      "/image/proyectos/casinoprint/login.png",
      "/image/proyectos/casinoprint/movimientos.png",
      "/image/proyectos/casinoprint/historial.png",
    ],
    technologies: [
      <FaReact key="react" />,
      <SiExpress key="express" />,
      <FaNodeJs key="node" />,
      <SiPostgresql key="postgres" />,
      <SiTailwindcss key="tailwind" />,
    ],
  },
  {
    title: "TechnoMate",
    shortDescription:
      "Tienda online desarrollada con arquitectura MVC, que incluye un menú dinámico, autenticación con captcha GD, y gestión de productos y usuarios.",
    longDescription:
      "Techno Mate es una tienda online enfocada en la venta de mates, yerbas y bombillas, diseñada con una arquitectura MVC en PHP y MySQL. Cuenta con una vista pública para explorar productos e información de la tienda, y una vista privada con autenticación de usuarios mediante captcha GD. Dependiendo del rol (cliente, depósito o administrador), los usuarios pueden realizar distintas acciones, como compras, gestión de stock y administración del sitio. Se implementaron Ajax-JQuery para mejorar la interacción y Bootstrap para un diseño responsivo y accesible.",
    images: [
      "/image/proyectos/tecnomate/tecnomate.png",
      "/image/proyectos/tecnomate/tecnomateinicio.png",
      "/image/proyectos/tecnomate/tecnomateCliente.png",
      "/image/proyectos/tecnomate/tecnomateCliente2.png",
      "/image/proyectos/tecnomate/tecnomateAdministrador.png",
      "/image/proyectos/tecnomate/tecnomateAdministrador2.png",
      "/image/proyectos/tecnomate/tecnomateDeposito.png",
      "/image/proyectos/tecnomate/tecnomateDeposito2.png",
    ],
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
    images: [
      "/image/proyectos/hockeys/hockeys.png",
      "/image/proyectos/hockeys/buscador.png",
      "/image/proyectos/hockeys/descripcion.png",
    ],
    github: "https://github.com/joaquinirigoyen/Hockey-s",
    technologies: [
      <FaReact key="react" />,
      <FaJs key="javascript" />,
      <SiTailwindcss key="tailwind" />,
    ],
  },
  {
    title: "Blog App",
    shortDescription:
      "Aplicación web de tipo blog desarrollada con Laravel, que permite a los usuarios registrarse, autenticarse y gestionar publicaciones con una interfaz clara y organizada.",
    longDescription:
      "Esta aplicación web fue construida utilizando Laravel como framework principal y funciona como una plataforma de blogs. Los usuarios pueden registrarse, iniciar sesión y crear, editar o eliminar sus propias publicaciones. La navegación está dividida en tres secciones: 'Posts', donde se ven todos los artículos del sitio; 'Mis Posts', que muestra solo las publicaciones del usuario autenticado; y 'Nuevo Post', para crear nuevas entradas. El proyecto implementa autenticación integrada, controladores, migraciones, validaciones y relaciones entre modelos, siguiendo buenas prácticas del ecosistema Laravel.",
    images: [
      "/image/proyectos/posts/login.png",
      "/image/proyectos/posts/login2.png",
      "/image/proyectos/posts/posts.png",
      "/image/proyectos/posts/misposts.png",
      "/image/proyectos/posts/nuevopost.png",
      "/image/proyectos/posts/editarpost.png",
    ],
    github: "https://github.com/joaquinirigoyen/posts-web", // reemplazá esta URL si es distinta
    technologies: [
      <SiLaravel key="laravel" />,
      <FaPhp key="php" />,
      <FaHtml5 key="html" />,
      <FaCss3Alt key="css" />,
      <SiMysql key="mysql" />,
    ],
  },
];

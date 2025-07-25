"use client";
import { motion } from "framer-motion";
import Link from "next/link";
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
  SiMongodb,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const technologies = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact />, link: "https://react.dev/" },
      { name: "Next.js", icon: <SiNextdotjs />, link: "https://nextjs.org/" },
      {
        name: "JavaScript",
        icon: <FaJs />,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "HTML",
        icon: <FaHtml5 />,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
        link: "https://tailwindcss.com/",
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap />,
        link: "https://getbootstrap.com/",
      },
      { name: "Figma", icon: <SiFigma />, link: "https://www.figma.com/" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "PHP", icon: <FaPhp />, link: "https://www.php.net/" },
      { name: "Laravel", icon: <FaLaravel />, link: "https://laravel.com/" },
      {
        name: "Express.js",
        icon: <SiExpress />,
        link: "https://expressjs.com/",
      },
      { name: "Node.js", icon: <FaNodeJs />, link: "https://nodejs.org/" },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        link: "https://www.mongodb.com/",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        link: "https://www.postgresql.org/",
      },
      { name: "MySQL", icon: <SiMysql />, link: "https://www.mysql.com/" },
      { name: "Java", icon: <FaJava />, link: "https://www.java.com/" },
    ],
  },
  {
    title: "Mobile",
    items: [
      {
        name: "React Native",
        icon: <FaReact />,
        link: "https://reactnative.dev/",
      },
      { name: "Flutter", icon: <SiFlutter />, link: "https://flutter.dev/" },
      { name: "Expo", icon: <SiExpo />, link: "https://expo.dev/" },
    ],
  },
];

const Technologies = () => {
  return (
    <section
      className="px-16 py-16 2xl:py-32 min-h-screen relative
      bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400 dark:from-slate-900 dark:via-slate-700 dark:to-slate-900
      text-slate-800 dark:text-slate-200 transition-all duration-500 scroll-mt-10"
      id="technologies"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Título con animación */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Se ejecuta solo una vez
          transition={{ duration: 1 }}
        >
          Tecnologías
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {technologies.map((category) => (
            <motion.div
              key={category.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Se ejecuta solo una vez
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>

              {/* Contenedor de tecnologías */}
              <div className="grid grid-cols-3 gap-6 justify-center">
                {category.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} // Se ejecuta solo una vez
                    className="flex flex-col items-center space-y-2"
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={tech.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span
                        className="text-5xl transition-all duration-300"
                        style={{ color: "inherit" }}
                      >
                        {tech.icon}
                      </span>
                    </Link>
                    <p className="text-lg">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Separador Onda Irregular */}
      <div className="absolute bottom-0 left-0 w-full h-14 bg-slate-800 dark:bg-gray-400 clip-path-wave-irregular"></div>
    </section>
  );
};

export default Technologies;

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [state, handleSubmit] = useForm("xrbpzgdr");

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    } else if (formData.name.length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo no es válido.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es obligatorio.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje no puede estar vacío.";
    } else if (formData.message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await handleSubmit(e);
      if (state.succeeded) {
        alert("Mensaje enviado con éxito");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        setSubmitted(true);
      }
    }
  };

  return (
    <motion.section
      className="h-screen flex items-center justify-center px-8 py-12 
      bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400 dark:from-slate-900 dark:via-slate-700 dark:to-slate-900
      text-slate-800 dark:text-slate-200 transition-all duration-500 scroll-mt-10"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-lg w-full">
        <motion.h2
          className="text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Contacto
        </motion.h2>
        <motion.p
          className="text-center mb-6 text-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Si tienes alguna consulta, ¡no dudes en contactarme!
        </motion.p>

        <form
          onSubmit={onSubmit}
          className="bg-slate-800 dark:bg-gray-300 p-6 rounded-xl shadow-xl"
        >
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-200 dark:border-gray-700"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-200 dark:border-gray-700"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-200 dark:border-gray-700"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-gray-200 dark:border-gray-700"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full px-6 py-3 border-2 font-bold bg-slate-800 text-gray-200 border-gray-300  dark:border-slate-800 dark:text-slate-800 dark:bg-gray-300 rounded-lg transition-all duration-300 
                   hover:bg-gray-300 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-gray-200 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Enviar
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactSection;

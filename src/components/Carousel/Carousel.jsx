"use client";
import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = ({
  images,
  title,
  className = "",
  showDots = true,
  showArrows = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si solo hay una imagen, no mostrar controles
  if (images.length <= 1) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={images[0] || "/placeholder.svg"}
          alt={title}
          width={800}
          height={500}
          className="rounded-lg mx-auto max-w-full h-auto"
        />
      </div>
    );
  }

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Imagen principal */}
      <Image
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`${title} - Imagen ${currentIndex + 1}`}
        width={800}
        height={500}
        className="rounded-lg mx-auto max-w-full h-auto"
      />

      {/* Flechas de navegación */}
      {showArrows && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70"
            aria-label="Imagen anterior"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70"
            aria-label="Siguiente imagen"
          >
            <FiChevronRight size={20} />
          </button>
        </>
      )}

      {/* Indicadores de puntos */}
      {showDots && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => goToSlide(index, e)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Contador de imágenes */}
      <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Carousel;

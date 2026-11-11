import React, { useState, useEffect } from "react";
import { FaSearchPlus } from "react-icons/fa";
import naturalezaImg from "../../assets/naturaleza.jpg";
import dronImg from "../../assets/dron.jpg";
import culturaTradicionImg from "../../assets/culturaTradicion.png";
import eleccionReinaImg from "../../assets/eleccionReina.png";
import motoVelocidadImg from "../../assets/motoVelocidad.png";
import tradicionImg from "../../assets/tradicion.png";
import "./Gallery.css";

function Gallery() {
  const [modalData, setModalData] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const openModal = (src, alt) => setModalData({ src, alt });
  const closeModal = () => setModalData(null);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (modalData) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => document.body.classList.remove("modal-open");
  }, [modalData]);

  const images = [
    { src: eleccionReinaImg, category: "eventos", title: "Elección Reina de Pelileo", alt: "Gala de Elección Reina de Pelileo" },
    { src: culturaTradicionImg, category: "eventos", title: "Cultura y Tradición", alt: "Presentación artística cultural y tradicional" },
    { src: motoVelocidadImg, category: "eventos", title: "Motovelocidad en Acción", alt: "Competencia de motovelocidad" },
    { src: tradicionImg, category: "eventos", title: "Desfile y Tradición", alt: "Comparsa y desfile tradicional" },
    { src: naturalezaImg, category: "naturaleza", title: "Atardecer en los Andes", alt: "Fotografía de paisaje y atardecer" },
    { src: dronImg, category: "naturaleza", title: "Tomas Aéreas con Dron", alt: "Producción aérea con dron en entorno natural" },
  ];

  const filteredImages =
    selectedFilter === "all"
      ? images
      : images.filter((img) => img.category === selectedFilter);

  const filterNames = {
    all: "Todas",
    eventos: "Eventos",
    naturaleza: "Naturaleza",
  };

  return (
    <>
      <section id="galeria" className="gallery">
        <div className="container">
          <div className="gallery-header">
            <h2 className="section-title">Portafolio Fotográfico</h2>
            <p className="gallery-lead">
              Una muestra seleccionada de nuestros proyectos visuales más destacados y memorables.
            </p>
          </div>

          {/* Filtros */}
          <div className="gallery-filters">
            {["all", "eventos", "naturaleza"].map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${selectedFilter === filter ? "active" : ""}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filterNames[filter]}
              </button>
            ))}
          </div>

          {/* Grid de imágenes */}
          <div className="gallery-grid">
            {filteredImages.map((img, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openModal(img.src, img.title)}
              >
                <img src={img.src} alt={img.alt} className="gallery-image" loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-icon" aria-hidden="true">
                    <FaSearchPlus size={16} />
                  </div>
                  <div className="gallery-overlay-info">
                    <span>{filterNames[img.category]}</span>
                    <h3>{img.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Lightbox */}
      {modalData && (
        <div className="modal show" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={closeModal} aria-label="Cerrar vista previa">
              &times;
            </button>
            <img
              src={modalData.src}
              alt={modalData.alt}
              className="modal-image"
            />
            <div className="modal-caption">
              <h3>{modalData.alt}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;

import React, { useState, useEffect } from "react";
import { FaSearchPlus } from "react-icons/fa";
import naturalezaImg from "../../assets/naturaleza.jpg";
import dronImg from "../../assets/dron.jpg";
import lionImg from "../../assets/lion.png";
import lion1Img from "../../assets/lion1.png";
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
    { src: dronImg, category: "eventos", title: "Tomas Aéreas & Eventos", alt: "Fotografía aérea con dron" },
    { src: naturalezaImg, category: "naturaleza", title: "Naturaleza & Paisajes", alt: "Fotografía de naturaleza" },
    { src: lionImg, category: "retratos", title: "Sesión Retrato de Estudio", alt: "Retrato profesional de estudio" },
    { src: lion1Img, category: "bodas", title: "Momentos Inolvidables", alt: "Fotografía de bodas y ceremonias" },
    { src: dronImg, category: "bodas", title: "Celebración al Aire Libre", alt: "Boda al aire libre" },
    { src: naturalezaImg, category: "retratos", title: "Retrato Artístico Exterior", alt: "Retrato artístico" },
  ];

  const filteredImages =
    selectedFilter === "all"
      ? images
      : images.filter((img) => img.category === selectedFilter);

  const filterNames = {
    all: "Todas",
    retratos: "Retratos",
    bodas: "Bodas",
    eventos: "Eventos",
    naturaleza: "Naturaleza"
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
            {["all", "retratos", "bodas", "eventos", "naturaleza"].map((filter) => (
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

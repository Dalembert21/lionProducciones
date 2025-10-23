import React, { useState, useEffect } from "react";
import naturalezaImg from "../../assets/naturaleza.jpg";
import lionImg from "../../assets/lion.png";

function Gallery() {
  const [modalData, setModalData] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const openModal = (src, alt) => setModalData({ src, alt });
  const closeModal = () => setModalData(null);

  // 🔒 Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = modalData ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [modalData]);

  const images = [
    { src: naturalezaImg, category: "retratos", alt: "Retrato profesional" },
    { src: lionImg, category: "bodas", alt: "Fotografía de boda" },
    { src: lionImg, category: "eventos", alt: "Fotografía de evento" },
    { src: lionImg, category: "naturaleza", alt: "Fotografía de naturaleza" },
    { src: lionImg, category: "retratos", alt: "Retrato profesional 2" },
  ];

  // 🔍 Filtrar imágenes
  const filteredImages =
    selectedFilter === "all"
      ? images
      : images.filter((img) => img.category === selectedFilter);

  return (
    <>
      {/* Sección Galería */}
      <section id="galeria" className="gallery">
        <div className="container">
          <h2 className="section-title">Mi Galería</h2>

          {/* Filtros */}
          <div className="gallery-filters">
            {["all", "retratos", "bodas", "eventos", "naturaleza"].map(
              (filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${
                    selectedFilter === filter ? "active" : ""
                  }`}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter === "all"
                    ? "Todas"
                    : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              )
            )}
          </div>

          {/* Grid de imágenes */}
          <div className="gallery-grid">
            {filteredImages.map((img, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openModal(img.src, img.alt)}
              >
                <img src={img.src} alt={img.alt} className="gallery-image" />
                <div className="gallery-overlay">
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalData && (
        <div className="modal show" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
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

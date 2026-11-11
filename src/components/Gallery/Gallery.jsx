import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaSearchPlus } from "react-icons/fa";
import naturalezaImg from "../../assets/naturaleza.jpg";
import dronImg from "../../assets/dron.jpg";
import culturaTradicionImg from "../../assets/culturaTradicion.png";
import eleccionReinaImg from "../../assets/eleccionReina.png";
import motoVelocidadImg from "../../assets/motoVelocidad.png";
import tradicionImg from "../../assets/tradicion.png";
import "./Gallery.css";

const GALLERY_IMAGES = [
  { id: "reina-pelileo", src: eleccionReinaImg, category: "eventos", title: "Elección Reina de Pelileo", alt: "Gala de Elección Reina de Pelileo" },
  { id: "cultura-tradicion", src: culturaTradicionImg, category: "eventos", title: "Cultura y Tradición", alt: "Presentación artística cultural y tradicional" },
  { id: "moto-velocidad", src: motoVelocidadImg, category: "eventos", title: "Motovelocidad en Acción", alt: "Competencia de motovelocidad" },
  { id: "desfile-tradicion", src: tradicionImg, category: "eventos", title: "Desfile y Tradición", alt: "Comparsa y desfile tradicional" },
  { id: "atardecer-andes", src: naturalezaImg, category: "naturaleza", title: "Atardecer en los Andes", alt: "Fotografía de paisaje y atardecer" },
  { id: "tomas-dron", src: dronImg, category: "naturaleza", title: "Tomas Aéreas con Dron", alt: "Producción aérea con dron en entorno natural" },
];

const FILTER_NAMES = {
  all: "Todas",
  eventos: "Eventos",
  naturaleza: "Naturaleza",
};

const FILTER_KEYS = ["all", "eventos", "naturaleza"];

function Gallery() {
  const [modalData, setModalData] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [renderedFilter, setRenderedFilter] = useState("all");
  const [isReloading, setIsReloading] = useState(false);
  const switchTimerRef = useRef(null);

  const openModal = (src, alt) => setModalData({ src, alt });
  const closeModal = () => setModalData(null);

  // Precargar y decodificar imágenes para evitar tirones al cambiar de filtro
  useEffect(() => {
    GALLERY_IMAGES.forEach((item) => {
      const preload = new Image();
      preload.src = item.src;
      if (typeof preload.decode === "function") {
        preload.decode().catch(() => {});
      }
    });

    return () => {
      if (switchTimerRef.current) {
        clearTimeout(switchTimerRef.current);
      }
    };
  }, []);

  // Bloquear scroll cuando el modal está abierto y permitir cerrar con Escape
  useEffect(() => {
    if (!modalData) {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
      return;
    }

    document.documentElement.classList.add("modal-open");
    document.body.classList.add("modal-open");

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
    };
  }, [modalData]);

  const handleFilterChange = (nextFilter) => {
    if (nextFilter === selectedFilter) return;

    setSelectedFilter(nextFilter);
    setIsReloading(true);

    if (switchTimerRef.current) {
      clearTimeout(switchTimerRef.current);
    }

    switchTimerRef.current = setTimeout(() => {
      setRenderedFilter(nextFilter);
      setIsReloading(false);
    }, 220);
  };

  const filteredImages =
    renderedFilter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === renderedFilter);

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
          <div className="gallery-filters" role="tablist" aria-label="Filtrar portafolio por categoría">
            {FILTER_KEYS.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={selectedFilter === filter}
                className={`filter-btn ${selectedFilter === filter ? "active" : ""}`}
                onClick={() => handleFilterChange(filter)}
              >
                {FILTER_NAMES[filter]}
              </button>
            ))}
          </div>

          {/* Barra sutil de recarga al cambiar categoría */}
          <div className={`gallery-loader ${isReloading ? "active" : ""}`} aria-hidden="true">
            <span className="gallery-loader-bar" />
          </div>

          {/* Escenario y Grid de imágenes */}
          <div className="gallery-stage">
            <div
              key={renderedFilter}
              className={`gallery-grid ${isReloading ? "is-reloading" : "is-ready"}`}
            >
              {filteredImages.map((img, index) => (
                <div
                  key={`${renderedFilter}-${img.id}`}
                  className="gallery-item"
                  style={{ animationDelay: `${index * 55}ms` }}
                  onClick={() => openModal(img.src, img.title)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="gallery-image"
                    decoding="async"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-icon" aria-hidden="true">
                      <FaSearchPlus size={16} />
                    </div>
                    <div className="gallery-overlay-info">
                      <span>{FILTER_NAMES[img.category]}</span>
                      <h3>{img.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Lightbox (Portal en body para evitar choques con stacking contexts) */}
      {modalData &&
        createPortal(
          <div className="modal show" onClick={closeModal} role="dialog" aria-modal="true" aria-label={modalData.alt}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button type="button" className="close" onClick={closeModal} aria-label="Cerrar vista previa">
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
          </div>,
          document.body
        )}
    </>
  );
}

export default Gallery;

import React from "react";
import lionImage from "../../assets/lion.png";
import "./Main.css";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Capturando Momentos <span className="highlight">Únicos</span>
          </h1>

          <p className="hero-subtitle">
            Fotografía profesional, producción audiovisual y cobertura de eventos exclusivos con calidad cinematográfica y atención a cada detalle.
          </p>

          <div className="hero-buttons">
            <a href="#galeria" className="btn btn-primary">
              Ver Mi Trabajo
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Contactar
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-frame">
            <img
              src={lionImage}
              alt="Fotografía principal de Lion Producciones"
              className="hero-main-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

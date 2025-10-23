import React from "react";
import lionImage from "../../assets/lion.png";


function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Capturando Momentos Únicos</h1>
        <p className="hero-subtitle">
          Fotografía profesional, contratos para eventos......
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

      <div className="hero-image">
        <img
          src={lionImage}
          alt="Fotografía principal de Lion Producciones"
          className="hero-main-image"
        />
      </div>
    </section>
  );
}

export default Hero;

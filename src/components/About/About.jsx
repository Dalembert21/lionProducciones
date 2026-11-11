import React from "react";
import lionImg from "../../assets/lion.png";
import "./About.css";

function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre Nosotros</h2>

            <p className="about-lead">
              Lion Producciones: más de 5 años creando historias visuales conmovedoras a través de la lente.
            </p>

            <p className="about-description">
              En Lion Producciones creemos firmemente que cada fotografía debe inmortalizar una emoción auténtica. Nos especializamos en cobertura integral de eventos culturales, sociales y deportivos, así como fotografía de naturaleza y paisajes.
            </p>

            <p className="about-description">
              Combinamos técnica fotográfica avanzada, iluminación de estudio y equipos de última generación para entregar resultados con estética cinematográfica y acabados impecables.
            </p>

            <div className="stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Sesiones Realizadas</p>
              </div>
              <div className="stat">
                <h3>100+</h3>
                <p>Clientes Satisfechos</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Años de Experiencia</p>
              </div>
            </div>
          </div>

          <div className="about-image-wrapper">
            <img
              src={lionImg}
              alt="Fotógrafo profesional de Lion Producciones"
              className="about-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

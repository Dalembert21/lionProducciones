import React from "react";
import lionImg from "../../assets/lion.png";
import "./About.css";

function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre Mí</h2>

            <p className="about-lead">
              Soy Dalembert Bravo, fotógrafo profesional y creador detrás de Lion Producciones.
            </p>

            <p className="about-description">
              Con más de 5 años de trayectoria creando historias visuales conmovedoras a través de la lente, creo firmemente que cada fotografía debe inmortalizar una emoción auténtica. Me especializo en retratos de autor, cobertura integral de bodas y producción de eventos de alto nivel.
            </p>

            <p className="about-description">
              Combino técnica fotográfica avanzada, iluminación de estudio y equipos de última generación para entregar resultados con estética cinematográfica y acabados impecables.
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

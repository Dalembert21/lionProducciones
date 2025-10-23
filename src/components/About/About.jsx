import React from "react";
import lionImg from "../../assets/lion.png"; // ajusta la ruta si es necesario

function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre Nosotros</h2>

            <p className="about-description">
              Soy un fotógrafo apasionado con más de 5 años de experiencia capturando momentos únicos e irrepetibles. 
              Mi especialidad se centra en retratos, bodas y eventos especiales, donde busco contar historias a través de la lente.
            </p>

            <p className="about-description">
              Cada sesión es una oportunidad para crear arte y preservar recuerdos que durarán toda la vida. 
              Mi enfoque es natural y espontáneo, capturando la esencia real de cada momento.
            </p>

            <div className="stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Fotos Realizadas</p>
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

          <div className="about-image">
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

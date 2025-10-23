import React from "react";
import { FaFacebookF, FaTiktok, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import './Footer.css';

const Contact = () => {
  return (
    <>
      {/* Sección Contacto */}
      <section id="contacto" className="contact">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>¡Hablemos de tu próximo proyecto!</h3>
              <p>
                En lion producciones estamos para ayudarte a capturar esos momentos especiales.
                Contáctame para discutir tu proyecto fotográfico.
              </p>

              <div className="contact-details">
                <div className="contact-item">
  <FaPhoneAlt color="#ff9800" size={20} style={{ marginRight: "10px" }} />
  <span>+593 991323507</span>
</div>
                <div className="contact-item">
                  <FaEnvelope color="#d44638" size={20} style={{ marginRight: "10px" }} />
                  <span>tu@email.com</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt color="#2196f3" size={20} style={{ marginRight: "10px" }} />
                  <span>Tu Ciudad, País</span>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-circle tiktok" aria-label="TikTok">
                  <FaTiktok />
                </a>
                <a href="#" className="social-circle facebook" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="mailto:tu@email.com" className="social-circle email" aria-label="Correo">
                  <FaEnvelope />
                </a>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <input type="text" id="nombre" name="nombre" placeholder="Tu Nombre" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Tu Email" required />
              </div>
              <div className="form-group">
                <input type="text" id="asunto" name="asunto" placeholder="Asunto" required />
              </div>
              <div className="form-group">
                <textarea id="mensaje" name="mensaje" placeholder="Tu Mensaje" rows="5" required />
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer FUERA de la sección contacto */}
      <footer className="footer">
        <div className="container">
          <p>
            &copy; 2025 Lion Producciones - Fotografía y grabación Profesional. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
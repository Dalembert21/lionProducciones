import React, { useState } from "react";
import { FaFacebookF, FaTiktok, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import "./Footer.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
    }, 4000);
  };

  return (
    <>
      {/* Sección Contacto */}
      <section id="contacto" className="contact">
        <div className="container">
          <h2 className="section-title">Contáctanos</h2>

          <div className="contact-content">
            <div className="contact-info">
              <h3>Hablemos de tu próximo proyecto</h3>
              <p className="contact-intro">
                En Lion Producciones estamos listos para asesorarte y plasmar momentos inolvidables. 
                Cuéntanos tu idea para cotizar coberturas de eventos, producción audiovisual o tomas aéreas.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon" aria-hidden="true">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">Teléfono / WhatsApp</span>
                    <a href="tel:+593984505182" className="contact-item-value">098 450 5182</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon" aria-hidden="true">
                    <FaEnvelope size={16} />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">Correo Electrónico</span>
                    <a href="mailto:juank.jhoan51@gmail.com" className="contact-item-value">juank.jhoan51@gmail.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon" aria-hidden="true">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">Ubicación</span>
                    <span className="contact-item-value">Pelileo, Tungurahua — Ecuador</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="https://www.tiktok.com/@lionproducciones?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Visitar TikTok de Lion Producciones">
                  <FaTiktok />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100067922707331" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Visitar Facebook de Lion Producciones">
                  <FaFacebookF />
                </a>
                <a href="mailto:juank.jhoan51@gmail.com" className="social-circle" aria-label="Enviar correo electrónico">
                  <FaEnvelope />
                </a>
              </div>
            </div>

            <div className="contact-form-card">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre" className="form-label">Nombre Completo</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Ej. Juan Pérez"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tucorreo@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="asunto" className="form-label">Tipo de Evento o Servicio</label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    placeholder="Ej. Cobertura de Evento / Producción con Dron"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje" className="form-label">Detalles del Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos fechas estimadas, lugar y requerimientos..."
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-form-submit">
                  {submitted ? "¡Mensaje Enviado!" : "Enviar Mensaje"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Copyright */}
      <footer className="footer">
        <div className="container footer-content">
          <p>
            &copy; 2026 <span className="footer-brand">Lion Producciones</span>. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
            Fotografía profesional, producción cinematográfica y cobertura de eventos exclusivos.
          </p>
          <p style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "0.25rem" }}>
            Desarrollado por <span className="footer-brand">DalpaSoft</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;

import React from "react";
import lionLogo from "../../assets/lion.png"; // 👈 ruta correcta

function Header() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img
            src={lionLogo}
            alt="Lion Producciones Logo"
            className="logo-image"
          />
          <h2>Lion Producciones</h2>
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#inicio" className="nav-link">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#galeria" className="nav-link">Galería</a>
          </li>
          <li className="nav-item">
            <a href="#sobre-mi" className="nav-link">Sobre Mí</a>
          </li>
          <li className="nav-item">
            <a href="#contacto" className="nav-link">Contacto</a>
          </li>
        </ul>

        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Header;

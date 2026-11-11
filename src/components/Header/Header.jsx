import React from "react";
import lionLogo from "../../assets/lion.png";
import "./Header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#inicio" className="nav-logo" aria-label="Lion Producciones Inicio">
          <img
            src={lionLogo}
            alt="Lion Producciones Logo"
            className="logo-image"
          />
          <h2>Lion Producciones</h2>
        </a>

        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#inicio" className="nav-link">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#galeria" className="nav-link">Galería</a>
          </li>
          <li className="nav-item">
            <a href="#sobre-mi" className="nav-link">Sobre Nosotros</a>
          </li>
          <li className="nav-item">
            <a href="#contacto" className="nav-link">Contacto</a>
          </li>
        </ul>

        <button className="hamburger" aria-label="Abrir menú de navegación">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;

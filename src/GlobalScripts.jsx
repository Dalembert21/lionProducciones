import { useEffect } from "react";

function GlobalScripts() {
  useEffect(() => {
    // Menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
      const toggleMenu = () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      };
      hamburger.addEventListener('click', toggleMenu);

      // Cerrar menú al hacer clic en un enlace
      document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }));

      return () => {
        // Cleanup al desmontar
        hamburger.removeEventListener('click', toggleMenu);
      };
    }
  }, []);

  useEffect(() => {
    // Smooth scroll para todos los enlaces de ancla
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    anchors.forEach(a => a.addEventListener('click', handleClick));
    
    return () => anchors.forEach(a => a.removeEventListener('click', handleClick));
  }, []);

  // Puedes agregar aquí otros useEffect para:
  // - scroll en navbar
  // - animaciones con IntersectionObserver
  // - modal global
  // - preloader
  // etc.

  return null; // No renderiza nada
}

export default GlobalScripts;

import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <img src="/espana.png" alt="" className="logo" />
        <ul className="footer-menu">
          <p>Contactos</p>
          <li className="footer-menu-item">luisenriquechambitapia@gmail.com</li>
          <li className="footer-menu-item">+34 602 40 68 14</li>
          <li className="footer-menu-item">+55 (67) 99671 8791</li>
        </ul>

        <ul className="footer-menu">
          <p>Mapa del sitio</p>
          <li className="footer-menu-item">Home</li>
          <li className="footer-menu-item">Contactos </li>
          <li className="footer-menu-item">LinkedIn </li>
        </ul>

        <div className="socials">
          <a href="https://github.com/LouisFaker" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/luis.enrique.tapia/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com/Luis_Enrique_CT" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100093713913694"
            target="_blank"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </div>
      </div>
      <div className="footer-info">
        <div className="rights">
        <img src="/espana.png" alt="" className="logo-footer" />
          <p>Luis Enrique &copy; 2023 Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

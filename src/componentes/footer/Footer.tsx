import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <img src="/espana.png" alt="" className="logo" />
        <ul className="footer-menu">
          <p>Empresa</p>
          <li className="footer-menu-item">Sobre</li>
          <li className="footer-menu-item">Empleos</li>
          <li className="footer-menu-item">For the record</li>
        </ul>

        <ul className="footer-menu">
          <p>Lugares para viajar</p>
          <li className="footer-menu-item">Viaje junto a Barbie Dreamhousev2</li>
          <li className="footer-menu-item">Para Usted</li>
          <li className="footer-menu-item">Lineas Aereas</li>
          <li className="footer-menu-item">Marcas</li>
          <li className="footer-menu-item">Fornecedores</li>
        </ul>

        <ul className="footer-menu">
          <p>Compra Segura</p>
          <li className="footer-menu-item">Soporte</li>
          <li className="footer-menu-item">Terminos y condiciones</li>
          <li className="footer-menu-item">App movil gratis</li>
        </ul>

        <div className="socials">
          <a href="https://www.instagram.com/louis._.airlines/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com/louis_airlines" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100082210016307"
            target="_blank"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </div>
      </div>
      <div className="footer-info">
        <ul className="footer-info-items">
          <li className="footer-info-item">Nuestra Historia</li>
          <li className="footer-info-item">Centro de Privacidad</li>
          <li className="footer-info-item">Política de privacidad</li>
          <li className="footer-info-item">Cookies</li>
          <li className="footer-info-item">Inversores</li>
        </ul>
        <div className="rights">
          <div className="country">
            <p>España</p>
            <img src="/espana.png" alt="" className="logo2" />
          </div>
          <p>&copy; 2023 Barbie Airlines</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

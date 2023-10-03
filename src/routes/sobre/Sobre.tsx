import LinkNav from "../linknav/LinkNav";
import "./Sobre.css";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/logo-luis.png" className="logo-img" alt="Logo" />
        <span className="logo-text">ㅤ</span>
      </div>
      <nav>
        <ul>
          <li>
          <LinkNav texto="Home" url="https://portfolio-louisfaker.vercel.app/" />
          </li>
          <li>
          <LinkNav texto="Contactos" url="https://wa.me/5567996718791" />
          </li>
          <li>
          <LinkNav texto="Sobre" url="https://www.linkedin.com/in/luis-enrique-174018273/" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
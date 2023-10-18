import LinkNav from "../../routes/linknav/LinkNav";
import "./Header.css";

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
            <LinkNav texto="Home" url="/" />
          </li>
          <li>
            <LinkNav texto="Contactos" url="/contato" />
          </li>
          <li>
            <LinkNav
              texto="Sobre"
              url="/sobre"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

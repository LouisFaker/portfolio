import Link from "../link/link";
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
            <Link texto="Home" url="/" />
          </li>
          <li>
            <Link texto="Contactos" url="/contato" />
          </li>
          <li>
            <Link
              texto="Sobre"
              url="/sobre"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

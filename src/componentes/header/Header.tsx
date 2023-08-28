import Link from "../link/link";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img
          src= "/logo-luis.png"
        />
        <span className="logo-text">ㅤ</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link texto="Home" />
            <Link texto="Sobre" />
          </li>
          <li>
            <Link texto="Linkedin" />
          </li>
          <li>
            <Link texto="Contacto" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
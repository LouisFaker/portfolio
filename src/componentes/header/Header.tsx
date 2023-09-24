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
          <Link texto="Home" url="https://portfolio-louisfaker.vercel.app/" />
          </li>
          <li>
          <Link texto="Contactos" url="https://wa.me/5567996718791" />
          </li>
          <li>
          <Link texto="LinkedIn" url="https://www.linkedin.com/in/luis-enrique-174018273/" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

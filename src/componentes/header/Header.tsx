import Link from "../link/link";
import "./Header.css";
// import logo from "/logo-barbie.png" 
// import Link from './../link/link';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img
          // src={logo}  // em vez referenciar diretamente a imagem a pasta public, devemos realizar a mesma usando a propiedade "import ... from ".
          src= "/logo-barbie.png"  // em vez referenciar diretamente a imagem a pasta public, devemos realizar a mesma usando a propiedade "import ... from ".
          //porque chaves, devido ao JSX, sendo assim faça o uso das mesmas e apos isso adicionar o nome da variavel da logo importada anteriormente.
          // alt="Logo da Barbie"
          className="logo-img"
        />
        <span className="logo-text">ㅤ</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link texto="Home" />
            <Link texto="imagenes" />
          </li>
          <li>
            <Link texto="Sobre" />
          </li>
          <li>
            <Link texto="Contacto" />
          </li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}

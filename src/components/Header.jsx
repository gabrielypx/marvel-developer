import "../styles/header.css";
import HeaderLogo from "../assets/imgs/header-logo.svg";

function Header() {
  return (
    <div className="content-header">
      <img src={HeaderLogo} />
      <nav className="menu-header">
        <ul>
          <li>
            <a href="#" id="nav-home">
              Home
            </a>
          </li>
          <li>
            <a href="#" id="nav-characters">
              Characters
            </a>
          </li>
          <li>
            <a href="#" id="nav-comics">
              Comics
            </a>
          </li>
          <li>
            <a href="#" id="nav-movies">
              Movies
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

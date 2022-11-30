import "../styles/footer.css";
import IconFacebook from "../assets/imgs/icon-facebook.svg";
import IconInstagram from "../assets/imgs/icon-instagram.svg";
import IconTwitter from "../assets/imgs/icon-twitter.svg";
import Wrapper from "./Wrapper";

function Footer() {
  return (
    <Wrapper>
      <div className="content-footer">
        <nav className="icons-footer">
          <ul>
            <li><a href="https://pt-br.facebook.com/MarvelBR/"><img src={IconFacebook}/></a></li>
            <li><a href="https://www.instagram.com/marvel/"><img src={IconInstagram}/></a></li>
            <li><a href="https://twitter.com/marvel"><img src={IconTwitter}/></a></li>
          </ul>
        </nav>
          <p className="text-designed">Designed and developed by <span>gabriely paitax</span></p>
      </div>
    </Wrapper>
  );
}

export default Footer;

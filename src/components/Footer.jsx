import "../styles/footer.css";
import IconFacebook from "../assets/imgs/icon-facebook.svg";
import IconInstagram from "../assets/imgs/icon-instagram.svg";
import IconTwitter from "../assets/imgs/icon-twitter.svg";

function Footer() {
  return (
    <div className="content-footer">
      <nav className="icons-footer">
        <ul>
          <li><a href="#"><img src={IconFacebook}/></a></li>
          <li><a href="#"><img src={IconInstagram}/></a></li>
          <li><a href="#"><img src={IconTwitter}/></a></li>
        </ul>
      </nav>
      <div>
        <p className="text-designed">Designed and developed by <span>gabriely paitax</span></p>
      </div>
    </div>
  );
}

export default Footer;

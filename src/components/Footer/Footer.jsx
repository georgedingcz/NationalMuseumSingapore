import { Link } from "react-router-dom";
import Awards from "./Awards";
import QRcode from "./QRcode";
import "./Footer.css";
import Socials from "./Socials";
import GeneralInfo from "./GeneralInfo";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Socials />
      </div>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/dd/NSMLogo.png"
          alt="NSM text logo"
          className="nsmLogo"
        />
      </div>
      <div>
        <GeneralInfo />
      </div>
      <div>
        <QRcode />
      </div>
      <div>
        <Awards />
      </div>
      <div>
        <Link to="/contact-us">Contact Us</Link>
      </div>
      <div>
        <a href="https://www.tech.gov.sg/report_vulnerability">
          Report Vulnerability
        </a>
        <br />
        <Link to="/privacy">Privacy Statement</Link>
        <br />
        <Link to="/terms-of-use">Terms of Use</Link>
        <br />
      </div>
    </footer>
  );
}

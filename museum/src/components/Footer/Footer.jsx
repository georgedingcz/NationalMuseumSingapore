import { Link } from "react-router-dom";
import Awards from "./Awards";
import QRcode from "./QRcode";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="page-container">
      Footer
      <div>
        <a href="https://www.facebook.com/National.Museum.of.Singapore/">
          <img
            src="https://w7.pngwing.com/pngs/643/742/png-transparent-facebook-logo-social-media-computer-icons-facebook-social-network-fb-trademark-logo-desktop-wallpaper.png"
            alt="Facebook Icon"
            className="socialsIcon"
          />
        </a>
        <a href="https://www.instagram.com/natmuseum_sg/?hl=en">
          <img
            src="https://i.pinimg.com/originals/34/b4/e1/34b4e119d868c5a82176e1073a1ff9ef.jpg"
            alt="Instagram Icon"
            className="socialsIcon"
          />
        </a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fnatmuseum_sg%3Flang%3Den">
          <img
            src="https://as1.ftcdn.net/v2/jpg/03/20/88/34/1000_F_320883488_PMmkQget359WtY6foB1xFN3Wcvus6WTM.jpg"
            alt="Twitter Icon"
            className="socialsIcon"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCWXjiuvQMS-EoI2W4kQpieg">
          <img
            src="https://banner2.cleanpng.com/20191001/coa/transparent-social-media-icon-youtube-icon-5d9472b68c0299.7858818215700097825735.jpg"
            alt="YouTube Icon"
            className="socialsIcon"
          />
        </a>
        <a href="https://www.tripadvisor.com.sg/Attraction_Review-g294265-d324550-Reviews-National_Museum_of_Singapore-Singapore.html">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968989.png"
            alt="TripAdvisor Icon"
            className="socialsIcon"
          />
        </a>
      </div>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/dd/NSMLogo.png"
          alt="NSM text logo" className="nsmLogo"
        />
      </div>
      <div>
        Subscribe to our newsletter
        <Link to="/subscribe">
          <button>SUBSCRIBE</button>
        </Link>
      </div>
      <div>Opening hours and address card</div>
      <div>Links to other pages</div>
      <div>
        <QRcode />
      </div>
      <div>
        <Awards />
      </div>
      <div>Link to contact us page</div>
      <div>Links to optional pages</div>
    </footer>
  );
}

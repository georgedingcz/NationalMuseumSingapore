import Awards from "./Awards";
import NSMlogo from "./NSMlogo";
import QRcode from "./QRcode";
import Socials from "./Socials";
import Subscription from "./Subscription";

export default function Footer() {
  return (
    <footer>
      Footer
      <div>
        <Socials />
      </div>
      <div>
        <NSMlogo />
      </div>
      <div>
        <Subscription />
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

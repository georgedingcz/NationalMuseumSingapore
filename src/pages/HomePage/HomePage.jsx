import MuseumCard from "../../components/Museum/MuseumCard";
import TicketingButton from "../../components/TicketingButton/TicketingButton";
import "../HomePage/HomePage.css";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

export default function HomePage() {
  const card = {
    id: "aonw",
    img: "https://picsum.photos/id/237/300/200",
    title: "An Old New World: Digital Edition",
    dura: "EXHIBITION | PERMANENT",
    desc: "An Old New World: Digital Edition allows you to virtually explore the exhibition An Old New World: From the East Indies to the Founding of Singapore, 1600s–1819, which features personal collections from the...",
    info: ["Free admissions", "Free admissions"],
  };
  return (
    <div className="page-container">
      <div className="section-container">
        <MuseumCard />
        <TicketingButton />
      </div>

      <div className="section-container">
        <h2>Happening Now</h2>
        <Card card={card} />
        <Link to="/itinerary">
          <button>ITINERARY PLANNER</button>
        </Link>
      </div>

      <div className="section-container">
        <h2>Exhibitions</h2>
        <Card card={card} />
        <Link to="/map">
          <button>MUSEUM MAP</button>
        </Link>
      </div>
    </div>
  );
}

import MuseumCard from "../../components/Museum/MuseumCard";
import TicketingButton from "../../components/TicketingButton/TicketingButton";
import "../HomePage/HomePage.css";
import HomePageCardCollection from "../../components/Card/HomePageCardCollection";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="page-container">
      <div className="section-container">
        <MuseumCard />
        <TicketingButton />
      </div>

      <div className="section-container">
        <h2>Happening Now</h2>
        <HomePageCardCollection />
        <Link to="/itinerary">
          <button>ITINERARY PLANNER</button>
        </Link>
      </div>

      <div className="section-container">
        <h2>Exhibitions</h2>
        <HomePageCardCollection />
        <Link to="/map">
          <button>MUSEUM MAP</button>
        </Link>
      </div>
    </div>
  );
}

import MuseumCard from "../../components/Museum/MuseumCard";
import TicketingButton from "../../components/TicketingButton/TicketingButton";
import "../HomePage/HomePage.css";
import { Link } from "react-router-dom";
import Homepage_HappeningNow from "../../components/Card/Homepage_HappeningNow";
import Homepage_Exhibition from "../../components/Card/Homepage_Exhibition";

export default function HomePage() {
  return (
    <div className="page-container">
      <div className="section-container">
        <MuseumCard />
        <TicketingButton />
      </div>

      <div className="section-container">
        <h2>Happening Now</h2>
        <Homepage_HappeningNow />
        <Link to="/itinerary">
          <button>ITINERARY PLANNER</button>
        </Link>
      </div>

      <div className="section-container">
        <h2>Exhibitions</h2>
        <Homepage_Exhibition />
        <Link to="/map">
          <button>MUSEUM MAP</button>
        </Link>
      </div>
    </div>
  );
}

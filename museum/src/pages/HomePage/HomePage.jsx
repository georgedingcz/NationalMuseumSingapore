import MuseumCard from "../../components/Museum/MuseumCard";
import ItineraryButton from "../../components/Itinerary/ItineraryButton";
import MapButton from "../../components/MapButton/MapButton";
import TicketingButton from "../../components/TicketingButton/TicketingButton";
import Exhibition from "../Exhibition/Exhibition";
import "../HomePage/HomePage.css";

export default function HomePage() {
  return (
    <>
      <div className="museumIntro">
        <MuseumCard />
      </div>
      <div>
        <TicketingButton />
      </div>
      <div className="happeningNow">
        <h2>Happening Now</h2>
        <Exhibition />
      </div>
      <div>
        <ItineraryButton />
      </div>
      <div className="exhibitions">
        <h2>Exhibitions</h2>
        <Exhibition />
      </div>
      <div>
        <MapButton />
      </div>
    </>
  );
}

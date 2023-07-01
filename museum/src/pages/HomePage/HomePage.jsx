import MuseumCard from "../../components/Museum/MuseumCard";
import ItineraryButton from "../../components/Itinerary/ItineraryButton";
import MapButton from "../../components/MapButton/MapButton";
import TicketingButton from "../../components/TicketingButton/TicketingButton";
import "../HomePage/HomePage.css";
import Card from "../../components/Card/Card";

export default function HomePage() {
  const card = {
    id : "aonw",
    img : "https://picsum.photos/id/237/300/200",
    title : "An Old New World: Digital Edition",
    dura : "EXHIBITION | PERMANENT",
    desc : "An Old New World: Digital Edition allows you to virtually explore the exhibition An Old New World: From the East Indies to the Founding of Singapore, 1600s–1819, which features personal collections from the...",
    info : ["Free admissions", "Free admissions"]
};
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
        <Card card={card}/>
      </div>
      <div>
        <ItineraryButton />
      </div>
      <div className="exhibitions">
        <h2>Exhibitions</h2>
        <Card card={card}/>
      </div>
      <div>
        <MapButton />
      </div>
    </>
  );
}

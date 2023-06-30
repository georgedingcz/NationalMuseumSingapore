import ExhibitionCard from "../../components/Card/ExhibitionCard";
import MuseumCard from "../../components/Card/MuseumCard/MuseumCard";
import TicketingButton from "../../components/TicketingButton/TicketingButton";
import Exhibition from "../Exhibition/Exhibition";

export default function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <div>
        <MuseumCard />
      </div>
      <div>
        <TicketingButton />
      </div>
      <div>
        <h2>Happening Now</h2>
        <Exhibition />
      </div>
      <div>
        <h2>Exhibitions</h2>
        <Exhibition />
      </div>
    </>
  );
}

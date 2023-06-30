import DateOfVisit from "../../components/Itinerary/DateOfVisit";
import DurationOfVisit from "../../components/Itinerary/DurationOfVisit";
import ExhibitionSelector from "../../components/Itinerary/ExhibitionSelector";
import ItineraryPicture from "../../components/Itinerary/ItineraryPicture";
import VisitorType from "../../components/Itinerary/VisitorType";

export default function ItineraryPage() {
  return (
    <>
      <div>
        <ItineraryPicture />
      </div>
      <h1>Itinerary Planner</h1>
      <div>
        <DateOfVisit />
      </div>
      <div>
        <DurationOfVisit />
      </div>
      <div>
        <ExhibitionSelector />
      </div>
      <div>
        <VisitorType />
      </div>
    </>
  );
}

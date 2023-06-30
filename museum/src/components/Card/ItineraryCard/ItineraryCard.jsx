import DateOfVisit from "./DateOfVisit";
import DurationOfVisit from "./DurationOfVisit";
import ExhibitionSelector from "./ExhibitionSelector";
import VisitorType from "./VisitorType";

export default function ItineraryCard() {
  return (
    <>
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

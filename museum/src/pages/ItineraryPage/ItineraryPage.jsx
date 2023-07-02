import { Link } from "react-router-dom";
import Dropbox from "../../components/Dropbox/Dropbox";
import DateOfVisit from "../../components/Itinerary/DateOfVisit";
import DurationOfVisit from "../../components/Itinerary/DurationOfVisit";
import ExhibitionSelector from "../../components/Itinerary/ExhibitionSelector";
import ItineraryPicture from "../../components/Itinerary/ItineraryPicture";
import VisitorType from "../../components/Itinerary/VisitorType";

export default function ItineraryPage() {
  const dropbox = {
    date : ["Current and Upcoming", "Past"],
    duration: ["2 hours", "3 hours", "5 hours","Full day"],
    exhibitions: ["Permanent Galleries", "Special Exhibitions", "Digital", "All Exhibitions"],
    type : ["For All", "Adults", "Children", "Families", "Seniors", "Special Needs", "Students", "Teachers"],
}
  return (
    <div className="page-container">
      <div>
        <ItineraryPicture />
      </div>
      <h1>Itinerary Planner</h1>
      <div>
        <Dropbox dropbox={dropbox}/>
      </div>
      <div>
        <Link to="/itinerary/select">SHOW MY ITINERARY</Link>
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
}

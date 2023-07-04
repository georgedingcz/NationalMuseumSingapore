import { Link } from "react-router-dom";
import Dropbox from "../../components/Dropbox/Dropbox";
import ItineraryPicture from "../../components/Itinerary/ItineraryPicture";

export default function ItineraryPage() {
  const dropbox = {
    date: ["Current and Upcoming", "Past"],
    duration: ["2 hours", "3 hours", "5 hours", "Full day"],
    exhibitions: [
      "Permanent Galleries",
      "Special Exhibitions",
      "Digital",
      "All Exhibitions",
    ],
    type: [
      "For All",
      "Adults",
      "Children",
      "Families",
      "Seniors",
      "Special Needs",
      "Students",
      "Teachers",
    ],
  };
  return (
    <div className="page-container">
      <div>
        <ItineraryPicture />
      </div>
      <h1>Itinerary Planner</h1>
      <div>
        {/*<Dropbox dropbox={dropbox} />*/}
      </div>
      <div>
        <Link to="/itinerary/select">SELECT MY ITINERARY</Link>
      </div>
    </div>
  );
}

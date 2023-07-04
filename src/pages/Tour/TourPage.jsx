import Tour from "../../components/Tour/Tour";
import TourCard from "../../components/Tour/TourCard";

export default function TourPage() {
  return (
    <div className="page-container">
      <h1>Guided Tours</h1>

      <Tour />
      <div className="section-container">
        <TourCard />
        <TourCard />
        <TourCard />
      </div>
    </div>
  );
}

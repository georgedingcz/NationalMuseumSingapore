import TourCard from "./TourCard";

export default function Tour() {
  return (
    <>
      <div className="section-container">
        <div className="disclaimer-box">
          The group size of each tour is limited to a maximum of 15 pax{" "}
          (excluding guide). Note: You are encouraged to contact our front desk
          on the tour schedule and availabilit, as the tours are subjected to
          changes. Each tour is approximately one hour, on a first come, first
          served basis.
        </div>
        <TourCard />
      </div>
    </>
  );
}

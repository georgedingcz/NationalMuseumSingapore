import Card from "../Card/Card";
import TourCard from "./TourCard";

export default function Tour() {
  const card = {
    image: "https://picsum.photos/200",
    date: {
      start_date: "",
      end_date: "",
      permanent: true,
    },
    title: "Tour Title",
    content: {
      description: "This is the content of the card.",
    },
    additional_notes: "Additional notes for the card.",
  };

  return (
    <>
      <div className="section-container"></div>

      <div className="section-container">
        <TourCard />
      </div>
    </>
  );
}

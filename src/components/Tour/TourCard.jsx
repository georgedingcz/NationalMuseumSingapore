import "./Tour.css";

export default function TourCard() {
  return (
    <div>
      <div className="tourCard">
        <img
          className="tourCard_img"
          src="https://picsum.photos/200"
          alt="tour-card-img"
        />
        <p>This is a tour card</p>
      </div>
    </div>
  );
}

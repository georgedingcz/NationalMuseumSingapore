import "./Tour.css";

export default function TourCard() {
  return (
    <div className="tourCard">
      <img
        className="tourCard_img"
        src="https://picsum.photos/500/400"
        alt="tour-card-img"
      />
      <div className="tourCard-header">
        <h3>Singapore History Gallery</h3>
      </div>
      <div className="tourCard-lang">
        <p>English</p>
        <button className="tourbtn">+</button>
      </div>
      <div className="tourCard-lang">
        <p>Mandarin</p>
        <button className="tourbtn">+</button>
      </div>
      <div className="tourCard-lang">
        <p>French</p>
        <button className="tourbtn">+</button>
      </div>
    </div>
  );
}

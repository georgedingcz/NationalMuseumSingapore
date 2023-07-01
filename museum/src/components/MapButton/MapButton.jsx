import { Link } from "react-router-dom";

export default function MapButton() {
  return (
    <>
      <h3>Feeling Lost?</h3>
      <Link to="/map">
        <button>MUSEUM MAP</button>
      </Link>
    </>
  );
}

import MuseumCardDesc from "./MuseumCardDesc";
import MuseumCardDuration from "./MuseumCardDuration";
import MuseumCardImage from "./MuseumCardImage";

export default function MuseumCard() {
  return (
    <>
      <div>
        <MuseumCardImage />
      </div>
      <h2>Welcome to the Museum</h2>
      <div>
        <MuseumCardDesc />
      </div>
      <div>
        <MuseumCardDuration />
      </div>
    </>
  );
}

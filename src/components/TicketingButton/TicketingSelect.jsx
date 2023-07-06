import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/App/App.css";

export default function TicketingSelect({ onConfirmSelection }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((item) => item !== option);
      } else {
        return [...prevOptions, option];
      }
    });
  };

  const handleConfirmSelection = () => {
    onConfirmSelection(selectedOptions);
    console.log(selectedOptions);
    navigate("/ticketing/details", { state: { selectedOptions } });
  };

  const isSelectionEmpty = selectedOptions.length === 0;

  return (
    <div className="section-container">
      <div className="checkout">
        <div className="selection-box">
          <label>ALL ACCESS</label>
          <input
            type="checkbox"
            checked={selectedOptions.includes("ALL ACCESS")}
            onChange={() => handleOptionChange("ALL ACCESS")}
          />
        </div>
        <div className="selection-box">
          <label>PERMANENT GALLERIES</label>
          <input
            type="checkbox"
            checked={selectedOptions.includes("PERMANENT GALLERIES")}
            onChange={() => handleOptionChange("PERMANENT GALLERIES")}
          />
        </div>
        <div className="selection-box">
          <label>Semangat yang baru</label>
          <input
            type="checkbox"
            checked={selectedOptions.includes("Semangat yang baru")}
            onChange={() => handleOptionChange("Semangat yang baru")}
          />
        </div>
        <div className="selection-box">
          <label>Now Boarding</label>
          <input
            type="checkbox"
            checked={selectedOptions.includes("Now Boarding")}
            onChange={() => handleOptionChange("Now Boarding")}
          />
        </div>
        <div>
          <button disabled={isSelectionEmpty} onClick={handleConfirmSelection}>
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
}

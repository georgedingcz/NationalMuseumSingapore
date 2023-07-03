import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

export default function ItineraryPage({ user }) {
  const [date, setDate] = useState("");
  const [accessibility, setAccessibility] = useState("");
  const [filteredExhibition, setFilteredExhibition] = useState([]);
  const [checkedExhibition, setCheckedExhibition] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        const response = await fetch("/exhibition");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFilteredExhibition(data);
        console.log("Received data:", data);
      } catch (error) {
        setError(`Fetch failed: ${error.message}`);
      }
    };
    fetchExhibitions();
  }, []);

  const handleDateChange = (evt) => {
    setDate(evt.target.value);
  };

  const handleTypeChange = (evt) => {
    setAccessibility(evt.target.value);
  };

  const handleCheckboxChange = (title) => {
    const newCheckedExhibition = [...checkedExhibition, title];
    setCheckedExhibition(newCheckedExhibition);
    console.log(checkedExhibition);
  };

  return (
    <div className="page-container">
      <div>
        <img
          src="https://www.nationalgallery.sg/sites/default/files/ng-journeys-img-01.jpg"
          alt="Pondering Guest"
        />
      </div>

      <h1>Itinerary Planner</h1>
      <div>{user && <h2>Welcome, {user.name}!</h2>}</div>
      <div>
        <input
          type="date"
          id="start"
          name="trip-start"
          value={date}
          onChange={handleDateChange}
        />
      </div>

      <div>
        <select
          name="visitorTypes"
          id="types-select"
          onChange={handleTypeChange}
        >
          <option value={accessibility}>Visitor Types</option>
          <option value="FOR ALL">For All</option>
          <option value="ADULTS">Adults</option>
          <option value="CHILDREN">Children</option>
          <option value="FAMILIES">Families</option>
          <option value="SENIORS">Seniors</option>
          <option value="SPECIAL NEEDS">Special Needs</option>
          <option value="STUDENTS">Students</option>
          <option value="TEACHERS">Teachers</option>
        </select>
      </div>

      <div className="row">
        {filteredExhibition.map((card, index) => {
          console.log("Card:", card);
          if (date <= card.date.start_date || date >= card.date.end_date) {
            return null;
          }

          if (accessibility !== card.accessibility) {
            return null;
          }
          return (
            <div key={index}>
              <Card
                image={card.image}
                date={card.date}
                title={card.title}
                content={card.content}
                additional_notes={card.additional_notes}
              />
              <input
                type="checkbox"
                id={index}
                name="cardCheckbox"
                value={card.title}
                onChange={() => handleCheckboxChange(card.title)}
              />
            </div>
          );
        })}
      </div>
      {checkedExhibition.map((exhibit, index) => (
        <div key={index}>{exhibit}</div>
      ))}
      <div>
        <Link to="/itinerary/select">
          <button>SELECT MY ITINERARY</button>
        </Link>
      </div>
    </div>
  );
}

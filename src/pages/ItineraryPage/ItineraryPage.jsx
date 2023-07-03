import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

export default function ItineraryPage() {
  const [date, setDate] = useState("");
  // const [duration, setDuration] = useState("");
  // const [exhibitionGroup, setExhibitionGroup] = useState("");
  const [accessibility, setAccessibility] = useState("");

  const [filteredExhibition, setFilteredExhibition] = useState();

  const [checkedExhibition, setCheckedExhibition] = useState([]);

  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        const response = await fetch("/exhibition");
        const data = await response.json();
        setFilteredExhibition(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExhibitions();
  }, []);

  const handleDateChange = (evt) => {
    setDate(evt.target.value);
  };
  // const handleDurationChange = (evt) => {
  //   setDuration(evt.target.value);
  // };
  // const handleExhibitionChange = (evt) => {
  //   setExhibitionGroup(evt.target.value);
  // };
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

      <div>
        <input
          type="date"
          id="start"
          name="trip-start"
          value={date}
          onChange={handleDateChange}
        />
      </div>

      {/* <div>
        <select
          name="duration"
          id="duration-select"
          onChange={handleDurationChange}
        >
          <option value={duration}>Duration of visit</option>
          <option value="2hours">2 hours</option>
          <option value="3hours">3 hours</option>
          <option value="5hours">5 hours</option>
          <option value="fullDay">Full Day</option>
        </select>
      </div>

      <div>
        <select
          name="exhibitions"
          id="exhibitions-select"
          onChange={handleExhibitionChange}
        >
          <option value={exhibitionGroup}>Exhibitions</option>
          <option value="permanent">Permanent Galleries</option>
          <option value="special">Special Exhibitions</option>
          <option value="digital">Digital Exhibitions</option>
          <option value="fullDay">All Exhibitions</option>
        </select>
      </div> */}

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
        {filteredExhibition?.map((card, index) => {
          if (date <= card.date.start_date || date >= card.date.end_date) {
            return null;
          }

          if (accessibility !== card.accessibility) {
            return null;
          }
          return (
            <div key={index}>
              <Card card={card} />
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

      <div>
        <Link to="/itinerary/select">
          <button>SELECT MY ITINERARY</button>
        </Link>
      </div>
    </div>
  );
}

/* <Dropbox dropbox={dropbox} /> */

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

export default function ItineraryPage() {
  const [date, setDate] = useState();
  const [duration, setDuration] = useState();
  const [exhibitionGroup, setExhibitionGroup] = useState();
  const [visitorType, setVisitorType] = useState();

  const [filteredExhibition, setFilteredExhibition] = useState();

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
    console.log(date);
  };
  const handleDurationChange = (evt) => {
    setDuration(evt.target.value);
    console.log(duration);
  };
  const handleExhibitionChange = (evt) => {
    setExhibitionGroup(evt.target.value);
    console.log(exhibitionGroup);
  };
  const handleTypeChange = (evt) => {
    setVisitorType(evt.target.value);
    console.log(visitorType);
  };

  const handleCheckboxChange = () => {
    console.log("ok");
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
          value="2023-07-05"
          onChange={handleDateChange}
        />
      </div>

      <div>
        <select
          name="duration"
          id="duration-select"
          onChange={handleDurationChange}
        >
          <option value="">Duration of visit</option>
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
          <option value="">Exhibitions</option>
          <option value="2hours">2 hours</option>
          <option value="3hours">3 hours</option>
          <option value="5hours">5 hours</option>
          <option value="fullDay">Full Day</option>
        </select>
      </div>

      <div>
        <select
          name="visitorTypes"
          id="types-select"
          onChange={handleTypeChange}
        >
          <option value="">Visitor Types</option>
          <option value="forAll">For All</option>
          <option value="adults">Adults</option>
          <option value="children">Children</option>
          <option value="families">Families</option>
          <option value="seniors">Seniors</option>
          <option value="specialNeeds">Special Needs</option>
          <option value="students">Students</option>
          <option value="teachers">Teachers</option>
        </select>
      </div>

      <div className="row">
        {filteredExhibition?.map((card, index) => {
          if (date <= card.date.start_date || date >= card.date.end_date) {
            return null;
          }
          return (
            <div key={index}>
              <Card card={card} />
              {date} <br />
              Exhibition start date {card.date.start_date}
              <br />
              Exhibition end date {card.date.end_date}
              <input
                type="checkbox"
                id={index}
                name="cardCheckbox"
                value={card.title}
                onChange={handleCheckboxChange}
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

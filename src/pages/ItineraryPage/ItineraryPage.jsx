import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { updateUser } from "../../utilities/users-api";
import { Link, useNavigate } from "react-router-dom";

export default function ItineraryPage({ user, setUser }) {
  const navigate = useNavigate();
  const [exhibitions, setExhibitions] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);

  const [chosenDate, setChosenDate] = useState();
  const [chosenAccessibility, setChosenAccessibility] = useState();
  const [chosenDuration, setChosenDuration] = useState();

  const [randomArray, setRandomArray] = useState([]);

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRandomNumbersWithoutRepeat = (min, max, count) => {
    const numbers = new Set();
    while (numbers.size < count) {
      const number = getRandomIntInclusive(min, max);
      numbers.add(number);
    }
    return Array.from(numbers);
  };

  const fetchQuery = async () => {
    try {
      const response = await fetch(
        `/exhibition/search?accessibility=${chosenAccessibility}&date=${chosenDate}`
      );
      const data = await response.json();
      setExhibitions(data);

      if (data.length >= 2 && chosenDuration >= 1) {
        setRandomArray(
          getRandomNumbersWithoutRepeat(0, data.length - 1, chosenDuration)
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFetch = async (evt) => {
    await fetchQuery();
  };

  const handleCheckboxChange = (card) => {
    setSelectedCard((prevSelectedCards) => {
      if (prevSelectedCards.find((c) => c._id === card._id)) {
        return prevSelectedCards.filter((c) => c._id !== card._id);
      } else {
        return [...prevSelectedCards, card];
      }
    });
  };

  const handlePatchButtonClick = async () => {
    try {
      const userId = user._id;
      console.log("User ID:", userId);
      const itinerary = selectedCard.map((card) => ({
        selectedCardId: card._id,
        selectedCardTitle: card.title || "Untitled",
        dateOfVisit: new Date(), // Assign the current date as the date of visit
      }));
      console.log("Itinerary:", itinerary);
      const requestBody = {
        id: userId,
        itinerary,
      };
      const updatedUser = await updateUser(userId, requestBody);
      setUser(updatedUser);
      console.log("User updated:", updatedUser);
      navigate("/itinerary/select");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDate = (evt) => {
    setChosenDate(evt.target.value);
  };

  const handleAccessibility = (evt) => {
    setChosenAccessibility(evt.target.value);
  };

  const handleDuration = (evt) => {
    setChosenDuration(evt.target.value);
  };

  return (
    <div className="page-container">
      <h1>Welcome {user.name}!</h1>

      <section className="section-container">
        <img
          src="https://www.nationalgallery.sg/sites/default/files/ng-journeys-img-01.jpg"
          alt="Pondering Guest"
        />
      </section>

      <section className="section-container">
        <h3>Select your Visit Date!</h3>
        <input type="date" id="start" name="trip-start" onChange={handleDate} />
      </section>

      <section className="section-container">
        <h3>Select A Ticket Type</h3>
        <select
          name="visitorTypes"
          id="types-select"
          onChange={handleAccessibility}
        >
          <option value={chosenAccessibility}>Visitor Types</option>
          <option value="For All">For All</option>
          <option value="Adults">Adults</option>
          <option value="Children">Children</option>
          <option value="Families">Families</option>
          <option value="Seniors">Seniors</option>
          <option value="Special Needs">Special Needs</option>
          <option value="Students">Students</option>
          <option value="Teachers">Teachers</option>
        </select>
      </section>

      <section className="section-container">
        <h3>Select Duration Of Visit</h3>
        <select
          name="durationTypes"
          id="types-select"
          onChange={handleDuration}
        >
          <option value={chosenDuration}>Duration Types</option>
          <option value="2">2 hours</option>
          <option value="3">3 hours</option>
          <option value="5">5 hours</option>
          <option value="9">Full day</option>
        </select>
      </section>

      <section className="section-container">
        {/* for testing */}

        {randomArray.join(", ")}

        {/* end testing stuff here */}

        <button onClick={handleFetch}>Show me available exhibitions</button>
      </section>

      <section className="section-container">
        <h4>Here is what we suggest based on the criteria selected:</h4>

        {exhibitions.map((exhibition, index) => {
          if (randomArray.includes(index)) {
            return (
              <div key={exhibition._id}>
                <Card card={exhibition} />
                <input
                  type="checkbox"
                  checked={selectedCard.some(
                    (card) => card._id === exhibition._id
                  )}
                  onChange={() => handleCheckboxChange(exhibition)}
                />
              </div>
            );
          }
          return null;
        })}
      </section>
      <section className="section-container">
        {selectedCard.length > 0 && (
          <p>
            Selected Exhibitions:{" "}
            {selectedCard.map((card) => card.title || "Untitled").join(", ")}
          </p>
        )}
      </section>

      <section className="section-container">
        <button onClick={handlePatchButtonClick}>Choose Itinerary</button>
      </section>
    </div>
  );
}

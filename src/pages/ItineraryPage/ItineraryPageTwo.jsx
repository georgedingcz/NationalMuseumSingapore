import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { updateUser } from "../../utilities/users-api";

export default function ItineraryPageTwo({ user }) {
  const [exhibitions, setExhibitions] = useState([]);
  const [accessibilityOptions, setAccessibilityOptions] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchExhibitions();
    console.log("Selected Cards:", selectedCard);
  }, [selectedCard]);

  const fetchExhibitions = async () => {
    setIsLoading(true);
    const response = await fetch("/exhibition");
    const data = await response.json();
    setExhibitions(data);
    const uniqueAccessibilityOptions = [
      ...new Set(data.map((exhibition) => exhibition.accessibility)),
    ];
    setAccessibilityOptions(uniqueAccessibilityOptions);
    setIsLoading(false);
  };

  const handleCheckboxChange = (card) => {
    setSelectedCard((prevSelectedCards) => {
      if (prevSelectedCards.some((c) => c._id === card._id)) {
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
      const exhibitions = selectedCard.map((card) => ({
        exhibitionId: card._id,
        dateOfVisit: new Date(2023, 6, 5),
      }));
      console.log("Exhibitions:", exhibitions);
      const updatedUser = await updateUser(userId, {
        id: userId,
        itinerary: exhibitions,
      });
      console.log(user);
      console.log("User updated:", updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
      console.log(user);
    }
    console.log(user);
  };

  const renderCheckbox = (props) => (
    <input
      type="checkbox"
      checked={selectedCard.some((card) => card._id === props.card._id)}
      onChange={() => handleCheckboxChange(props.card)}
    />
  );

  return (
    <div className="page-container">
      <h1>Welcome {user.name}!</h1>
      <p>This is a redo</p>

      <section className="section-container">
        <img
          src="https://www.nationalgallery.sg/sites/default/files/ng-journeys-img-01.jpg"
          alt="Pondering Guest"
        />
      </section>

      <section className="section-container">
        <h3>Select your Visit Date!</h3>
        <input type="date" id="start" name="trip-start" />
        <h3>Select A Ticket Type</h3>
        <select name="visitorTypes" id="types-select">
          <option>Visitor Types</option>
          {accessibilityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </section>

      <section className="section-container">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <section className="section-container">
            {exhibitions.map((exhibition) => (
              <Card
                key={exhibition._id}
                card={exhibition}
                renderActions={renderCheckbox}
              />
            ))}
          </section>
        )}
      </section>

      {selectedCard.length > 0 && (
        <p>
          Selected Exhibitions:{" "}
          {selectedCard.map((card) => card.title || "Untitled").join(", ")}
        </p>
      )}

      <button onClick={handlePatchButtonClick}>Patch User</button>
    </div>
  );
}

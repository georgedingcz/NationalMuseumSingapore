import { Link } from "react-router-dom";

export default function ItinerarySelectPage({ user, setUser }) {
  const fetchQuery = async () => {
    try {
      const response = await fetch("/user/deleteItinerary", {
        method: "DELETE",
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteItinerary = (evt) => fetchQuery();

  return (
    <div className="page-container">
      Availble exhibitions
      <section className="section-container">
        {user ? (
          <>
            <span>
              Hi {user.name}, here are the exhibitions you have selected:
            </span>
          </>
        ) : null}
      </section>
      <section className="section-container">
        {user.itinerary?.map((each, index) => (
            <div key={index}>{each.exhibitionName}</div>
          ))
       }
      </section>
      <section className="section-container">
        <button onClick={handleDeleteItinerary}>Delete my itinerary</button>
      </section>
    </div>
  );
}

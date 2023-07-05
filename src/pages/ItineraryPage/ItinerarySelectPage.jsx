import { Link, useNavigate } from "react-router-dom";

export default function ItinerarySelectPage({ user, setUser }) {
  const navigate = useNavigate();

  const fetchQuery = async () => {
    try {
      const response = await fetch(`/user/${user._id}/itinerary`, {
        method: "DELETE",
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        navigate("/itinerary");
      } else {
        throw new Error("Failed to delete itinerary");
      }
    } catch (error) {
      console.log(user);
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
        ))}
      </section>
      <section className="section-container">
        <button onClick={handleDeleteItinerary}>Delete my itinerary</button>
      </section>
    </div>
  );
}

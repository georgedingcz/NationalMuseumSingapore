import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TicketingDetails({
  formState: initialFormState,
  onUpdateFormState,
}) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState(initialFormState);

  const [ticketPrices, setTicketPrices] = useState({
    Adult: 20,
    Child: 10,
    Senior: 5,
    Student: 5,
  });

  useEffect(() => {
    const calculateTicketPrice = () => {
      if (formState.nationality === "Singaporeans & PR") {
        setFormState((prevState) => ({
          ...prevState,
          ticketPrice: 0,
        }));
      } else if (formState.ticketType && formState.quantity) {
        const price = ticketPrices[formState.ticketType];
        const totalPrice = price * formState.quantity;
        setFormState((prevState) => ({
          ...prevState,
          ticketPrice: totalPrice,
        }));
      }
    };
    calculateTicketPrice();
  }, [
    formState.nationality,
    formState.ticketType,
    formState.quantity,
    ticketPrices,
  ]);

  const handleQuantity = (operation) => {
    if (operation === "increase") {
      setFormState((prevState) => ({
        ...prevState,
        quantity: prevState.quantity + 1,
      }));
    } else if (operation === "decrease") {
      if (formState.quantity > 0) {
        setFormState((prevState) => ({
          ...prevState,
          quantity: prevState.quantity - 1,
        }));
      }
    }
  };

  const handleSelection = (fieldName, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));

    if (value === "Singaporeans & PR") {
      setTicketPrices({});
    } else if (value === "Tourists & Foreign Residents") {
      setTicketPrices({
        Adult: 20,
        Child: 10,
        Senior: 5,
        Student: 5,
      });
    }
  };

  const handleDateSelection = (event) => {
    const selectedDate = event.target.value;
    setFormState((prevState) => ({
      ...prevState,
      selectedDate: selectedDate,
    }));
  };

  const handleProceedPayment = () => {
    onUpdateFormState(formState);
    navigate("/ticketing/check-out", { state: formState });
  };

  return (
    <div className="section-container">
      <section className="details-container">
        <h3>Nationality</h3>
        <button
          className={
            formState.nationality === "Singaporeans & PR" ? "active" : ""
          }
          onClick={() => handleSelection("nationality", "Singaporeans & PR")}
        >
          Singaporeans & PR
        </button>
        <button
          className={
            formState.nationality === "Tourists & Foreign Residents"
              ? "active"
              : ""
          }
          onClick={() =>
            handleSelection("nationality", "Tourists & Foreign Residents")
          }
        >
          Tourists & Foreign Residents
        </button>
      </section>
      <section className="details-container">
        <h3>Ticket Type</h3>
        <button
          className={formState.ticketType === "Adult" ? "active" : ""}
          onClick={() => handleSelection("ticketType", "Adult")}
        >
          Adult
        </button>
        <button
          className={formState.ticketType === "Child" ? "active" : ""}
          onClick={() => handleSelection("ticketType", "Child")}
        >
          Child
        </button>
        <button
          className={formState.ticketType === "Senior" ? "active" : ""}
          onClick={() => handleSelection("ticketType", "Senior")}
        >
          Senior
        </button>
        <button
          className={formState.ticketType === "Student" ? "active" : ""}
          onClick={() => handleSelection("ticketType", "Student")}
        >
          Student
        </button>
      </section>

      <section className="details-container">
        <div className="number-button">
          <h4>Quantity</h4>
          <section>
            <button
              onClick={() => handleQuantity("decrease")}
              disabled={formState.quantity === 0}
            >
              -
            </button>
            <p>{formState.quantity}</p>
            <button onClick={() => handleQuantity("increase")}>+</button>
          </section>
        </div>
      </section>

      <section className="details-container">
        <input type="text" disabled value="Ticket Price" />
        <input
          type="text"
          disabled
          value={
            formState.ticketType
              ? formState.nationality === "Singaporeans & PR"
                ? "Free"
                : `SGD ${formState.ticketPrice}`
              : ""
          }
        />
      </section>

      <section className="details-container">
        <div className="number-button">
          <h3>Select Date</h3>
          <input
            type="date"
            value={formState.selectedDate}
            onChange={handleDateSelection}
          />
        </div>
      </section>
      <button onClick={handleProceedPayment}>Proceed To Payment</button>
    </div>
  );
}

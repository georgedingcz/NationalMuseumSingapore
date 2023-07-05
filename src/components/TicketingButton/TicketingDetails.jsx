import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TicketingDetails() {
  const [formState, setFormState] = useState({
    quantity: 0,
    nationality: "",
    ticketType: "",
    selectedDate: null, // Add selectedDate field to formState
  });

  const [ticketPrices, setTicketPrices] = useState({
    Adult: 20,
    Child: 10,
    Senior: 5,
    Student: 5,
  });

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

  const handleDateSelection = (date) => {
    setFormState((prevState) => ({
      ...prevState,
      selectedDate: date,
    }));
    console.log(formState);
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
                : `SGD ${
                    ticketPrices[formState.ticketType] * formState.quantity
                  }`
              : ""
          }
        />
      </section>

      <section className="details-container">
        <div className="number-button">
          <h3>Select Date</h3>
          <DatePicker
            selected={formState.selectedDate}
            onChange={handleDateSelection}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
          />
        </div>
      </section>
    </div>
  );
}

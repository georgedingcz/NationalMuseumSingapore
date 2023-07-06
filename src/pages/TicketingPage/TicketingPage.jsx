import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TicketingSelect from "../../components/TicketingButton/TicketingSelect";
import TicketingDetails from "../../components/TicketingButton/TicketingDetails";
import TicketingCheckOut from "../../components/TicketingButton/TicketingCheckOut";
import TicketingSummary from "../../components/TicketingButton/TicketingSummary";
import "./TicketingPage.css";

export default function TicketingPage() {
  const [formState, setFormState] = useState({
    quantity: 2,
    nationality: "",
    ticketType: "",
    selectedDate: "",
    selectedOptions: [],
    ticketPrice: 0,
    cardDetails: {
      cardNumber: "",
      cardholderName: "",
      expiration: "",
      cvv: "",
    },
    billingAddress: {
      addressLine1: "",
      addressLine2: "",
      country: "",
      postalCode: "",
      email: "",
    },
  });

  const handleConfirmSelection = (options, state) => {
    const updatedFormState = {
      ...formState,
      selectedOptions: options,
    };

    setFormState(updatedFormState);
    console.log("Selected Options:", options);
    console.log("Form State:", updatedFormState);
  };

  const handleUpdateFormState = (updatedFormState) => {
    setFormState(updatedFormState);
  };

  return (
    <>
      <div className="page-container">
        <h3>Ticketing</h3>
        <Routes>
          <Route
            path="/"
            element={
              <TicketingSelect onConfirmSelection={handleConfirmSelection} />
            }
          />
          <Route
            path="/details"
            element={
              <TicketingDetails
                formState={formState}
                onUpdateFormState={handleUpdateFormState}
              />
            }
          />
          <Route
            path="/check-out"
            element={
              <TicketingCheckOut
                formState={formState}
                onUpdateFormState={handleUpdateFormState}
              />
            }
          />
          <Route
            path="/summary"
            element={
              <TicketingSummary
                formState={formState}
                onUpdateFormState={handleUpdateFormState}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

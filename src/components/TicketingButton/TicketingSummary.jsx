import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TicketingSummary({
  formState: initialFormState,
  onUpdateFormState,
}) {
  const [formState, setFormState] = useState(initialFormState);
  console.log("Form State in Summary:", formState);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="section-container">
        <h3>Order Summary</h3>
        <div>
          <p>
            Thank you for your purchase, {formState.cardDetails.cardholderName}
          </p>
          <fieldset className="section-container">
            <div>
              <p>Ticket Type: {formState.ticketType}</p>
              <p>Ticket Quantity: {formState.quantity}</p>
              <p>Total: SGD {formState.ticketPrice}</p>
            </div>
          </fieldset>

          <fieldset className="section-container">
            <div>
              <p>{formState.billingAddress.addressLine1}</p>
              <p>{formState.billingAddress.addressLine2}</p>
              <p>{formState.billingAddress.postalCode}</p>
              <p>
                Your tickets will be emailed to:{" "}
                {formState.billingAddress.email}
              </p>
            </div>
          </fieldset>
        </div>
        <button onClick={handleHome}>Return to Home Page</button>
      </div>
    </>
  );
}

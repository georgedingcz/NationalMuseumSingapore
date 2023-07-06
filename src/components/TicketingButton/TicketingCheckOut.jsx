import { useState } from "react";
import { continents } from "./countries";
import { useNavigate } from "react-router-dom";

export default function TicketingCheckOut({
  formState: initialFormState,
  onUpdateFormState,
}) {
  const [formState, setFormState] = useState(initialFormState);
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardholderName: "",
    expiration: "",
    cvv: "",
  });

  const [billingAddress, setBillingAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    country: "Singapore",
    postalCode: "",
    email: "",
  });

  const handleCardDetailsChange = (event) => {
    const { name, value } = event.target;
    setCardDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBillingAddressChange = (event) => {
    const { name, value } = event.target;
    setBillingAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedFormState = {
      ...formState,
      cardDetails: {
        ...formState.cardDetails,
        cardholderName: cardDetails.cardholderName,
      },
      billingAddress: {
        ...formState.billingAddress,
        addressLine1: billingAddress.addressLine1,
        addressLine2: billingAddress.addressLine2,
        postalCode: billingAddress.postalCode,
        email: billingAddress.email,
      },
    };
    console.log("Form State:", updatedFormState);
    onUpdateFormState(updatedFormState);
    navigate("/ticketing/summary", { state: updatedFormState });
  };

  return (
    <div className="section-container">
      <div className="checkout-form-container">
        <form onSubmit={handleSubmit}>
          <h3>Checkout</h3>
          <div className="form-section">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleCardDetailsChange}
              required
            />
          </div>

          <div className="form-section">
            <label htmlFor="cardholderName">Cardholder Name</label>
            <input
              type="text"
              id="cardholderName"
              name="cardholderName"
              value={cardDetails.cardholderName}
              onChange={handleCardDetailsChange}
              required
            />
          </div>

          <div className="form-section">
            <label htmlFor="expiration">Expiration</label>
            <input
              type="text"
              id="expiration"
              name="expiration"
              value={cardDetails.expiration}
              onChange={handleCardDetailsChange}
              required
            />
          </div>

          <div className="form-section">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleCardDetailsChange}
              required
            />
          </div>

          <h3>Billing Address</h3>

          <div className="form-section">
            <label htmlFor="addressLine1">Address Line 1</label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              value={billingAddress.addressLine1}
              onChange={handleBillingAddressChange}
              required
            />
          </div>

          <div className="form-section">
            <label htmlFor="addressLine2">Address Line 2</label>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              value={billingAddress.addressLine2}
              onChange={handleBillingAddressChange}
            />
          </div>

          <div className="form-section">
            <label htmlFor="country">Country</label>
            <select
              id="country"
              name="country"
              value={billingAddress.country}
              onChange={handleBillingAddressChange}
              required
            >
              <option value="">Select a country</option>

              {continents.map((continent) => (
                <optgroup key={continent.name} label={continent.name}>
                  {continent.countries
                    .sort((a, b) => a.localeCompare(b))
                    .map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                </optgroup>
              ))}
            </select>
          </div>

          <div className="form-section">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={billingAddress.postalCode}
              onChange={handleBillingAddressChange}
              required
            />
          </div>

          <div className="form-section">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={billingAddress.email}
              onChange={handleBillingAddressChange}
              required
            />
          </div>
          <section className="button-section">
            <button type="submit">Submit</button>
          </section>
        </form>
      </div>
    </div>
  );
}

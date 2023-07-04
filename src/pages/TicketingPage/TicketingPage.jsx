import CheckoutPage from "../../components/TicketingButton/CheckoutPage1";
import "./TicketingPage.css";

export default function TicketingPage() {
  return (
    <>
      <div className="page-container">
        <div className="section-container">
          <p>Ticketing</p>
          <div className="progress">progress tracker thing</div>
        </div>
        <CheckoutPage />
      </div>
    </>
  );
}

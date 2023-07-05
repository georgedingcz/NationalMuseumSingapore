import TicketingDetails from "../../components/TicketingButton/TicketingDetails";
import TicketingSelect from "../../components/TicketingButton/TicketingSelect";
import "./TicketingPage.css";

export default function TicketingPage() {
  return (
    <>
      <div className="page-container">
        <div className="section-container">
          <p>Ticketing</p>
          <div className="progress">progress tracker thing</div>
        </div>
        <TicketingSelect />
        <TicketingDetails />
      </div>
    </>
  );
}

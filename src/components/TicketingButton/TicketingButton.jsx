import { Link } from "react-router-dom";

export default function TicketingButton() {
  return (
    <Link to="/ticketing">
      <button>Buy Tickets</button>
    </Link>
  );
}

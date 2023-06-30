import { Link } from "react-router-dom";

export default function TicketingButton() {
  return (
    <Link to="/check-out">
      <button>Buy Tickets</button>
    </Link>
  );
}

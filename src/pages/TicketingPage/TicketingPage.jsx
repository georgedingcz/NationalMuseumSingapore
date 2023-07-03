import "./TicketingPage.css";

export default function TicketingPage() {
  return (
    <>
      <div className="page-container">
        <p>Ticketing</p>
        <div>
          <div className="progress">progress tracker thing</div>
        </div>
        <div>
          <div className="checkout">
            <div className="selection-box">
              <label>ALL ACCESS</label>
              <input type="checkbox" />
            </div>
            <div className="selection-box">
              <label>PERMANENT GALLERIES</label>
              <input type="checkbox" />
            </div>
            <div className="selection-box">
              <label>Semangat yang baru</label>
              <input type="checkbox" />
            </div>
            <div className="selection-box">
              <label>Now Boarding</label>
              <input type="checkbox" />
            </div>
            <button>Confirm Selection</button>
          </div>
        </div>
      </div>
    </>
  );
}

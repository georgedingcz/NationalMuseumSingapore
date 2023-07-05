export default function TicketingSelect() {
  return (
    <div className="section-container">
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
        <div>
          <button>Confirm Selection</button>
        </div>
      </div>
    </div>
  );
}

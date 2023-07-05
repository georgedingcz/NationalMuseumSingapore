export default function TicketingDetails() {
  return (
    <>
      <div className="section-container">
        <section className="details-container">
          <h3>Nationality</h3>
          <button>Singaporeans & PR</button>
          <button>Tourists & Foreign Residents</button>
        </section>
        <section className="details-container">
          <h3>Ticket Type</h3>
          <button>Adult</button>
          <button>Senior</button>
          <button>Student</button>
          <button>Child</button>
        </section>
        <section className="details-container">
          <input type="text" disabled value="Ticket Price" />
          <input type="text" disabled />
        </section>
      </div>
    </>
  );
}

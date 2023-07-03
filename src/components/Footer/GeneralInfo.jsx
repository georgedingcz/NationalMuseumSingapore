import "./Footer.css";

export default function GeneralInfo() {
  return (
    <div>
      <>
        <img
          src="https://www.svgrepo.com/download/1276/map-pin.svg"
          alt="location icon"
          className="footerIcon"
        />
        93 Stamford Road, Singapore 178897
        <br />
      </>
      <>
        <img
          src="https://www.svgrepo.com/download/38630/clock.svg"
          alt="time icon"
          className="footerIcon"
        />
        Open daily 10am to 7pm
        <br />
      </>
      <>
        <img
          src="https://www.svgrepo.com/download/144359/tickets.svg"
          alt="ticket icon"
          className="footerIcon"
        />
        Free admission for Singaporeans and PRs
        <br />
      </>
    </div>
  );
}

import "./Footer.css";

export default function GeneralInfo() {
  return (
    <div>
      <>
        <img
          src="https://www.iconpacks.net/icons/1/free-location-icon-983-thumb.png"
          alt="location icon"
          className="footerIcon"
        />
        93 Stamford Road, Singapore 178897
        <br />
      </>
      <>
        <img
          src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-clock-icon-png-image_3785539.jpg"
          alt="time icon"
          className="footerIcon"
        />
        Open daily 10am to 7pm
        <br />
      </>
      <>
        <img
          src="https://www.citypng.com/public/uploads/preview/outline-black-ticket-icon-png-11663777631weiruktfee.png?v=2023062813"
          alt="ticket icon"
          className="footerIcon"
        />
        Free admission for Singaporeans and PRs
        <br />
      </>
    </div>
  );
}

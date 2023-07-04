export default function CardDate(props) {

  return (
    <>
      <div className="date"><p>EXHIBITION | {props.date.end_date.substring(0,4) >= "2099" ? "PERMANENT" : props.date.start_date.substring(0,10) + " - " + props.date.end_date.substring(0,10)}</p></div>
    </>
  );
}
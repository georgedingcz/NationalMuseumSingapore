export default function CardDate(props) {
  return (
    <>
      <div className="date"><p>EXHIBITION | {props.date.permanent ? "PERMANENT" : props.date.start_date + " - " + props.date.end_date}</p></div>
    </>
  );
}
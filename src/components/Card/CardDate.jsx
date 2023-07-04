export default function CardDate(props) {

const start_date = new Date(props.date.start_date);
const end_date = new Date(props.date.end_date);
const formatted_start_date = start_date.toISOString().split('T')[0];
const formatted_end_date = end_date.toISOString().split('T')[0];


  return (
    <>
      <div className="date"><p>EXHIBITION | {props.date.permanent ? "PERMANENT" : formatted_start_date + " - " + formatted_end_date}</p></div>
    </>
  );
}
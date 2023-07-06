import CardImage from "./CardImage";
import CardDate from "./CardDate";
import CardTitle from "./CardTitle";
import CardDesc from "./CardDesc";
import CardAdditionalNotes from "./CardAdditionalNotes";
import "./card.css";

export default function Card(props) {
  return (
    <>
      <div className="card-container">
        <CardImage image={props.card.image} />
        <CardDate date={props.card.date} />
        <CardTitle title={props.card.title} />
        <CardDesc content={props.card.content} />
        <CardAdditionalNotes additional_notes={props.card.additional_notes} />
      </div>
    </>
  );
}
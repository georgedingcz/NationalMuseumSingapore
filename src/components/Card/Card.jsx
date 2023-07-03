import CardImage from "./CardImage";
import CardDate from "./CardDate";
import CardTitle from "./CardTitle";
import CardDesc from "./CardDesc";
import CardAdditionalNotes from "./CardAdditionalNotes";
import "./card.css";

export default function Card({ card, renderActions }) {
  if (!card) {
    return null;
  }

  const { image, date, title, content, additional_notes } = card;

  return (
    <div className="card-container">
      <CardImage image={image} />
      {date && <CardDate date={date} />}
      {title && <CardTitle title={title} />}
      {content && <CardDesc content={content} />}
      {additional_notes && (
        <CardAdditionalNotes
          key={card._id}
          additional_notes={additional_notes}
        />
      )}

      {renderActions && renderActions(card)}
    </div>
  );
}

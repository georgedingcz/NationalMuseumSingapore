import CardImage from "./CardImage";
import CardDuration from "./CardDuration";
import CardTitle from "./CardTitle";
import CardDesc from "./CardDesc";
import CardMoreInfo from "./CardMoreInfo";

export default function Card(props) {
  return (
    <>
        <div className="card-container">
            <CardImage img = {props.card.img} />
            <CardDuration dura = {props.card.dura}  />
            <CardTitle title = {props.card.title}  />
            <CardDesc desc = {props.card.desc}  />
            <CardMoreInfo info = {props.card.info}  />
        </div>
    </>
  );
}
import ExhibitionCardImage from "./ExhibitionCardImage";
import ExhibitionCardDuration from "./ExhibitionCardDuration";
import ExhibitionCardTitle from "./ExhibitionCardTitle";
import ExhibitionCardDesc from "./ExhibitionCardDesc";
import ExhibitionCardMoreInfo from "./ExhibitionCardMoreInfo";

export default function ExhibitionCard(props) {
  return (
    <>
        <div className="card-container">
            <ExhibitionCardImage img = {props.card.img} />
            <ExhibitionCardDuration dura = {props.card.dura}  />
            <ExhibitionCardTitle title = {props.card.title}  />
            <ExhibitionCardDesc desc = {props.card.desc}  />
            <ExhibitionCardMoreInfo info = {props.card.info}  />
        </div>
    </>
  );
}
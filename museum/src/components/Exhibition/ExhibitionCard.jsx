import ExhibitionCardImage from "../../components/Exhibition/ExhibitionCardImage";
import ExhibitionCardDuration from "../../components/Exhibition/ExhibitionCardDuration";
import ExhibitionCardTitle from "../../components/Exhibition/ExhibitionCardTitle";
import ExhibitionCardDesc from "../../components/Exhibition/ExhibitionCardDesc";
import ExhibitionCardMoreInfo from "../../components/Exhibition/ExhibitionCardMoreInfo";

export default function ExhibitionCard(props) {
  return (
    <>
        <div className="card-container">
            <ExhibitionCardImage img = {props.card.img} />
            <ExhibitionCardTitle title = {props.card.title}  />
            <ExhibitionCardDuration dura = {props.card.dura}  />
            <ExhibitionCardDesc desc = {props.card.desc}  />
            <ExhibitionCardMoreInfo info = {props.card.info}  />
        </div>
    </>
  );
}
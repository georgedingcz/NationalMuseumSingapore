import { Link } from "react-router-dom";
import Card from "./Card";

export default function CardCollection(props) {
    return (
        <>  
            <div className="row">
                {props.data.map((card, index) => (
                        <Link className="link" to={card.id} key={index}>
                            <Card card={card} />
                        </Link>
                ))}
            </div>
        </>
    );
  }

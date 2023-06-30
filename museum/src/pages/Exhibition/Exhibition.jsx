import "../../pages/Exhibition/Exhibition.css";
import Card from "../../components/Card/Card";

import { Link } from "react-router-dom";

export default function Exhibition() {

    const card = {
        id : "aonw",
        img : "https://picsum.photos/id/237/300/200",
        title : "An Old New World: Digital Edition",
        dura : "EXHIBITION | PERMANENT",
        desc : "An Old New World: Digital Edition allows you to virtually explore the exhibition An Old New World: From the East Indies to the Founding of Singapore, 1600s–1819, which features personal collections from the...",
        info : ["Free admissions", "Free admissions"]
    };

    return (
        <>  
            <div className="page-container">
                <div className="row">
                    <Link className="link" to={card.id}><Card card = { card } /></Link>
                    <Link className="link" to={card.id}><Card card = { card } /></Link>
                    <Link className="link" to={card.id}><Card card = { card } /></Link>
                    <Link className="link" to={card.id}><Card card = { card } /></Link>
                    <Link className="link" to={card.id}><Card card = { card } /></Link>
                    <Link className="link" to={card.id}><Card card = { card } /></Link>
                </div>
            </div>
        </>
    );
}
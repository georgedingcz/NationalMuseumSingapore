import "../../pages/Exhibition/Exhibition.css";
import Card from "../../components/Card/Card";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import Dropbox from "../../components/Dropbox/Dropbox";

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

    const src = "https://picsum.photos/id/237/300/200";

    const dropbox = {
        type : ["For All", "Adults", "Children", "Families", "Seniors", "Special Needs", "Students", "Teachers"],
        status : ["Current and Upcoming", "Past"],
        date : ["Current and Upcoming", "Past"]
    }

    return (
        <>  
            <div className="page-container">
                <div className="header-container">
                    <HeaderImage src = {src} />
                </div>

                <h1>Our Exhibitions</h1>

                <Dropbox dropbox = {dropbox} />
                
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
import "../../pages/Exhibition/Exhibition.css";
import ExhibitionCard from "../../components/Exhibition/ExhibitionCard";

export default function Exhibition() {

    const card = {
        img : "https://picsum.photos/id/237/300/200",
        title : "An Old New World: Digital Edition",
        dura : "EXHIBITION | PERMANENT",
        desc : "An Old New World: Digital Edition allows you to virtually explore the exhibition An Old New World: From the East Indies to the Founding of Singapore, 1600s–1819, which features personal collections from the...",
        info : ["Free admissions", "Free admissions"]
    };

    const card2 = {
        img : "https://picsum.photos/id/192/300/200",
        title : "Singapore, Very Old Tree",
        dura : "EXHIBITION | PERMANENT",
        desc : "Created by renowned local photographer and artist Robert Zhao, this exhibit at the bottom of the Glass Rotunda showcases 17 images of trees around Singapore and highlight intimate stories of each. ...",
        info : ["Free admissions", "Free admissions"]
    };

    return (
        <>  
            <div className="page-container">
                <ExhibitionCard card = { card } />
                <ExhibitionCard card = { card2 } />
            </div>
        </>
    );
}
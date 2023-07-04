import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import HeaderImage from "../../components/HeaderImage/HeaderImage";

export default function ExhibitionDetails(props) {
    const {id} = useParams();
    const [exhibition, setExhibition] = useState([]);

    useEffect(() => {
        const fetchExhibition = async () => {
          try {
            const response = await fetch('/exhibition/' + encodeURIComponent(id));
            const data = await response.json();
            setExhibition(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchExhibition();
        }, []);

    return (
        <>
      <div className="page-container">
        <div className="header-container">
          <HeaderImage src={"https://picsum.photos/id/237/300/200"} />
        </div>

        <h1>{exhibition.title}</h1>
        {console.log(exhibition.additional_notes)}
    </div>
        </>
    );
}
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import HeaderImage from "../../components/HeaderImage/HeaderImage";

export default function ExhibitionDetails(props) {
  const { id } = useParams();
  const [exhibition, setExhibition] = useState(null);

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
  }, [id]);

  return (
    <>
      <div className="page-container">
        <div className="header-container">
          <HeaderImage src={exhibition?.image} />
        </div>

        <h1>{exhibition?.title}</h1>
        {exhibition && Object.entries(exhibition.additional_notes).map((value) => (
          <p>{value[1]}</p>
        ))}

        <Link className="link" to={"/ticketing/"+exhibition?._id}>
            <p>Buy Tickets</p>
        </Link>

        <p>{exhibition?.content.description}</p>

        {exhibition && Object.entries(exhibition.content.links).map((link) => (
          <iframe width="420" height="315" src={link[1]}></iframe>
        ))}
        
      </div>
    </>
  );
}
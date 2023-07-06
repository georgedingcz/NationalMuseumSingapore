import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import "../../pages/Exhibition/Exhibition.css";

export default function ExhibitionDetails(props) {
  const { id } = useParams();
  const [exhibition, setExhibition] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state

  useEffect(() => {
    const fetchExhibition = async () => {
      try {
        setLoading(true); // Set loading state to true
        const response = await fetch('/exhibition/' + encodeURIComponent(id));
        const data = await response.json();
        setExhibition(data);
        setLoading(false); // Set loading state to false after fetching data
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading state to false in case of error
      }
    };
    fetchExhibition();
  }, [id]);

  return (
    <>
      <div className="page-container">
        <div className="section-container" id="header-container">
          <HeaderImage src={exhibition?.image} />
        </div>

        <div className="section-container">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <h1>{exhibition?.title}</h1>
              {exhibition && Object.entries(exhibition.additional_notes).map((value) => (
                <p>{value[1]}</p>
              ))}

              <Link className="link" to={"/ticketing"}>
                <button>Buy Tickets</button>
              </Link>
            </>
          )}
        </div>
        <div className="section-container">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <p>{exhibition?.content.description}</p>
              {exhibition && Object.entries(exhibition.content.links).map((link) => (
                <iframe width="420" height="315" src={link[1]}></iframe>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
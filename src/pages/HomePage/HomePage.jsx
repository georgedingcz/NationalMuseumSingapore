import MuseumCard from "../../components/Museum/MuseumCard";
import TicketingButton from "../../components/TicketingButton/TicketingButton";
import "../HomePage/HomePage.css";
import { Link } from "react-router-dom";
import CardCollectionSlider from "../../components/Card/CardCollectionSlider";
import React, { useEffect, useState } from 'react';

export default function HomePage() {
  const [happenings, setHappenings] = useState([]);
  const [exhibitions, setExhibitions] = useState([]);
  const [loading, setLoading] = useState(false); // Added loading state

  useEffect(() => {
    const fetchHappenings = async () => {
      try {
        setLoading(true); // Set loading state to true
        const response = await fetch('/exhibition/search?status=current');
        const data = await response.json();
        setHappenings(data);
        setLoading(false); // Set loading state to false after fetching data
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading state to false in case of error
      }
    };
    fetchHappenings();
  }, []);

  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        setLoading(true); // Set loading state to true
        const response = await fetch('/exhibition');
        const data = await response.json();
        setExhibitions(data);
        setLoading(false); // Set loading state to false after fetching data
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading state to false in case of error
      }
    };
    fetchExhibitions();
  }, []);

  return (
    <div className="page-container">
      <div className="section-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <MuseumCard />
            <TicketingButton />
          </>
        )}
      </div>

      <div className="section-container no-flex card-collection-fix">
        <h2>Happening Now</h2>
        <div className="card-collection-fix">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CardCollectionSlider data={happenings} />
          )}
        </div>
      </div>
      <Link to="/itinerary">
        <button>ITINERARY PLANNER</button>
      </Link>

      <div className="section-container no-flex card-collection-fix">
        <h2>Exhibitions</h2>
        <div className="card-collection-fix">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CardCollectionSlider data={exhibitions} />
          )}
        </div>
      </div>
      <Link to="/map">
        <button>MUSEUM MAP</button>
      </Link>
    </div>
  );
}
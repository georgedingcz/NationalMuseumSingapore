import MuseumCard from "../../components/Museum/MuseumCard";
import TicketingButton from "../../components/TicketingButton/TicketingButton";
import "../HomePage/HomePage.css";
import { Link } from "react-router-dom";
import CardCollectionSlider from "../../components/Card/CardCollectionSlider";
import React, { useEffect, useState } from 'react';

export default function HomePage() {
  const [happenings, setHappenings] = useState([]);
  const [exhibitions, setExhibitions] = useState([]);

  useEffect(() => {
    const fetchHappenings = async () => {
      try {
        const response = await fetch('/exhibition/search?status=current');
        const data = await response.json();
        setHappenings(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchHappenings();
  }, []);

  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        const response = await fetch('/exhibition');
        const data = await response.json();
        setExhibitions(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExhibitions();
  }, []);

  return (
    <div className="page-container">
      <div className="section-container">
        <MuseumCard />
        <TicketingButton />
      </div>

      <div className="section-container no-flex card-collection-fix">
        <h2>Happening Now</h2>
        <div className="card-collection-fix">
          <CardCollectionSlider data={happenings} />
        </div>
      </div>
        <Link to="/itinerary">
          <button>ITINERARY PLANNER</button>
        </Link>

      <div className="section-container no-flex card-collection-fix">
        <h2>Exhibitions</h2>
        <div className="card-collection-fix">
          <CardCollectionSlider data={exhibitions} />
        </div>
      </div>
        <Link to="/map">
          <button>MUSEUM MAP</button>
        </Link>
    </div>
  );
}

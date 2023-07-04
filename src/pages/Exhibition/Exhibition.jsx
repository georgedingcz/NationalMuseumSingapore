import "../../pages/Exhibition/Exhibition.css";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import Dropbox from "../../components/Dropbox/Dropbox";
import React, { useEffect, useState } from 'react';
import ExhibitionCardCollection from "../../components/Card/ExhibitionCardCollection";

export default function Exhibition() {

  const [exhibitions, setExhibitions] = useState([]);
  const [accessibility, setAccessibility] = useState("");
  const [status, setStatus] = useState("");

  const handleAccessibilityChange = (e) => {
    setAccessibility(e);
  };

  const handleStatusChange = (e) => {
    setStatus(e);
  };

  const src = "https://picsum.photos/id/237/300/200";

  const dropbox = {
    type: [
      "For All",
      "Adults",
      "Children",
      "Families",
      "Seniors",
      "Special Needs",
      "Students",
      "Teachers",
    ],
    status: ["Current", "Upcoming", "Past"],
    date: "",
  };

  const fetchQuery = async () => {
    try {
      const response = await fetch('/exhibition/search?accessibility=FOR%20ALL&status=current');
      const data = await response.json();
      setExhibitions(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await fetch('/exhibition');
        const data = await response.json();
        setExhibitions(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAll();
    }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetchQuery();
  }

  return (
    <>
      <div className="page-container">
        <div className="header-container">
          <HeaderImage src={src} />
        </div>

        <h1>Our Exhibitions</h1>
        <form onSubmit={handleSubmit}>
          <Dropbox dropbox={dropbox} accessibility={accessibility} getAccess={handleAccessibilityChange} status={status} getStatus={handleStatusChange} />
        </form>
        <ExhibitionCardCollection elements = {exhibitions} />
      </div>
    </>
  );
}

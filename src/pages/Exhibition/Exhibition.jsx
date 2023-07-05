import "../../pages/Exhibition/Exhibition.css";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import Dropbox from "../../components/Dropbox/Dropbox";
import React, { useEffect, useState } from "react";
import CardCollection from "../../components/Card/CardCollection";

export default function Exhibition() {
  const [exhibitions, setExhibitions] = useState([]);

  const [accessibility, setAccessibility] = useState("For%20All");
  const [status, setStatus] = useState("");

  const handleAccessibility = (e) => {
    setAccessibility(e);
  };

  const handleStatus = (e) => {
    setStatus(e);
  };

  const dropbox_accessibility = [
    "For All",
    "Adults",
    "Children",
    "Families",
    "Seniors",
    "Special Needs",
    "Students",
    "Teachers",
  ];
  const dropbox_status = ["Current", "Upcoming", "Past"];
  const src = "https://picsum.photos/id/237/300/200";

  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        const response = await fetch("/exhibition");
        const data = await response.json();
        setExhibitions(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExhibitions();
  }, []);

  const fetchQuery = async () => {
    try {
      const response = await fetch(
        "/exhibition/search?accessibility=FOR%20ALL&status=current"
      );
      const data = await response.json();
      setExhibitions(data);
    } catch (error) {
      console.error(error);
    }
  };

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
          {/*<Dropbox dropbox={dropbox_accessibility} handleAccessibility={handleAccessibility} handleStatus={handleStatus} />*/}
          <p>{accessibility}</p>
          <p>{status}</p>
        </form>
        <CardCollection data={exhibitions} />
      </div>
    </>
  );
}

/*

import React, { useState } from 'react';

function ChildComponent({ childState, updateParentState }) {
  const [childValue, setChildValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setChildValue(newValue);
    updateParentState(newValue); // Call the callback function to update the parent's state
  };

  return (
    <div>
      <input type="text" value={childValue} onChange={handleChange} />
      <p>Value in child: {childState}</p>
    </div>
  );
}

export default ChildComponent;

*/

import "../../pages/Exhibition/Exhibition.css";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import React, { useEffect, useState } from 'react';
import CardCollection from "../../components/Card/CardCollection";

export default function Exhibition() {

  const [exhibitions, setExhibitions] = useState([]);
  const [accessURL, setAccessURL] = useState("For All");
  const [statusURL, setStatusURL] = useState("Current");

  const dropdown_accessibility = ["For All","Adults","Children","Families","Seniors","Special Needs","Students","Teachers"];
  const dropdown_status = ["Current", "Upcoming", "Past"];

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

    const fetchQuery = async () => {
      try {
        console.log('/exhibition/search?accessibility='+encodeURIComponent(accessURL).toUpperCase()+'&status='+encodeURIComponent(statusURL).toLowerCase());
        const response = await fetch('/exhibition/search?accessibility='+encodeURIComponent(accessURL).toUpperCase()+'&status='+encodeURIComponent(statusURL).toLowerCase());
        const data = await response.json();
        setExhibitions(data);
      } catch (error) {
        console.error(error);
      }
    };

  function handleOnAccessibilityChange(e) {
    setAccessURL(e.target.value);
  }
  
  function handleOnStatusChange(e) {
    setStatusURL(e.target.value);
  }
    
  function handleSubmit(e) {
    e.preventDefault();
    fetchQuery();
  }

  return (
    <>
      <div className="page-container">
        <div className="header-container">
          <HeaderImage src={"https://picsum.photos/id/237/300/200"} />
        </div>

        <h1>Our Exhibitions</h1>
        <form onSubmit={handleSubmit}>
          <select name="accessibility" id="accessibility" className="accessibility" onChange={handleOnAccessibilityChange}>
            {dropdown_accessibility.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select>
          <select name="status" id="status" className="status" onChange={handleOnStatusChange}>
            {dropdown_status.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select>
          <input type="submit" value="Go"></input> 
        </form>
        {(exhibitions == "") ? <div>No search result found</div> : <CardCollection data={exhibitions} />}
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
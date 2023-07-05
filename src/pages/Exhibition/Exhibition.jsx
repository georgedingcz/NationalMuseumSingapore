import "../../pages/Exhibition/Exhibition.css";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import CardCollection from "../../components/Card/CardCollection";

export default function Exhibition() {
  const params = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const accessibility = searchParams.get('accessibility');
  const status = searchParams.get('status');

  const [selectedAccessibility, setSelectedAccessibility] = useState(searchParams.get('accessibility'));
  const [selectedStatus, setSelectedStatus] = useState(searchParams.get('status'));





  const [exhibitions, setExhibitions] = useState([]);
  const [accessURL, setAccessURL] = useState(accessibility || 'For All');
  const [statusURL, setStatusURL] = useState(status || 'Current');

  const dropdown_accessibility = ["For All","Adults","Children","Families","Seniors","Special Needs","Students","Teachers"];
  const dropdown_status = ["Current", "Upcoming", "Past"];

  const navigate = useNavigate();

  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        if(accessibility == null) {
          const response = await fetch('/exhibition');
          const data = await response.json();
          setExhibitions(data);
        }
        else {
          const response = await fetch('/exhibition/search?accessibility='+encodeURIComponent(accessURL)+'&status='+encodeURIComponent(statusURL).toLowerCase());
          const data = await response.json();
          setExhibitions(data);
        }

      } catch (error) {
        console.error(error);
      }
    };
    fetchExhibitions();
    }, []);

    const fetchQuery = async () => {
      try {
        const response = await fetch('/exhibition/search?accessibility='+encodeURIComponent(accessURL)+'&status='+encodeURIComponent(statusURL).toLowerCase());
        const data = await response.json();
        setExhibitions(data);
        const searchParams = new URLSearchParams({
          accessibility: accessURL,
          status: statusURL.toLowerCase()
        });
        navigate('/exhibition/search?' + searchParams.toString());
      } catch (error) {
        console.error(error);
      }
    };

    const handleAccessibilityChange = (e) => {
      setSelectedAccessibility(e.target.value);
    };
  
    const handleStatusChange = (e) => {
      setSelectedStatus(e.target.value);
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
          <select name="accessibility" id="accessibility" className="accessibility" onChange={handleOnAccessibilityChange} value={accessURL}>
            {dropdown_accessibility.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select>
          <select name="status" id="status" className="status" onChange={handleOnStatusChange} value={statusURL}>
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
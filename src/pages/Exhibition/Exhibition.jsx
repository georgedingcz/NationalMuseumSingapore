import "../../pages/Exhibition/Exhibition.css";
import HeaderImage from "../../components/HeaderImage/HeaderImage";
import Dropbox from "../../components/Dropbox/Dropbox";
import React, { useEffect, useState } from 'react';
import CardCollection from "../../components/Card/ExhibitionCardCollection";

export default function Exhibition() {

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
    status: ["Current and Upcoming", "Past"],
    date: ["Current and Upcoming", "Past"],
  };

  return (
    <>
      <div className="page-container">
        <div className="header-container">
          <HeaderImage src={src} />
        </div>

        <h1>Our Exhibitions</h1>

        <Dropbox dropbox={dropbox} />
        <CardCollection />
      </div>
    </>
  );
}

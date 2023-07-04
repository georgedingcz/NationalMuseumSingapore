import { Link } from "react-router-dom";
import Card from "./Card";
import React, { useEffect, useState } from 'react';

export default function Homepage_HappeningNow() {

    const [exhibitions, setExhibitions] = useState([]);

    useEffect(() => {
      const fetchHappeningNow = async () => {
        try {
          const response = await fetch('/exhibition/search?accessibility=FOR%20ALL&status=current');
          const data = await response.json();
          setExhibitions(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchHappeningNow();
    }, []);

    return (
        <>  
            <div className="row">
                {exhibitions.map((card) => (
                        <Link className="link" to={card.id}>
                            <Card card={card} />
                        </Link>
                ))}
            </div>
        </>
    );
  }

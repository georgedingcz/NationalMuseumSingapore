import { Link } from "react-router-dom";
import Card from "./Card";
import React, { useEffect, useState } from 'react';

export default function ExhibitionCardCollection() {

    const [exhibitions, setExhibitions] = useState([]);

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

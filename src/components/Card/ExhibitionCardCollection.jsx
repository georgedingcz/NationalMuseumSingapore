import { Link } from "react-router-dom";
import Card from "./Card";
import React, { useEffect, useState } from 'react';

export default function ExhibitionCardCollection(props) {
    return (
        <>  
            <div className="row">
                {props.elements.map((card) => (
                        <Link className="link" to={card.id}>
                            <Card card={card} />
                        </Link>
                ))}
            </div>
        </>
    );
  }

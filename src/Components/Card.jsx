import React, {} from "react";
import {Link} from "react-router-dom";

export function Card({data}) {

    return (
        <>
            {data.map((card, index) => (

                <div key={index}>
                    <h1 style={{color: "white"}}>{card.title}</h1>
                    <p style={{color: "white"}}>{card.description}</p>
                    <Link to={`cards/${card.title}`} style={{color: "white"}}>View more</Link>
                </div>
            ))}
        </>
    )
}

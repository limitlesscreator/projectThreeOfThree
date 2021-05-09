import React, {} from "react";
import {useParams} from "react-router-dom";

export function FullCard({data}) {
    const {title} = useParams()
    console.log(title)
    return (
        <>
            {data.filter(card => card.title === title).map((card, index) => (
                <div key={index}>
                    <h1>{card.title}</h1>
                    <p>{card.description}</p>
                </div>
            ))}
        </>
    )
}

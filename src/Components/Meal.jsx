import React, {} from "react";
import {Link} from "react-router-dom";

export function Meal(props){
    const {strMeal, idMeal, strMealThumb} = props

    return(
        <div>
            <div>{strMeal}</div>
            <div>{idMeal}</div>
            <img src={strMealThumb} alt=""/>
            <Link to={`/meal/${idMeal}`}>Watch recipe</Link>
        </div>
    )
}

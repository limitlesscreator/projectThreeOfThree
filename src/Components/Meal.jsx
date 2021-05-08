import React, {} from "react";
import {Link} from "react-router-dom";
import s from './Meal.module.sass'

export function Meal(props) {
    const {strMeal, idMeal, strMealThumb} = props

    return (
        <div className={s.meal}>
            <div>
                <img className={s.imgMeal} src={strMealThumb} alt=""/>
            </div>
            <div>
                <div className={s.titleMeal}>{strMeal}</div>
                <Link className={s.button} to={`/meal/${idMeal}`}>Watch recipe</Link>
            </div>
        </div>
    )
}

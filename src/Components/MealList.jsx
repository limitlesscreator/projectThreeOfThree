import React, {} from "react";
import {Meal} from "./Meal";
import s from './MealList.module.sass'
import {useHistory} from "react-router-dom";

export function MealsList({meals}) {
    const {goBack} = useHistory()

    return (
        <div className={s.flexItems}>
            <div className={s.button} onClick={() => {goBack()}}><i className="fas fa-long-arrow-alt-left"></i></div>
            {meals.map(meal => (
                <Meal key={meal.idMeal} {...meal} />
            ))}
        </div>
    )
}

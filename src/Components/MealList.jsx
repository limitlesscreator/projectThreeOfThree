import React, {} from "react";
import {Meal} from "./Meal";

export function MealsList({meals}){
    
    return(
        <div>
            {meals.map(meal => (
                <Meal key={meal.idMeal} {...meal} />
            ))}
        </div>
    )
}

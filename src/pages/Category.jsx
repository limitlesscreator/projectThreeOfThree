import React, {useEffect,useState} from "react";
import {useParams} from 'react-router-dom'
import {getFilteredCategory} from "../api";
import {Preloader} from "../Components/Preloader";
import {MealsList} from "../Components/MealList";

export function Category(){
    const [meals,setMeals] = useState([])
    const {name} = useParams()
    console.log(name)
    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals))
    },[name])

    return <div>
        {!meals.length ? <Preloader/> : <MealsList meals={meals}/>}
    </div>
}

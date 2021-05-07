import React, {useEffect,useState} from "react";
import {useParams} from 'react-router-dom'
import {getFilteredCategory} from "../api";
import {Preloader} from "../Components/Preloader";
import {MealsList} from "../Components/MealList";

export function Category(){
    const {name} = useParams
    const [meals,setMeals] = useState([])

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals))
    },[name])

    return <>
        {!meals.length ? <Preloader/> : <MealsList meals={meals}/>}
    </>
}

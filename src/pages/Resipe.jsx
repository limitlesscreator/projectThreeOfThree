import React, {useEffect,useState} from "react";
import {useParams,useHistory} from 'react-router-dom'
import {getMealById} from "../api";
import s from './Resipe.module.sass'

export function Resipe(){
    const [resipe,setResipe] = useState([])
    const {goBack} = useHistory()
    const {id} = useParams()
    useEffect( () => {
        getMealById(id).then( data => (setResipe(data.meals[0])))

    },[])

    console.log(id)

    return(
        <div style={{color: "white"}}>
            <div className={s.button} onClick={() => {goBack()}}><i className="fas fa-long-arrow-alt-left"></i></div>
            <div className={s.flex}>
                <div className={s.pRelative}>
                    <img className={s.image} src={resipe.strMealThumb} alt=""/>
                    <h1 className={s.title}>{resipe.strMeal}</h1>
                    <div className={s.categoryResipe}>
                        <h6 className={s.category}>{resipe.strCategory}</h6>
                        {resipe.strArea ? <h6>{resipe.strArea}</h6> : null}
                    </div>
                </div>
                <iframe  src={`https://www.youtube.com/embed/` + `${resipe.strYoutube}`.substr(32,15)} title={id}/>
            </div>
            <div className={s.instructions}>{resipe.strInstructions}</div>
        </div>
    )
}

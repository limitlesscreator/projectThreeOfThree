import React, {useState,useEffect} from "react";
import {getAllCategories} from "../api";
import {Preloader} from "../Components/Preloader";
import {CategoryList} from "../Components/CategoryList";

export function Home(){
    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
        })

    },[])
    
    return(
        <>
            {!catalog.length ? <Preloader/> : (
                <CategoryList catalog={catalog}/>
            )}
        </>
    )
}

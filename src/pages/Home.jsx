import React, {useState,useEffect} from "react";
import {getAllCategories} from "../api";
import {Preloader} from "../Components/Preloader";
import {CategoryList} from "../Components/CategoryList";
import {Search} from "../Components/Search";
import {useLocation, useHistory} from 'react-router-dom'

export function Home(){
    const [catalog, setCatalog] = useState([])
    const [filteredCatalog, setFilteredCatalog] = useState([])

    const {pathname, search} = useLocation()
    const {push} = useHistory()
    console.log(push)
    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLocaleString())) //includes для того,
            // чтобы узнать совпадает ли введённыя строка пользователя и тех данных которые есть
        )
        push({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(data.categories)
        })

    },[])
    
    return(
        <>
            <Search cb={handleSearch}/>
            {!catalog.length ? <Preloader/> : (
                <CategoryList catalog={filteredCatalog}/>
            )}
        </>
    )
}

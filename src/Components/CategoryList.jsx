import React, {} from "react";
import {Link} from "react-router-dom";
import {CategoryItem} from "./CategoryItem";

export function CategoryList({catalog}){
    return(
       <div>
           {catalog.map(el => (
               <CategoryItem key={el.idCategory} {...el}/>
           ))}

       </div>
    )
}

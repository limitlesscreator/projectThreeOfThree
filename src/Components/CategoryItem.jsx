import React, {} from "react";
import {Link} from "react-router-dom";
import s from './CategoryItem.module.sass'

export function CategoryItem(props){
    const {idCategory,strCategory,strCategoryThumb,strCategoryDescription} = props
    
    return(
       <div className={s.item}>
           <div>
               <img src={strCategoryThumb} alt=""/>

           </div>
           <div className={s.position}>
               <div className={s.description}>{strCategoryDescription.length > 300 ? strCategoryDescription.slice(0,300)+'...' : strCategoryDescription}</div>
               <Link className={s.link} to={`/category/${strCategory}`}>Link here</Link>
               <div className={s.titleName}>{strCategory}</div>
           </div>
       </div>
    )
}

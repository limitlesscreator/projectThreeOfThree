import React, {} from "react";
import s from './Preloader.module.sass'

export function Preloader(){
    const style = 'spinner-border text-warning' + " " + s.spiner
    return(
        <>
            <div  className={style} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </>
    )
}

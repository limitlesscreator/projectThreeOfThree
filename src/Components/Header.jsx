import React, {} from "react";
import {Link} from "react-router-dom";
import s from "./Header.module.sass"

export function Header(){
    
    return(
        <header>
            <Link to="/" className={s.link}>Home</Link>
        </header>
    )
}

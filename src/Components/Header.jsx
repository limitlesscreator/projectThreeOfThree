import React, {} from "react";
import {Link} from "react-router-dom";
import s from "./Header.module.sass"

export function Header(){
    
    return(
        <header>
            <Link to="/contacts" className={s.link}>Contact</Link>
            <Link to="/" className={s.link}>Home</Link>
            <Link to="/about" className={s.link}>About</Link>
        </header>
    )
}

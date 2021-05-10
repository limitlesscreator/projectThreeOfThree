import React, {useState} from "react";
import s from './Search.module.sass'
export function Search({cb}){
    const [value,setValue] = useState('')

    const handleKey = (e) => {
        if (e.key === 'Enter'){
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        cb(value)
        console.log(value)
    }
    
    return(
        <>
            <div className={s.search}>
                <input type="text" placeholder={'search'} onKeyDown={handleKey}
                       onChange={(e => setValue(e.currentTarget.value))} value={value}/>
                <button className={s.button} onClick={handleSubmit}>Search</button>
            </div>
        </>
    )
}

import React, {} from "react";
import {useParams,useHistory} from 'react-router-dom'

export function Resipe(){
    const {id} = useParams()

    console.log(id)

    return(
        <div style={{color: "white"}}>
            Hello, from Resipe {id}
        </div>
    )
}

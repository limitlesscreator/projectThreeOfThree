import React, {} from "react";
import {useParams,useHistory} from 'react-router-dom'

export function Resipe(){
    const {id} = useParams()
    console.log(id)

    return(
        <>
            Hello, from Resipe page
        </>
    )
}

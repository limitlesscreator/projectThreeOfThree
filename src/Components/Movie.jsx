import React, {} from "react";
import {useParams, useHistory,useRouteMatch, useLocation} from 'react-router-dom'

export function Movie() {
    const {title} = useParams();
    const {goBack} = useHistory();
    const value = useRouteMatch();
    const value2 = useLocation();
    console.log(value)
    console.log(value2)
    return (
        <>
            <div> Some movie {title}</div>
            <button onClick={goBack}>Go back</button>
        </>
    )
}

import React from "react";
import { useParams } from "react-router-dom";

export const DisplayData = ()=>
{
    const {list}=useParams();
    return(
        <div>
            <h1>{list}</h1>
        </div>
    )
}
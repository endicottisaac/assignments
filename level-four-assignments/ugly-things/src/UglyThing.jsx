import React, {useState} from "react";


export default function UglyThing(props){

    return (
        <div>
            <p>{props.title} </p>
            <p>{props.description} </p>
            <p>{props.imgUrl} </p>
        </div>
    )
}
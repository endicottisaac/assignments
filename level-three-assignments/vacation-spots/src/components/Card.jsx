import React from "react"

export default function Card(props){

    return (
        <div className="card">
            <h3>{props.place}</h3>
            <h4>Price: ${props.price}</h4>
            <h5>Time to Go: {props.timeToGo}</h5>
        </div>
    )
}
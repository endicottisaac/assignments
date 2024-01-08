import React from "react";

export default function Badge(props) {
    return (
        <div className="badge--container">
            <h2>Badge:</h2>
            
                <p>Name: {props.fName} {props.lName}</p>
                <p>Phone: {props.phone}</p>
                <p>Place of Birth: {props.pob}</p>
                <p>Favorite Food: {props.food}</p>
                <p>Email: {props.email}</p>
                <p className="aboutSelf">{props.aboutSelf}</p>
       
        </div>
    )
}
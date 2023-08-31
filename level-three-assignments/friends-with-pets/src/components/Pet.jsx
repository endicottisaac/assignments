import React from "react";

export default function Pet(props) {
    return (
        <div className="friend">
            <h4>· Pet Name: {props.pets.name} ({props.pets.breed})</h4>
        </div>
    )
}
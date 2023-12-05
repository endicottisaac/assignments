import React from "react";
import data from "./data";
import Pet from "./Pet";

export default function Friend(props) {
    const pets = props.pets.map(item => {
        return (
        <Pet 
        key={item.name} pets={item} 
        />
      )
    })
        
    return (
        <div>
          <h2>{props.name}</h2>
          <h3>{props.age} years old</h3>
          {pets}
        </div>
      )
}
import React from "react";
import Friend from "./Friend";
import data from "./data";

export default function FriendList() {
    const friends = data.map(item => {
            return (
                <Friend 
                key={item.age}
                {...item}
                />
                )})        
    
    return (
        <>
        <h1>My Friends</h1>
        <div className="friendContainer">
            {friends}
        </div>
        </>
    )
}
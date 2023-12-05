import React from "react";
export default function BlogPost(props) {
    return (
        <div>
            <h2>{props.title} </h2>
            <h3>{props.subTitle}</h3>
            <p>Posted by <span>{props.author}</span> on <span>{props.date}</span></p>
        </div>
    )
}
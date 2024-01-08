import React, { useContext, useState } from "react";
import { PageContext } from "./pageContext";
import UglyThing from "./UglyThing";

export default function ThingsList(){
    
    const {allUglyThings} = useContext(PageContext)
    const {onDelete} = useContext(PageContext)
    const {editThing} = useContext(PageContext)
    const {edit} = useContext(PageContext)

    const uglyThings = allUglyThings.map((item) => {
        console.log(item._id)
        return <UglyThing
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
            key={item._id}
            id={item._id}
            onDelete={onDelete}
            editThing={editThing}
            edit={edit} 
    />
    })
    return(
        <div className="things--list">
            {uglyThings}
        </div>
    )
}
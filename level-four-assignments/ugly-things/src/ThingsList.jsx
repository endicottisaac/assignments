import React, { useContext, useState } from "react";
import { PageContext } from "./pageContext";
import UglyThing from "./UglyThing";

export default function ThingsList(){
    
    const {allUglyThings} = useContext(PageContext)

    const uglyThings = allUglyThings.map((item) => {
        return <UglyThing
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
            key={item._id}
        />
    })
    return(
        <div>
            {uglyThings}
        </div>
    )
}
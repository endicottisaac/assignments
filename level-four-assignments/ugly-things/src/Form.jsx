import React, { useContext } from "react";
import { PageContext } from "./pageContext";


function Form(){

    const {handleChange} = useContext(PageContext)

    const {thing} = useContext(PageContext)

    const {submitThing} = useContext(PageContext)

    
    return (
        <div className="submit--form">
            <div className="submit--form--inputs">
            <input 
            placeholder="Title"
            type="text"
            className="form-input"
            name="title"
            value={thing.title}
            onChange={handleChange}
            required
            />
            <input 
            placeholder="Img URL"
            type="text"
            className="form-input"
            name="imgUrl"
            value={thing.imgUrl}
            onChange={handleChange}
            required
            />
            <input 
            placeholder="Description"
            type="text"
            className="form-input"
            name="description"
            value={thing.description}
            onChange={handleChange}
            required
            />
            </div>
            <button className="new--submit--button" onClick={submitThing}>Submit</button>
        </div>
    )
}

export default Form;
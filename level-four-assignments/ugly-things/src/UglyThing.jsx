import React, {useState} from "react";


export default function UglyThing(props){

    const [toggle, setToggle] = useState(true)

    function handleToggle(){
        setToggle(prev => !prev)
    }

    const [edit, setEdit] = useState(props.edit);

    const handleChange = (e) => {
        const {name, value} = e.target
        setEdit(prevEdit => {
            return{
                ...prevEdit,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.editThing(props.id, edit)
        handleToggle()
    }
    return (
        <>
            {toggle ? 
            <div className="ugly--thing">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <img src={props.imgUrl} alt="No image available" />
                <div>
                <button onClick={handleToggle}>Edit</button>
                <button onClick={() => props.onDelete(props.id)}>Delete</button>
                </div>
            </div>
            :
            <form onSubmit={handleSubmit}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <img src={props.imgUrl} alt="edit pending" />
                <div>
                <input
                    name="title"
                    value={edit.title}
                    onChange={handleChange}
                />
                <input
                    name="imgUrl"
                    value={edit.imgUrl}
                    onChange={handleChange}
                />
                <input
                    name="description"
                    value={edit.description}
                    onChange={handleChange}
                />
                <button type="submit">Save</button>
                <button onClick={handleToggle}>Cancel</button>
                </div>
            </form>
            }
        </>
    )
}

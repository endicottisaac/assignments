import React, { useState } from "react";

const Workout = (props) => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(prevToggle => !prevToggle)
    }

    const [edit, setEdit] = useState({
        exercise: "",
        sets: "",
        reps: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEdit((prevEdit) => {
            return {
                ...prevEdit, 
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(props.id)
        props.editWorkout(props.id, edit)
        handleToggle()
    }


    return (
        <>
            {
                toggle ? 
                    <div>
                        <div>
                            <h3>Exercise: {props.exercise}</h3>
                            <h4>Sets: {props.sets}</h4>
                            <h4>Reps: {props.reps}</h4>
                        </div>
                        <button onClick={handleToggle}>Edit</button>
                        <button onClick={() => props.onDelete(props.id)}>Delete </button>
                    </div>
                    
                    :
                    <form onSubmit={handleSubmit}> 
                        <h3>Exercise: {props.exercise}</h3>
                        <h4>Sets: {props.sets}</h4>z
                        <h4>Reps: {props.reps}</h4>
                        <div>
                            <input
                                name="exercise"
                                value={edit.exercise}
                            />
                            <input
                                name="sets"
                                value={edit.sets}
                            />
                            <input
                                name="reps"
                                value={edit.reps}
                            />
                            <button type="submit">Save</button>
                            <button onClick={handleToggle}>Cancel</button>
                        </div>
                    </form>
            }
        </>
    )
}

export {Workout}
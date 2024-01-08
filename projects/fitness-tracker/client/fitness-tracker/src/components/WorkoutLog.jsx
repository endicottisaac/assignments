import React, { useContext } from "react";
import { WorkoutContext } from "../workoutContext";

const WorkoutLog = () => {
    const {
        newWorkout,
        setNewWorkout,
        handleSubmit,
    } = useContext(WorkoutContext);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewWorkout((prevWorkout) => {
            return {
                ...prevWorkout,
                [name] : value
            }

        })
    }
    return (
        <>
            <h1>Add your workouts below</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="exercise">Exercise</label>
                <input 
                    placeholder="Exercise"
                    type="text"
                    name="exercise" 
                    value={newWorkout.exercise}
                    onChange={handleChange}
                    id="exercise"
                    required
                />
                <label htmlFor="Sets">Sets</label>
                <input
                    placeholder="Sets"
                    type="number" 
                    name="sets"
                    value={newWorkout.sets}
                    onChange={handleChange}
                    id="sets"
                    required
                />
                <label htmlFor="reps">Reps</label>
                <input
                    placeholder="Reps"
                    type="number" 
                    name="reps"
                    value={newWorkout.reps}
                    onChange={handleChange}
                    id="reps"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </>

    )
}


export {WorkoutLog}
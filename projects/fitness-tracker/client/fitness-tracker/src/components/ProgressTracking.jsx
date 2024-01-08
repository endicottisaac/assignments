import React, { useContext } from "react";
import { Workout } from "./Workout";
import { WorkoutContext } from "../workoutContext";

const ProgressTracking = () => {
    const {workouts, onDelete, editWorkout} = useContext(WorkoutContext)
    const theWorkouts = workouts.map(item => {
        return (
            <Workout 
                exercise={item.exercise}
                reps={item.reps}
                sets={item.sets}
                onDelete={onDelete}
                editWorkout={editWorkout}
                key={item._id}
                id={item._id}
            />
        )
    })
    return (
        <>
            <h1>View previously completed workouts here</h1>
            {theWorkouts}
        </>
    )
}

export {ProgressTracking}
import React, {useState, useEffect} from "react";
import axios from "axios";

const WorkoutContext = React.createContext();

function WorkoutContextProvider(props){
    const [workouts, setWorkouts] = useState([]);
    
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [edit, setEdit] = useState();

    const [newWorkout, setNewWorkout] = useState({
        exercise: "",
        sets: "",
        reps: "",
    });

    const onDelete = (workoutId) => {
        axios.delete(`/workout/${workoutId}`)
            .then(res => {
                console.log(res)
                setFormSubmitted(true)
            })
            .catch(err => console.log(err))
    }

    const editWorkout = (workoutId, edit) => {
        setEdit(edit)
        axios.put(`/workout/${workoutId}`, edit)
            .then(res => {
                console.log(res)
                setFormSubmitted(true)
            })
            .catch(err => console.log(err))
    }

    const addWorkout = (newWorkout) => {
        axios.post("/workout", newWorkout)
            .then((res) => {
                console.log(res.data)
                setFormSubmitted(true)
            })
            .catch((err) => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newWorkout);
        addWorkout(newWorkout)
        setNewWorkout({
            exercise: "",
            sets: "",
            reps: "",
        })
    }

    useEffect(() => {
        axios.get('/workout')
            .then(res => {
                console.log(res.data)
                setWorkouts(prevWorkouts => res.data)
            })
            .catch(err => console.log(err))
            setFormSubmitted(false)
    }, [formSubmitted])

    return (
        <WorkoutContext.Provider value={{
            workouts: workouts,
            onDelete: onDelete,
            editWorkout: editWorkout,
            addWorkout: addWorkout,
            newWorkout: newWorkout,
            handleSubmit: handleSubmit,
            setNewWorkout: setNewWorkout
        }}
        >
            {props.children}
        </WorkoutContext.Provider>
    )
}

export {WorkoutContext, WorkoutContextProvider}
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    

    return (
        <>
            <header>
                <h1>Welcome to Fitness!</h1>
                <p>Fitness progress awaits you!</p>
            </header>
            <section>
                <h2><Link to="/workoutlog">Workout Log</Link></h2>
                <p>Use this tracker to log your completed workouts</p>
            </section>
            <section>
                <h2><Link to="progresstracking">Progress Tracking</Link></h2>
                <p>View your previously completed workouts</p>
            </section>
        </>
    )
}

export {Home}
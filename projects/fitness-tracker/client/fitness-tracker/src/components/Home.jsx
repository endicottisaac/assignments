import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    

    return (
        <>
            <div className="flex flex-col items-center justify-center text-center">
                <header className="mb-10">
                    <h1 className="text-4xl font-bold">Welcome to Fitness!</h1>
                    <p>Fitness progress awaits you!</p>
                </header>
                <section className="mb-8">
                    <h2 className="text-xl "><Link to="/workoutlog" className="inline-block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">Workout Log</Link></h2>
                    <p className="text-gray-600 italic">Use this tracker to log your completed workouts</p>
                </section>
                <section className="mb-4">
                    <h2 className="text-xl"><Link to="progresstracking" className="inline-block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">Progress Tracking</Link></h2>
                    <p className="text-gray-600 italic">View your previously completed workouts</p>
                </section>
            </div>
        </>
    )
}

export {Home}
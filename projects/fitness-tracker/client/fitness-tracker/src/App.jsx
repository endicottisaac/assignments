import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './components/Home'
import { WorkoutLog } from './components/WorkoutLog'
import { ProgressTracking } from './components/ProgressTracking'
import './App.css'
import { WorkoutContextProvider } from './workoutContext'

function App() {

  return (
    <>
      <WorkoutContextProvider>
        <Router>
          <div>
            <h1>Workout Tracker</h1>
            <nav>
              <Link className='nav--links' to="/">
              Home
              </Link>
              <Link className='nav--links' to="/workoutlog">
              Workout Log
              </Link>
              <Link className='nav--links' to="/progresstracking">
              Progress Tracking
              </Link>
            </nav>
          </div>
          <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/workoutlog' element={<WorkoutLog/>}/>
              <Route path='/progresstracking' element={<ProgressTracking/>}/>
            </Routes>
          </main>
        </Router>
      </WorkoutContextProvider>
    </>
  )
}

export default App

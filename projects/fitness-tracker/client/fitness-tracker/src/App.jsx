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
            <nav className='bg-white border-gray-200 h-28 pb-5 pt-3'>
              <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4'>
                <h1 className="text-2xl font-bold text-blue-500"> <Link to={"/"}> Workout Tracker</Link></h1>
                <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
                  <ul className='font-medium flex space-x-8'>
                    <li>
                      <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to="/">
                      Home
                      </Link>
                    </li>
                    <li>
                      <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to="/workoutlog">
                      Workout Log
                      </Link>
                    </li>
                    <li>
                      <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0' to="/progresstracking">
                      Progress Tracking
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
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

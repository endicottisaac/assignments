import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import TrueOrFalse from './components/TrueOrFalse'

function App() {
  

  return (
    <Router>

      <nav>
        <Link to="/">
        Home
        </Link>
        <Link to="/trueorfalse">
        True or False
        </Link>

      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trueorfalse' element={<TrueOrFalse/>}/>
      </Routes>
    </Router>
  )
}

export default App

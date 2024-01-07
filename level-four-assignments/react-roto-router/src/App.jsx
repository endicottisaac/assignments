import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Services from './components/Services'
import './App.css'

function App() {

  return (
      <Router>
        <header>
        <h1>Plumbing Co.</h1>
        <nav className='nav--bar'>
          <Link className='nav--elements' to="/">
            Home
          </Link>
          <Link className='nav--elements' to="/about">
            About
          </Link>
          <Link className='nav--elements' to="/services">
            Services
          </Link>
        </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
          </Routes>
        </main>
        <footer>
          <div>
          <h3>Call Us Now</h3>
          <p>Servicing properties please use us</p>
          <p>(123) 456-7890</p>
          </div>
          <div className='footer-street-address'>
            <p>100 S 200 E Fake Street</p>
            <p>Please leave us a review on google maps</p>
          </div>
        </footer>
        
      </Router>
    )
}

export default App

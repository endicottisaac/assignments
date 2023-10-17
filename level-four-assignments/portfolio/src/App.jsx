import React from 'react'
import './App.css'
import Project from './components/Project'

function App() {

  return (
    <>
    <div className='intro-container'>
      <div className='side-text'>
        <p>
          <span>@/2023</span>
          <span className='countries'>USA TW RU WS</span>
        </p>
      </div>
      <div className='intro-description'>
        <h3>Isaac Endicott</h3>
        <p>Full Stack JavaScript Developer</p>
        <p>Creating interesting  and creative Web Sites and Web Apps out of Utah, USA.</p>
      </div>
        <div>
          <h1 className='intro-links'>WORK</h1>
          <h1 className='intro-links'>ABOUT</h1>
          <h1 className='intro-links'>CONTACT</h1>
        </div>
      </div>

      <main>
        <div>
          <h1>WORK</h1>
          <h2>Projects</h2>
          <Project/>
          <Project/>
          <Project/>
        </div>
        <div>
          <h1>ABOUT</h1>
        </div>
        <div>
          <h1>CONTACT</h1>
        </div>
      </main>
    </>
  )
}

export default App

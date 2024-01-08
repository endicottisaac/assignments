import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import TrueOrFalse from './components/TrueOrFalse'
import Custom from './components/Custom'
import gameAssorted from './assets/game-assorted.jpg'
import { TriviaContextProvider } from './triviacontext'
function App() {
  
  // useEffect(() => {
  //   const apiUrl = 'https://opentdb.com/api.php?amount=1';

  //   axios.get(apiUrl)
  //     .then(response => {
  //       // Handle the successful response here
  //       console.log(response.data.results[0]);
  //       console.log(response.data.results[0].question);
  //       console.log(response.data.results[0].correct_answer);
  //     })
  //     .catch(error => {
  //       // Handle errors here
  //       console.error('Error making GET request:', error);
  //     });
  // }, []); 

  return (
    <>
    <TriviaContextProvider>
    <Router>
      <div className='image--wrapper'>
        <img src={gameAssorted}/>
        <div className='nav--container overlay overlay--2'>
          
          <h1>Trivia Time</h1>
          <nav>
            <Link className='nav--links' to="/">
            Home
            </Link>
            <Link className='nav--links' to="/trueorfalse">
            True or False
            </Link>
            <Link className='nav--links' to="/custom">
            Custom
            </Link>
          </nav>
        </div>
      </div>
      <main className='main--content'>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/trueorfalse' element={<TrueOrFalse/>}/>
          <Route path='/custom' element={<Custom/>}/>
        </Routes>
      </main>
    </Router>
    </TriviaContextProvider>
    </>
  )
}

export default App

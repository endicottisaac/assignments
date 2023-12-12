import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { BountyList } from './components/BountyList'
import { BountyContextProvider } from './bountycontext'
import Form from './components/Form'

function App() {

  useEffect(() => {
    axios.get("/bounty") // Remove "/api" prefix
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, []);

  
  


  return (
    <>
      <BountyContextProvider>
        <Form/>
        <BountyList/>
      </BountyContextProvider>
    </>
  )
}

export default App

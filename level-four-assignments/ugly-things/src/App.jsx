import React from 'react'
import './App.css'
import Form from './Form'
import {PageContextProvider } from './pageContext'
import ThingsList from './ThingsList'


function App() {

  return (
    <>
    <PageContextProvider>
      <Form/>
      <ThingsList/>
    </PageContextProvider>
      
    </>
  )
}

export default App

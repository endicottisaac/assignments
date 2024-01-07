import React, {useState} from "react"
import './App.css'
import Header from './Header'
import Content from "./Content"
import Footer from "./Footer"
import {ThemeContextProvider} from "./themeContext"

function App() {
  
  return (
    <>
      <ThemeContextProvider>
          <Header/>
          <Content/>
          <Footer/>
      </ThemeContextProvider>
    </>
  )
}

export default App

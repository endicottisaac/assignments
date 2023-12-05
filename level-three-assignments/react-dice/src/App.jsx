import { useState } from 'react'
import './App.css'
import DiceBox from './DiceBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DiceBox />
    </>
  )
}

export default App

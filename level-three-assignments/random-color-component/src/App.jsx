import React from 'react'
import './App.css'

function App() {
  const [ranColor, setRanColor] = React.useState({})
  const [count, setCount] = React.useState(1)
  React.useEffect(function () {
        fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(res => res.json())
            .then(data => setRanColor(data.colors[0].hex))
  }, [count])
  return (
    <>
      <h1>Get your random color</h1>
      <div style={{ backgroundColor:`#${ranColor}` }} className='box'></div>
      <button className='button' onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Color</button>
    </>
  )
}

export default App

import React, { useState } from 'react'
import './App.css'

function App() {
  const [gradient, setGradient] = useState({
    colorOne: "#000000",
    colorTwo: "#FFFFFF",
    angle: "50"
  })
  
  function handleChange(event) {
    const { name, value } = event.target;
    setGradient((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  }
  

  return (
    <>
     <h1>Css Gradient Generator Tool</h1>
     <div>
      <div>
      <div style={{ width: '200px', height: '200px', background: `linear-gradient(${gradient.angle}deg, ${gradient.colorOne}, ${gradient.colorTwo})` }}></div>
       <textarea
  name='gradient-values'
  readOnly
  style={{width:"600px", height:"100px"}}
  value={`background: linear-gradient(${gradient.angle}deg, ${gradient.colorOne} , ${gradient.colorTwo});
-moz-background: linear-gradient(${gradient.angle}deg, ${gradient.colorOne} , ${gradient.colorTwo});
-webkit: linear-gradient(${gradient.angle}deg, ${gradient.colorOne} , ${gradient.colorTwo})`}
/>
      </div>
      <div>
        <span>Color 1</span>
        <input 
          type='color' 
          name='colorOne'
          value={gradient.colorOne}
          onChange={handleChange}
        />
        <span>Color 2</span>
        <input 
          type='color' 
          name='colorTwo'
          value={gradient.colorTwo}
          onChange={handleChange}
        />
        <span>Angle</span>
        <input 
          type='number' 
          name='angle'
          value={gradient.angle}
          onChange={handleChange}
        />
      </div>
     </div>
    </>
  )
}

export default App

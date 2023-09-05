import React from 'react'
import Square from './Square'
import './App.css'

function App() {

  const [colors, setColors] = React.useState(["white", "white", "white", "white"]) //Setting initial state with four squares
  const smallTime = () => {
    setColors(prevColors => {
      const firstElement = prevColors[0]
      if(firstElement === "white") {
        return prevColors.map(color => (color = "black"));
      } else {
        return prevColors.map(color => (color = "white"))
      }
      
    });
  }
  const party = () => {
    setColors(prevColors => {
      return prevColors.map((color, index) => (index < 2 ? "purple" : color))
    })
  }

  const leftBottom = () => {
    setColors(prevColors => {
      return prevColors.map((color, index) => index === 2 ? "blue" : color)
    })
  }

  const rightBottom = () => {
    setColors(prevColors => {
      return prevColors.map((color, index) => index === 3 ? "blue" : color)
    })
  }

  const bigOne = () => {
    setColors(prevColors => {
      return prevColors.map((color, index) => index === 0 ? "red" : color)
    })
  }

  const bigTwo = () => {
    setColors(prevColors => {
      return prevColors.map((color, index) => index === 1 ? "red" : color)
    })
  }

  const bigThree = () => {
    setColors(prevColors => {
      return prevColors.map((color, index) => index === 2 ? "red" : color)
    })
  }

  const bigFour = () => {
    setColors(prevColors => {
      return prevColors.map((color, index) => index === 3 ? "red" : color)
    })
  }

  return (
    <div className='container'>
      <Square style={{ backgroundColor: colors[0] }} />
      <Square style={{ backgroundColor: colors[1] }} />
      <Square style={{ backgroundColor: colors[2] }} />
      <Square style={{ backgroundColor: colors[3] }} />
      <button onClick={smallTime}>Small Time</button>
      <button onClick={party}>Party</button>
      <button onClick={leftBottom}>Pro Left</button>
      <button onClick={rightBottom}>Pro Right</button>
      <button onClick={bigOne}>Big One</button>
      <button onClick={bigTwo}>Big Two</button>
      <button onClick={bigThree}>Big Three</button>
      <button onClick={bigFour}>Big Four</button>
    </div>
  )
}

export default App

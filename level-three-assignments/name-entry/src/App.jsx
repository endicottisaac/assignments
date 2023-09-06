import React from 'react'
import './App.css'

let nextID = 0;

function App() {

  const [nameEntry, setNameEntry] = React.useState({
    current:""
  })

  const [nameArray, setNameArray] = React.useState([])
  const handleChange = (event) => {
    setNameEntry(prevNameEntry => {
       return {
          ...prevNameEntry,
          [event.target.name]: event.target.value
      }
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setNameArray(prevNameArray => {
      return [
        ...prevNameArray,
        {id: prevNameArray.length + 1, newName: nameEntry.current}
      ]
    })
    console.log(nameEntry)
  }

  return (
    <div>
      <h1>{nameEntry.current}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="current"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      
      <ol>
        {nameArray.map(item => (
          <li key={item.id}>{item.newName}</li>
        ))}
      </ol>
    </div>
  )
}

export default App

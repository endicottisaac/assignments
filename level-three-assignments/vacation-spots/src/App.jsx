import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
  })        
  return (
    <>
      <Header />
      <section className="cards-list">
        {cards}
      </section>
      
    </>
  )
}

export default App


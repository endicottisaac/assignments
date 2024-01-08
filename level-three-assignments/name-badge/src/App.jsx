import React from 'react'
import './App.css'
import Badge from './Badge'


function App() {
  const [badgeForm, setBadgeForm] = React.useState({
          fName: "",
          lName: "",
          email: "",
          pob: "",
          phone: "",
          food: "",
          aboutSelf: ""
  })
  const [allBadges, setAllBadges] = React.useState([])

  function handleChange(event) {
    const {name, value} = event.target
    setBadgeForm(prevBadgeForm => {
        return {
            ...prevBadgeForm,
            name: value
        }
    })
}

console.log(badgeForm)

  function handleSubmit(event) {
    event.preventDefault()
    setAllBadges(prevBadge => [...prevBadge, badgeForm])
    setBadgeForm({
          fName: "",
          lName: "",
          email: "",
          pob: "",
          phone: "",
          food: "",
          aboutSelf: ""
    })
  }

  return (
    <>
      <div className='form--container'>
        <form onSubmit={handleSubmit}>
          <input
            required
            placeholder='First Name'
            type='text'
            name='fName'
            onChange={handleChange}
            value={badgeForm.fName}
            minLength={3}
          />
          <input
            required
            placeholder='Last Name'
            type='text'
            name='lName'
            onChange={handleChange}
            value={badgeForm.lName}
          />
          <input
            required
            placeholder='Email'
            type='text'
            name='email'
            onChange={handleChange}
            value={badgeForm.email}
          />
          <input
            required
            placeholder='Place of Birth'
            type='text'
            name='pob'
            onChange={handleChange}
            value={badgeForm.pob}
          />
          <input
            required
            placeholder="Phone Number, don't include dashes or spaces"
            type='tel'
            pattern="[0-9]{10}"
            name='phone'
            onChange={handleChange}
            value={badgeForm.phone}
          />
          <input
            required
            placeholder='Favorite Food'
            type='text'
            name='food'
            onChange={handleChange}
            value={badgeForm.food}
          />
          <textarea 
            placeholder='Tell us about yourself!'
            name='aboutSelf'
            onChange={handleChange}
            value={badgeForm.aboutSelf}
          />
          <button className='submit'>Submit</button>
        </form>
      </div>
      <div>
        {allBadges.map(item => {
          return (
          <Badge 
            key = {item.fName}
            fName = {item.fName}
            lName = {item.lName}
            email = {item.email}
            pob = {item.pob}
            phone = {item.phone}
            food = {item.food}
            aboutSelf = {item.aboutSelf}
          />)
        })}
      </div>
    </>
  )
}

export default App

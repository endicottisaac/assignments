import React, { useState } from "react";

export default function SavedMeme(props) {

  const {editMeme, index} = props

  const [toggle, setToggle] = useState(true)

  function handleToggle(){
    setToggle(prev => !prev)
  }

  const [edit, setEdit] = useState({
        topText: props.topText,
        bottomText: props.bottomText,
        memeImg: props.memeImg
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setEdit(prevEdit => {
      return {
        ...prevEdit,
        [name]: value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    editMeme(index, edit)
    handleToggle()
  }

  return (
    <>
      {toggle ?
        <div className="saved-meme">
        <img src={props.memeImg} className="meme--image" />
        <h2 className="top--text">{props.topText}</h2>
        <h2 className="bottom--text">{props.bottomText}</h2>
        <button onClick={handleToggle}>Edit</button>
        <button className="delete--button" onClick={props.onDelete}>Delete</button>
      </div>
      :
      <form onSubmit={handleSubmit}>
        <input 
          name="topText"
          value={edit.topText}
          onChange={handleChange}
        />
        <input 
          name="bottomText"
          value={edit.bottomText}
          onChange={handleChange}
        />
        <input 
          name="memeImg"
          value={edit.memeImg}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
        <button onClick={handleToggle}>Cancel</button>
      </form>}
    </>
  );
}
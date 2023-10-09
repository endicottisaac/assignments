import React from "react";
import axios from "axios";
import SavedMeme from "./SavedMeme";
export default function Meme() {

    //the meme the user is currently working on, originally set with no text and an image 
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    //all the memes that we used a get request from the api in the useEffect
    const [allMemes, setAllMemes] = React.useState([])

    //the list of memes that are already saved
    const [memeList, setMemeList] = React.useState([])

    //the use effect to get the memes from the api
    React.useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes")
          .then(response => {
            console.log(response.data.data.memes)
            setAllMemes(response.data.data.memes);
          })
          .catch(error => {
            console.error("Error fetching memes:", error);
          });
      }, []);
      
    //accesses allMemes to get a new random meme and sets it to the current meme's image while keeping exsisting text
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    //changes the meme's top and bottom text as the user types in the input fields 
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    //saves the meme's text and image, adds it to the memeList, resets the meme to no text and original image
    function saveButton() {
        const newMeme = {
            memeImg: meme.randomImage,
            topText: meme.topText,
            bottomText: meme.bottomText
        }
        setMemeList(existingMemes => [...existingMemes, newMeme]);

        setMeme({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"  
        })
    }

   //maps over the memeList and adds each meme to webpage 
    const savedMemes = memeList.map((item, index) => {
        return <SavedMeme
            memeImg={item.memeImg} 
            topText={item.topText} 
            bottomText={item.bottomText}
            key={index}
        />
    })

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <button className="save--button" onClick={saveButton}>Save Meme</button>
            <div className="memes--list">
                {savedMemes}
            </div>
        </main>
    )
}
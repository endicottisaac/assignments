import React from "react";

export default function SavedMeme(props) {
  return (
    <div className="saved-meme">
      <img src={props.memeImg} className="meme--image" />
      <h2 className="top--text">{props.topText}</h2>
      <h2 className="bottom--text">{props.bottomText}</h2>
    </div>
  );
}
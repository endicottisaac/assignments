import React, { useContext, useState } from "react";
import { TriviaContext } from "../triviacontext";

export default function TrueOrFalse () {

    const {trueOrFalse, newTrueOrFalse} = useContext(TriviaContext);

    const [answerClass, setAnswerClass] = useState("hidden")

    const toggleHidden = () => {
        setAnswerClass(prevClass => prevClass === "hidden" ? "revealed" : "hidden")
    }

    return(
        <>
            <h1>True or False</h1>
            <button onClick={newTrueOrFalse}>Get New Trivia</button>
            <div><h3>Question:</h3><h4>{trueOrFalse.question} </h4></div>
            <div><h3>Answer:</h3><h4 className={`answer--${answerClass}`}>{trueOrFalse.correct_answer} </h4></div>
            <button onClick={toggleHidden}>Reveal Answer</button>
        </>
    )
}

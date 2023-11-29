import React, {useState} from "react";


export default function TriviaCustom(props){

    const [answerClass, setAnswerClass] = useState("hidden")

    const toggleHidden = () => {
        setAnswerClass(prevClass => prevClass === "hidden" ? "revealed" : "hidden")
    }

    return(
        <>
            <div>
                <h3>Question:</h3>
                <h4>{props.question}</h4>
                <h3>Answer:</h3>
                <h4 className={`answer--${answerClass}`}>{props.correct_answer}</h4>
                <button onClick={toggleHidden}>Reveal Answer</button>
            </div>
        </>
    )
}
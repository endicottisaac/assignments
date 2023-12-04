import React, {useState, useContext, useEffect} from "react";
import { TriviaContext } from "../triviacontext";


export default function TriviaCustom(props){

    const {customTrivia} = useContext(TriviaContext)

    const [answerClass, setAnswerClass] = useState("hidden")

    const toggleHidden = () => {
        setAnswerClass(prevClass => prevClass === "hidden" ? "revealed" : "hidden")
    }

    useEffect(() => {
        setAnswerClass("hidden")
    }, [customTrivia])
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
import React, {useContext} from "react";
import { TriviaContext } from "../triviacontext";

export default function Home(){

    const { homeTrivia } = useContext(TriviaContext);
    return (
        <>
            <header>
                <h1>Welcome to the Trivia Game!</h1>
                <p>Please use the following instructions on how to play!</p>
            </header>
            <section>
                <h2>True Or False</h2>
                <p>You must wait 5 seconds in between each request!</p>
                <p>You can use the "Get New Trivia" button to get a new True or False trivia question. </p>
                <p>The new question will load but the answer will be hidden until you decide to reveal it. </p>
            </section>
            <section>
                <h2>Custom</h2>
                <p>You must wait 5 seconds in between each request!</p>
                <p>You can use the different selectors to get a set of customized trivia.</p>
                <p>You will have two selectors, one for the amount of trivia that you can select, the other for the category you would like to pick from.</p>
            </section>
            <section>
                <h2>Random Trivia:</h2>
                <p>Question: {homeTrivia.question}</p>
                <p>Answer: {homeTrivia.correct_answer}</p>
            </section>
        </>
    )
}
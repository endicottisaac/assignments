import React, { useContext } from "react";
import { TriviaContext } from "../triviacontext"; 
import TriviaCustom from "./TriviaCustom";
import he from 'he';


export default function Custom () {

    const {handleChange, submitCustomTrivia,customTrivia} = useContext(TriviaContext)

    const triviaQuestions = customTrivia.map((item, index) => {
        const triviaQuestion = he.decode(item.question)
        const triviaAnswer = he.decode(item.correct_answer)
        return <TriviaCustom 
            question={triviaQuestion}
            correct_answer={triviaAnswer}
            key={index}
        />

    })

    return(
        <>
            <h1>Custom</h1>
            <div>
            <h2>Please select the number of Trivia Questions and the Category you would like to request!</h2>
            <label htmlFor="category">Choose a Category:</label>
            <select id="category" name="category" onChange={handleChange}>
                {/* <option value="any">Any Category</option>
                <option value="generalKnowledge">General Knowledge</option> 
                <option value="entertainmentBooks">Entertainment: Books</option> 
                <option value="entertainmentFilm">Entertainment: Film</option>
                <option value="entertainmentMusic">Entertainment: Music</option>
                <option value="entertainmentMusicalsAndTheaters">Entertainment: Musicals & Theaters</option>
                <option value="entertainmentTelevision">Entertainment: Television</option>
                <option value="entertainmentVideoGames">Entertainment: Video Games</option>
                <option value="entertainmentBoardGames">Entertainment: Board Games</option>
                <option value="scienceNature">Science and Nature</option>
                <option value="scienceComputers">Science: Computers</option>
                <option value="scienceMathematics">Science: Mathematics</option>
                <option value="mythology">Mythology</option>
                <option value="sports">Sports</option>
                <option value="geography">Geography</option>
                <option value="history">History</option>
                <option value="politics">Politics</option>
                <option value="art">Art</option>
                <option value="celebrities">Celebrities</option>
                <option value="animals">Animals</option>
                <option value="vehicles">Vehicles</option>
                <option value="entertainmentComics">Entertainment: Comics</option>
                <option value="scienceGadgets">Science: Gadgets</option>
                <option value="entertainmentJapanese">Entertainment: Japanese Anime and Manga</option>
                <option value="entertainmentCartoons">Entertainment: Cartoon and Animations</option> */}
                <option value="any">Any Category</option>
                <option value="9">General Knowledge</option> 
                <option value="10">Entertainment: Books</option> 
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals & Theaters</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science and Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">Entertainment: Japanese Anime and Manga</option>
                <option value="32">Entertainment: Cartoon and Animations</option>
            </select>
            <label htmlFor="totalTrivia">Number of Trivia:</label>
            <select name="totalTrivia" id="totalTrivia" onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <button onClick={submitCustomTrivia}>Get Trivia</button>
            </div>
            <div>
                {triviaQuestions}
            </div>
        </>
    )
}


//catergories and api numbers: 
// General Knowledge 9
// Entertainment:Books 10
// Entertainment:Film 11
// Entertainment:Music 12
// Entertainment:Musicals and Theaters 13
// Entertainment: Television 14
// Entertainment: Video Games 15
// Entertainment: Board Games 16
// Science and Nature 17
// Science: Computers 18
// Science: Mathematics 19
// Mythology 20
// Sports 21
// Geography 22
// History 23
// Politics 24
// Art 25
// Celebrities 26 
// Animals 27
// Vehicles 28
// Entertainment: Comics 29
// Science: Gadgets 30 
// Entertainment: Japanese Anime and Manga 31
// Entertainment: Cartoons and Animtaions 32
// 
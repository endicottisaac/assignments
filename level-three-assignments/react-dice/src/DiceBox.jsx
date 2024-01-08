import React from "react";

export default function DiceBox() {
    const [allDice, setAllDice] = React.useState({
        diceOne: 1,
        diceTwo: 2,
        diceThree: 3,
        diceFour: 4,
        diceFive: 5,
    })

    const getNewDice = () => {
        function ranNum() {
            return Math.floor(Math.random() * 6) + 1
        }
        setAllDice(prevDice => {
            return {
                diceOne: ranNum(),
                diceTwo: ranNum(),
                diceThree: ranNum(),
                diceFour: ranNum(),
                diceFive: ranNum(),
            }
        })
    }

    return (
        <div>
            <h1>These are your 5 dice! Reroll if you wish!</h1>
            <button onClick={getNewDice}>Reroll Dice</button>
            <h4>Dice One: {allDice.diceOne}</h4>
            <h4>Dice Two: {allDice.diceTwo} </h4>
            <h4>Dice Three: {allDice.diceThree} </h4>
            <h4>Dice Four: {allDice.diceFour} </h4>
            <h4>Dice Five: {allDice.diceFive} </h4>
        </div>
    )
}


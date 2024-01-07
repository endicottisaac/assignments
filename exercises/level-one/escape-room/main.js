const readline = require("readline-sync");
const name = readline.question("What is your name? ");

console.log(`Good luck getting out... ${name}`)

let key = 0;
let gameOver = 0;

const promptUser = () => {
    const userAnswer = readline.question('What would you like to do?Find the key (type key); Open the door (type door); Put hand in hole (type hole)')

    if(userAnswer ==='key'){
        key = 1
        console.log('You got the key!')
    } else if(userAnswer === 'door'){
        if(key === 0){
            console.log('Door is locked')
        } else {
            console.log(`You made it, congrats ${name}`)
            gameOver = 1;
        }
    } else if (userAnswer === 'hole'){
        gameOver = 1;
        console.log(`${name} is dead... GAME OVER`)
    } else {
        console.log('enter a valid value')
    }
}



while(gameOver === 0){
    promptUser()
}

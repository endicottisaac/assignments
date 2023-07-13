class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
    }

    setName(namePicked){
        if(namePicked === "Mario"){
        this.name = namePicked
        } else if(namePicked === "Luigi"){
        this.name = namePicked 
        } else {
            console.log("Not a valid character name, please pick Mario or Luigi")
        }
    } 

    gotHit() {
        if(this.status === "Powered Up"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Small"
        } else if(this.status === "Small") {
            this.status = "Dead"
        }
    }

    gotPowerUp() {
        if(this.status === "Small"){
            this.status = "Big"
        } else if(this.status === "Big"){
            this.status = "Powered Up" 
        } else if(this.status === "Powered Up") {
            this.hasStar = true;
        }
    }

    addCoin() {
        this.totalCoins ++;
    }

    print(){
        console.log(`Name : ${this.name}`)
        console.log(`Status: ${this.status}`)
        console.log(`Total Coins: ${this.totalCoins}`)
    }
}

const newPlayer = new Player( "", 0, "Big", false);
newPlayer.setName("Mario")

const randomRange = () => {
    const ranNum = Math.floor(Math.random() * 3);
    return ranNum;
}

const gamePlay = () => {
    const num = randomRange();
    if(num === 0) {
        if(newPlayer.hasStar === true){
            console.log("You got hit but your star has protected you!")
            newPlayer.hasStar = false;
        } else {
            console.log("You got hit")
            newPlayer.gotHit();
        }
    } else if(num === 1) {
        if(newPlayer.status === "Powered Up" && newPlayer.hasStar === false){
            console.log("Congrats! You got a star")
            newPlayer.gotPowerUp();
        } else {
            console.log("You got a power up")
            newPlayer.gotPowerUp();
        }
    } else if(num === 2) {
        console.log("You found a coin!")
         newPlayer.addCoin()
    }
}

const message = () => {
    if(newPlayer.hasStar === true){
        newPlayer.print()
        console.log("You have a star")
    } else {
        newPlayer.print()
    }
}


const gameOver = () => {
    console.log('You have died, GAME OVER!!!');
    newPlayer.print();
    console.log(`You final score was: ${newPlayer.totalCoins}`);
    clearInterval(myInterval);
}

const play = () => {
    gamePlay();
    if(newPlayer.status === "Dead"){
        gameOver()
    } else {
        message()
        console.log("")
    }
}

const myInterval = setInterval(play, 1000)
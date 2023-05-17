//Initial values 
const player = {
    hp: 100,
    weapon: "Sword",
    inventory: ['quest note'],
    potion: 1
};

let timesWalked = 0;
let enemiesKilled = 0; 

//Initial messages, getting names 

alert(`Welcome to a simple/short rpg`)
const playerName = prompt('What is your name?')
alert(`Well ${playerName}... We are off to a great adventure`)
alert(`You will need to walk forward, fight enemies, and collect quest items to beat the game. Your goal is to find the key`)
alert(`${playerName}'s starting health is: ${player.hp}hp; weapon: ${player.weapon}; inventory: ${player.inventory}; potion(s): ${player.potion}. PS potions heal for 20 health`)


//Random number functions;

const walkNumber = () => {
    num = Math.floor(Math.random() * 100); 
    return num 
}

const whichEnemy = () => {
    num = Math.floor(Math.random() * 100);
    if(num > 75){
        return 'Troll'
    } else if(num > 30) {
        return 'Thief'
    } else {
        return 'Goblin'
    }

}

//User attack damage per attack 

const playerAttack = () => {
    const playerDamage = Math.floor(Math.random() * 26);
    if(playerDamage > 8){
        return playerDamage;
    } else {
        return 8;
    }
}

//Enemy Attack Damage per attack

const goblinAttack = () => {
    const goblinDamage = Math.floor(Math.random() * 6);
    if(goblinDamage > 0){
        return goblinDamage;
    } else {
        return 2;
    }
}

const thiefAttack = () => {
    const thiefDamage = Math.floor(Math.random() * 10);
    if(thiefDamage > 4){
        return thiefDamage;
    } else {
        return 4;
    }
}

const trollAttack = () => {
    const trollDamage = Math.floor(Math.random() * 21);
    if(trollDamage > 7){
        return trollDamage;
    } else {
        return 7;
    }
}

//fight or flight functions


const fightOrRun = () => {
    const enemy = whichEnemy();
    const userChoice = prompt(`You have run into an enemy! Would you like to fight the ${enemy}, press 'f', or press 'r' to run away?`)
    if(userChoice === 'r'){
        const runChance = Math.floor(Math.random () * 2)
        if( runChance > 0){
            alert(`You got away safely!`)
        } else if(runChance < 1) {
            alert(`You could not get away, you will have to fight the ${enemy}...`)
            fightEnemy(enemy);
        }
    } else if(userChoice === 'f'){
        fightEnemy(enemy);
    }
}

const fightEnemy = (enemy) => {
    let trollHealth = 100;
    let thiefHealth = 50;
    let goblinHealth = 25; 
    if(enemy === 'Troll'){
        while (player.hp > 0 && trollHealth > 0) {
            const playerTurn = playerAttack();
            console.log('player damage: ' + playerTurn)
            trollHealth -= playerTurn;
            console.log('enemy health after attack: " ' + trollHealth)
            const trollTurn = trollAttack()
            console.log('enemy damage: ' + trollTurn)
            player.hp -= trollTurn
            console.log('player health after enemy attack: ' + player.hp)
        }
        if(trollHealth < 1){
            enemiesKilled += 1;
            player.hp += 35;
            alert(`You have defeated the troll! You have regained some of your hp, your hp is now ${player.hp}`)
            addQuestItem()
        } else if(player.hp < 1) {
            return player.hp

        }
        
    } else if(enemy === 'Thief'){
            while(player.hp > 0 && thiefHealth > 0) {
            const playerTurn = playerAttack();
            console.log('player damage: ' + playerTurn)
            thiefHealth -= playerTurn;
            console.log('enemy health after attack: " ' + thiefHealth)
            const thiefTurn = thiefAttack()
            console.log('enemy damage: ' + thiefTurn)
            player.hp -= thiefTurn
            console.log('player health after enemy attack: ' + player.hp)
        }
        if(thiefHealth < 1){
            enemiesKilled += 1;
            player.hp += 20
            alert(`You have defeated the thief! You have regained some of your hp, your hp is now ${player.hp}`)
            addQuestItem()
        } else if(player.hp < 1){
            return player.hp
        }
        
    }  else if(enemy === 'Goblin'){
        while(player.hp > 0 && goblinHealth > 0) {
        const playerTurn = playerAttack();
        console.log('player damage: ' + playerTurn)
        goblinHealth -= playerTurn;
        console.log('enemy health after attack: " ' + goblinHealth)
        const goblinTurn = goblinAttack()
        console.log('enemy damage: ' + goblinTurn)
        player.hp -= goblinTurn
        console.log('player health after enemy attack:  ' + player.hp)
    }
    if  (goblinHealth < 1){
        enemiesKilled += 1;
        player.hp += 5
        alert(`You have defeated the goblin! You have regained some of your hp, your hp is now ${player.hp}`)
        addPotion()
    } else if(player.hp < 1){
        return player.hp
    }
    }
}

//inventory functions
const viewInventory = () => {
    const inventoryChoice = prompt(`You currently have a ${player.weapon}, ${player.potion} potion(s), and the following items "${player.inventory}"; If you would like to use a potion , press 'p'; Or close your inventory, press 'c'`);
    if(inventoryChoice === 'p'){
        if(player.potion > 0){
            player.potion -= 1
            player.hp += 20;
            alert(`You used a health potion to heal 20hp, your current health is ${player.hp}`)
        } else {
            alert(`You currently have no potions, you were not healed...`)
        }
    }
}

//adding quest items after defeating monsters
const addQuestItem = () => {
    if(player.inventory.length < 2){
        player.inventory.push("eye of newt")
        alert(`You have found another item, you have found the ${player.inventory[1]}.`)
    } else if(player.inventory.length < 3){
        player.inventory.push("broken sword of the dead")
        alert(`You have found another item, you have found the ${player.inventory[2]}.`)

    }else if(player.inventory.length < 4){
        player.inventory.push("fairy in a bottle")
        alert(`You have found another item, you have found the ${player.inventory[3]}.`)

    } else if(player.inventory.length < 5){
        player.inventory.push('feather from a big bird')
        alert(`You have found another item, you have found the ${player.inventory[4]}.`)

    } else if(player.inventory.length < 6){
        player.inventory.push('key to the prize')
        alert(`You have found another item, you have found the ${player.inventory[5]}.`)

    }
}
const addPotion = () =>{
    const chanceToAdd = Math.floor(Math.random() * 4)
    if(chanceToAdd > 1){
        player.potion += 1
        alert(`The goblin dropped a potion! You now have ${player.potion} potion(s)`)
    }
}
//function to combine fighting, running, inventory, etc. 
const nextAction = () => {
    const userChoice = prompt(`Please press 'w' for walk, 'i' for inventory, 'v' to view your character, or 'q' to quit the game.`)
    if(userChoice === 'w'){
        timesWalked +=1
        let fightChance = walkNumber();
        if(fightChance > 70){
        fightOrRun();
       } else {
        alert(`Another step towards victory!`)
       }
    } else if(userChoice === 'i'){
        viewInventory()
    } else if(userChoice === 'v'){
        alert(`${playerName}'s stats: times walk was chosen: ${timesWalked}; enemies defeated: ${enemiesKilled}; current health: ${player.hp}; items in inventory: ${player.inventory}`)
    } else if(userChoice === 'q'){
        const secondQuit = prompt(`Your progress will not be saved. You sure you want to quit? press q to quit, press any other letter to keep playing.`)
        if(secondQuit === 'q'){
            player.hp -= 10000000;
        }
    }
}


//function to alert the user they have one
const hasKey = () =>{
    if(player.inventory[5] === 'key to the prize'){
        alert(`You have found the key and win the game!!!, Your prize is the pride of winning`)
        document.body.append('You have won!')
        document.body.style.color = 'gold'
    }
}

//function to alert the user if they have lost

const isDead = () => {
    if(player.hp < 1){
        alert(`Wah wah waaaah... you are dead. game over. no prize for you.`)
        document.body.append('You have lost...')
        document.body.style.color = 'red'
    }
}


//While loop to repeat until player has died, player has obtained the key, or player has quit
while(player.hp > 0 && player.inventory.length < 6) {
    nextAction()
    hasKey()
    isDead()

}





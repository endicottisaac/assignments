//Initial values 
const player = {
    hp: 100,
    weapon: "Sword",
    inventory: ['quest note'],
    potion: 1
};

let enemiesKilled = 0; 

//Initial messages, getting names 

alert(`Welcome to a simple/short rpg`)
const playerName = prompt('What is your name?')
alert(`Well ${playerName}... We are off to a great adventure`)
alert(`You will need to walk forward, fight enemies, and collect quest items to beat the game.`)
alert(`${playerName}'s starting health is: ${player.hp}hp; weapon: ${player.weapon}; inventory: ${player.inventory}; potion(s): ${player.potion}. PS potions heal for 20 health`)


//Random number functions;

const walkNumber = () => {
    num = Math.floor(Math.random() * 3); 
    return num 
}

const whichEnemy = () => {
    num = Math.floor(Math.random() * 100);
    if(num > 79){
        return 'Troll'
    } else if(num > 54) {
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
        runAway()
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
            console.log(playerTurn)
            trollHealth -= playerTurn;
            console.log(trollHealth)
            const trollTurn = trollAttack()
            console.log(trollTurn)
            player.hp -= trollTurn
            console.log(player.hp)
        }
        if(trollHealth < 1){
            enemiesKilled += 1;
            player.hp += 35;
            alert(`You have defeated the troll! You have regained some of your hp, your hp is now ${player.hp}`)
        } else if(player.hp < 1) {
            alert("you are dead")
            return player.hp

        }
        
    } else if(enemy === 'Thief'){
            while(player.hp > 0 && thiefHealth > 0) {
            const playerTurn = playerAttack();
            console.log(playerTurn)
            thiefHealth -= playerTurn;
            console.log(thiefHealth)
            const thiefTurn = thiefAttack()
            console.log(thiefTurn)
            player.hp -= thiefTurn
            console.log(player.hp)
        }
        if(thiefHealth < 1){
            enemiesKilled += 1;
            player.hp += 20
            alert(`You have defeated the thief! You have regained some of your hp, your hp is now ${player.hp}`)
        } else if(player.hp < 1){
            alert("dead")
            return player.hp
        }
        
    }  else if(enemy === 'Goblin'){
        while(player.hp > 0 && goblinHealth > 0) {
        const playerTurn = playerAttack();
        console.log(playerTurn)
        goblinHealth -= playerTurn;
        console.log(goblinHealth)
        const goblinTurn = goblinAttack()
        console.log(goblinTurn)
        player.hp -= goblinTurn
        console.log(player.hp)
    }
    if  (goblinHealth < 1){
        enemiesKilled += 1;
        player.hp += 5
        alert(`You have defeated the goblin! You have regained some of your hp, your hp is now ${player.hp}`)
    } else if(player.hp < 1){
        alert("dead")
        return player.hp
    }
    }
}

const runAway = () => {
    const damageChance = Math.floor(Math.random() * 3);
    if(damageChance > 0){
        alert('You got away safely')
    } else {
        player.hp = player.hp - 10;
        alert(`You took damage while running away, your current hp is ${player.hp}`)
        console.log(player.hp)
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
const addQuestItem = () =>{
    
}

const nextAction = () => {
    const userChoice = prompt(`Please press 'w' for walk, 'i' for inventory`)
    if(userChoice === 'w'){
       let fightChance = walkNumber();
       if(fightChance >= 0){
         fightOrRun();
       } else {
        return 'Another step towards Victory!'
       }
    } else if(userChoice === 'i'){
        viewInventory()
    }
}






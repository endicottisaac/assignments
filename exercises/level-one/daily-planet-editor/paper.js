/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var enemies = ["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function whoWins(hasKryptonite,enemyName) {
    if(!hasKryptonite){
        return "Superman beats " +enemyName+ ", of course";
    } else{
        return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyName +" could possibly win this one.";
    }
};

for (var i=0;i<enemies.length;i++){
    var hasKryptonite;
    if (i%2=== 0) {
        hasKryptonite = true;
    } else {
        hasKryptonite = false;
    }
    console.log(whoWins(hasKryptonite,enemies[i]));
};

function isLoisAttracted ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random()*10)+1);
};

console.log(isLoisAttracted());

var clarkKent = true;
var superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange>= 0.5) {
        clarkKent=false;
        superman=true;
        console.log("Now I'm Superman!");}
};


// only thing i don't understand is if the var on line 23 is necessary. on testing it didn't seem necessary
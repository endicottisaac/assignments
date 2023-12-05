const form = document.pestForm;
let goombaTotal = 0;
let bobOmbsTotal = 0;
let cheepCheepTotal = 0;
let coinTotal = 0;

form.addEventListener("submit", (event) =>{
    event.preventDefault()

    const goomba = form.goomba.valueAsNumber;
    const bobOmbs = form.bobOmbs.valueAsNumber;
    const cheepCheep = form.cheepCheep.valueAsNumber;

    goombaTotal += goomba
    bobOmbsTotal += bobOmbs
    cheepCheepTotal += cheepCheep

    const goombasCaught = document.getElementById("goombaTotal")
    goombasCaught.textContent = goombaTotal;
    const bobOmbsCaught = document.getElementById("bobOmbsTotal")
    bobOmbsCaught.textContent = bobOmbsTotal
    const cheepCheepsCaught = document.getElementById("cheepCheepTotal")
    cheepCheepsCaught.textContent = cheepCheepTotal 

    let goombaCoin = goombaTotal * 5;
    let bobOmbsCoin = bobOmbsTotal * 7;
    let cheepCheepCoin = cheepCheepTotal * 10;

    let addCoins = goombaCoin + bobOmbsCoin + cheepCheepCoin;

    coinTotal += addCoins;

    const totalPrice = document.getElementById("totalPrice");
    totalPrice.textContent = coinTotal

    form.goomba.value = ""
    form.bobOmbs.value = ""
    form.cheepCheep.value = ""

})
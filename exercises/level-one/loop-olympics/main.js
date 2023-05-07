//Prelims
for(let i = 0; i <= 9; i++){
    console.log(i)
}
for(let i = 9; i >= 0; i--){
    console.log(i);
}

const fruit = ["banana", "orange", "apple", "kiwi"]

for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

//Bronze
const numbers = [];
for(let i = 0; i <= 9; i++){
    numbers.push(i)
}
console.log(numbers)

for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

const fruitBronze = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

for(let i = 0; i < fruitBronze.length; i++){
    if(i % 2 === 0){
        console.log(fruitBronze[i])
    }
}
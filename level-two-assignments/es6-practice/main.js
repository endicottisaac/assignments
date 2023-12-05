//let/const 

const Manname = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", Manname)
    return petObjects
}

runForLoop(["cat", "dog"])


//arrow functions task 1
const carrots = ["bright orange", "ripe", "rotten"]

let  mapVegetables = arr => {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}

console.log(mapVegetables(carrots))

//arrow fucntion task 2

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => {
        return person.friendly
    })
}

console.log(filterForFriendly(people))

//arrow function task 3

let  doMathSum = (a, b) => {
    return a + b
}

let produceProduct = (a, b) => {
    return a * b
}
//Hi


console.log(doMathSum(1,2));
console.log(produceProduct(2,3));

//arrow functions task 4 

let printString = (firstName = "John", lastName = "Doe", age = 100) => {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}
console.log(printString("Annebell", "Ko", 30))

//arrow functions task 5

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
const filterForDogs = arr => arr.filter(animal => animal.type === "dog");

console.log(filterForDogs(animals))

//Temperate literals 

const printedMessage = (location, name) => {
    return `Hi ${name}!
Welcome to ${location}.
I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
};

console.log(printedMessage('Hawaii', 'Janice'))
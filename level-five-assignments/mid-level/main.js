//understand the ?
//psuedo code plan
//solve


// function extractUniqueCharacters(strings) {
// //need to create a new array containing all of the unique letters contained in the words within the words array
// //take all of the letters out of the words array and create a new array
// //take the new letters array and filter through them and compare them to create a new array

// //things learned when researching
// //JS Set, creates a container like an array or object that can only hold unique items. 
// //JS Array.from, changes an 'iterable' object into an array. 
//     const letters = strings.map(string => string.split(''))
//     // console.log(letters)
//     const combinedLetters = [].concat(...letters)
//     // console.log(combinedLetters)
//     let uniqueLetters = new Set();
    
//     combinedLetters.forEach(letter => {
//         uniqueLetters.add(letter)
//     });

//     const newArray = Array.from(uniqueLetters)

//     return newArray
// }

function extractUniqueCharacters(arr){
    const allCharacters = arr.join('').split('')
    const result = []
    allCharacters.map(letter => {
        if(!result.includes(letter)){
            result.push(letter)
        }
    })
    return result
}
//look up .includes

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']




function sortByProperty(objects, propertyName) {
//need to take the two parameters to sort the array by age
//access the object.property name and use .sort a-b
//things learned accessing things dynamically 
    return objects.sort((a, b) => a[propertyName] - b[propertyName]);
}

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, "age");
console.log(sortedByAge);


//Challenge: Write a program that generates a multiplication table for a given number.

//The table should display the multiplication of the given number with numbers from 1 to 10.

function generateMultiplicationTable(number) {
    //create a multiplaction numbert 1 - 10, expected outcome is not an array 
    // use temporate literals to preset box, using a for loop to go through each number 
    let result = ''
    for(i = 1; i < 11; i++){
        result += (`${number} * ${i} = ${i * number} \n`)
    }
    return result
}

// Test the function with different numbers
console.log(generateMultiplicationTable(5))
// Expected Outcome: 
/*
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50 
*/
generateMultiplicationTable(7);
generateMultiplicationTable(3);


//understand the ?
//psuedo code plan
//solve


function extractUniqueCharacters(strings) {
//need to create a new array containing all of the unique letters contained in the words within the words array
//take all of the letters out of the words array and create a new array
//take the new letters array and filter through them and compare them to create a new array

//things learned when researching
//JS Set, creates a container like an array or object that can only hold unique items. 
//JS Array.from, changes an 'iterable' object into an array. 
    const letters = strings.map(string => string.split(''))
    // console.log(letters)
    const combinedLetters = [].concat(...letters)
    // console.log(combinedLetters)
    let uniqueLetters = new Set();
    
    combinedLetters.forEach(letter => {
        uniqueLetters.add(letter)
    });

    const newArray = Array.from(uniqueLetters)

    return newArray
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
// console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']




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


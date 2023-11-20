//Filter Anagrams

function filterAnagrams(arr, target) { //provided by the challenge but allows two parameters both the array of words and the target word to be used in the function
    const targetWord = target.toLowerCase().split('').sort().join('') // takes the target word and sorts it alphabetically by changing to all lower case, splitting it into an array of single letter strings, sorting that array into alphabetical order then joining it back into a single word. 
    return arr.filter((word) => word.toLowerCase().split('').sort().join('') === targetWord) //does the same method with each word in the array to split the word then sort it into alphabetical order. after the word is sorted it compares it to the sorted target word and returns the word if it matches using .filter() in a new arr 
    
    
}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

// const anagrams = filterAnagrams(words, target);
// console.log(anagrams); // Output: ['listen', 'silent']


function sortByMultipleCriteria(people) {
    return people.sort((a, b) => {  //using sort to compare each person in the people array
        if(a.age === b.age){    //this is to take care of the sorting by name as well as by age
            if(a.name < b.name){
                return -1 //if the age is the same then it will compare the names, usually you would use a-b when sorting, if the result is negative it sorts a before b 
            } else if(a.name > b.name){
                return 1 //if result is postive b before a 
            }else {
                return 0 //keeps original order 
            } 
        } else {
            return a.age - b.age //if return negative a then b, positve b then a, if it's 0 then keeps original order 
        }
    })
}

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'David', age: 25 },
//  { name: 'Bob', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]



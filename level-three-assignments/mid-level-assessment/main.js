//Challenge 1 (sum of two)

const numbers = [2, 4, 7, 11, 15];
const target = 9;
const numbersTwo = [5, 12, 3, 9, 1];
const targetTwo = 8;



function findSumOfTwo(arr, num) {
    for (let i = 0; i < arr.length; i++) { //gets a value from the array
        for(let j = 0; j<arr.length; j++) // gets a second value from the same arr
        if(arr[i] + arr[j] === num) { //add the two values from both arr to check if they add to the targeted number
            return([arr[i],arr[j]]) //returns both values in an array 
        }
    }
}
//I used nested for loops to so i could get two different values out of the array and compare them. So I could get an intitial value using the first loop and compare all of the rest of the array against it using the second loop to see if the combination of those two numbers was equal to the target number. I used the conditional statement to see if the two numbers being compared were equal to the target number. If they did i returned those two numbers 

console.log(findSumOfTwo(numbers, target)); // Output: [2, 7]
console.log(findSumOfTwo(numbersTwo, targetTwo)); // Output: [3, 5]


//Challenge 2 Count Vowels

const input = 'Hello, World!';

const inputTwo = 'Counting Vowels';

function countVowels(word) {
    let vowelCount = 0; //initial variable to keep track of total values
    for(i = 0; i < word.length; i++){ //a loop to go through every letter in the words
        let uppercaseLetter = word[i].toUpperCase() //makes every letter an upper case
        if(uppercaseLetter === "A" ||uppercaseLetter === "E" ||uppercaseLetter === "I" || uppercaseLetter === "O" || uppercaseLetter === "U" ){ //conditional statement to see if any of the letters are equal to any vowels
            vowelCount += 1; // if the letter is a vowel it adds 1 to the vowel count 
        }
    }
    return vowelCount //returns the total vowel count after looping through the letters in the words 
}

//I created a vowelCount variable to keep track of total vowels while going through the array. I created a for loop to go through the arr, and a conditional statement that checked if a letter was equal to a vowel. If it was then i added 1 to the vowelCount variable. I chose to make every letter an upper case letter just in case even though the challenge didn't necessarily require it 

console.log(countVowels(input)); // Output: 3
console.log(countVowels(inputTwo)); // Output: 5
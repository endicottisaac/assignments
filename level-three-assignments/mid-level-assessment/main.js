//Challenge 1 (sum of two)

const numbers = [2, 4, 7, 11, 15];
const target = 11;
const numbersTwo = [5, 12, 3, 9, 1];
const targetTwo = 8;



function findSumOfTwo(arr, num) {
    for (let i = 0; i < arr.length; i++) { //gets a value from the array
        for(let j = i + 1; j<arr.length; j++) // gets a second value from the same arr
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


// function countVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const characters = str.toLowerCase().split('');
//     let count = 0;
  
//     for (let i = 0; i < characters.length; i++) {
//       if (vowels.includes(characters[i])) {
//         count++;
//       }
//     }
  
//     return count;
//   }


  //Challenge: Sort Array with Preserved Index for -1 Values

// You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

// Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

// All non -1 values in the array should be sorted in ascending order.
// The -1 values should retain their original index positions in the sorted array.

function solution(arr){
    if(arr.includes(-1)){

        const filteredArr = arr.filter(num => num !== -1)
        filteredArr.sort((a,b) => a -b)
    
        for(i = 0; i < arr.length; i++){
            if(arr[i] !== -1){
                arr[i] = filteredArr[0]
                filteredArr.splice(0,1)
            }
        }
    } else arr.sort((a,b) => a - b)

    return arr
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))
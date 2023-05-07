//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

const capitalizeAndLowercase = (word) => {
    let userWord = word;    
    const uppercase = userWord.toUpperCase()
    const lowercase = userWord.toLowerCase()

    console.log(uppercase + lowercase)
}

capitalizeAndLowercase('hello')

//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

const findMiddleIndex = (word) => {
    const wordLength = word.length;
    const halfIndex = wordLength / 2;
    const roundedIndex = Math.floor(halfIndex);

    return roundedIndex;
}

console.log(findMiddleIndex('hello')); 

//Write a function that uses slice() and the other functions you've written to return the first half of the given string.

const returnFirstHalf = (word) => {
    const number = findMiddleIndex(word);
    const slicedWord = word.slice(0, number);
    return slicedWord;

}
console.log(returnFirstHalf('how do you do'))

//Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
const splitCase = (word) => {
    const number = findMiddleIndex(word)
    const firstHalf = returnFirstHalf(word).toUpperCase();
    const getSecondHalf = word.slice(number)
    const secondHalf = getSecondHalf.toLowerCase()
    const completeWord = firstHalf + secondHalf;

    return completeWord
}
console.log(splitCase('iiii'));

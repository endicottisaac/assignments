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

    console.log(roundedIndex);
}

findMiddleIndex('hello'); 


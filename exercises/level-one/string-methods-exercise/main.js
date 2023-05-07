//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

const capitalizeAndLowercase = (word) => {
    let userWord = word;    
    const uppercase = userWord.toUpperCase()
    const lowercase = userWord.toLowerCase()

    console.log(uppercase + lowercase)
}

capitalizeAndLowercase('hello')


//Easier (green circle)

const collectAnimals = (...manyAnimals) => {
    console.log(manyAnimals)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");

const combineFruit = (fruit, sweets, vegetables) => ({
    fruit, 
    sweets,
    vegetables
});

console.log(combineFruit(["apple", "pear"],["cake", "pie"], ["carrot"]));

//destructing object in parameter   
const parseSentence = ({location, duration}) => {
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
console.log(  parseSentence({
    location: "Kansas",
    duration: "3 weeks"
  }))

  console.log(  parseSentence({
    location: "Canada Land",
    duration: "1 Day"
  }))

  //array destructuring 
  function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}

console.log(returnFirst(['hello', 'good-bye']))

//destructuirng code with template literals 
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const returnFavorites = (arr) => {
    const [firstFav, secondFav, thirdFav ] = arr;
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav};`
}

console.log(returnFavorites(favoriteActivities));



//Intermediate Blue Square

const combineAnimals = (firstArray, secondArray, thirdArray) => {
    const combinedArr = [...firstArray, ...secondArray, ...thirdArray];
    return combinedArr;
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));




//Hard Difficulty Black Diamond 

//more es6y
const product = (a, b, c, d, e) => {
    const numbers = [a,b,c,d,e];
    
    return numbers.reduce((acc, number) => {return acc * number;}, 1)
  }
  
  console.log(product(2, 3, 4, 5, 6));

  //more es6y
const unshift =(array, ...rest) => {
    return [...array, ...rest]
}

console.log(unshift([1, 2, 3, 4, 5], 6, 7, 8, 9, 10))




//Expert Level Double Black Diamond 
const populatePeople = (names) => {
    return names.map((name) => {
        name = name.split(" ");
        const [firstName, lastName] = name;
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
  

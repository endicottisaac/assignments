//Challenge 1 
function fiveAndGreaterOnly(arr) {
    const result = arr.filter(num => num > 5)
    return result
  }
  // test
   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
console.log('hello')
  


//Challenge 2
function evensOnly(arr) {
    const result = arr.filter(num => num % 2 === 0)
    return result 
  }
  // test
  console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]



//Challenge 3
function fiveCharactersOrFewerOnly(arr) {
    const result = arr.filter(word => word.length <= 5)
    return result 
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  


//Challenge 4

function peopleWhoBelongToTheIlluminati(arr){
    const result = arr.filter(person => person.member === true)
    return result 
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]


//Challenge 5
function ofAge(arr){
    return arr.filter(person => person.age > 18)
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]
  
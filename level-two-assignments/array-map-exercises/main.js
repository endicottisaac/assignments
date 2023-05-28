// //Challenge 1

// function doubleNumbers(arr){
//     const result = arr.map(function(num){
//         return num * 2
//     })
//     return result
//   }
  
//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
  


//   //Challenge 2

//   function stringItUp(arr){
//         const strings = arr.map(function(num){
//             return num.toString()
//         })
//         return strings
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]




//   //Challenge 3
//   function capitalizeNames(arr){
//         const capitalize = arr.map(function(name) {
//             return name[0].toUpperCase() + name.slice(1).toLowerCase()
//         });
//         return capitalize
    
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
//   // Output:
//   // ["John", "Jacob", "Jingleheimer", "Schmidt"]
  



//   //Challenge 4

//   function namesOnly(arr){
//       const names = arr.map(function(people){
//         return people.name
//       })
//       return names
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  

//   //Challenge 5 
//   function makeStrings(arr){
//         return arr.map(function(people){
//             if(people.age > 20){
//                 return people.name + " can go to The Matrix"
//             } else {
//                 return people.name + " is under age!!"
//             }
//         })
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
//   // ["Angelina Jolie can go to The Matrix",
//   // "Eric Jones is under age!!",
//   // "Paris Hilton is under age!!",
//   // "Kayne West is under age!!",
//   // "Bob Ziroll can go to The Matrix"]
  

//challenge 6
function readyToPutInTheDOM(arr){
    return arr.map(function(people){
        return "<h1>" + people.name + "</h1>" + "<h2>" + people.age + "</h2>"
    })
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]
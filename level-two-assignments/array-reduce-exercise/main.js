//Challenge 1
function total(arr) {
   return arr.reduce(function(final, num){
    final += num
    return final
   })
}

console.log(total([1,2,3])); // 6



//Challenge 2 
function stringConcat(arr) {
    return arr.reduce(function(final, num){
        return final + num;
    }, '')
 }
 
 console.log(stringConcat([1,2,3])); // "123"



//Challenge 3

function totalVotes(arr) {
    return arr.reduce(function(final, voter){
        if(voter.voted){
            final++
            
        }
        return final
    }, 0)
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); // 7
 


//Challenge 4 
function shoppingSpree(arr) {
    return arr.reduce(function(final, item){
        let itemCost = item.price
        final += itemCost
        return final
    }, 0)
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist)); // 227005




//Challenge 5 
function flatten(arr) {
    return arr.reduce(function(final, newArray){
        final = final.concat(newArray)
        return final
    })
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];



//Challenge 6 
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   return arr.reduce(function(final, voter){
        if(voter.age > 35){
            final.numOldPeople += 1 
            if(voter.voted){
                final.numOldVotes += 1
            }
        } else if(voter.age > 25){
            final.numMidPeople += 1
            if(voter.voted){
                final.numMidVotes += 1
            } 
        } else{
            final.numYoungPeople += 1
            if(voter.voted){
                final.numYoungVotes += 1
            }
        }
        return final
   }, {numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, numMidPeople: 0, numOldVotes: 0, numOldPeople: 0})
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
 
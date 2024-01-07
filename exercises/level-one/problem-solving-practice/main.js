//Largest number challenge

const largest = (array) => {
    let largestNum = 0;
    for(let i = 0; i < array.length; i++){
         if(array[i]> largestNum){
            largestNum = array[i]
         }
       }
    
    return largestNum;
}


console.log(largest([6, 13, 250, 3]));
console.log(largest([3, 5, 2, 8, 1]));
console.log(largest([-13, 40, 3, 0, 19, 22])) ;


//Is the number divisible by the other number challenge;

const isDivisible = (num1, num2) => {
    if(num1 % num2 == 0){
        return true
    } else {
        return false
    }
}

console.log(isDivisible(4, 2));
console.log(isDivisible(9, 3));
console.log(isDivisible(15, 4));

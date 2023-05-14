const largest = (array) => {
    let largestNum = 0;
    for(let i = 0; i < array.length; i++){
         if(array[i]> largestNum){
            largestNum = array[i]
         }
       }
    
    return largestNum;
}


console.log(largest([6, 13, 250, 3]))
console.log(largest([3, 5, 2, 8, 1]))
console.log(largest([-13, 40, 3, 0, 19, 22])) 

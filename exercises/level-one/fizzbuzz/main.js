const mainList = document.getElementById("mainlist")
const counter = document.getElementById("counter")
const numberList = [];

const fizz = "fizz";
const buzz = "buzz";
const fizzbuzz = "fizzbuzz"


let fizzCounter = 0;
let fizzbuzzCounter = 0;
let buzzCounter = 0;

const createList = () => {
   for (let i = 1; i < 101; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        fizzbuzzCounter += 1;
        numberList.push(fizzbuzz);
    } else if(i % 5 == 0) {
        buzzCounter += 1;
        numberList.push(buzz);
    } else if(i % 3 == 0){
        fizzCounter += 1;
        numberList.push(fizz);
    } else {
        numberList.push(i)
    }
   }
}

createList()

const numberListString = numberList.join("")


mainList.append(numberListString);
counter.append("Fizz: "  + fizzCounter + ", ");
counter.append("Buzz: " + buzzCounter + ", ");
counter.append("FizzBuzz: " + fizzbuzzCounter);
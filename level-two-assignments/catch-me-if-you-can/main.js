// 1a) Write a function that returns the sum of two numbers. 
// Throw an error if either argument is not of the data type number:

// 1b) Call the `sum` function inside a `try` block using `"1"` and `"2"` as arguments. 
// Use `console.log` within a `catch` block to inform the user of the error.

const sum = (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
        throw "Hey I am an error!"
    } return x + y 
}


try {console.log(sum("1", "2"))}

catch(err){
console.log(err)
}


// 2a) Given a user object, write a function called `login` that takes a `username` and `password` as parameters. 
// Throw an error if either of them don't match. Otherwise, log to the console a message saying `"login successful!"`

// 2b) Call the login function within a try block. 
// In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

var user = {username: "sam", password: "123abc"};
const login = (username, password) => {
    if (username !== user.username || password !== user.password) {
        throw "Hey I am an error"
    } return "login successful!"
}

try {console.log(login("sam", "123abc"))}

catch(err){
console.log(err)
}
//Addition form and functionality 

const addForm = document.addForm;

addForm.addEventListener("submit", function(event){
    event.preventDefault()

    const numOne = addForm.addOne.valueAsNumber;
    const numTwo = addForm.addTwo.valueAsNumber;
    const results = document.getElementById("addResult")

    addForm.addOne.value = ""
    addForm.addTwo.value = ""

    const total = numOne + numTwo;
    const li = document.createElement("li")
    li.textContent = numOne + " + " + numTwo + " = " + total
    results.appendChild(li)
})

//Subtraction form and functionality 
const subForm = document.subForm;

subForm.addEventListener("submit", function(event){
    event.preventDefault()

    const numOne = subForm.subOne.valueAsNumber;
    const numTwo = subForm.subTwo.valueAsNumber;
    const results = document.getElementById("subResult")

    subForm.subOne.value = ""
    subForm.subTwo.value = ""

    const total = numOne - numTwo;
    const li = document.createElement("li")
    li.textContent = numOne + " - " + numTwo + " = " + total
    results.appendChild(li)
})

//Multiplication form and functionality 

const multiForm = document.multiForm;

multiForm.addEventListener("submit", function(event){
    event.preventDefault()

    const numOne = multiForm.multiOne.valueAsNumber;
    const numTwo = multiForm.multiTwo.valueAsNumber;
    const results = document.getElementById("multiResult")

    multiForm.multiOne.value = ""
    multiForm.multiTwo.value = ""

    const total = numOne * numTwo;
    const li = document.createElement("li")
    li.textContent = numOne + " * " + numTwo + " = " + total
    results.appendChild(li)
})
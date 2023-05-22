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
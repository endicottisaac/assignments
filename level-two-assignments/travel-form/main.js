const form = document.travelForm;

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const destination = form.destination.value

    const checkedInputs = [];

    for(let i = 0; i < form.dietaryRestrictions.length; i++) {
        if(form.dietaryRestrictions[i].checked) {
            checkedInputs.push(form.dietaryRestrictions[i].value)
        } 
    }

    alert("First name: " + firstName + "\nLast name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + destination + "\nDietary restrictions: " + checkedInputs)
})
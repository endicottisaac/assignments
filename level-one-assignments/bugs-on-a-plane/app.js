var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
// var query = document.querySelector;

function formAlert() {
    var firstName = form.elements.namedItem("first-name").value;
    var lastName = form.elements.namedItem("last-name").value;
    var age = form.elements.namedItem("age").value;
    var gender = form.elements.namedItem("gender").value;
    var location = form.elements.namedItem("travel-location").value;
    var diet = [];
    if (form.elements.namedItem("vegan").checked) {
        diet.push(document.getElementById("vegan").value);
    } else if (form.elements.namedItem("gluten").checked) {
        diet.push(document.getElementById('gluten').value);
    } else if (form.elements.namedItem("paleo").checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

submit.addEventListener("click", formAlert)

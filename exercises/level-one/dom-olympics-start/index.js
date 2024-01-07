//Qualifier 

var newHeader = document.getElementById("header");
newHeader.classList.add("header");
newHeader.innerHTML = "<h1>JavaScript Made This!!</h1>";
newHeader.innerHTML += "<p><span>Isaac Endicott</span> wrote the JavaScript</p>";

var nameSpan = document.querySelector("span");
nameSpan.classList.add("name");

//Bronze 
var firstLeftMessage = document.querySelectorAll(".left")[0]
firstLeftMessage.textContent = "Have you heard about V School?!?"

var secondLeftMessage = document.querySelectorAll(".left")[1];
secondLeftMessage.textContent = "They offer a spectacular programming course!"

var firstRightMessage = document.querySelectorAll(".right")[0];
firstRightMessage.textContent = 'No, What are you talking about?'

var secondRightMessage = document.querySelectorAll(".right")[1];
secondRightMessage.textContent = "I'll have to check it out!!"

var clearButton = document.getElementById("clear-button");
clearButton.addEventListener('click', clearFunction)

function clearFunction() {
    firstLeftMessage.remove();
    firstRightMessage.remove();
    secondLeftMessage.remove();
    secondRightMessage.remove();

}

//Silver



document.getElementById("theme-drop-down").addEventListener("change", function() {
    let currentValue = this.value; 
    if(currentValue === "theme-two"){
        secondLeftMessage.style.backgroundColor = 'red';
        firstLeftMessage.style.backgroundColor = 'red';
        firstRightMessage.style.backgroundColor = 'black';
        secondRightMessage.style.backgroundColor = 'black';
        firstRightMessage.style.color = 'white';
        secondRightMessage.style.color = 'white';
    } else {
        secondLeftMessage.style.backgroundColor = 'burlywood';
        firstLeftMessage.style.backgroundColor = 'burlywood';
        firstRightMessage.style.backgroundColor = 'lightblue';
        secondRightMessage.style.backgroundColor = 'lightblue';
        firstRightMessage.style.color = 'black';
        secondRightMessage.style.color = 'black';
    }
})

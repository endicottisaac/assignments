var header = document.getElementById('header');

var mySquare = document.getElementById('mySquare');

//Reset box color to gray 
mySquare.addEventListener("mouseout", grayBox);

//Hover to change the box blue
mySquare.addEventListener("mouseover", blueBox);


//Hold mouse down to change the box red 
mySquare.addEventListener("mousedown", redBox);

//Let go of mouse to change the box to yellow∂
mySquare.addEventListener("mouseup", yellowBox);

//Double click to change the box to green
mySquare.addEventListener("dblclick", greenBox);

//Scroll anywhere on page to change box to orange
document.body.addEventListener("wheel", orangeBox);



function grayBox() {
    mySquare.style.backgroundColor = "gray";
}

function blueBox() {
    mySquare.style.backgroundColor = "blue";
}

function redBox(){
    mySquare.style.backgroundColor = "red";
}
function yellowBox(){
    mySquare.style.backgroundColor = "yellow";
}

function greenBox(){
    mySquare.style.backgroundColor = "green";
}
function orangeBox(){
    mySquare.style.backgroundColor = "orange";
}

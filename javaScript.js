// myitem is the h1 element on the main page, and body is the body
myitem = document.getElementById("firsttest");
body = document.getElementById("everything");

myitem.addEventListener("click", onClick);
// When the h1 is clicked, the color of the text not already set is changed to black, and the background color of everything not already set becomes cyan
function onClick() {  
    body.style.backgroundColor = "cyan";  
    body.style.color = "black";
}
// Reverses the effects of the previous function when the mouse is moved off of the header
myitem.addEventListener("mouseout", bye);

function bye(){
    body.style.backgroundColor = "";  
    body.style.color = "";
}
// This code sets up the button element
button = document.getElementById("button");

button.addEventListener("click", buttonClick);

function buttonClick() {
    body.classList.add("cooking");
}

button.addEventListener("mouseout", buttonBye);

function buttonBye() {
    body.classList.remove("cooking");
    body.classList.add("cooling");
}
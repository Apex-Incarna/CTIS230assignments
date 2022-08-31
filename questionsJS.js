// I had to create a separate JS file because although the original would link to my questions page, none of the javaScript would actually work...thoughts? 
// These elements set up the Question submission box
// I consider this to be my part two, part three, and part four, as it includes elements from all three (button, input, and the user interaction of adding questions), although I'll admit it doesn't satisfy 100% the requirements of each indivdual part
// Please tell me if you think this is sufficient for Assignment Six
postButton = document.getElementById("postButton");
input = document.getElementById("inputQuestion");
questionsText = document.getElementById("questionsText");

postButton.addEventListener("click", postPress);

function postPress() {
    questionValue = input.value;
    question = document.createElement("p");
    question.innerHTML = questionValue;
    questionsText.appendChild(question);
    input.value = "";
}
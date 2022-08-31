
// These elements set up the Question submission box
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
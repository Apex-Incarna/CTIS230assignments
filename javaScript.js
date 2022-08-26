console.log(screen.width);

blockQuote = document.getElementById("sidebar");

function blockQuote() {
if (screen.width>1000) {
    blockQuote.style.display = "none";
}
else {
    blockQuote.style.display = "";
}
}
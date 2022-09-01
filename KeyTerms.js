
arXiv = document.getElementById("arXiv");

arXivLarge = document.getElementById("arXivLarge");

arXiv.addEventListener("click", makeBig);

function makeBig() {
    arXivLarge.innerHTML = "";
    bigImage = document.createElement("img");
    bigImage.src = "img/arxivBig.png";
    arXivLarge.appendChild(bigImage);
    arXivLarge.classList.remove("dontshow");
}    

arXivLarge.addEventListener("click", makeSmall);

function makeSmall() {
    //Just add the dontshow class back to that div, and the css rule for dontshow takes effect again
    arXivLarge.classList.add("dontshow");
}
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var bg = document.querySelector("body");
var current = document.querySelector("h3");

function setColor() {
    bg.style.background = `linear-gradient(90deg, ${color1.value}, ${color2.value})`
    current.textContent = bg.style.background + ";";
}

color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);

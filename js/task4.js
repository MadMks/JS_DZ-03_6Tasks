var circles = document.getElementsByClassName('colors')[0].children;
var i = 0;
var colors = ["red", "orange", "green"];

circles[i].classList.add(colors[i]);

function changeColor() {
    circles[i].classList.remove(colors[i]);
    i == 2 ? i = 0 : i++;
    circles[i].classList.add(colors[i]);
}
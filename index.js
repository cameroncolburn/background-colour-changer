var body = document.querySelector("body");
var colors = ["Aqua", "Aquamarine", "Blue", "CadetBlue", "Crimson", "DarkGreen", "DarkOrchid", "DeepPink", "GoldenRod"];
//produces a random number between 1 - 9
var randomColor = function randomNumber() {
    var n = Math.random();
    n = n * 9;
    n = Math.floor(n) + 1;
    return n;
}
//cycles through the color array using the random number
function changeColor() {
    body.style.backgroundColor = colors[randomColor()];
}
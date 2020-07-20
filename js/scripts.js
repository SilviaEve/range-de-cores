window.addEventListener("load", start);

var redColor = 0;
var greenColor = 0;
var blueColor = 0;
var color = document.getElementById("color");

function start() {
  document.getElementById("red-box").innerHTML = 0;
  document.getElementById("green-box").innerHTML = 0;
  document.getElementById("blue-box").innerHTML = 0;
  color.style.background = "#000000";
}

document.getElementById("red").addEventListener("input", (event) => {
  const { value } = event.target;
  redColor = value;
  document.getElementById("red-box").innerHTML = value;
});

document.getElementById("green").addEventListener("input", (event) => {
  const { value } = event.target;
  redColor = value;
  document.getElementById("green-box").innerHTML = value;
});

document.getElementById("blue").addEventListener("input", (event) => {
  const { value } = event.target;
  redColor = value;
  document.getElementById("blue-box").innerHTML = value;
});

document.getElementById("range-slide").addEventListener("input", () => {
  color.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
});

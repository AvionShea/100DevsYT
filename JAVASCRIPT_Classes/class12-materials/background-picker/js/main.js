document.getElementById("purple").onclick = partyPurple;
document.getElementById("green").onclick = partyGreen;
//document.getElementById("blue").onclick = partyBlue;
document.getElementById("blue").addEventListener("click", partyBlue);
document.getElementById("red").onclick = partyRed;
document.getElementById("orange").onclick = partyOrange;
document.getElementById("reset").onclick = reset;

function partyPurple() {
  document.querySelector("body").style.backgroundColor = "rgb(108, 0, 112)";
  document.querySelector("body").style.color = "white";
}

function partyGreen() {
  document.querySelector("body").style.backgroundColor = "rgb(0,253,81)";
  document.querySelector("body").style.color = "black";
}

function partyBlue() {
  document.querySelector("body").style.backgroundColor = "rgb(0,254,255)";
  document.querySelector("body").style.color = "black";
}

function partyRed() {
  document.querySelector("body").style.backgroundColor = "rgb(255, 0, 0)";
  document.querySelector("body").style.color = " white";
}

function partyOrange() {
  document.querySelector("body").style.backgroundColor = "rgb(255, 175, 4)";
  document.querySelector("body").style.color = "black";
}

function reset() {
  document.querySelector("body").style.backgroundColor = "rgb(255, 255, 255)";
  document.querySelector("body").style.color = "black";
}
let total = 0;

document.getElementById("pumpkin").onclick = zeroOut;
document.getElementById("dominosPizza").onclick = addThree;
document.getElementById("zebra").addEventListener("click", addNine);
document.querySelector("#cantThinkOfAnything").onclick = minusTwo;
document.querySelector("#subTen").addEventListener("click", subTen);
document.getElementById("multiplyFour").onclick = multiplyFour;

function zeroOut() {
  total = 0;
  document.getElementById("placeToPutResult").innerHTML = total;
}

function addThree() {
  total += 3;
  document.getElementById("placeToPutResult").innerHTML = total;
}

function addNine() {
  total += 9;
  document.getElementById("placeToPutResult").innerHTML = total;
}

function minusTwo() {
  total -= 2;
  document.getElementById("placeToPutResult").innerHTML = total;
}

function subTen() {
  total -= 10;
  document.getElementById("placeToPutResult").innerHTML = total;
}

function multiplyFour() {
  total *= 4;
  document.getElementById("placeToPutResult").innerHTML = total;
}
let total = 0

document.querySelector('#pumpkin').addEventListener('click', zeroOut);
document.querySelector('#dominosPizza').addEventListener('click', addThree);
document.querySelector('#zebra').addEventListener('click', addNine);
document.querySelector('#cantThinkOfAnything').addEventListener('click', subTwo);
document.querySelector('#subTen').addEventListener('click', subTen);
document.querySelector('#multiplyTwo').addEventListener('click', multiplyTwo);


function zeroOut() {
  let total = 0;
  document.querySelector('#placeToPutResult').innerHTML = total;
}
function addThree() {
  total = total + 3;
  document.querySelector('#placeToPutResult').innerHTML = total;
}
function addNine() {
  total = total + 9;
  document.querySelector('#placeToPutResult').innerHTML = total;
}
function subTwo() {
  total = total - 2;
  document.querySelector('#placeToPutResult').innerHTML = total;
}
function subTen() {
  total = total - 10;
  document.querySelector('#placeToPutResult').innerHTML = total;
}
function multiplyTwo() {
  total = total * 2;
  document.querySelector('#placeToPutResult').innerHTML = total;
}

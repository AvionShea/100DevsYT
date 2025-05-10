//Challenge
//When "Final Rose"(h1) is clicked, only show the recipient of the rose (Nikki)

//Get DOM element and run function when clicked
document.querySelector("#finalRose").onclick = roseRecipient;

//function that hides images other than rose recipient.
function roseRecipient() {
	document.getElementById("claire").style.display = "none";
	document.getElementById("sharleen").style.display = "none";
}
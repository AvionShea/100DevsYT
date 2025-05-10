//selecting all elements with a class of contestant from html and placing them into a variable
const contestant = document.querySelectorAll(".contestant");

//Array through each element, adding an event listener
Array.from(contestant).forEach(element => element.addEventListener("click", checkForRose));
//Array.from(contestant).forEach(element => element.onclick = checkForRose);


//function with a parameter
function checkForRose(click) {
	//check if the clicked target contains the class of rose
	if (click.target.classList.contains("rose")) {
		//select it from the DOM and toggle the class hidden
		document.getElementById("nikki").classList.toggle("hidden");

	} else {
		alert("Oops! That's incorrect. Please try again!");
	}
}
//selecting all elements with a class of contestant from html and placing them into a variable
const contestant = document.querySelectorAll('.contestant');

//Array through each element, adding an event listener
Array.from(contestant).forEach(element => element.addEventListener('click', checkForRose));

//function with a parameter
function checkForRose(click){
	//if the clicked target contains the class of rose
	if(click.target.classList.contains('rose')){
		//select it from the DOM and toggle the class hidden
		document.querySelector('#nikki').classList.toggle('hidden');
	}else{
		//else alert the selection is incorrect
		alert("That's incorrect!")
	};
};
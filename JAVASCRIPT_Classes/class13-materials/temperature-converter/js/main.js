//Write your pseduo code first!

//user inputs value - input field in html
//on click - event listener, 
//function retrieves value, - .value()
//does calculation, - calculation
//displays new value in dom - innerHTML

document.querySelector("#convert").onclick = convert;

function convert() {
    const celsius = document.querySelector("#temp").value;

    const fahrenheit = (celsius * 9 / 5) + 32;

    document.querySelector("#temp-display").innerText = `${fahrenheit}°F`;
}
//Write your pseduo code first!

//user inputs value - input field in html
//on click - event listener, 
//function retrieves value, - .value()
//does calculation, - calculation
//displays new value in dom - innerHTML

document.getElementById('convert').addEventListener('click', convertTemp);

function convertTemp(){
    let celsius = document.getElementById('temp').value;

    let farhrenheit = (celsius * 9/5) + 32;

    document.getElementById('temp-display').innerText = `${farhrenheit}°F`;
};
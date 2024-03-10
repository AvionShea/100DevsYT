//Write your pseduo code first!

//"listen" for click of button
document.querySelector("#submit").addEventListener('click', convertToFahrenheit)

//run function
function convertToFahrenheit(){
    //grab Celsius value from html
    let celsius = document.querySelector("#celsius").value;

    //convert from Celsius to Fahrenheit °F = (°C × 9/5) + 32
    let convertedTemp = (celsius * 9/5) + 32;

    //display in DOM
    document.querySelector("#display-temp").innerHTML = `${convertedTemp}°F`
}

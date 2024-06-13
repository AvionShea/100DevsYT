//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

document.querySelector('#check').addEventListener('click', checkAge);

function checkAge() {
    let age = document.querySelector('#danceDanceRevolution').value;

    if (age < 16) {
        results = "You can not drive.";
    } else if (age < 18) {
        results = "You can't hate from outside the club, because you can't even get it.";
    } else if (age < 21) {
        results = "You can't drink.";
    } else if (age < 25) {
        results = "You can't rent cars affordably.";
    } else if (age < 30) {
        results = "You can't rent fancy cars affordably.";
    } else {
        results = "There's nothing left to look forward to.";
    };

    //console.log(results);

    document.querySelector("#displayResults").innerHTML = results;
};

//--- Harder
//On click of the h1
document.querySelector("#check").addEventListener("click", getAge)
//Take the value from the input
function getAge() {
    document.querySelector("#danceDanceRevolution").value;
}
//Place the result of the conditional in the paragraph
document.querySelector("#displayResults").innerHTL += results;

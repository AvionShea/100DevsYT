//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector("#help").addEventListener('click', stopSnacking)
function stopSnacking() {
    let numberOfSnacks = Number(document.querySelector("#snacks").value);
    document.querySelector("#stops").innerText = ""

    for (let i = 0; i < numberOfSnacks; i++) {
        document.querySelector("#stops").innerText += " " + "Please stop eating!";
    };
};

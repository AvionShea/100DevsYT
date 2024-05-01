//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function twentyOne() {
    for (let i = 0; i <= 20; i++) {
        console.log("21");

        //Bonus can you make it print '21' 21 times to the dom?
        document.querySelector("#savageSays").innerText += " " + 21;
    };
};
twentyOne();


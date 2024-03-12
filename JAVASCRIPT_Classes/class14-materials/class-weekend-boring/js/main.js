//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  if(day === "tuesday" || day === "thursday"){
   results = "YOU HAVE CLASS!";
  }else if( day === "saturday" || day === "sunday"){
    results = "It's The Weekend!";
  }else if(day === 'wednesday'){
   results = "Hump Daaaayeee!";
  }else{
    results = "BORINGGGGGG!";
  }

  document.querySelector("#placeToSee").innerText = results;
}

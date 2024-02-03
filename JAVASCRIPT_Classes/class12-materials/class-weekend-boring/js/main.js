document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  if (day == 'Tuesday' || day == 'Thursday') {
    document.querySelector('#placeToSee').innerHTML = "Class Day!"
  } else if (day == 'Saturday' || day == 'Sunday') {
    document.querySelector('#placeToSee').innerHTML = "Weekend!"
  } else {
    document.querySelector('#placeToSee').innerHTML = "Boring Day"
  }


}

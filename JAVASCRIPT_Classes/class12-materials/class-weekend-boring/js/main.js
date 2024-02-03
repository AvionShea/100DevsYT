//check input
document.querySelector('#check').addEventListener('click', compareDays)

//compare and display
function compareDays() {
  const day = document.querySelector('#day').value.toLowerCase()
  if (day == 'tuesday' || day == 'thursday') {
    document.querySelector('#placeToSee').innerHTML = 'Class Day!'
  } else if (day == 'saturday' || day == 'sunday') {
    document.querySelector('#placeToSee').innerHTML = 'Weekend!'
  } else {
    document.querySelector('#placeToSee').innerHTML = 'Boring Day!'
  }
}
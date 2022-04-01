var time = moment();
var date = time.format('dddd, MMMM Do, YYYY')
var hour = time.format("HH");
var dateEl = document.querySelector("#currentDay");
var saveBtn = document.querySelector('.saveBtn');
var noteBlock = document.querySelectorAll('.time-block');
function setDate() {
    dateEl.textContent = date;
}

function saveNotes(e) {
    e.preventDefault();
    notes = e.target.parentElement.children[1].textContent;
    
}
setDate();
console.log(noteBlock[0].children[1].textContent)


saveBtn.addEventListener('click', saveNotes);
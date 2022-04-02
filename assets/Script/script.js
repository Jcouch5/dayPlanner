var time = moment();
var date = time.format('dddd, MMMM Do, YYYY')
var hour = time.format("HH");
var dateEl = document.querySelector("#currentDay");
var saveBtn = document.querySelector('.saveBtn');
var noteBlock = document.querySelectorAll('.time-block');
var containerEl = $('.container');

function setDate() {
    dateEl.textContent = date;
    bringPastText();
}

function saveNotes(e) {
    e.preventDefault();
    notes = e.target.parentElement.children[1].value;
    notesTime = e.target.parentElement.children[1].getAttribute('id');
    console.log(notes);
    localStorage.setItem(notesTime,notes);
}

function changeBg () {
    for (i = 0; i < noteBlock.length; i++) {
        var textareaEl = noteBlock[i].children[1];
        var noteTime = textareaEl.getAttribute('id');
        if (noteTime < hour) {
          textareaEl.classList.add('past');
         } else if (noteTime === hour) {
          textareaEl.classList.add('present');
        } else {
            textareaEl.classList.add('future');
         }
    }
}
function bringPastText() {

    for (i = 0; i < noteBlock.length; i++) {
        var textBlockId = [09,10,11,12,13,14,15,16,17]
        var noteBlockSet = noteBlock[i].children[1];
        var noteBlockText = localStorage.getItem(textBlockId[i])
        noteBlockSet.textContent = noteBlockText;
    }
}
setDate();
changeBg();
containerEl.on('click', '.saveBtn', saveNotes);

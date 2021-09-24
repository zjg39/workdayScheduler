
// Concerning the time display, and hours

var currentDay = document.getElementById('currentDay');
currentDay.textContent = moment().format("dddd, MMMM Do");

var rightNow = moment().format('H');
var saveButton = $('saveBtn');

// Making the text areas different colors, depending on the time

var textArea = $('textarea');
textArea.each(function(i){
    if (rightNow > i+9) {$(this).addClass('past')}
    if (rightNow == i+9) {$(this).addClass('present')}
    if (rightNow < i+9) {$(this).addClass('future')}
})

// Storing text locally

$('.saveBtn').on('click', storeLocal);

function storeLocal (){
    var input = $(this).parent().siblings('textarea').val().trim();
    var valueId = $(this).parent().siblings().attr('id');
    localStorage.setItem(valueId, input);
}

function init () {
    fromStorage ();

    function fromStorage() {
        var valueSet = [];
        var keyStorage = Object.keys(localStorage),
            i = keyStorage.length;

        while (i--) {
            var getItems = localStorage.getItem(keyStorage[i]);
            valueSet.unshift(getItems);
        }
        postValues(valueSet, keyStorage);
        return valueSet;
    }
}
function postValues (valueSet, keyStorage) {
    for (var i = 0; i < keyStorage.length; i++){
        $('#'+keyStorage[i]).val(valueSet[i]);
    }
}
init();
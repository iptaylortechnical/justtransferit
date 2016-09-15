const remote = require('electron').remote;
const main = remote.require('./main.js');

let numbers = [];
let on = 0;

$('body').on('keydown', function(event){
    let num = event.keyCode - 48;
    numbers[on] = num;
    on++;

    $('#num' + on).toggleClass('selected');
    $('#num' + (on - 1)).toggleClass('selected');

    $('.enter')[on - 1].innerHTML = num;
    
    
    if(on == 6) { 
        console.log(numbers);
    }
})
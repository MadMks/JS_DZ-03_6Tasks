// Вариант 1
function checkName(event) {
    
    var key = event.keyCode;

    if (key >= 48 && key <= 57){
        event.preventDefault();
    }
}


// Вариант 2
// inputName.onkeypress = function(event){
//     var key = event.keyCode;

//     if (key >= 48 && key <= 57){
//         return false;
//     }
// }
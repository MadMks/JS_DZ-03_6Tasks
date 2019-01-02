var field = document.getElementById("field");
var ball = document.getElementById("ball");

function moveBall(event) {

    var ballCoords = {
        left: event.clientX - (ball.clientWidth / 2),
        top: event.clientY - (ball.clientHeight / 2)
    }

    // Проверка на выход за границы поля
    if (ballCoords.left < field.clientLeft) {
        ballCoords.left = 0;
    }
    
    if (ballCoords.top < field.clientTop) {
        ballCoords.top = 0;
    }
    
    if (
        (ballCoords.left + ball.clientWidth)
        > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    if (
        (ballCoords.top + ball.clientHeight)
        > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    
    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}
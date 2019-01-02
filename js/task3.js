var field = document.getElementById("field");
var ball = document.getElementById("ball");

function moveBall(event) {

    var ballCoords = {
        left: event.clientX - (ball.clientWidth / 2),
        top: event.clientY - (ball.clientHeight / 2)
    }


    console.log("" + ball.clientWidth);

    console.log("event.clientX " + event.clientX);
    console.log("event.clientY " + event.clientY);

    
    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}